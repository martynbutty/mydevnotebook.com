"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[463],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?i.createElement(f,s(s({ref:t},h),{},{components:n})):i.createElement(f,s({ref:t},h))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return c}});var i=n(3117),a=(n(7294),n(3905));const o={title:"Design Principles"},s=void 0,r={unversionedId:"Design Patterns and Principles/design-principles",id:"Design Patterns and Principles/design-principles",title:"Design Principles",description:"These are some of the more important design principles and strategies to consider during your OOP software design and development activities.",source:"@site/docs/Design Patterns and Principles/design-principles.md",sourceDirName:"Design Patterns and Principles",slug:"/Design Patterns and Principles/design-principles",permalink:"/Design Patterns and Principles/design-principles",draft:!1,tags:[],version:"current",frontMatter:{title:"Design Principles"},sidebar:"tutorialSidebar",previous:{title:"Decorator Pattern",permalink:"/Design Patterns and Principles/decorator"},next:{title:"The Facade Pattern",permalink:"/Design Patterns and Principles/facade"}},l={},c=[{value:"Objects are things with well defined responsibilities",id:"objects-are-things-with-well-defined-responsibilities",level:2},{value:"Objects are responsible for themselves",id:"objects-are-responsible-for-themselves",level:2},{value:"Encapsulation means any kind of hiding",id:"encapsulation-means-any-kind-of-hiding",level:2},{value:"Encapsulate what varies",id:"encapsulate-what-varies",level:2},{value:"Abstraction is the representation of an entity in non-concrete terms",id:"abstraction-is-the-representation-of-an-entity-in-non-concrete-terms",level:2},{value:"Abstract out variations in behaviour and data with commonality and variability analysis (CVA)",id:"abstract-out-variations-in-behaviour-and-data-with-commonality-and-variability-analysis-cva",level:2},{value:"Program to an interface not an implementation",id:"program-to-an-interface-not-an-implementation",level:2},{value:"Favour composition (or aggregation) over inheritance",id:"favour-composition-or-aggregation-over-inheritance",level:2},{value:"Think of inheritance as a way of conceptualising variation",id:"think-of-inheritance-as-a-way-of-conceptualising-variation",level:2},{value:"Keep variations in a class decoupled from other variations in the class",id:"keep-variations-in-a-class-decoupled-from-other-variations-in-the-class",level:2},{value:"Strive for loose coupling",id:"strive-for-loose-coupling",level:2},{value:"Strive for strong cohesion",id:"strive-for-strong-cohesion",level:2},{value:"Separate the code that uses an object from code that creates the object",id:"separate-the-code-that-uses-an-object-from-code-that-creates-the-object",level:2},{value:"Apply the once and only once rule",id:"apply-the-once-and-only-once-rule",level:2},{value:"Open Closed Principle (OCP)",id:"open-closed-principle-ocp",level:2},{value:"Dependency Inversion Principle (DIP)",id:"dependency-inversion-principle-dip",level:2},{value:"The Liskov Substitution Principle (LSP)",id:"the-liskov-substitution-principle-lsp",level:2},{value:"Ensure that your code is readable",id:"ensure-that-your-code-is-readable",level:2},{value:"Consider the testability of your code before coding it",id:"consider-the-testability-of-your-code-before-coding-it",level:2},{value:"Further Reading",id:"further-reading",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are some of the more important design principles and strategies to consider during your OOP software design and development activities."),(0,a.kt)("h2",{id:"objects-are-things-with-well-defined-responsibilities"},"Objects are things with well defined responsibilities"),(0,a.kt)("p",null,"At a conceptual level an object is a set of responsibilities (at a specification level it is a set of methods, at an implementation level an object is code and data). The responsibilities define the behaviour of the object. This focuses on what objects are supposed to do and its public interface, rather than the actual implementation."),(0,a.kt)("h2",{id:"objects-are-responsible-for-themselves"},"Objects are responsible for themselves"),(0,a.kt)("p",null,"The more that objects become responsible for their own behaviours, the less the controlling programs have to be responsible for them. Careful thought must be given to the separation of responsibilities between objects."),(0,a.kt)("h2",{id:"encapsulation-means-any-kind-of-hiding"},"Encapsulation means any kind of hiding"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data hiding (private data or object composition)"),(0,a.kt)("li",{parentName:"ul"},"Implementation hiding (private methods or Strategy/Bridge pattern)"),(0,a.kt)("li",{parentName:"ul"},"Class hiding (behind an abstract class)"),(0,a.kt)("li",{parentName:"ul"},"Design hiding (Fa\xe7ade pattern)"),(0,a.kt)("li",{parentName:"ul"},"Instantiation hiding (with factories)")),(0,a.kt)("h2",{id:"encapsulate-what-varies"},"Encapsulate what varies"),(0,a.kt)("p",null,"Encapsulated behaviour means that changes to an object\u2019s internal behaviour becomes transparent to other objects. Encapsulation therefore helps to prevent unwanted side-effects because when something is encapsulated, it becomes loosely coupled to the user. The encapsulating layers become the interfaces to design to. Many design patterns utilise this principle and it is an important way of thinking about software design."),(0,a.kt)("h2",{id:"abstraction-is-the-representation-of-an-entity-in-non-concrete-terms"},"Abstraction is the representation of an entity in non-concrete terms"),(0,a.kt)("p",null,"The process of abstraction within computer science allows you to deal with ideas and entities without being encumbered by unnecessary details. Abstraction is generally accomplished either through abstract classes and interfaces, or with conceptual layers of functionality which expose only the necessary elements of a lower level set of components. The goal of abstraction is generally to allow one or both sides of a relationship to vary independently from the other. For example, if a presentation layer accesses a database through a domain layer serving as the layer of abstraction, the database and method of access can be modified without affecting the presentation layer."),(0,a.kt)("h2",{id:"abstract-out-variations-in-behaviour-and-data-with-commonality-and-variability-analysis-cva"},"Abstract out variations in behaviour and data with commonality and variability analysis (CVA)"),(0,a.kt)("p",null,"Commonality analysis seeks structure that is unlikely to change over time, while variability analysis captures structure that is likely to change within the common set. The commonality analysis is a conceptual perspective where the common concepts will be represented by abstract classes; the variations within the common concept will be implemented by concrete classes. The interface for the abstract class must cater for all the variations among the concrete sub-classes. In general using CVA helps us discover patterns in the problem domain."),(0,a.kt)("h2",{id:"program-to-an-interface-not-an-implementation"},"Program to an interface not an implementation"),(0,a.kt)("p",null,"Because the interface (or abstract class) represents an abstraction that is unlikely to change; it also hides the subclasses from the client, and helps maintain the \u201conce and only once\u201d principle."),(0,a.kt)("h2",{id:"favour-composition-or-aggregation-over-inheritance"},"Favour composition (or aggregation) over inheritance"),(0,a.kt)("p",null,"When a class composes (or aggregates) an object instead of extending an inheritance hierarchy, it improves the cohesion of the class and decouples the implementation of the aggregated object. Inheritance hierarchies also suffer from the ",(0,a.kt)("a",{parentName:"p",href:"fragile"},"fragile base class problem"),"."),(0,a.kt)("h2",{id:"think-of-inheritance-as-a-way-of-conceptualising-variation"},"Think of inheritance as a way of conceptualising variation"),(0,a.kt)("p",null,"not for making special cases of existing objects. Instead of considering what might force a change to a design, ",(0,a.kt)("em",{parentName:"p"},"consider what you want to be able to change without redesign"),", and then to ",(0,a.kt)("strong",{parentName:"p"},"encapsulate what varies"),". Using inheritance for special cases can lead to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tight coupling because features are indirectly related to each other in the inheritance hierarchy"),(0,a.kt)("li",{parentName:"ul"},"Weak cohesion because methods that performed core functions are scattered among classes"),(0,a.kt)("li",{parentName:"ul"},"High redundancy with similarity of code in different classes"),(0,a.kt)("li",{parentName:"ul"},"Potential class explosion when a new type of specialisation or super class is introduced")),(0,a.kt)("h2",{id:"keep-variations-in-a-class-decoupled-from-other-variations-in-the-class"},"Keep variations in a class decoupled from other variations in the class"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"bridge"},"Bridge pattern")," there are two variations in the problem domain. There is a variation of the basic type, this leads to an abstract class and various concrete subclasses. Then there is a variation in method implementations, this results in a separate abstract class with a variety of concrete implementations. The first inheritance hierarchy aggregates the second, and hence the two are decoupled."),(0,a.kt)("h2",{id:"strive-for-loose-coupling"},"Strive for loose coupling"),(0,a.kt)("p",null,"Loose coupling is the state of possessing an association or awareness from one component or system to another by means of abstraction (interface or abstract class). Loose coupling provides the ability for one component to be associated with another while allowing independent variation. For example, if component A interacts with component B through an abstraction of component B, the implementation of component B can be changed without affecting component A. This contrasts with tight coupling \u2013 the state of possessing a direct association or awareness between one component or system and another which affects the ability for the associating component or system to vary independently. Decoupling is the process of disconnecting an association or awareness of two components or systems."),(0,a.kt)("h2",{id:"strive-for-strong-cohesion"},"Strive for strong cohesion"),(0,a.kt)("p",null,'Cohesion is a measure of how strongly related and focused the various responsibilities of a software module are. Cohesion is usually expressed as "high (strong) cohesion" or "low (weak) cohesion" when being discussed. Modules with high cohesion tend to be preferable because high cohesion is associated with several desirable traits of software including:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Robustness"),(0,a.kt)("li",{parentName:"ul"},"Reliability"),(0,a.kt)("li",{parentName:"ul"},"Reusability"),(0,a.kt)("li",{parentName:"ul"},"Understandability")),(0,a.kt)("p",null,"Whereas low cohesion is associated with undesirable traits such as being difficult to maintain, difficult to test, difficult to reuse, and even difficult to understand."),(0,a.kt)("h2",{id:"separate-the-code-that-uses-an-object-from-code-that-creates-the-object"},"Separate the code that uses an object from code that creates the object"),(0,a.kt)("p",null,"This is done by the use of factories, so that the code that uses an object does not need to know how to create that object."),(0,a.kt)("h2",{id:"apply-the-once-and-only-once-rule"},"Apply the once and only once rule"),(0,a.kt)("p",null,"If there is a rule on how to do things, then only implement that rule once. Therefore write a method for the rule that can be called where required. Duplication is bad because if it needs to be changed it will have to be changed in several places, not just one. Hence different parts of the code would be coupled to each other where the duplication exists. Also known as \u2018Don\u2019t Repeat Yourself\u2019 (DRY)."),(0,a.kt)("h2",{id:"open-closed-principle-ocp"},"Open Closed Principle (OCP)"),(0,a.kt)("p",null,"Software should be designed so that you can extend its capabilities without changing it. I.e. when a new requirement arises, this should be able to be implemented by extending (e.g. adding new classes) the software rather than modifying existing methods or classes."),(0,a.kt)("h2",{id:"dependency-inversion-principle-dip"},"Dependency Inversion Principle (DIP)"),(0,a.kt)("p",null,"The dependency inversion principle states that high level modules should not depend on low level modules, instead both should depend on abstractions."),(0,a.kt)("h2",{id:"the-liskov-substitution-principle-lsp"},"The Liskov Substitution Principle (LSP)"),(0,a.kt)("p",null,"A class deriving from a base class should support all the behaviour of the base class, hence both base class and derived classes can be used interchangeably. An object that uses a reference passed to it should not care if that reference is to the base class or the derived class. This implies that subtypes should not add new public methods."),(0,a.kt)("p",null,"LSP helps us to have well designed inheritance. If your subclass cannot be substituted for the base class which it inherits from, without causing problems (for example methods with the same name but different signatures) the your design does not satisfy LSP. In this case, consider alternative approaches such as using delegation or composition (i.e. the old subclass will hold an instance of the base class)."),(0,a.kt)("h2",{id:"ensure-that-your-code-is-readable"},"Ensure that your code is readable"),(0,a.kt)("p",null,"By \u201cprogramming by intention\u201d and by using intention-revealing names. Give methods and attributes \u201cintention-revealing names\u201d hence calls to methods are named in a way that clearly describes their intended use."),(0,a.kt)("h2",{id:"consider-the-testability-of-your-code-before-coding-it"},"Consider the testability of your code before coding it"),(0,a.kt)("p",null,"Testable code is code that can be tested in isolation without having to worry about how it is coupled to other modules or entities. Testable code is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"More cohesive because the code is only about one thing"),(0,a.kt)("li",{parentName:"ul"},"More loosely coupled because there are minimal interactions to worry about")),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,"For a good list of design principles see:",(0,a.kt)("a",{parentName:"p",href:"http://mmiika.wordpress.com/oo-design-principles/"},"http://mmiika.wordpress.com/oo-design-principles/")),(0,a.kt)("p",null,"Note the five foundational principles that provide the acronym SOLID."))}p.isMDXComponent=!0}}]);