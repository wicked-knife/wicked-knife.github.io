webpackJsonp([5],{N2Ln:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("Dd8w"),s=o.n(r),i=o("2X+S"),n=o("n9kR"),c=o("vhoT"),a=o("qwAB"),h=o("F4+m"),l=o("62KO"),f=o("Gak4");function u(){return Object(f.a)({url:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",params:{g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,_:1518414659356},callback:"jsonpCallback"})}var y=o("fdFc"),d=o("NYxO"),m=(h.a,h.c,s()({},Object(d.c)(["searchHistory"])),s()({},Object(d.b)(["deleteFromHistory","emptySearchHistory"]),{_getHotKey:function(){var e=this;u().then(function(t){e.hotKey=t.data.hotkey.slice(0,10)})},_selectHotKey:function(e){e=Object(y.c)(e),this.$refs.search.setQuery(e)},deleteOne:function(e){this.deleteFromHistory(e)},showConfirm:function(){this.confirmShow=!0},onConfirm:function(){this.emptySearchHistory()},onCancel:function(){this.confirmShow=!1},pickHistory:function(e){this.$refs.search.setQuery(e)},handlePlaylist:function(){var e=this;if(this.searchHistory.length){var t=void 0;t=this.playlist.length?"60px":"",setTimeout(function(){e.$refs["fix-hook"].style["padding-bottom"]=t,e.$refs.scroll.refresh()},500)}},fresh:function(){this.searchHistory.length&&this.$refs.scroll.refresh()}}),i.a,n.a,c.a,l.a,a.a,{mixins:[h.a,h.c],data:function(){return{hotKey:[],confirmShow:!1}},computed:s()({},Object(d.c)(["searchHistory"])),methods:s()({},Object(d.b)(["deleteFromHistory","emptySearchHistory"]),{_getHotKey:function(){var e=this;u().then(function(t){e.hotKey=t.data.hotkey.slice(0,10)})},_selectHotKey:function(e){e=Object(y.c)(e),this.$refs.search.setQuery(e)},deleteOne:function(e){this.deleteFromHistory(e)},showConfirm:function(){this.confirmShow=!0},onConfirm:function(){this.emptySearchHistory()},onCancel:function(){this.confirmShow=!1},pickHistory:function(e){this.$refs.search.setQuery(e)},handlePlaylist:function(){var e=this;if(this.searchHistory.length){var t=void 0;t=this.playlist.length?"60px":"",setTimeout(function(){e.$refs["fix-hook"].style["padding-bottom"]=t,e.$refs.scroll.refresh()},500)}},fresh:function(){this.searchHistory.length&&this.$refs.scroll.refresh()}}),components:{SearchBox:i.a,Suggest:n.a,SearchList:c.a,Confirm:l.a,scroll:a.a},created:function(){this._getHotKey()},mounted:function(){var e=this;this.searchHistory.length&&setTimeout(function(){e.$refs["scroll-warpper"].style.height=document.documentElement.clientHeight-296+"px"},1e3)}}),v={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.hotKey.length?o("div",{attrs:{id:"search"},on:{touchstart:e.fresh}},[o("search-box",{ref:"search",on:{queryChange:e.queryChange}}),e._v(" "),o("div",[e.hotKey.length?o("div",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],attrs:{id:"hotKey"}},[o("h3",{attrs:{id:"hotKey-title"}},[e._v("热门搜索")]),e._v(" "),o("ul",e._l(e.hotKey,function(t,r){return o("li",{key:r,staticClass:"hotKey-item",on:{click:function(o){return e._selectHotKey(t.k)}}},[e._v("\n          "+e._s(t.k))])}),0)]):e._e(),e._v(" "),e.searchHistory.length?o("div",{directives:[{name:"show",rawName:"v-show",value:e.searchHistory.length&&!e.query,expression:"searchHistory.length && !query"}],ref:"scroll-warpper",attrs:{id:"scroll-warpper"}},[o("scroll",{ref:"scroll",attrs:{data:e.searchHistory}},[o("div",{ref:"fix-hook",attrs:{id:"search-history"}},[o("h3",{attrs:{id:"search-history-title"}},[o("span",[e._v("搜索历史")]),e._v(" "),o("i",{staticClass:"iconfont icon-delete",on:{click:function(t){return t.stopPropagation(),e.showConfirm(t)}}})]),e._v(" "),o("search-list",{on:{delete:e.deleteOne,select:e.pickHistory}})],1)])],1):e._e()]),e._v(" "),o("suggest",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],attrs:{query:e.query},on:{select:e.saveSearch}}),e._v(" "),o("Confirm",{attrs:{title:"是否清空搜索历史"},on:{"on-cancel":e.onCancel,"on-confirm":e.onConfirm},model:{value:e.confirmShow,callback:function(t){e.confirmShow=t},expression:"confirmShow"}}),e._v(" "),o("router-view")],1):e._e()},staticRenderFns:[]};var p=o("VU/8")(m,v,!1,function(e){o("jBvW")},"data-v-f447227a",null);t.default=p.exports},jBvW:function(e,t){}});
//# sourceMappingURL=5.97b4e052d510b0450a92.js.map