$(function(){

    // echarts 图表
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('img-left'));
    var myChart2 = echarts.init(document.getElementById('img-right'));
    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };  
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);  
    myChart2.setOption({
        series : [
            {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ]
            }
        ]
    })



// 动态效果函数
    var $this = $("#news");
    var scrollTimer;
    $this.hover(function() {
        clearInterval(scrollTimer);
    }, function() {
            scrollTimer = setInterval(function() {
            scrollNews($this);
        }, 1000);
    }).trigger("mouseleave");

    function scrollNews(obj) {
        var $self = obj.find("dl");
        var lineHeight = $self.find("dd:first").height(); 
        $self.animate({
            "marginTop": -40 + "px"
        }, 2000, function() {
            $self.css({
                marginTop: 0
            }).find("dd:first").appendTo($self);
        })
    }

})
