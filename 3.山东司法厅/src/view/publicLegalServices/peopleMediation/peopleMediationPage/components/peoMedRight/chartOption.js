import echarts from 'echarts'
/** 
 * @description 右下图表配置
*/
export function getRightTopOption (){
    let name = function(){
        //创建现在的时间
        var data=new Date();
        //获取年
        var year=data.getFullYear();
        //获取月
        var mon=data.getMonth()+1;
        var arry=new Array();
        for(var i=0;i<7;i++){
            mon=mon-1;
            if(mon<=0){
                year=year-1;
                mon=mon+12;
            }
            if(mon<10){
                mon="0"+mon;
            }
            
            arry[i]=year+"/"+mon;
        }
        
        return arry.reverse();
    }();
    return {
        legend: {
            textStyle: {
                color: "#fff",
                padding: [3, 0, 0,0]
            },
            left: "center",
            top: 10,
            itemWidth:30,
            itemHeight:3,
            itemGap:20,
            orient: 'horizontal',
            data: [{name: '书面协议', icon: "rect"}, {name: '口头协议', icon: "rect"}]
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: 40,
            top: 60,
            bottom: 40,
            right: 20
        },
        xAxis: {
            data: name,
            axisLabel: {
                color: "#fff",
                interval: 0
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "#008d98"
                }
            },
            axisTick:{
                show:false
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: ["#01495a"]
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                formatter: function (value) {
                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                }
            }
        },
        series:[
            {
                type:'line',
                name: "书面协议",
                itemStyle:{
                    color:"#177dff"
                },
                smooth:true,
                data: [20,2,12,20,20,20,30,0,20,30,20,20]
            },
            {
                type:'line',
                name: "口头协议",
                itemStyle:{
                    color:"#ff6360"
                },
                // lineStyle:{
                //     color:"#00ff55"
                // },
                smooth:true,
                data: [28,4.4,5.9,0.9,0.7,1.1,2.1,0.4,1.9,3.8,1.6,0.7]
            },
        ]
    }
}