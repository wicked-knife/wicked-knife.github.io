
;'use strict';
$(function(){
    var $input_todo = $(".input_todo");
    var task_list = [];
    var task_count = 0;

    function submit_task(){
        $(".submit_todo").on("click",function(e){
            e.preventDefault();
            var new_todo = {};
            new_todo.index=task_count;
            task_count++;
            new_todo.content = $input_todo.val();
            if(!new_todo.content){
                return;
            };
            if (add_task(new_todo)) {
                render_task_list();
            };
            $input_todo.val("");
            refresh_task_list();
        });
    };

    function finish_task_item(){
        $(".item_box").on("click",".finish_task",function(){
            if(this.checked){
                $(this).parent().addClass('item-done');
            }else{
                $(this).parent().removeClass('item-done');
            }
        })
    };

    function delete_task(){
        $(".item_box").on("click",".delete",function(){
            if (confirm("确定删除吗？")) {
                var _this = $(this);
                var index = _this.parent().index();
                $(".item_box").find(".item").eq(index).remove();
                task_list.splice(index,1);
                refresh_task_list();
            };
        })
    };

    function delete_config(){
        //以后再写
    }

    function check_task_detail(){
        $(".item_box").on("click",".detail",function(){
            if ($("shadow_cover").index()!==-1) {
                return;
            };
            var _this = $(this);
            var index = _this.parent().index();
            shadow_cover_show(index);
            item_detail_box_click();
            updata_task(index);
            })
    }

    function updata_task(idx){
        $(".update_task").on("click",function(){
            var title = $(".item_detail_title").val();
            task_list[idx].content =  title;
            $(".task").eq(idx).text(title);
            var detail = $(".input_detail_content").val();
            task_list[idx].detail = detail;
            var date = $(".pick_date").val();
            task_list[idx].date =  date;
            refresh_task_list();
            $(".shadow_cover").trigger('click');
        })
    };


    function item_detail_box_click(){
        $(".shadow_cover").show().on("click",function(e){
            $(this).remove();
            return false;
        });
        $(".item_detail_box").on("click",function(e){
            e.stopPropagation();
        });
    }

    function shadow_cover_show(index){
        $(".item_box").append(render_mask_templet());
        $(".item_detail_title").val($(".task").eq(index).text());
        $(".input_detail_content").val(store.get("task_list")[index].detail);
        $(".pick_date").val(store.get("task_list")[index].date);
    }


    function add_task(task){    //将内容推入task_list
        task_list.push(task);
        refresh_task_list();
        return true;
    }

    function refresh_task_list(){       //刷新local storage
        store.set("task_list",task_list);
    }

    function render_task_list(){        //将新条目添加到页面中
        var new_item;
        // for(var i=0;i<task_list.length;i++){
            new_item = render_task_item(task_list[task_list.length-1]);
        // };
        $(".item_box").append(new_item);
       // new_item = render_task_item(task_list[task_list.length-1]);  //可改为，未发现bug

    }

    function render_mask_templet(){
        var mask_templet ='<div class="shadow_cover">'+
                        '<div class="item_detail_box clearfix">'+
                                '<input type="text" class="item_detail_title">'+
                                '<textarea class="input_detail_content">'+'</textarea>'+
                                '<p>'+'提醒时间'+'</p>'+
                                '<input type="date" class="pick_date">'+
                                '<button type="button" class="update_task">'+'更新'+'</button>'+
                            '</div>'+
                    '</div>';
        return $(mask_templet);
    }

    function render_task_item(data){        //创建一个新条目
        var item_model = '<div class="item clearfix">'+
               '<input type="checkbox" class="finish_task">'+
                '<span class="task">'+data.content+'</span>'+
                '<span class="detail">详细</span>'+
                '<span class="delete">删除</span>'+
                        '</div>';
        return $(item_model);
    }


    ;(function init(){
        delete_task();
        finish_task_item();
        submit_task();
        check_task_detail()
        task_list = store.get("task_list") || [] ;
        })();

})