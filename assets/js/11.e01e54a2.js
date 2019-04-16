(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{174:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"项目初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目初始化","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目初始化")]),a._v(" "),t("p",[a._v("本笔记着重记录分析webpack中的一些复杂概念，对于一些简单配置不做讲解。")]),a._v(" "),t("h2",{attrs:{id:"_0-项目初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-项目初始化","aria-hidden":"true"}},[a._v("#")]),a._v(" (0) 项目初始化")]),a._v(" "),t("p",[a._v("使用npm快速初始化"),t("code",[a._v("package.json")]),a._v("文件。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("npm init "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("y\n")])])]),t("p",[a._v("安装webpack, webpack-cli。(webpack-cli主要用作本地项目中在终端能够直接使用"),t("code",[a._v("webpack")]),a._v("命令)")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("npm i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("D")]),a._v(" webpack webpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cli\n")])])]),t("h2",{attrs:{id:"_1-创建配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" (1) 创建配置文件")]),a._v(" "),t("p",[a._v("创建"),t("code",[a._v("webpack.common.js")]),a._v("文件，用作webpack配置文件的公共配置。并进行如下配置：")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("    module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        entry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./index.js'")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("意为将当前目录下index.js文件用作webpack打包的入口，webpack会从文件入口开始分析模块依赖（webpack中万物皆模块），并生成依赖图。\n使用对象键值对的形式进行配置打包后会自动根据键名生成打包好的文件。这样配置比较直观清晰。")]),a._v(" "),t("p",[a._v("在命令行中执行")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("webpack "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("config webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("common"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("js\n")])])]),t("p",[a._v("即可执行打包操作。"),t("code",[a._v("--config")]),a._v("参数用作指定webpack配置文件。默认为"),t("code",[a._v("webpack.config.js")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"_2-配置npm-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置npm-scripts","aria-hidden":"true"}},[a._v("#")]),a._v(" (2) 配置npm scripts")]),a._v(" "),t("p",[a._v("在项目"),t("code",[a._v("package.json")]),a._v("文件"),t("code",[a._v("scripts")]),a._v("字段进行如下配置:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bundle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack --config webpack.common.js"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("在命令行中直接执行"),t("code",[a._v("npm run bundle")]),a._v("即可进行打包操作。")])])}],!1,null,null,null);e.options.__file="init.md";s.default=e.exports}}]);