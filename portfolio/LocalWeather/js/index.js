$(function () {
    mapObj = new AMap.Map('iCenter');
    mapObj.plugin('AMap.Geolocation', function () {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            maximumAge: 0, //定位结果缓存0毫秒，默认：0
            convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true, //显示定位按钮，默认：true
            buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        geolocation.getCityInfo( function (status , data) {
            render_location(data);
            getTemperature(data.city);
        });
        // geolocation.getCityInfo( function (status , data) {
        //     console.log(data);
            
        // })
        AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
        AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息

    });
    // mapObj.plugin('AMap.CitySearch', function () {
    //     citysearch = new AMap.CitySearch({

    //     });
    //     citysearch.getLocalCity(function (status , data) {
    //         console.log(data);
            
    //     })

    // })
    function getTemperature( city ) {
        $.ajax({
            url:"http://wthrcdn.etouch.cn/weather_mini",
            type:"POST",
            data:{
                city:city,
            },
            dataType:"jsonp",
            success: function(data) {
                if(data.desc !== "OK"){
                    alert("请输入正确的地名(如:长沙)");
                    return false;
                }
                render_temperature (data.data);
                render_icon(data.data);
            },
        });
    }

    function render_location (data) {
        $(".location_input").val(`${data.province}  ${data.city}`);
    }

    function render_temperature (data) {
        var temperature = parseInt(data.wendu);
        if(temperature < 0) {
            $(".temperature").css("font-size","210px");
        }else{
            $(".temperature").css("font-size","250px");
        }
        $(".temperature").text(data.wendu);
        $(".high_temperature").text(`${data.forecast[0].high}`);
        $(".low_temperature").text(`${data.forecast[0].low}`);
        $(".tomorrow").find(".next_temperature").text(`${data.forecast[1].high}${data.forecast[1].low}`);
        $(".tomorrow_tomorrow").find(".next_temperature").text(`${data.forecast[2].high}${data.forecast[2].low}`);
        $(".tomorrow").find(".next_weather").text(`${data.forecast[1].type}`);
        $(".tomorrow_tomorrow").find(".next_weather").text(`${data.forecast[2].type}`);
        $(".tip").text(data.ganmao);
    }

    function render_icon (data) {
        switch (data.forecast[0].type) {
            case "晴":
            $(".weather_icon").css({
                backgroundImage:"url('./images/sun.png')"
            });
            break;
            case "多云":
            $(".weather_icon").css({
                backgroundImage:"url('./images/cloudy.png')"
            });
            break;
            case "阴":
            $(".weather_icon").css({
                backgroundImage:"url('./images/more_cloud.png')"
            });
            break;
        }
        if ( data.forecast[0].type.indexOf("雪") != -1) {
            $(".weather_icon").css({
                backgroundImage:"url('./images/snow.png')"
            });
        }
        if ( data.forecast[0].type.indexOf("雨") != -1) {
            $(".weather_icon").css({
                backgroundImage:"url('./images/rain.png')"
            });
        }
    }

    (function render_date () {
    var today = get_date_after(),
        tomorrow = get_date_after(1),
        day_after_tomorrow = get_date_after(2);
        $(".today_date").text(today);
        $(".tomorrow").find(".next_date").text(tomorrow);
        $(".tomorrow_tomorrow").find(".next_date").text(day_after_tomorrow);
    })();

    function get_date_after (num=0) {
        var dateObj = new Date();
        dateObj.setTime( dateObj.getTime() + num*(24*60*60*1000) );
        var year = dateObj.getFullYear(),
            month = dateObj.getMonth() + 1,
            day = dateObj.getDate();
        return `${year}年${month}月${day}日`;
    }
    
    (function transform_temperature ( obj ) {
        var flag  = 0,
            temperature;
            $("#celsius_degree").addClass("active");
        $("#celsius_degree").on("click" , function(){
            temperature = parseInt( $(".temperature").text() );
            $(this).addClass("active");
            $("#fahrenheit_degree").removeClass("active");
            check ($(this));
            flag = 0;
        });
        $("#fahrenheit_degree").on("click" , function(){
            temperature = parseInt( $(".temperature").text() );
            $(this).addClass("active");
            $("#celsius_degree").removeClass("active");
            check ($(this));
            flag = 1;
        });
        function check (obj) {
             if ( obj.index() == flag ) {
                 return false;
             }else {
                 if (flag == 0) {
                    $(".temperature").text(Math.round( 32 + temperature*1.8 ) );
                    $(".mid").find(".temperature_icon").text("℉");
                 } else{
                    $(".temperature").text( Math.round( ( temperature - 32 )/1.8 ) );
                    $(".mid").find(".temperature_icon").text("℃");
                 }
             }
        }
        (function location_search () {
            $(".location_icon").on("click" , function() {
                flag = 0;
                $("#celsius_degree").addClass("active");
                $("#fahrenheit_degree").removeClass("active");
                $(".mid").find(".temperature_icon").text("℃");
                var location  = $(".location_input").val();
                getTemperature( location );
            });
        })();
    })();


});

window.onload = function () {
    if ( document.readyState === "complete" ) {
        $(".loading").fadeOut();

    }
};