webpackJsonp([6],{"8Lk/":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("Dd8w"),n=s.n(e),l=s("NYxO"),o=s("5zc9"),a=s("qwAB"),r=s("y/jF"),c=s("9Wym"),h={mixins:[s("F4+m").a],props:{rankList:{}},data:function(){return{songs:[]}},methods:n()({},Object(l.b)(["randomPlay","selectPlay"]),{goBack:function(){this.$router.back()},_setHeight:function(){this.imgHeight=this.$refs["bg-img"].clientHeight,this.listHeight=document.documentElement.clientHeight-this.$refs["bg-img"].clientHeight,this.$refs.list.style.height=this.listHeight+"px"},randomPlayAll:function(){this.randomPlay({list:this.topList})},select:function(t,i){this.selectPlay({list:this.topList,index:i})},handlePlaylist:function(){var t=this,i=void 0;i=this.playlist.length>0?"60px":"",this.$nextTick(function(){t.$refs.list.style.paddingBottom=i,t.$refs.scroll.refresh()})}}),computed:n()({},Object(l.c)(["topList"]),{bgImg:function(){return"background: url('"+this.rankList.picUrl+"') no-repeat;\n              backgroundSize: 100% 100%"}}),mounted:function(){if(!this.topList.length)return this.$router.back(),!1;this._setHeight()},components:{MusicList:o.a,Scroll:a.a,loading:r.a,list:c.a}},d={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"slide"}},[t.topList.length>0?s("div",{attrs:{id:"rankList"}},[s("i",{staticClass:"iconfont icon-back",on:{click:t.goBack}}),t._v(" "),s("div",{ref:"bg-img",style:t.bgImg,attrs:{id:"bgImg"}},[s("div",{attrs:{id:"mask"}},[s("div",{attrs:{id:"randomPlayAll"},on:{click:function(i){i.stopPropagation(),t.randomPlayAll(i)}}},[s("i",{staticClass:"iconfont icon-playfill"}),t._v(" "),s("span",[t._v("随机播放全部")])])])]),t._v(" "),s("div",{ref:"list",attrs:{id:"list"}},[s("Scroll",{ref:"scroll",attrs:{listen:!0}},[t.topList.length>0?s("list",{attrs:{songs:t.topList,isRank:!0},on:{select:t.select}}):t._e()],1)],1),t._v(" "),s("loading",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length>0,expression:"!topList.length > 0"}]})],1):t._e()])},staticRenderFns:[]};var g=s("VU/8")(h,d,!1,function(t){s("OGHF")},"data-v-2f0fabf8",null);i.default=g.exports},OGHF:function(t,i){}});
//# sourceMappingURL=6.6af663b70a83c01d0138.js.map