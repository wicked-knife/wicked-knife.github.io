webpackJsonp([0],{"5zc9":function(t,i,s){"use strict";var e=s("Dd8w"),n=s.n(e),l=s("qwAB"),o=s("9Wym"),r=s("y/jF"),a=s("NYxO"),c=s("F4+m"),g=(c.a,n()({bgImg:function(){return"background: url('"+this.singer.avatar+"') no-repeat;\n              backgroundSize: 100%"}},Object(a.c)(["playlist","currentIndex"])),l.a,o.a,r.a,n()({},Object(a.b)(["selectPlay","randomPlay"]),{_setHeight:function(){this.imgHeight=this.$refs["bg-img"].clientHeight,this.listHeight=document.documentElement.clientHeight-this.$refs["bg-img"].clientHeight,this.$refs.list.style.height=this.listHeight+"px"},scroll:function(t){},select:function(t,i){this.selectPlay({list:this.songs,index:i})},randomPlayAll:function(){this.randomPlay({list:this.songs})},handlePlaylist:function(){var t=this,i=void 0;i=this.playlist.length>0?"60px":"",this.$refs.list.style.paddingBottom=i,this.$nextTick(function(){t.$refs.scroll.refresh()})}}),{mixins:[c.a],props:{singer:{},songs:{}},data:function(){return{imgHeight:0,listHeight:0}},computed:n()({bgImg:function(){return"background: url('"+this.singer.avatar+"') no-repeat;\n              backgroundSize: 100%"}},Object(a.c)(["playlist","currentIndex"])),components:{Scroll:l.a,list:o.a,loading:r.a},mounted:function(){this._setHeight()},methods:n()({},Object(a.b)(["selectPlay","randomPlay"]),{_setHeight:function(){this.imgHeight=this.$refs["bg-img"].clientHeight,this.listHeight=document.documentElement.clientHeight-this.$refs["bg-img"].clientHeight,this.$refs.list.style.height=this.listHeight+"px"},scroll:function(t){},select:function(t,i){this.selectPlay({list:this.songs,index:i})},randomPlayAll:function(){this.randomPlay({list:this.songs})},handlePlaylist:function(){var t=this,i=void 0;i=this.playlist.length>0?"60px":"",this.$refs.list.style.paddingBottom=i,this.$nextTick(function(){t.$refs.scroll.refresh()})}})}),h={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"music-list"}},[s("div",{ref:"bg-img",style:t.bgImg,attrs:{id:"bgImg"}},[s("div",{attrs:{id:"mask"}},[s("div",{attrs:{id:"randomPlayAll"},on:{click:function(i){return i.stopPropagation(),t.randomPlayAll(i)}}},[s("i",{staticClass:"iconfont icon-playfill"}),t._v(" "),s("span",[t._v("随机播放全部")])])])]),t._v(" "),s("div",{ref:"list",attrs:{id:"list"}},[s("Scroll",{ref:"scroll",attrs:{listen:!0},on:{scroll:t.scroll}},[t.songs.length?s("list",{attrs:{songs:t.songs},on:{select:t.select}}):t._e()],1),t._v(" "),s("loading",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}]})],1)])},staticRenderFns:[]};var d=s("VU/8")(g,h,!1,function(t){s("rtfJ")},"data-v-2e605d06",null);i.a=d.exports},rtfJ:function(t,i){}});
//# sourceMappingURL=0.2e33e6ae463ded05b70c.js.map