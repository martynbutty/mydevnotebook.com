"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[141],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,s(s({ref:t},l),{},{components:n})):o.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return u}});var o=n(3117),a=(n(7294),n(3905));const r={title:"AWS CDK dependent stacks",description:"How to decouple dependent AWS stacks",authors:["martyn"],hide_table_of_contents:!1},s="AWS CDK export cannot be deleted as it is in use",i={permalink:"/blog/2023/07/11/CDK-dependent-stacks",source:"@site/blog/2023-07-11-CDK-dependent-stacks/index.md",title:"AWS CDK dependent stacks",description:"How to decouple dependent AWS stacks",date:"2023-07-11T00:00:00.000Z",formattedDate:"July 11, 2023",tags:[],readingTime:5.965,hasTruncateMarker:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],frontMatter:{title:"AWS CDK dependent stacks",description:"How to decouple dependent AWS stacks",authors:["martyn"],hide_table_of_contents:!1},prevItem:{title:"Aurora Serverless Database Selection",permalink:"/blog/2023/08/01/Aurora-Serverless-database-selection"},nextItem:{title:"Performance Testing Basics",permalink:"/blog/2022/09/06/Performance-Testing-Basics"}},c={authorsImageUrls:[void 0]},u=[{value:"AWS CDK dependent stacks",id:"aws-cdk-dependent-stacks",level:2},{value:"How did this happen",id:"how-did-this-happen",level:2},{value:"Example",id:"example",level:2},{value:"Refactor to remove a dependency",id:"refactor-to-remove-a-dependency",level:3},{value:"What went wrong",id:"what-went-wrong",level:4},{value:"The fix",id:"the-fix",level:3},{value:"Useful commands",id:"useful-commands",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Sometimes you try deploying a change to an existing multi-stack CDK project, only to get an error message similar to "',(0,a.kt)("strong",{parentName:"p"},"Export cannot be deleted as it is in use"),"\". Read on if you've encountered this error and are struggling to fix it, or you're just interested in finding out about dependent stacks in AWS."),(0,a.kt)("h2",{id:"aws-cdk-dependent-stacks"},"AWS CDK dependent stacks"),(0,a.kt)("p",null,"AWS CDK makes it easy to share resources in different stacks. For example, allowing an SQS queue from one stack to be used by a lambda in a different stack. In this case, CDK automatically takes care of cross stack references, and also ensures deployments happen in the correct order."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CDK dependent stacks architecture",src:n(2224).Z,width:"623",height:"301"})),(0,a.kt)("p",null,"The problem you've probably encountered seeing as you're here, is that you're trying to remove  that cross stack reference, but you see  something like:\n",(0,a.kt)("inlineCode",{parentName:"p"},"Export <<some AWS ref>> cannot be deleted as it is in use by <<some stack>>")),(0,a.kt)("h2",{id:"how-did-this-happen"},"How did this happen"),(0,a.kt)("p",null,'Cross stack references occur when you have two stacks, and you share something from one stack with the other. When CDK is building the cloudFormation template, it will automatically manage these cross stack references. It does this by "exporting" the construct from the producing stack (using an auto generated name), and "importing" the construct in the consuming construct.'),(0,a.kt)("p",null,"If you make a change that impacts the cross stack dependency, you can find yourself in a circular trap where CDK knows it has to deploy the producingStack first, but that fails because the existing (already deployed) version of the consuming stack still requires the exports you're trying to remove, and it cannot deploy the consumingStack first because that depends on the producingStack."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CDK depent stacks deployment problem",src:n(3878).Z,width:"432",height:"323"})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Given a stack ",(0,a.kt)("inlineCode",{parentName:"p"},"producingStack")," that creates an SQS queue, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"consumingStack")," that has a lambda function that is allowed to push messages to the SQS queue, we end up with (partial) CDK code that looks a little like below (full example code can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/martynbutty/cdkDependantStacks"},"here"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typeScript"},"...\nexport class producingStack extends cdk.Stack {  \n    public readonly sourceQueueArn: string;  \n    public readonly sourceQueueUrl: string;  \n\n    constructor(scope: Construct, id: string, props?: cdk.StackProps) {  \n        super(scope, id, props);  \n\n        const sourceMessageQueue = new sqs.Queue(this, 'sourceMessageQueue', {  \n            queueName: 'sourceMessageQueue'  \n        });  \n\n        this.sourceQueueArn = sourceMessageQueue.queueArn;  \n        this.sourceQueueUrl = sourceMessageQueue.queueUrl;  \n        ...\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class consumingStack extends cdk.Stack {  \n    constructor(scope: Construct, id: string, props: HotelsDataAcquisitionStackProps) {  \n        super(scope, id, props);  \n\n        const queue = aws_sqs.Queue.fromQueueArn(this, 'sourceQ', props.sqsArn);  \n\n        const eventSource = new SqsEventSource(queue, {  \n            batchSize: 10,  \n            reportBatchItemFailures : true,  \n            enabled: true  \n        });  \n\n        const lambdaEnvVars = {  \n            SQS_QUEUE_URL: props.sqsUrl  \n        };  \n\n        const processingLambda = new NodejsFunction(this, 'processingLambda', {  \n            entry: './lambda/index.ts',  \n            runtime: aws_lambda.Runtime.NODEJS_18_X,  \n            handler: 'main',  \n            environment: lambdaEnvVars  \n        });  \n\n        processingLambda.addEventSource(eventSource);  \n    }  \n}\n")),(0,a.kt)("p",null,"We have already deployed these stacks, and are now trying to refactor our solution to remove the cross stack dependency."),(0,a.kt)("h3",{id:"refactor-to-remove-a-dependency"},"Refactor to remove a dependency"),(0,a.kt)("p",null,"For this example, we're going to simply remove the SQS URL in the lambda's environment variable. producingStack is unchanged, and consumingStack looks like below. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You'd normally just delete code that's no longer required, but it's shown commented out here to make it easier to see what's changing.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class consumingStack extends cdk.Stack {  \n    constructor(scope: Construct, id: string, props: HotelsDataAcquisitionStackProps) {  \n        super(scope, id, props);  \n\n        const queue = aws_sqs.Queue.fromQueueArn(this, 'sourceQ', props.sqsArn);  \n\n        const eventSource = new SqsEventSource(queue, {  \n            batchSize: 10,  \n            reportBatchItemFailures : true,  \n            enabled: true  \n        });  \n\n        // const lambdaEnvVars = {  \n        //  SQS_QUEUE_URL: props.sqsUrl\n        // };  \n        \n        const processingLambda = new NodejsFunction(this, 'processingLambda', {  \n            entry: './lambda/index.ts',  \n            runtime: aws_lambda.Runtime.NODEJS_18_X,  \n            handler: 'main'\n            // environment: lambdaEnvVars  \n        });  \n\n        processingLambda.addEventSource(eventSource);  \n    }  \n}\n")),(0,a.kt)("p",null,"When you try to ",(0,a.kt)("inlineCode",{parentName:"p"},"cdk deploy")," this change, you get a failure\n`Stack Deployments Failed: Error: The stack named producingStack failed to deploy: UPDATE_ROLLBACK_COMPLETE"),(0,a.kt)("p",null,"The cause of the rollback is output on the CLI output but it gets hidden at the end. To find it another way, you can use the AWS console -> cloudformation -> producingStack -> events, where we see the offending error:\n",(0,a.kt)("inlineCode",{parentName:"p"},"Export producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816 cannot be deleted as it is in use by consumingStack")),(0,a.kt)("p",null,"If we do a ",(0,a.kt)("inlineCode",{parentName:"p"},"cdk diff")," we can see that an export is being removed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'...\nOutputs\n[-] Output ExportsOutputRefsourceMessageQueueE741C4AF715E0816: {"Value":{"Ref":"sourceMessageQueueE741C4AF"},"Export":{"Name":"producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816"}}\n...\n')),(0,a.kt)("p",null,"CDK automatically created this export when it first detected the cross stack dependency, and it is now attempting to remove it because of our change to consumingStack."),(0,a.kt)("h4",{id:"what-went-wrong"},"What went wrong"),(0,a.kt)("p",null,"CDK knows that consumingStack depends on producingStack (for the SQS exports).  Any deploy will therefore trigger the deploy of the producingStack first, ",(0,a.kt)("strong",{parentName:"p"},"even if you try to just deploy the consumingStack"),"."),(0,a.kt)("p",null,'In our case, we\'ve only changed the consumingStack. This change means CDK notices we no longer need to "export" the SQS URL, so it removes that export, as can be seen in the above ',(0,a.kt)("inlineCode",{parentName:"p"},"cdk diff")," partial output. "),(0,a.kt)("p",null,"CDK tries to first apply the change to producingStack. This change is to remove the export of the SQS URL.  However, CDK notices that the currently deployed version of consumingStack still has an import on that URL (it hasn't deployed the change to the consumingStack yet). So CDK fails the deploy and rolls-back."),(0,a.kt)("h3",{id:"the-fix"},"The fix"),(0,a.kt)("p",null,"To fix this problem, we make a temporary code change in ",(0,a.kt)("inlineCode",{parentName:"p"},"producingStack")," to explicitly export a ref to the SQS URL. This is in addition to the decoupling change we already made in ",(0,a.kt)("inlineCode",{parentName:"p"},"consumingStack"),". This export will therefore be in the cloudformation template regardless of if it is actually used or not. To achieve this, we use the AWS CDK ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.Stack.html#exportwbrvalueexportedvalue-options"},(0,a.kt)("inlineCode",{parentName:"a"},"exportValue()")),"  function. In our case, we add the below to ",(0,a.kt)("inlineCode",{parentName:"p"},"producingStack"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"this.exportValue(sourceMessageQueue.queueUrl);")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If you're observant, and wanted to completely decouple the stacks, we'd also have add another export as we also implicitly use the SQS ARN in the initial version. So you'd also add:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"this.exportValue(sourceMessageQueue.queueArn);")),(0,a.kt)("p",null,"To confirm our change worked we can run another ",(0,a.kt)("inlineCode",{parentName:"p"},"cdk diff"),". This time you should notice that the export is no longer removed (we know this by the absence of it's removal / negating output from the diff). CDK can therefore safely deploy ",(0,a.kt)("inlineCode",{parentName:"p"},"producingStack")," without compromising the deployed (old) version of ",(0,a.kt)("inlineCode",{parentName:"p"},"consumingStack"),". It then deploys the new version of ",(0,a.kt)("inlineCode",{parentName:"p"},"consumingStack")," which removes the dependency."),(0,a.kt)("p",null,"Now we managed to deploy and remove the dependency, we can make a second change to remove the temporary exports (the ",(0,a.kt)("inlineCode",{parentName:"p"},"exportValue()"),") and redeploy again to be in a clean state. This time a ",(0,a.kt)("inlineCode",{parentName:"p"},"cdk diff")," should show the removal of the exports, but this is on now that ",(0,a.kt)("inlineCode",{parentName:"p"},"consumingStack")," no longer depends on the export."),(0,a.kt)("h2",{id:"useful-commands"},"Useful commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"cdk diff"),' to check for removed "exports". If you see any, then retain them by manually exporting them with ',(0,a.kt)("inlineCode",{parentName:"li"},"exportValue()"),"."),(0,a.kt)("li",{parentName:"ul"},"To see if the currently deployed versions of your stacks have any exports: ",(0,a.kt)("inlineCode",{parentName:"li"},"aws cloudformation list-exports"),". Note: you will probably always have some exports as the underlying CDK deployment framework usually creates a couple of exports."),(0,a.kt)("li",{parentName:"ul"},"You can see the exports locally in your ",(0,a.kt)("inlineCode",{parentName:"li"},"cdk.out")," directory. For our example, look in ",(0,a.kt)("inlineCode",{parentName:"li"},"./dependantStacks/cdk.out/producingStack.template.json")," for the ",(0,a.kt)("inlineCode",{parentName:"li"},"Outputs")," section"),(0,a.kt)("li",{parentName:"ul"},"You can see the exports in the ",(0,a.kt)("strong",{parentName:"li"},"currently deployed")," versions by viewing the cloudformation template in the AWS console -> cloudformation -> producingStack -> template"),(0,a.kt)("li",{parentName:"ul"},"Given an export name, you can see which stack(s) use it: ",(0,a.kt)("inlineCode",{parentName:"li"},"aws cloudformation list-imports --export-name producingStack:ExportsOutputRefsourceMessageQueueE741C4AF715E0816"))))}d.isMDXComponent=!0},3878:function(e,t,n){t.Z=n.p+"assets/images/CDK-dependent-stacks-888d3a0f1147307a15cdb30fb1c11123.png"},2224:function(e,t,n){t.Z=n.p+"assets/images/DependentStacks-299bd51aa765cfff1a7e67cd60fde1f9.png"}}]);