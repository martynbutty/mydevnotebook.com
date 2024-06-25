"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[9039],{6072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(4848),o=n(8453);const r={title:"AWS CDK dependent stacks",description:"How to decouple dependent AWS stacks",authors:["martyn"],hide_table_of_contents:!1},a="AWS CDK export cannot be deleted as it is in use",c={permalink:"/blog/2023/07/11/CDK-dependent-stacks",source:"@site/blog/2023-07-11-CDK-dependent-stacks/index.md",title:"AWS CDK dependent stacks",description:"How to decouple dependent AWS stacks",date:"2023-07-11T00:00:00.000Z",tags:[],readingTime:5.965,hasTruncateMarker:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],frontMatter:{title:"AWS CDK dependent stacks",description:"How to decouple dependent AWS stacks",authors:["martyn"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Aurora Serverless Database Selection",permalink:"/blog/2023/08/01/Aurora-Serverless-database-selection"},nextItem:{title:"Performance Testing Basics",permalink:"/blog/2022/09/06/Performance-Testing-Basics"}},i={authorsImageUrls:[void 0]},d=[{value:"AWS CDK dependent stacks",id:"aws-cdk-dependent-stacks",level:2},{value:"How did this happen",id:"how-did-this-happen",level:2},{value:"Example",id:"example",level:2},{value:"Refactor to remove a dependency",id:"refactor-to-remove-a-dependency",level:3},{value:"What went wrong",id:"what-went-wrong",level:4},{value:"The fix",id:"the-fix",level:3},{value:"Useful commands",id:"useful-commands",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.RP)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:['Sometimes you try deploying a change to an existing multi-stack CDK project, only to get an error message similar to "',(0,s.jsx)(t.strong,{children:"Export cannot be deleted as it is in use"}),"\". Read on if you've encountered this error and are struggling to fix it, or you're just interested in finding out about dependent stacks in AWS."]}),"\n",(0,s.jsx)(t.h2,{id:"aws-cdk-dependent-stacks",children:"AWS CDK dependent stacks"}),"\n",(0,s.jsx)(t.p,{children:"AWS CDK makes it easy to share resources in different stacks. For example, allowing an SQS queue from one stack to be used by a lambda in a different stack. In this case, CDK automatically takes care of cross stack references, and also ensures deployments happen in the correct order."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"CDK dependent stacks architecture",src:n(1458).A+"",width:"623",height:"301"})}),"\n",(0,s.jsxs)(t.p,{children:["The problem you've probably encountered seeing as you're here, is that you're trying to remove  that cross stack reference, but you see  something like:\n",(0,s.jsx)(t.code,{children:"Export <<some AWS ref>> cannot be deleted as it is in use by <<some stack>>"})]}),"\n",(0,s.jsx)(t.h2,{id:"how-did-this-happen",children:"How did this happen"}),"\n",(0,s.jsx)(t.p,{children:'Cross stack references occur when you have two stacks, and you share something from one stack with the other. When CDK is building the cloudFormation template, it will automatically manage these cross stack references. It does this by "exporting" the construct from the producing stack (using an auto generated name), and "importing" the construct in the consuming construct.'}),"\n",(0,s.jsx)(t.p,{children:"If you make a change that impacts the cross stack dependency, you can find yourself in a circular trap where CDK knows it has to deploy the producingStack first, but that fails because the existing (already deployed) version of the consuming stack still requires the exports you're trying to remove, and it cannot deploy the consumingStack first because that depends on the producingStack."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"CDK depent stacks deployment problem",src:n(810).A+"",width:"432",height:"323"})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["Given a stack ",(0,s.jsx)(t.code,{children:"producingStack"})," that creates an SQS queue, and a ",(0,s.jsx)(t.code,{children:"consumingStack"})," that has a lambda function that is allowed to push messages to the SQS queue, we end up with (partial) CDK code that looks a little like below (full example code can be found ",(0,s.jsx)(t.a,{href:"https://github.com/martynbutty/cdkDependantStacks",children:"here"}),")"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typeScript",children:"...\nexport class producingStack extends cdk.Stack {  \n    public readonly sourceQueueArn: string;  \n    public readonly sourceQueueUrl: string;  \n\n    constructor(scope: Construct, id: string, props?: cdk.StackProps) {  \n        super(scope, id, props);  \n\n        const sourceMessageQueue = new sqs.Queue(this, 'sourceMessageQueue', {  \n            queueName: 'sourceMessageQueue'  \n        });  \n\n        this.sourceQueueArn = sourceMessageQueue.queueArn;  \n        this.sourceQueueUrl = sourceMessageQueue.queueUrl;  \n        ...\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export class consumingStack extends cdk.Stack {  \n    constructor(scope: Construct, id: string, props: HotelsDataAcquisitionStackProps) {  \n        super(scope, id, props);  \n\n        const queue = aws_sqs.Queue.fromQueueArn(this, 'sourceQ', props.sqsArn);  \n\n        const eventSource = new SqsEventSource(queue, {  \n            batchSize: 10,  \n            reportBatchItemFailures : true,  \n            enabled: true  \n        });  \n\n        const lambdaEnvVars = {  \n            SQS_QUEUE_URL: props.sqsUrl  \n        };  \n\n        const processingLambda = new NodejsFunction(this, 'processingLambda', {  \n            entry: './lambda/index.ts',  \n            runtime: aws_lambda.Runtime.NODEJS_18_X,  \n            handler: 'main',  \n            environment: lambdaEnvVars  \n        });  \n\n        processingLambda.addEventSource(eventSource);  \n    }  \n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"We have already deployed these stacks, and are now trying to refactor our solution to remove the cross stack dependency."}),"\n",(0,s.jsx)(t.h3,{id:"refactor-to-remove-a-dependency",children:"Refactor to remove a dependency"}),"\n",(0,s.jsx)(t.p,{children:"For this example, we're going to simply remove the SQS URL in the lambda's environment variable. producingStack is unchanged, and consumingStack looks like below."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"You'd normally just delete code that's no longer required, but it's shown commented out here to make it easier to see what's changing."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export class consumingStack extends cdk.Stack {  \n    constructor(scope: Construct, id: string, props: HotelsDataAcquisitionStackProps) {  \n        super(scope, id, props);  \n\n        const queue = aws_sqs.Queue.fromQueueArn(this, 'sourceQ', props.sqsArn);  \n\n        const eventSource = new SqsEventSource(queue, {  \n            batchSize: 10,  \n            reportBatchItemFailures : true,  \n            enabled: true  \n        });  \n\n        // const lambdaEnvVars = {  \n        // \tSQS_QUEUE_URL: props.sqsUrl\n        // };  \n        \n        const processingLambda = new NodejsFunction(this, 'processingLambda', {  \n            entry: './lambda/index.ts',  \n            runtime: aws_lambda.Runtime.NODEJS_18_X,  \n            handler: 'main'\n            // environment: lambdaEnvVars  \n        });  \n\n        processingLambda.addEventSource(eventSource);  \n    }  \n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When you try to ",(0,s.jsx)(t.code,{children:"cdk deploy"})," this change, you get a failure\n`Stack Deployments Failed: Error: The stack named producingStack failed to deploy: UPDATE_ROLLBACK_COMPLETE"]}),"\n",(0,s.jsxs)(t.p,{children:["The cause of the rollback is output on the CLI output but it gets hidden at the end. To find it another way, you can use the AWS console -> cloudformation -> producingStack -> events, where we see the offending error:\n",(0,s.jsx)(t.code,{children:"Export producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816 cannot be deleted as it is in use by consumingStack"})]}),"\n",(0,s.jsxs)(t.p,{children:["If we do a ",(0,s.jsx)(t.code,{children:"cdk diff"})," we can see that an export is being removed"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'...\nOutputs\n[-] Output ExportsOutputRefsourceMessageQueueE741C4AF715E0816: {"Value":{"Ref":"sourceMessageQueueE741C4AF"},"Export":{"Name":"producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816"}}\n...\n'})}),"\n",(0,s.jsx)(t.p,{children:"CDK automatically created this export when it first detected the cross stack dependency, and it is now attempting to remove it because of our change to consumingStack."}),"\n",(0,s.jsx)(t.h4,{id:"what-went-wrong",children:"What went wrong"}),"\n",(0,s.jsxs)(t.p,{children:["CDK knows that consumingStack depends on producingStack (for the SQS exports).  Any deploy will therefore trigger the deploy of the producingStack first, ",(0,s.jsx)(t.strong,{children:"even if you try to just deploy the consumingStack"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:['In our case, we\'ve only changed the consumingStack. This change means CDK notices we no longer need to "export" the SQS URL, so it removes that export, as can be seen in the above ',(0,s.jsx)(t.code,{children:"cdk diff"})," partial output."]}),"\n",(0,s.jsx)(t.p,{children:"CDK tries to first apply the change to producingStack. This change is to remove the export of the SQS URL.  However, CDK notices that the currently deployed version of consumingStack still has an import on that URL (it hasn't deployed the change to the consumingStack yet). So CDK fails the deploy and rolls-back."}),"\n",(0,s.jsx)(t.h3,{id:"the-fix",children:"The fix"}),"\n",(0,s.jsxs)(t.p,{children:["To fix this problem, we make a temporary code change in ",(0,s.jsx)(t.code,{children:"producingStack"})," to explicitly export a ref to the SQS URL. This is in addition to the decoupling change we already made in ",(0,s.jsx)(t.code,{children:"consumingStack"}),". This export will therefore be in the cloudformation template regardless of if it is actually used or not. To achieve this, we use the AWS CDK ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.Stack.html#exportwbrvalueexportedvalue-options",children:(0,s.jsx)(t.code,{children:"exportValue()"})}),"  function. In our case, we add the below to ",(0,s.jsx)(t.code,{children:"producingStack"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"this.exportValue(sourceMessageQueue.queueUrl);"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Note: If you're observant, and wanted to completely decouple the stacks, we'd also have add another export as we also implicitly use the SQS ARN in the initial version. So you'd also add:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"this.exportValue(sourceMessageQueue.queueArn);"})}),"\n",(0,s.jsxs)(t.p,{children:["To confirm our change worked we can run another ",(0,s.jsx)(t.code,{children:"cdk diff"}),". This time you should notice that the export is no longer removed (we know this by the absence of it's removal / negating output from the diff). CDK can therefore safely deploy ",(0,s.jsx)(t.code,{children:"producingStack"})," without compromising the deployed (old) version of ",(0,s.jsx)(t.code,{children:"consumingStack"}),". It then deploys the new version of ",(0,s.jsx)(t.code,{children:"consumingStack"})," which removes the dependency."]}),"\n",(0,s.jsxs)(t.p,{children:["Now we managed to deploy and remove the dependency, we can make a second change to remove the temporary exports (the ",(0,s.jsx)(t.code,{children:"exportValue()"}),") and redeploy again to be in a clean state. This time a ",(0,s.jsx)(t.code,{children:"cdk diff"})," should show the removal of the exports, but this is on now that ",(0,s.jsx)(t.code,{children:"consumingStack"})," no longer depends on the export."]}),"\n",(0,s.jsx)(t.h2,{id:"useful-commands",children:"Useful commands"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.code,{children:"cdk diff"}),' to check for removed "exports". If you see any, then retain them by manually exporting them with ',(0,s.jsx)(t.code,{children:"exportValue()"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["To see if the currently deployed versions of your stacks have any exports: ",(0,s.jsx)(t.code,{children:"aws cloudformation list-exports"}),". Note: you will probably always have some exports as the underlying CDK deployment framework usually creates a couple of exports."]}),"\n",(0,s.jsxs)(t.li,{children:["You can see the exports locally in your ",(0,s.jsx)(t.code,{children:"cdk.out"})," directory. For our example, look in ",(0,s.jsx)(t.code,{children:"./dependantStacks/cdk.out/producingStack.template.json"})," for the ",(0,s.jsx)(t.code,{children:"Outputs"})," section"]}),"\n",(0,s.jsxs)(t.li,{children:["You can see the exports in the ",(0,s.jsx)(t.strong,{children:"currently deployed"})," versions by viewing the cloudformation template in the AWS console -> cloudformation -> producingStack -> template"]}),"\n",(0,s.jsxs)(t.li,{children:["Given an export name, you can see which stack(s) use it: ",(0,s.jsx)(t.code,{children:"aws cloudformation list-imports --export-name producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.RP)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},810:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CDK-dependent-stacks-888d3a0f1147307a15cdb30fb1c11123.png"},1458:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/DependentStacks-299bd51aa765cfff1a7e67cd60fde1f9.png"},8453:(e,t,n)=>{n.d(t,{RP:()=>r});var s=n(6540);const o=s.createContext({});function r(e){const t=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);