webpackJsonp([4,6],{"8Lk/":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("Dd8w"),e=i.n(n),a=i("NYxO"),r=i("5zc9"),o=i("qwAB"),l=i("y/jF"),c=i("9Wym"),u={mixins:[i("F4+m").a],props:{rankList:{}},data:function(){return{songs:[]}},methods:e()({},Object(a.b)(["randomPlay","selectPlay"]),{goBack:function(){this.$router.back()},_setHeight:function(){this.imgHeight=this.$refs["bg-img"].clientHeight,this.listHeight=document.documentElement.clientHeight-this.$refs["bg-img"].clientHeight,this.$refs.list.style.height=this.listHeight+"px"},randomPlayAll:function(){this.randomPlay({list:this.topList})},select:function(t,s){this.selectPlay({list:this.topList,index:s})},handlePlaylist:function(){var t=this,s=void 0;s=this.playlist.length>0?"60px":"",this.$nextTick(function(){t.$refs.list.style.paddingBottom=s,t.$refs.scroll.refresh()})}}),computed:e()({},Object(a.c)(["topList"]),{bgImg:function(){return"background: url('"+this.rankList.picUrl+"') no-repeat;\n              backgroundSize: 100% 100%"}}),mounted:function(){if(!this.topList.length)return this.$router.back(),!1;this._setHeight()},components:{MusicList:r.a,Scroll:o.a,loading:l.a,list:c.a}},f={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"slide"}},[t.topList.length>0?i("div",{attrs:{id:"rankList"}},[i("i",{staticClass:"iconfont icon-back",on:{click:t.goBack}}),t._v(" "),i("div",{ref:"bg-img",style:t.bgImg,attrs:{id:"bgImg"}},[i("div",{attrs:{id:"mask"}},[i("div",{attrs:{id:"randomPlayAll"},on:{click:function(s){s.stopPropagation(),t.randomPlayAll(s)}}},[i("i",{staticClass:"iconfont icon-playfill"}),t._v(" "),i("span",[t._v("随机播放全部")])])])]),t._v(" "),i("div",{ref:"list",attrs:{id:"list"}},[i("Scroll",{ref:"scroll",attrs:{listen:!0}},[t.topList.length>0?i("list",{attrs:{songs:t.topList,isRank:!0},on:{select:t.select}}):t._e()],1)],1),t._v(" "),i("loading",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length>0,expression:"!topList.length > 0"}]})],1):t._e()])},staticRenderFns:[]};var d=i("VU/8")(u,f,!1,function(t){i("OGHF")},"data-v-2f0fabf8",null);s.default=d.exports},DqCn:function(t,s){},OGHF:function(t,s){},efbk:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("Dd8w"),e=i.n(n),a=i("Gak4");var r=i("qwAB"),o=i("NYxO"),l=i("8Lk/");var c=i("PvFA"),u={mixins:[i("F4+m").a],data:function(){return{rankLists:[],currentList:{}}},created:function(){this._getRank()},methods:e()({},Object(o.d)({SET_TOPLIST:"SET_TOPLIST"}),{_getRank:function(){var t=this;Object(a.a)({url:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",params:{g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,_:1518333056826},callback:"jsonpCallback"}).then(function(s){t.rankLists=s.data.topList})},_selectRank:function(t){var s,i,n=this;this.currentList=t,(s=t.id,i={g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:s,_:1518349779807},Object(a.a)({url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",params:i,callback:"jsonpCallback"})).then(function(s){var i=s.songlist.map(function(t){return t.data}),e=Object(c.a)(i);n.SET_TOPLIST(e),n.$router.push("/rank/"+t.id)})},handlePlaylist:function(){var t=this,s=void 0;s=this.playlist.length>0?"60px":"",setTimeout(function(){t.$refs.rank.style.bottom=s,t.$refs.scroll.refresh()},500)}}),computed:e()({},Object(o.c)(["topList"])),components:{scroll:r.a,RankList:l.default}},f={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.rankLists.length>0?i("div",{ref:"rank",attrs:{id:"rank"}},[i("scroll",{ref:"scroll"},[i("ul",t._l(t.rankLists,function(s,n){return t.rankLists.length>0?i("li",{key:n,staticClass:"rank-item",on:{click:function(i){i.stopPropagation(),t._selectRank(s)}}},[i("div",{staticClass:"item-left"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.picUrl,expression:"list.picUrl"}],staticClass:"list-img"})]),t._v(" "),i("div",{staticClass:"item-right"},[i("span",[t._v("1."+t._s(s.songList[0].songname)+"-"+t._s(s.songList[0].singername))]),t._v(" "),i("span",[t._v("2."+t._s(s.songList[1].songname)+"-"+t._s(s.songList[1].singername))]),t._v(" "),i("span",[t._v("3."+t._s(s.songList[2].songname)+"-"+t._s(s.songList[2].singername))])])]):t._e()}))]),t._v(" "),t.rankLists.length>0?i("router-view",{attrs:{rankList:t.currentList}}):t._e()],1):t._e()},staticRenderFns:[]};var d=i("VU/8")(u,f,!1,function(t){i("DqCn")},"data-v-36d9b621",null);s.default=d.exports}});
//# sourceMappingURL=4.eb71807e65b9120d4049.js.map