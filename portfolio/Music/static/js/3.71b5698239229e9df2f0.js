webpackJsonp([3,1],{"5IYT":function(t,s){},lEJ1:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),n=i.n(e),r=i("NYxO"),o=i("Gak4");var c=i("PvFA"),a=i("5zc9"),h={data:function(){return{songs:{}}},methods:{goBack:function(){this.$router.back()},_getSingerList:function(t){var s=this;this.singer.id?function(t){var s={g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:30,songstatus:1};return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",s,"jsonpCallback")}(t).then(function(t){s.songs=Object(c.c)(t.data.list)}):this.$router.push("/singer")}},computed:n()({},Object(r.c)(["singer"])),created:function(){this._getSingerList(this.singer.id)},components:{MusicList:a.a}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("transition",{attrs:{name:"slide"}},[s("div",{attrs:{id:"singer-detail"}},[s("i",{staticClass:"iconfont icon-back",on:{click:this.goBack}}),this._v(" "),this.singer.avatar&&this.songs.length?s("music-list",{attrs:{singer:this.singer,songs:this.songs}}):this._e()],1)])},staticRenderFns:[]};var u=i("VU/8")(h,l,!1,function(t){i("yq+B")},"data-v-54fd8a2a",null);s.default=u.exports},wATI:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),n=i.n(e),r=i("Gak4");var o=i("qwAB"),c=i("lEJ1"),a=i("NYxO"),h={mixins:[i("F4+m").a],data:function(){return{singerList:[],shortcutTop:0,shortcutBottom:0,shortcutOffset:0,currentY:0}},components:{scroll:o.a,singerDetail:c.default},computed:{fixedSingerlist:function(){var t=this.hotSingerlist,s=this.sortedSingerlist;return s.unshift(t),s.filter(function(t,s){return 0!==t.items.length})},hotSingerlist:function(){var t={title:"热门",items:[]};return this.singerList.filter(function(t,s){return s<10}).forEach(function(s,i){var e={};e.name=s.Fsinger_name,e.avatar="http://y.gtimg.cn/music/photo_new/T001R300x300M000"+s.Fsinger_mid+".jpg?max_age=2592000",e.id=s.Fsinger_mid,t.items.push(e)}),t},sortedSingerlist:function(){var t=[];return"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(function(s,i){var e={};e.title=s,e.items=[],t.push(e)}),this.singerList.forEach(function(s,i){t.forEach(function(t,i){if(s.Findex===t.title){var e={};e.name=s.Fsinger_name,e.avatar="http://y.gtimg.cn/music/photo_new/T001R300x300M000"+s.Fsinger_mid+".jpg?max_age=2592000",e.id=s.Fsinger_mid,t.items.push(e)}})}),t},shortcutList:function(){return this.fixedSingerlist.map(function(t){return t.title.substring(0,1)})},singerListTop:function(){var t=this,s=[0],i=0;return this.$nextTick(function(){t.$refs["scroll-hook"].forEach(function(t,e){i+=t.clientHeight,s.push(i)})}),s},currentIndex:function(){var t=0,s=this.currentY;if(this.shortcutOffset){var i=this.shortcutOffset-this.shortcutTop;t=Math.floor(i/18)}else t=0;for(var e=0;e<this.singerListTop.length-1;e++)s<this.singerListTop[e+1]&&s>this.singerListTop[e]&&(t=e);return 0===s&&(t=0),t}},created:function(){this._getSinger()},mounted:function(){var t=this;this.$nextTick(function(){t.shortcutTop=t.$refs["shortcut-hook"].offsetTop,setTimeout(function(){t.shortcutBottom=t.$refs["shortcut-hook"].clientHeight+t.$refs["shortcut-hook"].offsetTop},500)})},methods:n()({_getSinger:function(){var t=this;Object(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",{channel:"singer",key:"all_all_all",g_tk:1858198544,format:"jsonp",outCharset:"utf-8",platform:"yqq",page:"list",hostUin:0,inCharset:"utf8",notice:0,needNewCode:0,pagesize:100,pagenum:1},"jsonpCallback").then(function(s){t.singerList=s.data.list})},_moveScrollSinger:function(t){var s=t.touches[0].pageY;s<this.shortcutTop?s=this.shortcutTop:s>this.shortcutBottom-10&&(s=this.shortcutBottom-10),this.shortcutOffset=s,this.$refs.scroll.scrollToElement(this.$refs["scroll-hook"][this.currentIndex])},_clickScrollSinger:function(t,s){this.shortcutOffset=t.pageY,this.$refs.scroll.scrollToElement(this.$refs["scroll-hook"][s],300)},scroll:function(t){this.currentY=Math.abs(Math.floor(t.y))},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},handlePlaylist:function(){var t=this,s=void 0,i=void 0;s=this.playlist.length>0?"60px":"",i=this.playlist.length>0?"-30px":"0px",this.$refs.singer.style.bottom=s,this.$refs["shortcut-hook"].style["margin-top"]=i,this.shortcutTop=this.$refs["shortcut-hook"].offsetTop,this.shortcutBottom=this.$refs["shortcut-hook"].clientHeight+this.$refs["shortcut-hook"].offsetTop,this.$nextTick(function(){t.$refs.scroll.refresh()})}},Object(a.d)({setSinger:"SET_SINGER"}))},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{ref:"singer",attrs:{id:"singer"}},[i("scroll",{ref:"scroll",attrs:{listen:!0},on:{scroll:t.scroll}},[i("ul",t._l(t.fixedSingerlist,function(s,e){return t.fixedSingerlist.length>0?i("li",{key:e,ref:"scroll-hook",refInFor:!0,staticClass:"singer-group"},[i("h3",{staticClass:"group-name"},[t._v(t._s(s.title))]),t._v(" "),i("ul",t._l(s.items,function(e,n){return s?i("li",{key:n,staticClass:"singer",on:{click:function(s){t.selectSinger(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"singer.avatar"}],staticClass:"singer-avatar"}),t._v(" "),i("span",{staticClass:"singer-name"},[t._v(t._s(e.name))])]):t._e()}))]):t._e()}))]),t._v(" "),i("div",{ref:"shortcut-hook",attrs:{id:"shortcut-list-warpper"}},[i("ul",{attrs:{id:"shortcut-list"}},t._l(t.shortcutList,function(s,e){return t.shortcutList.length?i("li",{key:e,ref:"shortcut",refInFor:!0,staticClass:"shortcut",class:{active:t.currentIndex===e},on:{click:function(s){s.stopPropagation(),t._clickScrollSinger(s,e)},touchmove:function(s){s.stopPropagation(),s.preventDefault(),t._moveScrollSinger(s)}}},[t._v("\n          "+t._s(s)+"\n        ")]):t._e()}))]),t._v(" "),t.singerList.length?i("div",{attrs:{id:"fixed-title"}},[t._v(t._s(t.fixedSingerlist[t.currentIndex].title))]):t._e()],1),t._v(" "),t.singerList.length?i("router-view"):t._e()],1)},staticRenderFns:[]};var u=i("VU/8")(h,l,!1,function(t){i("5IYT")},"data-v-40f0010a",null);s.default=u.exports},"yq+B":function(t,s){}});
//# sourceMappingURL=3.71b5698239229e9df2f0.js.map