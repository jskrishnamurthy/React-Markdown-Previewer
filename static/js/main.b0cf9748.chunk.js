(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(12)},12:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),o=n(6),s=n(5),i=n(1),l=n(7),c=n(0),d=n.n(c),u=n(10),m=n.n(u),h=n(2),f=n.n(h);n(17),n(18);f.a.setOptions({breaks:!0});var w=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={rawMarkupText:k,markedPreviewer:b},n.transformMarkdown=n.transformMarkdown.bind(Object(i.a)(n)),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"transformMarkdown",value:function(e){var t=f()(e.target.value,{sanitize:!0});this.setState({rawMarkupText:e.target.value,markedPreviewer:t})}},{key:"render",value:function(){return d.a.createElement("div",{class:"form-group"},d.a.createElement("div",null,d.a.createElement("h3",{className:"text-center"},"Enter Markdown"),d.a.createElement("textarea",{class:"form-control",rows:"5",id:"editor",value:this.state.rawMarkupText,onChange:this.transformMarkdown})),d.a.createElement("div",null,d.a.createElement("h3",{className:"text-center"},"Result"),d.a.createElement("div",{id:"preview",className:"well",dangerouslySetInnerHTML:{__html:this.state.markedPreviewer}})))}}]),t}(d.a.Component),k="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",b=f()(k,{sanitize:!0}),v=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"container"},d.a.createElement("h1",{className:"text-center"},"Markdown Previewer"),d.a.createElement(w,null))}}]),t}(d.a.Component);m.a.render(d.a.createElement(v,null),document.getElementById("root"))},17:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b0cf9748.chunk.js.map