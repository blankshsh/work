$(function() {
    //点击侧边栏 切换内容
    $(document).ready(function() {
        $.ajax({
            url: 'php/show.php',
            type: 'post',
            dataType: 'json',
            beforeSend: LoadFunction, //加载执行方法
            success: succFunction //成功执行方法
        })

        function LoadFunction() {
            $(".moremoremore").text('加载中...');
        }

        function succFunction(data) {
            $(".moremoremore").text('点击加载更多');
            inputData_btn(data);
            //console.log(data[i].newstitle);
        }
    })

    $("#allnews-id").on("click", function() {
        //点击新闻总览，加载内容
        $(".main").children().css("display", "none");
        $(".index-list").removeAttr("style");
        $(".index-list").empty();
        var newsid = $(this).attr("class");
        $.ajax({
            url: 'php/show.php',
            type: 'post',
            dataType: 'json',
            beforeSend: LoadFunction, //加载执行方法
            success: succFunction //成功执行方法
        })

        function LoadFunction() {
            $(".moremoremore").text('加载中...');
        }

        function succFunction(data) {
            $(".moremoremore").text('点击加载更多');
            inputData_btn(data);

            // console.log(data[i].newstitle);

        }
    })
    $("#newstype-id").on("click", function() {
        $(".main").children().css("display", "none");
        $(".searchnews").removeAttr("style");
        $('.index-list').empty();
    })
    $("#addnews-id").on("click", function() {
        $(".main").children().css("display", "none");
        $(".addnews").removeAttr("style");
        $.ajax({
            url: 'php/token.php',
            type: 'post',
            dataType: 'json',
            success: succtoken, //成功执行方法
        })
    })

    function succtoken(data) {
        //$('#addnews').children("input").remove();
        // var tokenInt = {
        //     newdata: [{
        //         token: data[0],
        //     }]
        // }
        // $.each(tokenInt.newdata, function(key, value) {
        //     var addtoken = $('<input>').attr("type", "hidden").attr("name", "token").attr("value", $(value).attr("token")).appendTo('#addnews');
        // })
        $('#addnews').children("input").remove();
        var tokenInt = {
            newdata: [{
                token: data
            }]
        }
        $.each(tokenInt.newdata, function(key, value) {
            var addtoken = $('<input>').attr("type", "hidden").attr("name", "token").attr("value", $(value).attr("token")).appendTo('#addnews');
        })
    }

  
  

    //新闻类型
    //点击按钮 显示相关新闻
    $("#news-btn button").on('click', function() {
        $("#news-btn button").removeClass("on");
        $(this).addClass("on");
        $.ajax({
            url: 'php/select.php',
            type: 'post',
            cache: 'false',
            data: {
                newsid: $(this).attr("id"),
            },
            dataType: 'json',
            beforeSend: beforeCheck,
            error: errCheck, //错误执行方法
            success: succCheck //成功执行方法
        })

        function beforeCheck() {
            //清空新闻列表
            $('.index-list').empty();
        }

        function errCheck() {
            alert("Error!");
        }

        function succCheck(data) {
            inputData_btn(data);
            //运行新闻添加
        }
    })


    //新闻更新
    $(document).on('click', '.update', function(e) {
        $(".updatewrp").show();

        // 定义内容
        var location = e.target;
        var newstype = $(location).parents(".index-list-item").attr("newstype");
        var newsid = $(location).parents(".index-list-item").attr("news_id");
        var newsimg = $(location).parents(".index-list-bottom").siblings(".index-list-image").children("img").attr("src");
        var newstitle = $(location).parents(".index-list-bottom").siblings(".index-list-main-text").children(".index-list-main-title").text();
        var newscontent = $(location).parents(".index-list-bottom").siblings(".index-list-main-text").children(".index-list-main-abs").text();
        var newstime = $(location).siblings(".tip-time").text();
        var token = $(location).parents(".index-list-main").siblings("input").attr("value");

        $("#update #updatenewsid").val(newsid);
        $("#update #updatenewstype").val(newstype);
        $("#update #updatenewstitle").val(newstitle);
        $("#update #updatenewsimg").val(newsimg);
        $("#update #updatenewscontent").val(newscontent);
        $("#update #updatenewstime").val(newstime);
        $("#update #updatetoken").val(token);



        //点击按钮传输数据，更新
        $("#update").submit(function() {
            if (true) {}
            var updates = {
                url: 'php/update.php',
                type: 'post',
                dataType: 'text',
                beforeSubmit: beforeUpdate,
                success: updateSuccess
            };
            $(this).ajaxSubmit(updates);
            return false;

        })


        function beforeUpdate() {
            $(".updatewrp").hide();
        }


        function updateSuccess(data) {
            if (data == 'error') {
                alert("操作失败!!");
            } else if (data == 'csrferror') {
                alert("csrf操作失败!");
            } else {
                alert("修改成功");
            }
            window.location.reload();
        }
    })
    $("#close").on("click", function() {
        $(".updatewrp").hide();
    })


    //添加新闻
    //点击按钮传输数据
    $("#addnews").submit(function() {
        // var location = e.target.parents().parents().parents("#addnews");
        // var newsimg = $(location).children("#newsimg").text();
        // var newstitle = $(location).children("#newstitle").text();
        // var newscontent = $(location).children("#newscontent").text();
        // var newstime = $(location).children("#newstime").text();
        var options = {
            url: 'php/addnews.php',
            type: 'post',
            dataType: 'text',
            success: addSuccess
        };
        $(this).ajaxSubmit(options);
        return false;

        function addSuccess(data) {
            //alert("添加新闻成功");
            if (data == 'Success') {
                alert("添加新闻成功!");
            } else if (data == 'error') {
                alert("操作失败!");
            } else {
                alert("csrf操作失败!");
            }
            window.location.reload();
        }
    });

    //     success:function(data,status){ //请求成功的回调函数
    //         if(status=="success"){ 
    //             if(parseInt(data)=='Success'){//操作成功，其实这里完全由后台控制，返回1或者"OK"什么的都行
    //                 alert("添加新闻成功!");
    //             }else if (parseInt(data)=='csrf error') {
    //                  alert("csrf 操作失败!");
    //             }else{
    //                 alert("操作失败!");
    //             }
    //         }
    //     }
    // }








    //循环输出新内容
    function inputData(data) {
        for (i in data) {
            //创建数组
            var dataInt = {
                    newdata: [{
                        newstype: data[i].newstype,
                        newstitle: data[i].newstitle,
                        newsimg: data[i].newsimg,
                        newscontent: data[i].newscontent,
                        newstime: data[i].newstime
                    }]
                }
                //循环创建DIV添加进页面 
            $.each(dataInt.newdata, function(key, value) {
                var newbox = $("<div>").addClass("index-list-item").attr("newstype", $(value).attr('newstype')).appendTo($(".index-list"));
                var newsitem = $("<div>").addClass("index-list-main showleft").appendTo(newbox);
                var imgbox = $("<div>").addClass("index-list-image").appendTo(newsitem);
                var img = $("<img>").attr("src", $(value).attr("newsimg")).appendTo(imgbox);
                var newstext = $("<div>").addClass("index-list-main-text").appendTo(newsitem);
                var title = $("<div>").addClass("index-list-main-title").text($(value).attr("newstitle")).appendTo(newstext);
                var content = $("<div>").addClass("index-list-main-abs").text($(value).attr("newscontent")).appendTo(newstext);
                var newsbottom = $("<div>").addClass("index-list-bottom").appendTo(newsitem);
                var time = $("<div>").addClass("index-list-main-time").appendTo(newsbottom);
                var newtime = $("<div>").addClass("tip-time").text($(value).attr("newstime")).appendTo(time);
                var ondelete = $("<button>").addClass("ondelete btn btn-danger mar-r65").text('删除').appendTo(time);
                var update = $("<button>").addClass("update btn btn-info").text('修改').appendTo(time);

            })
        }
    }

    //删除
    $(document).on('click', '.ondelete', function(e) {
        var location = e.target;
        // var newsid = $(location).parents(".index-list-item").attr("news_id");
        // var newstype = $(".news-btn").find(".on").attr("id");
        //console.log($(location).parents(".index-list-item"));
        //console.log($(location).parents().attr("newstype"));
        //console.log($(location).parents(".index-list-item").attr("news_id"));
        var do_delete = confirm('确定要删除这条新闻吗?');
        if (do_delete) {
            $.ajax({
                type: "post",
                url: "php/delete.php",
                dataType: 'json',
                data: {
                    newsid: $(location).parents(".index-list-item").attr("news_id")
                },
                success: function(data) {

                    $(location).parents(".index-list-item").remove();

                    alert("删除成功");
                }
            })

        }

    })

    //输出特定数据表里的内容
    function inputData_btn(data) {
        // $('#addnews').children("input").remove();
        // var tokenInt = {
        //     newdata: [{
        //         token: data[0].token
        //     }]
        // }
        // $.each(tokenInt.newdata, function(key, value) {
        //     var addtoken = $('<input>').attr("type", "hidden").attr("name", "token").attr("value", $(value).attr("token")).appendTo('#addnews');
        // })
        for (i in data) {
            //创建数组
            var dataInt = {
                    newdata: [{
                        newsid: data[i].newsid,
                        newstype: data[i].newstype,
                        newstitle: data[i].newstitle,
                        newsimg: data[i].newsimg,
                        newscontent: data[i].newscontent,
                        newstime: data[i].newstime,
                        token: data[i].token
                    }]
                }
                //循环创建DIV添加进页面 
            $.each(dataInt.newdata, function(key, value) {
                var newbox = $("<div>").addClass("index-list-item").attr("news_id", $(value).attr('newsid')).attr("newstype", $(value).attr('newstype')).appendTo($(".index-list"));
                var newsitem = $("<div>").addClass("index-list-main showleft").appendTo(newbox);
                var imgbox = $("<div>").addClass("index-list-image").appendTo(newsitem);
                var img = $("<img>").attr("src", $(value).attr("newsimg")).appendTo(imgbox);
                var newstext = $("<div>").addClass("index-list-main-text").appendTo(newsitem);
                var title = $("<div>").addClass("index-list-main-title").text($(value).attr("newstitle")).appendTo(newstext);
                var content = $("<div>").addClass("index-list-main-abs").text($(value).attr("newscontent")).appendTo(newstext);
                var newsbottom = $("<div>").addClass("index-list-bottom").appendTo(newsitem);
                var time = $("<div>").addClass("index-list-main-time").appendTo(newsbottom);
                var newtime = $("<div>").addClass("tip-time").text($(value).attr("newstime")).appendTo(time);
                var ondelete = $("<button>").addClass("ondelete btn btn-danger mar-r65").text('删除').appendTo(time);
                var update = $("<button>").addClass("update btn btn-info").text('修改').appendTo(time);
                var token = $('<input>').attr("type", "hidden").attr("name", "token").attr("value", $(value).attr("token")).appendTo(newbox);
            })
        }
    }


})
