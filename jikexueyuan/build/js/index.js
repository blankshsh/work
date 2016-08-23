$(document).ready(function() {
    $(function() { //轮播图

        //定义属性
        var $banner_left = $("#banner-left");
        var $banner_right = $("#banner-right");
        var $imginner = $(".show-middle-img-inner");
        var i = 1;
        var imgnum = $(".show-middle-img-inner").children().length;
        //左右按钮move
        $banner_left.on("click", function() {
            i--;
            move()
        })
        $banner_right.on("click", function() {
            i++;
            move()
        })

        function move() {
            // 当点击到第一张图时，将索引变成倒数第3张
            if (i == -1) {
                $imginner.css({
                    "margin-left": -(imgnum - 2) * 560 + "px"
                })
                i = imgnum - 3;
            }
            // 当点击到最后一张图时，将索引变成第2张
            if (i == imgnum) {
                $imginner.css({
                    "margin-left": "-560px"
                })
                i = 2;
            }
            $imginner.stop().animate({
                "margin-left": -i * 560 + "px"
            }, 500);
            //下标签变色
            if (i == imgnum - 1) {
                $(".pagination span").eq(0).addClass("swiper-pagination-switch-on").siblings().removeClass("swiper-pagination-switch-on");
            } else {
                $(".pagination span").eq(i - 1).addClass("swiper-pagination-switch-on").siblings().removeClass("swiper-pagination-switch-on");
            }
        }
        //轮播
        $(".pagination span").each(function(index) {
            $(".pagination span").on('click', function() {
                var bgnum = $(this).index();
                i = bgnum + 1;
                switch (true) {
                    case bgnum == 0:
                        $imginner.stop().animate({
                            "margin-left": "-560px"
                        }, 500)
                        $(".pagination span").eq(bgnum).addClass("swiper-pagination-switch-on").siblings().removeClass("swiper-pagination-switch-on");

                        break;
                    case bgnum == 1:
                        $imginner.stop().animate({
                            "margin-left": "-1120px"
                        }, 500)
                        $(".pagination span").eq(bgnum).addClass("swiper-pagination-switch-on").siblings().removeClass("swiper-pagination-switch-on");

                        break;
                    case bgnum == 2:
                        $imginner.stop().animate({
                            "margin-left": "-1680px"
                        }, 500)
                        $(".pagination span").eq(bgnum).addClass("swiper-pagination-switch-on").siblings().removeClass("swiper-pagination-switch-on");

                        break;
                    case bgnum == 3:
                        $imginner.stop().animate({
                            "margin-left": "-2240px"
                        }, 500)
                        $(".pagination span").eq(bgnum).addClass("swiper-pagination-switch-on").siblings().removeClass("swiper-pagination-switch-on");

                        break;
                    case bgnum == 4:
                        $imginner.stop().animate({
                            "margin-left": "-2800px"
                        }, 500)
                        $(".pagination span").eq(bgnum).addClass("swiper-pagination-switch-on").siblings().removeClass("swiper-pagination-switch-on");

                        break;
                    case bgnum == 5:
                        $imginner.stop().animate({
                            "margin-left": "-3360px"
                        }, 500)
                        $(".pagination span").eq(bgnum).addClass("swiper-pagination-switch-on").siblings().removeClass("swiper-pagination-switch-on");

                        break;
                }
            })
        })
        var t = setInterval(function() {
            i++;
            move();
        }, 3000)
    })
    $(function() {
        //focus轮播图
        var $banner_left2 = $("#banner-left2");
        var $banner_right2 = $("#banner-right2");
        var $focuswork = $(".show-middle-focuswork-wrp");
        var i = 3;
        var imgnum2 = $(".show-middle-focuswork-wrp").children().length;
        //左右按钮move
        $banner_left2.on("click", function() {
            i--;
            move2()
        })
        $banner_right2.on("click", function() {
            i++;
            move2()
        })

        function move2() {
            // 当点击到第一张图时，将索引变成倒数第7张
            if (i == -1) {
                $focuswork.css({
                    "margin-left": -(imgnum2 - 6) * 186.66 + "px"
                })
                i = imgnum2 - 7;
            }
            // 当点击到最后第三张图时，将索引变成第4张
            if (i == imgnum2 - 2) {
                $focuswork.css({
                    "margin-left": "-560px"
                })
                i = 4;
            }
            $focuswork.stop().animate({
                "margin-left": -i * 186 + "px"
            }, 500);

        }
    })

    $(function() { //侧边栏显示
        $(".show-left li").on("mouseenter", function() {
            $(this).children().children(".lesson-list-show").addClass("block");
        })
        $(".show-left li").on("mouseleave", function() {
            $(this).children().children(".lesson-list-show").removeClass("block");
        })

    })
    
    $(function() { //热门教程
        //切换标签
        $(".hot-lesson ul li").each(function(index) {
                $(this).on('mouseover', function() {
                    $('#hot-lessonbox ul').removeClass("block");
                    $('.hot-lesson ul li').removeClass("on");
                    $('#hot-lessonbox ul').eq(index).addClass("block");
                    $(this).addClass("on");
                })
            })
            //鼠标移入,卡片伸缩
        $(".one-classfiy-lesson ul li").mouseenter(function() {
            $(this).find(".lesson-infor").stop().animate({
                height: "120px",
                'z-index': '1111'
            }, 500)
            $(this).find(".lessonplay").addClass("block");
            $(this).find(".lesson-infor").children("p").addClass('block');

            // $(this).siblings(".lesson_info").children(".timeandicon").children(".learn_number").show().siblings("dl").children(".lesson_rank").show();

            // $(this).children().children(".lesson_play").stop().animate({
            //     opacity: "1"
            // }, 100)

        })
        $(".one-classfiy-lesson ul li").mouseleave(function() {
            $(this).find(".lesson-infor").stop().animate({
                height: "72px"
            }, 500);
            $(this).find(".lessonplay").removeClass("block");
            $(this).find(".lesson-infor").children("p").removeClass('block')


        });
    })


    $(function() { //职业路径图
        //鼠标移动到问号，显示内容
        $(".way").on('mouseenter', function() {
            $(this).next().addClass('opacity')
        })
        $(".way").on('mouseleave', function() {
            $(this).next().removeClass('opacity')
        })
    })
    $(function() { //知识体系图

        $(".card-transform").on("mouseenter", function() {
            //鼠标移动，翻转前后面
            $(this).find('.front').removeClass('on-myfront2').addClass('on-myfront');
            $(this).find('.front').next().removeClass('on-myback2').addClass('on-myback');
        })
        $(".card-transform").on("mouseleave", function() {
            //鼠标移出，翻转回正面
            $(this).find('.front').addClass('on-myfront2');
            $(this).find('.front').next().addClass('on-myback2');
        })
    })
    $(function() { // 精品系列课程

        $(".lesson-card").on("mouseenter", function() {
            //鼠标移动，显示后面
            $(this).find('.describe').addClass('op-8');
            $(this).addClass("greenwrp");

        })
        $(".lesson-card").on("mouseleave", function() {
                //鼠标移动，隐藏后面
                $(this).find('.describe').removeClass('op-8');
                $(this).removeClass("greenwrp");
            })
            //字体变色
        $(".describe .name a").on("mouseenter", function() {
            $(this).addClass("greencolor");
        })
        $(".describe .name a").on("mouseleave", function() {
            $(this).removeClass("greencolor");
        })
        $(".describe .text a").on("mouseenter", function() {
            $(this).addClass("greencolor");
        })
        $(".describe .text a").on("mouseleave", function() {
            $(this).removeClass("greencolor");
        })
    })
    $(function() { //wiki

        //鼠标移动添加字体颜色
        $(".one-wiki").on("mouseenter", function() {
            $(".wikibox .one-wiki dd h3").on("mouseenter", function() {
                $(this).addClass("greencolor");
                $(this).next().addClass("greencolor"); //next()给下一个元素加上
                //鼠标在h3上 连span也变色
            })
            $(".wikibox .one-wiki dd  h3").on("mouseleave", function() {
                $(this).removeClass("greencolor");
                $(this).next().removeClass("greencolor");
            })
            $(".wikibox .one-wiki dd span").on("mouseenter", function() {
                $(this).addClass("greencolor");
                $(this).prev().addClass("greencolor"); //给上一个元素加上prev()
                //鼠标在span上 连h3也变色，下同
            })
            $(".wikibox .one-wiki dd span").on("mouseleave", function() {
                $(this).removeClass("greencolor");
                $(this).prev().removeClass("greencolor");
            })

            $(".wikibox .one-wiki ul li a p").on("mouseenter", function() {
                $(this).addClass("greencolor");
                $(this).next().addClass("greencolor"); //给下一个元素加上next()
                //鼠标在P上 span也变色，下同
            })

            $(".wikibox .one-wiki ul li a p").on("mouseleave", function() {
                $(this).removeClass("greencolor");
                $(this).next().removeClass("greencolor");
            })
            $(".wikibox .one-wiki ul li a span").on("mouseenter", function() {
                $(this).addClass("greencolor");
                $(this).prev().addClass("greencolor"); //给上一个元素加上prev()
            })
            $(".wikibox .one-wiki ul li a span").on("mouseleave", function() {
                    $(this).removeClass("greencolor");
                    $(this).prev().removeClass("greencolor");
                })
                //
                //
            $(".wikibox .one-wiki .imgbox").on("mouseenter", function() {
                //书本翻页效果
                $(this).find('img').removeClass("imgdoingBack").addClass("imgdoing");
                $(this).find('i').removeClass("none").addClass('blcok');
            })
            $(".wikibox .one-wiki .imgbox").on("mouseleave", function() {
                $(this).find('img').removeClass("imgdoing").addClass("imgdoingBack");
                $(this).find('i').removeClass("block").addClass('none');
            })
            $("#one").on("mouseenter", function() {
                // 鼠标移上变色，变自己上下左边框，变化下一个标签的左边框，下同
                $(this).addClass("border-green");
            })
            $("#one").on("mouseleave", function() {
                $(this).removeClass("border-green");
            })
            $("#two").on("mouseenter", function() {
                $(this).addClass("border-green");
                $(this).prev().addClass('border-noright');
            })
            $("#two").on("mouseleave", function() {
                $(this).removeClass("border-green");
                $(this).prev().removeClass('border-noright');
            })
            $("#three").on("mouseenter", function() {
                $(this).addClass("border-green");
                $(this).prev().addClass('border-noright');
            })
            $("#three").on("mouseleave", function() {
                $(this).removeClass("border-green");
                $(this).prev().removeClass('border-noright');
            })
        })
        $(function() { //战略合作企业

            var $banner_left3 = $("#banner-left3");
            var $banner_right3 = $("#banner-right3");
            var $strategy = $("#strategyimg");
            var i = 6;
            var imgnum3 = $("#strategyimg").children().length;
            //左右按钮move
            $banner_left3.on("click", function() {
                i--;
                move3()
            })
            $banner_right3.on("click", function() {
                i++;
                move3()
            })

            function move3() {
                // 当点击到第一张图时，将索引变成倒数第8张
                if (i == -1) { 
                    $strategy.css({
                        "margin-left": -(imgnum3 - 7) * 160 + "px"
                    })
                    i = imgnum3 - 8;
                }
                // 当点击到最后第5张图时，将索引变成第2张
                if (i == imgnum3 - 5) {
                    $strategy.css({
                        "margin-left": "-160px"
                    })
                    i = 2;
                }
                $strategy.stop().animate({
                    "margin-left": -i * 160 + "px"
                }, 500);

            }
        })
        $(function() { //合作院校

            var $banner_left4 = $("#banner-left4");
            var $banner_right4 = $("#banner-right4");
            var $university = $("#universityimg");
            var i = 7;
            var imgnum4 = $("#universityimg").children().length;
            //左右按钮move
            $banner_left4.on("click", function() {
                i--;
                move4()
            })
            $banner_right4.on("click", function() {
                i++;
                move4()
            })

            function move4() {
                // 当点击到第一张图时，将索引变成倒数第8张
                if (i == -1) {
                    $university.css({
                        "margin-left": -(imgnum4 - 8) * 140 + "px"
                    })
                    i = imgnum4 - 9;
                }
                // 当点击到最后第6张图时，将索引变成第2张
                if (i == imgnum4 - 6) {
                    $university.css({
                        "margin-left": "-140px"
                    })
                    i = 2;
                }
                $university.stop().animate({
                    "margin-left": -i * 140 + "px"
                }, 500);

            }
        })
        $(function() { //媒体报道

            var $banner_left5 = $("#banner-left5");
            var $banner_right5 = $("#banner-right5");
            var $enterprise = $("#enterpriseimg");
            var i = 6;
            var imgnum5 = $("#enterpriseimg").children().length;
            //左右按钮move
            $banner_left5.on("click", function() {
                i--;
                move5()
            })
            $banner_right5.on("click", function() {
                i++;
                move5()
            })

            function move5() {
                // 当点击到第一张图时，将索引变成倒数第8张
                if (i == -1) {
                    $enterprise.css({
                        "margin-left": -(imgnum5 - 7) * 160 + "px"
                    })
                    i = imgnum5 - 8;
                }
                // 当点击到最后第5张图时，将索引变成第2张
                if (i == imgnum5 - 5) {
                    $enterprise.css({
                        "margin-left": "-160px"
                    })
                    i = 2;
                }
                $enterprise.stop().animate({
                    "margin-left": -i * 160 + "px"
                }, 500);

            }
        })
        $(function() {
            //底部
            //鼠标移动变色字体
            $("#footer .footer-inner dl a").on("mouseenter", function() {
                $(this).addClass("greencolor");
            })
            $("#footer .footer-inner dl a").on("mouseleave", function() {
                $(this).removeClass("greencolor");
            })

            $(".app-download").on("mouseenter", function() {
                $(this).find("strong").addClass('greencolor');
                $(this).find("p").addClass("greencolor");
            })

            $(".app-download").on("mouseleave", function() {
                $(this).find("strong").removeClass('greencolor');
                $(this).find("p").removeClass("greencolor");
            })

            $(".kefu-online").on("mouseenter", function() {
                $(this).find("h5").addClass('greencolor');
                $(this).find("p").addClass("greencolor");
            })
            $(".kefu-online").on("mouseleave", function() {
                    $(this).find("h5").removeClass('greencolor');
                    $(this).find("p").removeClass("greencolor");
                })
                //鼠标进出icon变色
            $(".kefu-icon").on("mouseenter", function() {
                $(this).removeClass("online");
            })
            $(".kefu-icon").on("mouseleave", function() {
                $(this).addClass("online");
            })
            $(".weibo").on("mouseenter", function() {
                $(this).removeClass('weibo').addClass('p-bg-weibo');
            })
            $(".weibo").on("mouseleave", function() {
                $(this).removeClass('p-bg-weibo').addClass('weibo');
            })
            $(".baidu").on("mouseenter", function() {
                $(this).removeClass('baidu').addClass('p-bg-baidu');
            })
            $(".baidu").on("mouseleave", function() {
                $(this).removeClass('p-bg-baidu').addClass('baidu');
            })
            $(".qq-icon").on("mouseenter", function() {
                $(this).removeClass('qq-icon').addClass('p-bg-qq-icon');
                $(this).find(".weixin").css("display", "block");
            })
            $(".qq-icon").on("mouseleave", function() {
                $(this).removeClass('p-bg-qq-icon').addClass('qq-icon');
                $(this).find(".weixin").css("display", "none");
            })
        })
    })
})
