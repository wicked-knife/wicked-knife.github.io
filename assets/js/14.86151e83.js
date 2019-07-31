(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{173:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"处理javascript文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理javascript文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理JavaScript文件")]),t._v(" "),a("p",[t._v("webpack 默认支持JavaScript文件文件的模块化。即可以直接使用"),a("code",[t._v("commonjs")]),t._v("或"),a("code",[t._v("ESModule")]),t._v("的语法进行JS模块的导入导出。")]),t._v(" "),a("h2",{attrs:{id:"es6-语法编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-语法编译","aria-hidden":"true"}},[t._v("#")]),t._v(" ES6+语法编译")]),t._v(" "),a("p",[t._v("很多时候项目需要使用ES6的语法。如"),a("code",[t._v("箭头函数")]),t._v("。webpack 默认只支持JS文件的模块化，但是不会转化ES6的语法，为了能够使项目能够在各大浏览器上运行，有必要将ES6语法编译成ES5的语法。")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("babel")]),t._v("进行ES6到ES5的编译。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("core @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("preset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("env webpack\n")])])]),a("p",[t._v("在"),a("code",[t._v("webpack.common.js")]),t._v("中作如下配置:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),t._v("\n      use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("exclude")]),t._v(": 指不对node_modules目录下的js文件进行编译")]),t._v(" "),a("p",[t._v("创建"),a("code",[t._v(".babelrc")]),t._v("文件对babel进行配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样配置用来指定ES6编译后的运行环境。")]),t._v(" "),a("h2",{attrs:{id:"es6语法polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6语法polyfill","aria-hidden":"true"}},[t._v("#")]),t._v(" ES6语法polyfill")]),t._v(" "),a("p",[t._v("通过polyfill我们可以放心使用ES6中新增的特性。如"),a("code",[t._v("Promise")]),t._v(", "),a("code",[t._v("WeakMap")]),t._v("以及数组或对象上的一些扩展方法。")]),t._v(" "),a("p",[t._v("安装"),a("code",[t._v("babel-polyfill")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("polyfill core"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("js\n")])])]),a("p",[t._v("在"),a("code",[t._v(".babelrc")]),t._v("进行如下配置:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"useBuiltIns"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"usage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("useBuiltIns")]),t._v(": 指只对项目中使用到的 ES6 新特性做 polyfill ，这样可以大大减少打包后的代码体积。\n"),a("code",[t._v("corejs")]),t._v("：指定corejs的版本。不配置此字段打包会报错，以后可能会优化。")])])}],!1,null,null,null);s.default=e.exports}}]);