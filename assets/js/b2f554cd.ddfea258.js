"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/07/11/CDK-dependent-stacks","metadata":{"permalink":"/blog/2023/07/11/CDK-dependent-stacks","source":"@site/blog/2023-07-11-CDK-dependent-stacks/index.md","title":"AWS CDK export cannot be deleted as it is in use","description":"Sometimes you try deploying a change to an existing multi-stack CDK project, only to get an error message similar to \\"Export cannot be deleted as it is in use\\". Read on if you\'ve encountered this error and are struggling to fix it, or you\'re just interested in finding out about dependent stacks in AWS.","date":"2023-07-11T00:00:00.000Z","formattedDate":"July 11, 2023","tags":[],"readingTime":5.96,"truncated":false,"authors":[],"nextItem":{"title":"Performance Testing Basics","permalink":"/blog/2022/09/06/Performance-Testing-Basics"}},"content":"Sometimes you try deploying a change to an existing multi-stack CDK project, only to get an error message similar to \\"**Export cannot be deleted as it is in use**\\". Read on if you\'ve encountered this error and are struggling to fix it, or you\'re just interested in finding out about dependent stacks in AWS.\\n## AWS CDK dependent stacks\\nAWS CDK makes it easy to share resources in different stacks. For example, allowing an SQS queue from one stack to be used by a lambda in a different stack. In this case, CDK automatically takes care of cross stack references, and also ensures deployments happen in the correct order.\\n\\n![CDK dependent stacks architecture](./DependentStacks.png)\\n\\nThe problem you\'ve probably encountered seeing as you\'re here, is that you\'re trying to remove  that cross stack reference, but you see  something like:\\n`Export <<some AWS ref>> cannot be deleted as it is in use by <<some stack>>`\\n\\n## How did this happen\\nCross stack references occur when you have two stacks, and you share something from one stack with the other. When CDK is building the cloudFormation template, it will automatically manage these cross stack references. It does this by \\"exporting\\" the construct from the producing stack (using an auto generated name), and \\"importing\\" the construct in the consuming construct.\\n\\nIf you make a change that impacts the cross stack dependency, you can find yourself in a circular trap where CDK knows it has to deploy the producingStack first, but that fails because the existing (already deployed) version of the consuming stack still requires the exports you\'re trying to remove, and it cannot deploy the consumingStack first because that depends on the producingStack.\\n\\n![CDK depent stacks deployment problem](./CDK-dependent-stacks.png)\\n\\n## Example\\nGiven a stack `producingStack` that creates an SQS queue, and a `consumingStack` that has a lambda function that is allowed to push messages to the SQS queue, we end up with (partial) CDK code that looks a little like below (full example code can be found [here](https://github.com/martynbutty/cdkDependantStacks))\\n\\n```typeScript\\n...\\nexport class producingStack extends cdk.Stack {  \\n    public readonly sourceQueueArn: string;  \\n    public readonly sourceQueueUrl: string;  \\n\\n    constructor(scope: Construct, id: string, props?: cdk.StackProps) {  \\n        super(scope, id, props);  \\n\\n        const sourceMessageQueue = new sqs.Queue(this, \'sourceMessageQueue\', {  \\n            queueName: \'sourceMessageQueue\'  \\n        });  \\n\\n        this.sourceQueueArn = sourceMessageQueue.queueArn;  \\n        this.sourceQueueUrl = sourceMessageQueue.queueUrl;  \\n        ...\\n```\\n\\n\\n```typescript\\nexport class consumingStack extends cdk.Stack {  \\n    constructor(scope: Construct, id: string, props: HotelsDataAcquisitionStackProps) {  \\n        super(scope, id, props);  \\n\\n        const queue = aws_sqs.Queue.fromQueueArn(this, \'sourceQ\', props.sqsArn);  \\n\\n        const eventSource = new SqsEventSource(queue, {  \\n            batchSize: 10,  \\n            reportBatchItemFailures : true,  \\n            enabled: true  \\n        });  \\n\\n        const lambdaEnvVars = {  \\n            SQS_QUEUE_URL: props.sqsUrl  \\n        };  \\n\\n        const processingLambda = new NodejsFunction(this, \'processingLambda\', {  \\n            entry: \'./lambda/index.ts\',  \\n            runtime: aws_lambda.Runtime.NODEJS_18_X,  \\n            handler: \'main\',  \\n            environment: lambdaEnvVars  \\n        });  \\n\\n        processingLambda.addEventSource(eventSource);  \\n    }  \\n}\\n```\\n\\nWe have already deployed these stacks, and are now trying to refactor our solution to remove the cross stack dependency.\\n\\n### Refactor to remove a dependency \\nFor this example, we\'re going to simply remove the SQS URL in the lambda\'s environment variable. producingStack is unchanged, and consumingStack looks like below. \\n\\n> You\'d normally just delete code that\'s no longer required, but it\'s shown commented out here to make it easier to see what\'s changing.\\n\\n```typescript\\nexport class consumingStack extends cdk.Stack {  \\n    constructor(scope: Construct, id: string, props: HotelsDataAcquisitionStackProps) {  \\n        super(scope, id, props);  \\n\\n        const queue = aws_sqs.Queue.fromQueueArn(this, \'sourceQ\', props.sqsArn);  \\n\\n        const eventSource = new SqsEventSource(queue, {  \\n            batchSize: 10,  \\n            reportBatchItemFailures : true,  \\n            enabled: true  \\n        });  \\n\\n        // const lambdaEnvVars = {  \\n        // \\tSQS_QUEUE_URL: props.sqsUrl\\n        // };  \\n        \\n        const processingLambda = new NodejsFunction(this, \'processingLambda\', {  \\n            entry: \'./lambda/index.ts\',  \\n            runtime: aws_lambda.Runtime.NODEJS_18_X,  \\n            handler: \'main\'\\n            // environment: lambdaEnvVars  \\n        });  \\n\\n        processingLambda.addEventSource(eventSource);  \\n    }  \\n}\\n```\\n\\nWhen you try to `cdk deploy` this change, you get a failure\\n`Stack Deployments Failed: Error: The stack named producingStack failed to deploy: UPDATE_ROLLBACK_COMPLETE\\n\\nThe cause of the rollback is output on the CLI output but it gets hidden at the end. To find it another way, you can use the AWS console -> cloudformation -> producingStack -> events, where we see the offending error:\\n`Export producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816 cannot be deleted as it is in use by consumingStack`\\n\\nIf we do a `cdk diff` we can see that an export is being removed\\n```\\n...\\nOutputs\\n[-] Output ExportsOutputRefsourceMessageQueueE741C4AF715E0816: {\\"Value\\":{\\"Ref\\":\\"sourceMessageQueueE741C4AF\\"},\\"Export\\":{\\"Name\\":\\"producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816\\"}}\\n...\\n```\\n\\nCDK automatically created this export when it first detected the cross stack dependency, and it is now attempting to remove it because of our change to consumingStack.\\n\\n#### What went wrong\\nCDK knows that consumingStack depends on producingStack (for the SQS exports).  Any deploy will therefore trigger the deploy of the producingStack first, __even if you try to just deploy the consumingStack__.\\n\\nIn our case, we\'ve only changed the consumingStack. This change means CDK notices we no longer need to \\"export\\" the SQS URL, so it removes that export, as can be seen in the above `cdk diff` partial output. \\n\\nCDK tries to first apply the change to producingStack. This change is to remove the export of the SQS URL.  However, CDK notices that the currently deployed version of consumingStack still has an import on that URL (it hasn\'t deployed the change to the consumingStack yet). So CDK fails the deploy and rolls-back.\\n\\n### The fix\\nTo fix this problem, we make a temporary code change in `producingStack` to explicitly export a ref to the SQS URL. This is in addition to the decoupling change we already made in `consumingStack`. This export will therefore be in the cloudformation template regardless of if it is actually used or not. To achieve this, we use the AWS CDK [`exportValue()`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.Stack.html#exportwbrvalueexportedvalue-options)  function. In our case, we add the below to `producingStack`:\\n\\n`this.exportValue(sourceMessageQueue.queueUrl);`\\n\\n> Note: If you\'re observant, and wanted to completely decouple the stacks, we\'d also have add another export as we also implicitly use the SQS ARN in the initial version. So you\'d also add:\\n\\n`this.exportValue(sourceMessageQueue.queueArn);`\\n\\nTo confirm our change worked we can run another `cdk diff`. This time you should notice that the export is no longer removed (we know this by the absence of it\'s removal / negating output from the diff). CDK can therefore safely deploy `producingStack` without compromising the deployed (old) version of `consumingStack`. It then deploys the new version of `consumingStack` which removes the dependency.\\n\\nNow we managed to deploy and remove the dependency, we can make a second change to remove the temporary exports (the `exportValue()`) and redeploy again to be in a clean state. This time a `cdk diff` should show the removal of the exports, but this is on now that `consumingStack` no longer depends on the export.\\n\\n## Useful commands\\n- Use `cdk diff` to check for removed \\"exports\\". If you see any, then retain them by manually exporting them with `exportValue()`.\\n- To see if the currently deployed versions of your stacks have any exports: `aws cloudformation list-exports`. Note: you will probably always have some exports as the underlying CDK deployment framework usually creates a couple of exports.\\n- You can see the exports locally in your `cdk.out` directory. For our example, look in `./dependantStacks/cdk.out/producingStack.template.json` for the `Outputs` section\\n- You can see the exports in the **currently deployed** versions by viewing the cloudformation template in the AWS console -> cloudformation -> producingStack -> template\\n- Given an export name, you can see which stack(s) use it: `aws cloudformation list-imports --export-name producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816`"},{"id":"/2022/09/06/Performance-Testing-Basics","metadata":{"permalink":"/blog/2022/09/06/Performance-Testing-Basics","source":"@site/blog/2022-09-06-Performance-Testing-Basics/index.md","title":"Performance Testing Basics","description":"Performance testing is more than just sending a large number of requests at a target system to see what happens.","date":"2022-09-06T00:00:00.000Z","formattedDate":"September 6, 2022","tags":[],"readingTime":4.22,"truncated":false,"authors":[],"prevItem":{"title":"AWS CDK export cannot be deleted as it is in use","permalink":"/blog/2023/07/11/CDK-dependent-stacks"},"nextItem":{"title":"AWS EC2 Instance Types","permalink":"/blog/2022/02/14/AWS-EC2-Instance-Types"}},"content":"Performance testing is more than just sending a large number of requests at a target system to see what happens. \\n\\nPerformance testing can help you to understand how many requests your system can handle, how long it takes to respond, \\nif a recent code change has improved or reduced performance and more. It can help you plan for when you need to scale \\nyour application, define server resources like CPU, memory and disk space, and consider the introduction or improvement \\nof caching.\\n\\n![Performance Test Types](./performance_test_types.png)\\n\\nYou may not need to have a full performance test suite straight away, so consider;\\n- What are you trying to test and why\\n- Do you know what good looks like\\n- What environments are available, and how much are they like production environments\\n- For an API, which endpoints/calls will you test, and can you (or do you need to) vary each request to avoid testing the cache layer\\n\\n## SLI\u2019s and SLO\u2019s\\nService level indicators (SLI) and service level objectives (SLO) are a set of things you can define to describe what \\ngood looks like, and then use as a benchmark for your performance tests. It will also help you understand the different \\ntypes of performance tests you should consider.\\n\\n**SLI\u2019s** are things that are important to measure and report on, e.g. how long it takes to return a response to a \\nrequest, or the error rate (maybe as a percentage of all requests)\\n\\n**SLO\u2019s** are objectives or target values for your service, of something that is measured by an SLI. e.g. a \\nresponse should be returned within 100 milliseconds.\\n\\nIt\u2019s a good exercise to agree a set of SLI and or SLO with the team before you start performance testing.\\n\\n## What can performance tests help us understand\\n-   Slow response times\\n-   Long load times\\n-   Bottlenecks\\n-   Scalability problems (disk, CPU, memory, memory leaks, network)\\n-   Software problems\\n-   Software / Framework / Cache configuration problems\\n-   Insufficient resources\\n\\n## Where and When to test\\nRunning against your production system is probably a bad idea. As well as effecting your own production system, you \\ncould potentially cause third party systems problems too!, not that I\'ve ever inadvertently tested this theory ;) \\n\\nIf you use cloud hosting, you can probably create a production like system fairly easily. \\n\\nIf you cannot provision a production like environment to test against, you should resist \u201cinterpreting\u201d the results to \\nscale them up or down accordingly to get an approximation of how your production service will behave; You cannot be \\nsure the hardware will scale linearly (e.g. you can\u2019t rely on doubling CPU resulting in double the performance). You can\\n however keep a record of previous tests and gain insight into if recent changes have improved or regressed performance \\non the test system. This could give you confidence to proceed to release to production.\\n\\nYou could run your performance tests against a single server or node in your production estate if you are confident you \\nwon\u2019t harm your service or business that it serves. This could be by targeting a single node or server that is out of \\ntraffic.\\n\\nYou should capture and store the results of your performance tests so that you can track the performance results over time.\\n\\n## Types of Performance Tests\\n\\n## Smoke Tests\\nSmoke tests are used to verify your service is functioning while only putting minimal load through the service.\\n\\n## Load Tests\\nLoad testing will test your service by simulating actual users of your system. This allows you to observe how things \\nlike your database, code and hardware behave under load.\\n![Load Test](./load_test.png)\\n\\nThis type of test should use expected load levels. It could be based on your SLO\u2019s or non-functional requirements (NFR)\u2019s. \\nYou probably want to slowly ramp up requests from zero over a short time (half an hour)x\xa7x  to \u201cwarm\u201d the service under \\ntest and its server. The expected load should then be sustained for at least a further one to two hours before another \\ngradual ramp down to zero requests.\\n\\n## Soak Tests\\nThese are the same as load tests, except that they will run for a much longer period (twelve to twenty-four hours or \\nmore). Soak tests will help you identify things like memory leaks which could be hard to detect over shorter term load tests.\\n![Soak Test](./soak_test.png)\\n\\n## Spike Tests\\nSpike tests again extend the basic load test. This time a short \u201cspike\u201d of traffic in excess of the expected load is \\nused to verify that your service can cope or recover from sudden large increases in load\\n![Spike Test](./spike_test.png)\\n\\n## Stress Tests\\nA stress test will start with zero load, and gradually increase until well over the maximum expected capacity of the \\nservice. This type of testing allows you to plan for the future so your service is ready. This could help define things \\nlike:\\n- defining auto-scaling\\n- increasing server capacity (horizontal or vertical scaling)\\n- introducing or improving caching\\n- code changes (to optimise performance, remove bottle-necks etc)\\n- and much more\\n![Stress Test](./stress_test.png)"},{"id":"/2022/02/14/AWS-EC2-Instance-Types","metadata":{"permalink":"/blog/2022/02/14/AWS-EC2-Instance-Types","source":"@site/blog/2022-02-14-AWS-EC2-Instance-Types/index.md","title":"AWS EC2 Instance Types","description":"How to understand AWS EC2 instance type codes","date":"2022-02-14T00:00:00.000Z","formattedDate":"February 14, 2022","tags":[],"readingTime":3.6,"truncated":true,"authors":[{"name":"Martyn Butterworth","title":"Technical Architect at OnTheBeach.com","url":"https://github.com/MartynButty","imageURL":"https://github.com/MartynButty.png","key":"martyn"}],"prevItem":{"title":"Performance Testing Basics","permalink":"/blog/2022/09/06/Performance-Testing-Basics"},"nextItem":{"title":"Docker build fail with VPN","permalink":"/blog/2021/12/14/Docker-VPN-Network-Fix"}},"content":"To try and make it easier to select an instance type, AWS uses a set format for instance type naming. \\nThis article will help you understand how AWS breaks down the instance type into families, generations, \\ncapabilities and overall size.\\n\\n![EC2 Instance Codes](./AWS_EC2_codes.png)\\n\x3c!--truncate--\x3e\\n\\nEC2 is Amazon Web Services\u2019 (AWS) **Elastic Compute Cloud**. \\nAs AWS has to support an almost endless set of possible workloads, they provide hundreds of different instance types.  \\nHaving different instance types means you only use and pay for resources that you need, \\nrather than over provisioning and paying for unused resource.\\n\\n> EC2 is an abbreviation for \u201celastic compute cloud\u201d.\\n> Where the same letter appears more than once, a count of that letter is used (e.g. two consecutive C\'s become C2)\\n> Another example being S3 : Simple Storage Service - 3 S\'s\\n\\nPretty much the only constant thing when working with AWS is that things change. \\nThis article therefore is only meant to help you understand the EC2 instance code format rather than explaining every\\npossible instance type available. \\nYou can see what instance types are available here: [Amazon EC2 Instance Types - Amazon Web Services](https://aws.amazon.com/ec2/instance-types/) \\n\\n## Instance code format\\nAs you can see from the above image, the instance code is divided into three or four sections (one section is optional).  \\n\\n### Family\\nThe first section is typically a single letter (but not always) and denotes the main instance type family. \\nThe family lets you choose a type broadly suited to your tasks, and the most popular ones are discussed below (e.g. CPU optimised, memory optimised etc.)\\n\\n### Generation\\nThe higher the generation number the newer the instance type. You should usually choose the latest available \\ngeneration as that provides the newest features and generally can cost less. i.e. a newer generation might offer faster\\n CPU\'s, or more CPU, or more memory, or some other combination of features with better cost optimisation. \\nThe exception to this rule might be if you only want to use the AWS free tier, as (at the time of writing) \\nthe `t2.micro` is free tier eligible, but the `t3.micro` is not.\\n\\n### Additional Features\\nThis is an **optional** code. For example, `R6gd` instances offer \\n*local NVMe-based SSDs are physically connected to the host server and provide block-level storage that is coupled to the lifetime of the instance*, \\nwhere `R6g` is *EBS-Only storage*.\\n\\n### Instance Size\\nThe part after the period (dot) defines the instance size. This is usually a T-Shirt style size, but there are other options\\n too like *.metal* for example.\\n\\n## Popular Family Types\\n### A - Arm Processors\\n| | Description|\\n|---|---|\\n|Characteristics|64-bit Arm cores using Graviton processors.|\\n|mnemonic|**a** for Arm processor|\\n|example|a1.large : 2 CPU and 4 GiB Mem|\\n\\n### T - General Purpose, Burstable\\n| | Description|\\n|---|---|\\n|Characteristics|T instances are general purpose that are \u201cburstable\u201d. If you use an \u201cm\u201d or \u201cc\u201d class type, you\u2019re paying for the full capacity of the instance whether it\u2019s in use or not. As a lot of workloads can have spikes of demand and longer periods of low demand, you can potentially save money by using a T type. T type machines have a baseline of capacity. When your system operates below the baseline, you earn CPU credits. When your system comes under high load, it can \u201cburst\u201d to use all the CPU by spending credits (or borrowing up to a days worth of credits depending on how you configure your instance).|\\n|mnemonic|**t** for bursTable|\\n|example|t3.large : 2 CPU 8 GiB mem (36 CPU credits/hr)|\\n\\n### M - General Purpose, Medium\\n| | Description|\\n|---|---|\\n|Characteristics|General purpose machines optimised balance of CPU, memory and network performance|\\n|mnemonic|**m** for medium|\\n|example|m5.large : 2 CPU 8 GiB mem|\\n\\n### C - General Purpose, Compute\\n| | Description|\\n|---|---|\\n|Characteristics|Optimised for compute intensive workloads.|\\n|mnemonic|**c** for Compute|\\n|example|c5.large : 2 CPU 4 GiB mem|\\n\\n### R - General Purpose, Memory\\n| | Description|\\n|---|---|\\n|Characteristics|optimised for memory.|\\n|mnemonic|**r** for RAM|\\n|example|r5.large : 2 CPU 16GiB mem\\n\\n### Others\\n#### Accelerated computing\\nOptimised for machine learning, graphics, image processing etc. Some examples include the P[ictures], inf[erence] and g[raphics] types.\\n\\n#### Storage\\nInstances optimised for storage, i.e. where high sequential read and writes operations on large data sets is desirable\\nExamples include D[ense] (or D[ata]), I[ops], H[dd] based and others"},{"id":"/2021/12/14/Docker-VPN-Network-Fix","metadata":{"permalink":"/blog/2021/12/14/Docker-VPN-Network-Fix","source":"@site/blog/2021-12-14-Docker-VPN-Network-Fix/index.md","title":"Docker build fail with VPN","description":"A possible solution to docker build failures that require resources over a VPN","date":"2021-12-14T00:00:00.000Z","formattedDate":"December 14, 2021","tags":[],"readingTime":3.055,"truncated":true,"authors":[{"name":"Martyn Butterworth","title":"Technical Architect at OnTheBeach.com","url":"https://github.com/MartynButty","imageURL":"https://github.com/MartynButty.png","key":"martyn"}],"prevItem":{"title":"AWS EC2 Instance Types","permalink":"/blog/2022/02/14/AWS-EC2-Instance-Types"},"nextItem":{"title":"Computer Memory Types","permalink":"/blog/2021/11/06/memory"}},"content":"Docker Desktop does a great job of taking care of all the networking for you and usually _\u201cjust works\u201d_, even if you are connected to a corporate VPN.\\n\\nSometimes you may encounter difficulties which usually manifest as the **build stage failing**. This can happen when part of your build process requires resources that are only available when connected via your company VPN (e.g. internal package server).\\n\\n![Docker VPN](./Docker_VPN.png)\\n\x3c!--truncate--\x3e\\n\\n## The Problem\\n### Tl;dr\\nDocker may have allocated an internal network range which clashes with your VPN.\\n### Detailed example\\nYour project has dependancies on an internal server which might have an IP address of `172.17.2.79`. This is a [private network](https://en.wikipedia.org/wiki/Private_network)) which is only accessible while connected to the companies private VPN.\\nDocker has created its own internal network which is using the  `172.17.0.0/16` range of addresses.\\nThe build process tries to access your companies private package server at `172.17.2.79`.  The process is running within the private docker network. It therefore thinks the server should be available on the local docker network. It is also unable to send any traffic via the VPN due to the overlap or clash of the network range.\\n## Confirming this is the problem\\nTo confirm the above scenario is indeed the root cause of the docker build failure, we need to compare the subnet docker is using against that in use by the VPN.\\n**### Get Docker Network**\\nFirst, list all the available docker networks\\n```\\n$docker network ls\\n```\\nwhich should output something similar to\\n```\\nNETWORK ID     NAME      DRIVER    SCOPE\\nceb424d5d73d   bridge    bridge    local\\nad6318517651   host      host      local\\na2cfb19e8122   none      null      local\\n```\\nWe\u2019re interested in the \u201cbridge\u201d network, so we\u2019ll inspect it by using it\u2019s ID:\\n```\\n$docker network inspect ceb424d5d73d\\n```\\nwhich should contain something like the following in its output\\n```\\n\\"Config\\": [\\n    {\\n        \\"Subnet\\": \\"172.17.0.0/16\\"\\n    }\\n]\\n```\\nSo we know that in the above case, docker is using the network range `172.17.0.0/16`\\n**### Get VPN Network**\\nNext we need to find out what network the VPN is using. The below should work on a MacBook Pro or linux. If you\u2019re running on Windows, `ipconfig` may work better.\\nFrom a terminal enter the command `$ifconfig` or `$netstat -i` and look for a `utun*` entry with an IP address. For example, doing `$netstat -i` might output:\\n```\\nutun3      1500  <Link#17>                      2298484     0   754726     0     0\\nutun3      1500  172.17.144/22 172.17.146.96    2298484     -   754726     -     -\\n```\\nThis tells us the the VPN is using the network range `172.17.144/22`.\\nIf you can remember your [CIDR blocks](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#IPv4_CIDR_blocks), you\u2019ll see that the docker network collides with that of the VPN. This means that docker will be unable to use the VPN network to get to our internal server which has the address `172.17.2.79`.\\n## Docker Network Fix\\nTo resolve the above problem, we can change the address pool used by the docker daemon.\\nWith docker desktop, the easiest way to achieve this is to open the docker desktop dashboard (UI), click the \u201csettings\u201d gear cog in the top right of the screen to view the preferences screen. Select \u201cDocker Engine\u201d from the left hand menu, which should show some JSON config. Add the below section of config into the existing JSON config (keeping what\u2019s already there), and click the \u201cApply & Restart\u201d button\\n```\\n\\"default-address-pools\\": [\\n    {\\n      \\"base\\": \\"172.240.0.0/16\\",\\n      \\"size\\": 24\\n    }\\n  ],\\n```\\nNow if you repeat the steps to [Get Docker Network](#Get-Docker-Network) (note, the network ID most likely changed!), you should see that docker now uses subnet `172.240.0.0/24`, and `docker build` should now be able to complete steps such as `dotnet build` which would have previously failed to reach the internal server"},{"id":"/2021/11/06/memory","metadata":{"permalink":"/blog/2021/11/06/memory","source":"@site/blog/2021-11-06-memory.md","title":"Computer Memory Types","description":"computer memory types and considerations from a tinyML perspective","date":"2021-11-06T00:00:00.000Z","formattedDate":"November 6, 2021","tags":[],"readingTime":2.065,"truncated":true,"authors":[{"name":"Martyn Butterworth","title":"Technical Architect at OnTheBeach.com","url":"https://github.com/MartynButty","imageURL":"https://github.com/MartynButty.png","key":"martyn"}],"prevItem":{"title":"Docker build fail with VPN","permalink":"/blog/2021/12/14/Docker-VPN-Network-Fix"},"nextItem":{"title":"WSDL Glossary","permalink":"/blog/2021/10/02/wsdl"}},"content":"Here is an overview of some common types of computer memory. Although general in nature, this page is more about considerations\\nyou may need to make when dealing with machine learning on a microcontroller running ML perspective (TinyML).\\n\x3c!--truncate--\x3e\\n## What is it\\nComputers operate on **bits** which can take the value zero or one.\\n\\nTo be more useful, these bits are grouped into **bytes**. One byte comprises 8 bits, which can then represent things like letters \\nor weights in a neural network (NN). \\n\\nMicrocontrollers and CPU\'s read and write bytes to memory.  A memory address is a hexadecimal value that tells the \\ncpu/microcontroller etc where the memory it is looking for is located.\\n\\n## Types of memory\\n### Flash \\nFlash memory is non volatile (it won\'t lose the stored information when powered down). It is used to store program code, \\nmachine learning (ML) model weights etc. \\n\\nThe process of saving to flash memory is slow and also gradually degrades the memory over time, therefore flash memory \\nis better suited to read only use, and only overwritten when reprogramming (a microcontroller)\\n### RAM\\nRAM is volatile (the stored information is lost when powered off). It is used for temporary storage of variables like \\ninput and output buffers and intermediate tensors. RAM is much faster than flash for read/write operations, so is ideal \\nfor use as primary memory during code execution\\n\\n### Types of RAM\\n#### Dynamic RAM (DRAM)\\nDRAM uses a single transistor and capacitor to store a bit. As the capacitor quickly loses charge, it must be periodically \\nrefreshed to prevent the stored information being lost. This usually occurs between read and write operations. DRAM is \\nmost suitable for main memory in modern computers.\\n\\n#### Static RAM (SRAM)\\nSRAM uses six transistors to store each bit. It is able to maintain the stored information without refreshing. SRAM is \\nmore expensive than DRAM on account of the number of transistors required, but is faster and requires less power due to \\nnot needing to refresh. SRAM is therefore more suitable to caches, and is commonly used as main memory on microcontrollers.\\n\\n#### Registers\\nA third type of RAM is a register. A special purpose register is typically for low level computing functions like the program \\ncounter and stack pointer. General purpose registers are used to store values and memory addresses. It is unlikely you \\nwill need to play around with registers as a tinyML engineer unless you are working at the assembly code level."},{"id":"/2021/10/02/wsdl","metadata":{"permalink":"/blog/2021/10/02/wsdl","source":"@site/blog/2021-10-02-wsdl.md","title":"WSDL Glossary","description":"What is WSDL","date":"2021-10-02T00:00:00.000Z","formattedDate":"October 2, 2021","tags":[],"readingTime":2.57,"truncated":false,"authors":[{"name":"Martyn Butterworth","title":"Technical Architect at OnTheBeach.com","url":"https://github.com/MartynButty","imageURL":"https://github.com/MartynButty.png","key":"martyn"}],"prevItem":{"title":"Computer Memory Types","permalink":"/blog/2021/11/06/memory"}},"content":"## What is WSDL\\n\\nWeb services description language (WSDL) is an XML document that describes a web service. WSDL is often pronounced \\"wizdul\\". \\nIt describes what operations a web service provides, the structure of the messages it sends and receives, and how to send \\nthose messages. This article is a very brief overview of the common WSDL elements. If you are new to WSDL, you may prefer \\nto read [Understanding WSDL](https://msdn.microsoft.com/en-us/library/ms996486.aspx \\"Understanding WSDL\\").\\n\\n## Core WSDL Elements\\n### Definition\\n\\nThe `<definitions>` element is the WSDL\'s root XML element. It typically contains several other elements including \\n[types](#types) , [message](#message), [portType](#portType), [binding](#binding) and [service](#service).\\n\\n### Types\\nThe `<types>` element contains XML schema type definitions (xsd). The xsd\'s describe the structure of the XML sent and \\nreceived by the web service.\\n\\n### Message\\nA message is an XML document that can be sent or received by the web service. A message is usually associated with one \\nor more [operation](#operation). For example, an operation to `createNewOrder` might have an input message `newOrder` \\nand an output message `orderStatus`.\\n\\n### PortType (Interfac\\nThe `<portType>` element is best thought of as an interface, and will be renamed as such in version 1.2 of the WSDL \\nspecification. It contains one or more `<operation>` elements.\\n\\n### Operation\\nAn `<operation>` element defines an operation with the web service. It groups together the [message](#message) elements \\nthat can be passed to or from the web service. An operation can have an input and output message (request-response), or \\nit can just define an input message (one-way), send an output message only (notification) or send an output message to \\nask for an input message (solicit-response). The operation may also define a fault message too.\\n\\n### Binding\\nA `<binding>` element is a collection of one or more `operations`. It describes how an operation is implemented. It \\ndefines the communication protocol (e.g. http), style of service (document or rpc), and the `SOAPAction` HTTP header for \\nthe defined operations.\\n\\n### Document & RPC\\nThe document style indicates that the SOAP body will contain an XML document (and is able to be validated by the previously \\ndefined xsd\'s). An RPC style indicates that the SOAP body will contain an XML representation of a method call. It includes \\nthe method name and parameters of the method to generate the XML structure. Follow this link for a more in-depth discussion \\non [Document and RPC style web services](http://java.globinch.com/enterprise-java/web-services/soap-binding-document-rpc-style-web-services-difference/ \\"Document vs RPC\\")\\n\\n### Service\\nThe `<service>` element defines the endpoint (port) that exposes a particular binding. I.e. the URL to use to call an \\noperation within the binding\\n\\n### Example WSDL Document\\n```xml\\n<definitions name=\\"EndorsementSearch\\"  \\n targetNamespace=\\"http://namespaces.snowboard-info.com\\"  \\n xmlns:es=\\"http://www.snowboard-info.com/EndorsementSearch.wsdl\\"  \\n xmlns:esxsd=\\"http://schemas.snowboard-info.com/EndorsementSearch.xsd\\"  \\n xmlns:soap=\\"http://schemas.xmlsoap.org/wsdl/soap/\\"  \\n xmlns=\\"http://schemas.xmlsoap.org/wsdl/\\"  \\n>  \\n  \\n \x3c!-- omitted types section with content model schema info \\\\--\x3e  \\n  \\n <message name=\\"GetEndorsingBoarderRequest\\">  \\n  <part name=\\"body\\" element=\\"esxsd:GetEndorsingBoarder\\"/>  \\n </message>  \\n  \\n <message name=\\"GetEndorsingBoarderResponse\\">  \\n  <part name=\\"body\\" element=\\"esxsd:GetEndorsingBoarderResponse\\"/>  \\n </message>  \\n  \\n <portType name=\\"GetEndorsingBoarderPortType\\">  \\n  <operation name=\\"GetEndorsingBoarder\\">  \\n   <input message=\\"es:GetEndorsingBoarderRequest\\"/>  \\n   <output message=\\"es:GetEndorsingBoarderResponse\\"/>  \\n   <fault message=\\"es:GetEndorsingBoarderFault\\"/>  \\n  </operation>  \\n </portType>  \\n  \\n <binding name=\\"EndorsementSearchSoapBinding\\" type=\\"es:GetEndorsingBoarderPortType\\">  \\n  <soap:binding style=\\"document\\" transport=\\"http://schemas.xmlsoap.org/soap/http\\"/>  \\n  <operation name=\\"GetEndorsingBoarder\\">  \\n   <soap:operation soapAction=\\"http://www.snowboard-info.com/EndorsementSearch\\"/>  \\n   <input>  \\n    <soap:body use=\\"literal\\" \\n                   namespace=\\"http://schemas.snowboard-info.com/EndorsementSearch.xsd\\"/>  \\n   </input>  \\n   <output>  \\n    <soap:body use=\\"literal\\" \\n                   namespace=\\"http://schemas.snowboard-info.com/EndorsementSearch.xsd\\"/>  \\n   </output>  \\n   <fault>  \\n    <soap:body use=\\"literal\\" \\n                   namespace=\\"http://schemas.snowboard-info.com/EndorsementSearch.xsd\\"/>  \\n   </fault>  \\n  </operation>  \\n </binding>  \\n  \\n <service name=\\"EndorsementSearchService\\">  \\n  <documentation>snowboarding\\\\-info.com Endorsement Service</documentation>  \\n  <port name=\\"GetEndorsingBoarderPort\\" binding=\\"es:EndorsementSearchSoapBinding\\">  \\n   <soap:address location=\\"http://www.snowboard-info.com/EndorsementSearch\\"/>  \\n  </port>  \\n </service>  \\n</definitions>\\n```"}]}')}}]);