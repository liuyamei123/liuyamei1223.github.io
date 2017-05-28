
$(window).resize(function() {
    adjustHeight();
  });


function adjustHeight() {
    var h = $(window).height();
    var h_header =$(".header").height();
    var h_search = $(".search").height();
    $(".right-warp").css("height", h - h_header);
    $("#sideBar").css("height", h - h_header);
    $(".main").css("height", h - h_header -h_search);
    
}

$(document).ready(function(){
     setupMenu();
     adjustHeight();
 });

//修改部分
function setupMenu(){
    var animationtime = 500;
    $(".sideBar-memu").click(function(){
        // $(".sideBar-list").css({"display":block});
        var w = $(window).width();
        var min_nav_w = w - 160;
        // var min_nav_cot_w =$(".left-menu").length!=0? min_nav_w-212:min_nav_w;
        $(".sideBar").hide()
        $(".main").animate({
            width:min_nav_w
        },animationtime);
        $(".sideBar-open").width(55).css({
            "display":"block"
        }).animate({
            width:160 //标记
        },animationtime);
        $(".right-warp,.veil-ut").animate({
            width:min_nav_w,
            left:160  //标记
        },animationtime);
    })
    $(".sideBar-memu-open").click(function(){
        var w = $(window).width();
        var max_nav_w = w - 55;
        // var max_nav_cot_w=$(".left-menu").length!=0?max_nav_w-212:max_nav_w;
        $(".sideBar-open").animate({
            width:55
        },animationtime,function(){
            $(".sideBar").css("position","absolute").width(55).show();
            $(".sideBar-open").hide();
        });
        $(".main").animate({
            width:max_nav_w
        },animationtime);
        $(".right-warp,.veil-ut").animate({
            width:max_nav_w,
            left:55
        },animationtime);
        $(".sideBar .sideBar-list").css({"display":"block"});
    });
}

$(function () {
  // 一级导航
  $('[data-toggle="tooltip"]').tooltip();
  $("#header_icon li").on("click",function(){
      $(".sideBar-memu").click();
  })


})
