webpackJsonp([1],{lEJ1:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s("Dd8w"),e=s.n(i),r=s("NYxO"),a=s("Gak4");function c(t){var n={g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:30,songstatus:1};return Object(a.a)({url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",params:n,callback:"jsonpCallback"})}var o=s("PvFA"),g=s("5zc9"),u=(e()({},Object(r.c)(["singer"])),g.a,{data:function(){return{songs:{}}},methods:{goBack:function(){this.$router.back()},_getSingerList:function(t){var n=this;this.singer.id?c(t).then(function(t){n.songs=Object(o.c)(t.data.list)}):this.$router.push("/singer")}},computed:e()({},Object(r.c)(["singer"])),created:function(){this._getSingerList(this.singer.id)},components:{MusicList:g.a}}),h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("div",{attrs:{id:"singer-detail"}},[n("i",{staticClass:"iconfont icon-back",on:{click:this.goBack}}),this._v(" "),this.singer.avatar&&this.songs.length?n("music-list",{attrs:{singer:this.singer,songs:this.songs}}):this._e()],1)])},staticRenderFns:[]};var l=s("VU/8")(u,h,!1,function(t){s("rZmb")},"data-v-4b5eb012",null);n.default=l.exports},rZmb:function(t,n){}});
//# sourceMappingURL=1.b5b8a2f2c7907ee0f63b.js.map