
'use strict';

$(function(){
    (function init () {
        var linkArr = ["portfolio/Todo list/index.html",
                        "portfolio/RandomQuoteMachine/index.html",
                        "portfolio/Wikipedia Viewer/index.html",
                        "portfolio/LocalWeather/index.html",
                        "portfolio/eleme/index.html",
                        "portfolio/Music/index.html"];
        for(let i = 0;i<linkArr.length;i++) {
            $(".future_ui__piece").eq(i).on("click",function () {
                window.open(linkArr[i],"_blank");
            });
            console.log(i);
        };
    }) ();
})