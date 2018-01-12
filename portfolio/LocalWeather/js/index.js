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
        geolocation.getCityInfo(function (status, data) {
            render_location(data);
            getCurrentTemperature(data.city);
            getForecastTemperature(data.city);
            getTips(data.city);
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

    function getCurrentTemperature(city) {
        $.ajax({
            url: "https://free-api.heweather.com/s6/weather/now",
            type: "POST",
            data: {
                location: city,
                key: "d51b446bbb894df29facb8e447e28a4a",
            },
            dataType: "JSON",
            success: function (data) {
                if (data["HeWeather6"][0]["status"] === "ok") {
                    getForecastTemperature(city);
                    getTips(city);
                    render_temperature(data["HeWeather6"][0]["now"]);
                    render_icon(data["HeWeather6"][0]["now"]);
                }else{
                    alert("请输入正确的城市名,如:'长沙'");
                }

            },
            error: function () {
                alert("");
            }
        });
    }

    function getForecastTemperature(city) {
        $.ajax({
            url: "https://free-api.heweather.com/s6/weather/forecast",
            type: "POST",
            data: {
                location: city,
                key: "d51b446bbb894df29facb8e447e28a4a",
            },
            dataType: "JSON",
            success: function (data) {
                render_forecast_temperature(data["HeWeather6"][0]["daily_forecast"]);
            },
            error: function () {

            }
        });
    }

    function getTips(city) {
        $.ajax({
            url: "https://free-api.heweather.com/s6/weather/lifestyle",
            type: "POST",
            data: {
                location: city,
                key: "d51b446bbb894df29facb8e447e28a4a",
            },
            dataType: "JSON",
            success: function (data) {
                render_tips(data["HeWeather6"][0]['lifestyle']);
            },
            error: function () {

            }
        });
    }

    function render_location(data) {
        $(".location_input").val(`${data.province}  ${data.city}`);
    }

    function render_temperature(data) {
        var temperature = parseInt(data.tmp);
        if (temperature < 0) {
            $(".temperature").css({
                "font-size": "210px",
                "padding-top": "20px"
            });
        } else {
            $(".temperature").css({
                "font-size": "250px",
                "padding-top": "0px"
            });
        }
        $(".temperature").text(data.tmp);
    }

    function render_forecast_temperature(data) {
        $(".high_temperature").text(`高温:${data[0]['tmp_max']}℃`);
        $(".low_temperature").text(`低温:${data[0]['tmp_min']}℃`);
        $(".tomorrow").find(".next_temperature").text(`高温:${data[1]['tmp_max']}℃  低温:${data[1]['tmp_min']}℃`);
        $(".tomorrow_tomorrow").find(".next_temperature").text(`高温:${data[2]['tmp_max']}℃  低温:${data[2]['tmp_min']}℃`);
        $(".tomorrow").find(".next_weather").text(`${data[1]['cond_txt_d']}`);
        $(".tomorrow_tomorrow").find(".next_weather").text(`${data[2]['cond_txt_d']}`);

    }

    function render_tips(data) {
        $(".tip").text(`${data[1]['txt']}${data[2]['txt']}`);
    }

    function render_icon(data) {
        switch (data['cond_txt']) {
            case "晴":
                $(".weather_icon").css({
                    backgroundImage: "url('./images/sun.png')"
                });
                break;
            case "多云":
                $(".weather_icon").css({
                    backgroundImage: "url('./images/cloudy.png')"
                });
                break;
            case "阴":
                $(".weather_icon").css({
                    backgroundImage: "url('./images/more_cloud.png')"
                });
                break;
        }
        if (data['cond_txt'].indexOf("雪") != -1) {
            $(".weather_icon").css({
                backgroundImage: "url('./images/snow.png')"
            });
        }
        if (data['cond_txt'].indexOf("雨") != -1) {
            $(".weather_icon").css({
                backgroundImage: "url('./images/rain.png')"
            });
        }
    }

    (function render_date() {
        var today = get_date_after(),
            tomorrow = get_date_after(1),
            day_after_tomorrow = get_date_after(2);
        $(".today_date").text(today);
        $(".tomorrow").find(".next_date").text(tomorrow);
        $(".tomorrow_tomorrow").find(".next_date").text(day_after_tomorrow);
    })();

    function get_date_after(num = 0) {
        var dateObj = new Date();
        dateObj.setTime(dateObj.getTime() + num * (24 * 60 * 60 * 1000));
        var year = dateObj.getFullYear(),
            month = dateObj.getMonth() + 1,
            day = dateObj.getDate();
        return `${year}年${month}月${day}日`;
    }

    (function transform_temperature(obj) {
        var flag = 0,
            temperature;
        $("#celsius_degree").addClass("active");
        $("#celsius_degree").on("click", function () {
            temperature = parseInt($(".temperature").text());
            $(this).addClass("active");
            $("#fahrenheit_degree").removeClass("active");
            check($(this));
            flag = 0;
        });
        $("#fahrenheit_degree").on("click", function () {
            temperature = parseInt($(".temperature").text());
            $(this).addClass("active");
            $("#celsius_degree").removeClass("active");
            check($(this));
            flag = 1;
        });

        function check(obj) {
            if (obj.index() == flag) {
                return false;
            } else {
                if (flag == 0) {
                    $(".temperature").text(Math.round(32 + temperature * 1.8));
                    $(".mid").find(".temperature_icon").text("℉");
                } else {
                    $(".temperature").text(Math.round((temperature - 32) / 1.8));
                    $(".mid").find(".temperature_icon").text("℃");
                }
            }
        }
        (function location_search() {
            $(".location_icon").on("click", function () {
                flag = 0;
                $("#celsius_degree").addClass("active");
                $("#fahrenheit_degree").removeClass("active");
                $(".mid").find(".temperature_icon").text("℃");
                var location = $(".location_input").val();
                getCurrentTemperature(location);
            });
        })();
    })();


});

window.onload = function () {
    if (document.readyState === "complete") {
        $(".loading").fadeOut();
    }
};