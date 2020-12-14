(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e,n,s){"use strict";s.r(n),s.d(n,"frontMatter",(function(){return r})),s.d(n,"metadata",(function(){return l})),s.d(n,"rightToc",(function(){return d})),s.d(n,"default",(function(){return c}));var t=s(2),i=s(6),a=(s(0),s(91)),o=s(92),r={id:"value-slides",title:"Value Slides"},l={unversionedId:"value-slides",id:"value-slides",isDocsHomePage:!1,title:"Value Slides",description:"Collection of components for use with value slides.",source:"@site/docs/value-slides.md",slug:"/value-slides",permalink:"/docs/value-slides",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/value-slides.md",version:"current",sidebar:"someSidebar",previous:{title:"Text Inputs",permalink:"/docs/text-inputs"},next:{title:"Powered by MDX",permalink:"/docs/mdx"}},d=[{value:"Parallax slides",id:"parallax-slides",children:[{value:"Demo",id:"demo",children:[]},{value:"Usage",id:"usage",children:[]}]}],u={rightToc:d};function c(e){var n=e.components,s=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,s,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Collection of components for use with value slides."),Object(a.b)("h2",{id:"parallax-slides"},"Parallax slides"),Object(a.b)("p",null,"Component that parallaxes images based on their current scroll position"),Object(a.b)("h3",{id:"demo"},"Demo"),Object(a.b)("iframe",{src:Object(o.a)("/video/parallax-swiper-demo.webm"),autoPlay:!0,loop:!0,width:"292",height:"633",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"To achieve this effect the images used in the slides need to be separated into a single background image, and any number of foreground images.\nThe background image will remain static and move at the same speed as the scrolling/swiping.\nThe foreground images will be positioned absolutely at their base position and then translate their\nX position based on the parameters passed.\nSlides must follow this model:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"{\n    title: String,\n    description: String,\n    backgroundImage: Image.source,\n    overlayImages: [\n      {\n        uri: Image.source,\n        basePosition: {\n            top: Number?,\n            right: Number?,\n            bottom: Number?,\n            right: Number?,\n        },\n        translateMax: Number,\n      },\n    ],\n  }\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'const SCREEN_WIDTH = Dimensions.get("window")?.width;\nconst MAX_OVERLAY_TRANSLATE_X = -58;\nconst SLIDES = [\n    {\n        title: "Take detailed Surveys",\n        description: `In AnaAudit, we survey you on a\\nnumber of different and complex\\ncases, often based on real-life\\npatient scenarios`,\n        backgroundImage: require("../assets/images/slide-1-background.png"),\n        overlayImages: [\n            {\n                uri: require("../assets/images/slide-1-component-1.png"),\n                basePosition: { bottom: 16, right: 46 },\n                translateMax: MAX_OVERLAY_TRANSLATE_X,\n            },\n            {\n                uri: require("../assets/images/slide-1-component-2.png"),\n                basePosition: { top: 46, left: 17 },\n                translateMax: -MAX_OVERLAY_TRANSLATE_X,\n            },\n        ],\n    },\n    {\n        title: "Join our community",\n        description: `Join our growing community of\\naccredited anaesthetists.\\nThrough our verification process,\\nwe ensure that each survey result\\nis completed by a verified medical\\nprofessional`,\n        backgroundImage: require("../assets/images/slide-2-background.png"),\n        overlayImages: [\n            {\n                uri: require("../assets/images/slide-2-component-1.png"),\n                basePosition: { bottom: 44, right: 32 },\n                translateMax: MAX_OVERLAY_TRANSLATE_X,\n            },\n            {\n                uri: require("../assets/images/slide-2-component-2.png"),\n                basePosition: { top: 0, left: 85 },\n                translateMax: -MAX_OVERLAY_TRANSLATE_X,\n            },\n        ],\n    },\n    {\n        title: "View survey results",\n        description: `Find out how you compare with\\nother anaesthetists. See what\\ntechniques, procedures and\\nmedications are being used today\\nby your peers`,\n        backgroundImage: require("../assets/images/slide-3-background.png"),\n        overlayImages: [\n            {\n                uri: require("../assets/images/slide-3-component-1.png"),\n                basePosition: { bottom: 0, right: 29 },\n                translateMax: MAX_OVERLAY_TRANSLATE_X,\n            },\n            {\n                uri: require("../assets/images/slide-3-component-2.png"),\n                basePosition: { bottom: 0, left: 0 },\n                translateMax: -MAX_OVERLAY_TRANSLATE_X,\n            },\n        ],\n    },\n];\n\nconst ValueSlides = ({ navigation }) => {\n    const swiperRef = useRef();\n    const [slideIndex, setSlideIndex] = useState(0);\n\n    const onNextPressed = () => {\n        if (slideIndex < SLIDES?.length - 1) {\n            setSlideIndex(slideIndex + 1);\n        } else {\n            setSlideIndex(0);\n        }\n    };\n\n    return (\n        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>\n            <ValueSlideParallaxSwiper slides={SLIDES} index={slideIndex} onIndexChange={setSlideIndex} />\n            <BlockButton text={"Next"} onPress={() => onNextPressed()} containerStyle={styles.nextButton} />\n        </SafeAreaView>\n    );\n};\n')),Object(a.b)("hr",null))}c.isMDXComponent=!0}}]);