
'use strict';
$(function(){
    function getQuote(){
        $.ajax({
            url: 'https://sslapi.hitokoto.cn/?encode=json',
            type: 'POST',
            dataType: 'json',
            success:function(data){
                writeIn(data);
            },
            error:function(){
                alert("抱歉，数据获取失败！");
            }
        })
    };

    $("#new_quote").on("click",function(){
        getQuote();
        random_color();
    });

    function writeIn(data){
        $("#quote").text(data.hitokoto);
        $("#author").text(data.from);
    };

    function random_color(){
        var color = "rgb("+(1+Math.floor(Math.random()*244))+","
        +(1+Math.floor(Math.random()*244))+","
        +(1+Math.floor(Math.random()*244))+")";
        $("body").css("backgroundColor",color);
        $("#container").css({"color":color});
        $("#new_quote").css("background",color);
    }
})
