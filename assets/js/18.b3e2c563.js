(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{177:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking","aria-hidden":"true"}},[t._v("#")]),t._v(" tree-shaking")]),t._v(" "),a("p",[t._v("tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。")]),t._v(" "),a("p",[t._v("就像一棵树，对这棵树进行摇晃，枯死的叶子落下，只留下绿色的叶子。")]),t._v(" "),a("p",[t._v("这是webpack对代码打包的优化手段。")]),t._v(" "),a("p",[t._v("要使用这个功能必须依赖于"),a("code",[t._v("ESModule")]),t._v("的语法。")]),t._v(" "),a("p",[t._v("此功能自动在"),a("code",[t._v("mode: production")]),t._v("下使用。")]),t._v(" "),a("h2",{attrs:{id:"配置-sideeffects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-sideeffects","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 sideEffects")]),t._v(" "),a("p",[t._v("将文件标记为“无副作用”，通俗来说就是标记一些文件告诉webpack那些文件不需要做tree-shaking。")]),t._v(" "),a("p",[t._v('通过 package.json 的 "sideEffects" 属性，来进行标记。')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sideEffects"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/polyfill"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.scss"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("意思为将 'babel-polyfill' 以及所有的SCSS/CSS文件排除在 tree-shaking 的范围外。")]),t._v(" "),a("p",[t._v("因为 'babel-polyfill' 是对ES6一些浏览器没有实现的新特性进行polyfill， 自动运行， 不需要tree-shaking。")])])}],!1,null,null,null);n.options.__file="tree-shaking.md";s.default=n.exports}}]);