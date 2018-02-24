
'use strict';
;$(function(){
    function getData () {
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            type: 'POST',
            dataType: 'jsonp',//注意！！！！跨域请求数据使用jsonp！而不是json！
            data: {
                "action": "opensearch",
                "format": "json",
                "search": $("#search_input").val()
                },
            success:function(data){
                appendItem(data);
            },
            error:function(){
                console.log("失败了");
            }
        })
    };

    $("#random_item").on("click",function(){
        window.open("http://en.wikipedia.org/wiki/Special:Random","_blank");
    });

    $("#search_item").on("click",function(){
        $("#item_container").empty();
        getData ();
    });


    function appendItem (data) {
        for (let i = 0;i<data[1].length;i++) {
            var itemTemplate = $('<div class="item">'+
                                '<h3 class="item_title">'+data[1][i]+'</h3>'+
                                '<p class="item_desc">'+data[2][i]+'</p>'+
                                '</div>');
            $("#item_container").append(itemTemplate);
            itemTemplate.fadeIn();
            itemTemplate.on("click",function(){
                window.open(data[3][i],"_blank");
            });
        };
    };



})