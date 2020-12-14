(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var i=n(2),o=n(6),a=(n(0),n(91)),l=n(92),r={id:"text-inputs",title:"Text Inputs"},s={unversionedId:"text-inputs",id:"text-inputs",isDocsHomePage:!1,title:"Text Inputs",description:"Common text input components",source:"@site/docs/text-inputs.md",slug:"/text-inputs",permalink:"/docs/text-inputs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/text-inputs.md",version:"current",sidebar:"someSidebar",previous:{title:"Buttons",permalink:"/docs/"},next:{title:"Value Slides",permalink:"/docs/value-slides"}},u=[{value:"Floating label input",id:"floating-label-input",children:[{value:"Demo",id:"demo",children:[]},{value:"Usage",id:"usage",children:[]}]}],c={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Common text input components"),Object(a.b)("h2",{id:"floating-label-input"},"Floating label input"),Object(a.b)("p",null,"Material Design inspired floating label input"),Object(a.b)("h3",{id:"demo"},"Demo"),Object(a.b)("iframe",{src:Object(l.a)("/video/floating-label-input-demo.webm"),autoPlay:!0,loop:!0,width:"292",height:"633",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'import React, { useState } from "react";\nimport { ScrollView, Image } from "react-native";\n\nimport FloatingLabelInput from "../../lib/inputs/FloatingLabelInput";\n\nconst Inputs = () => {\n    const [inputWithIconVal, setInputWithIconVal] = useState("");\n\n    return (\n        <ScrollView keyboardShouldPersistTaps="never" style={styles.container}>\n            <FloatingLabelInput\n                placeholder="Floating Label w/ right component"\n                value={inputWithIconVal}\n                onChangeText={setInputWithIconVal}\n                containerstyle={{ marginTop: 20 }}\n                InputRightComponent={() => (\n                    <Image\n                        source={require("../assets/images/calendar-ic.png")}\n                        style={{ alignSelf: "center", marginTop: 6 }}\n                    />\n                )}\n            />\n        </ScrollView>\n    );\n};\n')))}p.isMDXComponent=!0}}]);