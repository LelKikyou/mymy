<template>
    <div class="peoMedLeft">
        <titleName>调解员构成</titleName>
        <navChart :navData="nav" class="nav"></navChart>
        <charts :option="optTop" class="leftTop"></charts>
        <titleName>调解员从事调解工作年限分布</titleName>
        <charts :option="optMid" class="leftMid"></charts>
        <titleName>调解机构类型构成</titleName>
        <charts :option="optBot" class="leftBot"></charts>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"
    import navChart from "@/components/navChart"
    export default {
        name: "peoMedLeft",
        components: {
            titleName,
            charts,
            navChart
        },
        data() {
            return {
                optTop: {},
                optBot: {},
                optMid: {},
                nav: {
                    xbgc: "性别构成",
                    zjzgc: "专兼职构成",
                },
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot();
            },
            drawTop(type) {
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: [ "#177dff","#ff6360"],
                        radius: [60, 80],
                        center:['50%', '50%'],
                        label: {
                            position: 'outerside',
                            formatter: '{b|{b}}\n{c|{c}}\n {b|占比：{d}%}',
                            rich: {
                                b: {
                                    fontWeight: "normal",
                                    align: "center",
                                    fontSize: 16,
                                    color: "#fff",
                                    lineHeight: 20,
                                },
                                c: {
                                    fontWeight: "normal",
                                    align: "center",
                                    fontSize: 16,
                                    lineHeight: 20,
                                }
                            }
                        },
                        labelLine: {
                            length: 5,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: [
                            {value: 1203, name: '男性'},
                            {value: 3130, name: '女性'},
                        ],
                    }
                };
                this.optTop = opt;
            },
            drawMid(){
                let data = [1452,596,38,22,123];
                let max = Math.max(...data) * 1.3
                let opt = {
                    baseOption: {
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
                                shadowStyle:{
                                },
                            }
                        },
                        grid:{
                            left:80,
                            top:10,
                            bottom:30,
                            right:10
                        },
                        xAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            position: 'bottom',
                            axisLabel: {
                                fontSize:12,
                                color:"#fff",
                                formatter: function (value) {
                                    return value > 1000 ? Math.ceil(value / 1000) + "k" : value
                                },
                                show: false
                            },
                            splitLine:{
                                lineStyle:{
                                    color:["#00ffff"],
                                    opacity: 0.3,
                                },
                                show: false
                            },
                            max:max
                        },
                        yAxis: {
                            type: 'category',
                            inverse: true,
                            position: 'left',
                            axisLine: {
                                lineStyle: {
                                    color: '#00ffff',
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {    
                                color:"#fff",
                                fontSize:14,
                            },
                            data: ['1年以内','1-3年','3-8年','8-10年','10年以上']
                        },
                        series: {
                            type: 'bar',
                            barWidth: 12,
                            label:{
                                show:true,
                                position:"right",
                                color:"#fff",
                                fontSize:14,
                            },
                            itemStyle:{
                                color: function (params) {
                                    var colorList =[ "#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"];
                                    return colorList[params.dataIndex];
                                },
                                barBorderRadius:[0, 6, 6, 0],
                            },
                            barGap: 10,
                            data:data,
                        }
                    },
                }
                this.optMid = opt;
            },
            drawBot(){
                const color = ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141", "#d35ee8", "#6683ff"];
                const data = [{
                    name: '类型1',
                    value: 10
                }, {
                    name: '类型2',
                    value: 15
                }, {
                    name: '类型3',
                    value: 20
                }, {
                    name: '类型4',
                    value: 25
                }, {
                    name: '类型5',
                    value: 30
                }, {
                    name: '类型6',
                    value: 35
                }, {
                    name: '类型7',
                    value: 40
                }, {
                    name: '类型8',
                    value: 45
                }, {
                    name: '类型9',
                    value: 50
                }, {
                    name: '其他',
                    value: 55
                }];

                const seriesData = [];
                const seriesData2 = [];

                data.map((item, idx) => {
                    seriesData.push({
                        name: item.name,
                        value: item.value,
                    });

                    seriesData2.push({
                        name: item.name,
                        value: item.value,
                        symbolSize: item.value,
                        itemStyle: {
                            normal: {
                                color: color[idx]
                            }
                        }
                    })
                })

                function roundDatas(num) {
                    var datas = [];
                    for (var i = 0; i < num; i++) {
                        datas.push({
                            name: 'circle' + i
                        });
                    }
                    return datas;
                }

                const opt = {
                    color: color,
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    roam: false, //鼠标缩放及平移
                    focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
                    series: [{
                        name: '',
                        type: 'pie',
                        startAngle: 0,
                        hoverAnimation: false,
                        radius: ['60%', '60%'],
                        center: ['50%', '50%'],
                        data: seriesData,
                        itemStyle: {
                            normal: {
                                borderWidth: 5,
                                borderColor: 'rgba(0,0,0,0)',
                                label: {
                                    show: true,
                                    color: '#fff',
                                    fontSize: 12,
                                    //  formatter: '{b}{d}%',
                                    formatter: function(params) {
                                        // console.log(params)
                                        // return params.name + ' '+ params.value + '%'
                                        return params.name
                                    }
                                },
                                labelLine: {
                                    show: false,
                                    length: 15,
                                    lineStyle: {
                                        // type: 'dotted'
                                    }
                                }
                            }
                        }
                    }, {
                        type: 'graph',
                        tooltip: {},
                        ribbonType: true,
                        layout: 'circular',
                        hoverAnimation: false,
                        width: '60%',
                        height: '60%',
                        circular: {
                            rotateLabel: true
                        },
                        symbolSize: 5,
                        data: roundDatas(20),
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                color: 'rgba(0,255,255,0.3)',
                            },
                            emphasis: {
                                label: {
                                    show: false,
                                }
                            }
                        },
                    }, {
                        type: 'graph',
                        tooltip: {},
                        ribbonType: true,
                        layout: 'circular',
                        width: '60%',
                        height: '60%',

                        circular: {
                            rotateLabel: true
                        },
                        symbolSize: 30,
                        label: {
                            normal: {
                                show: false
                            }
                        },

                        edgeSymbol: ['circle'],
                        edgeSymbolSize: [8, 30],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 8,
                                    fontWeight: 'bold',
                                    fontFamily: '宋体'
                                }
                            }
                        },

                        itemStyle: {
                            normal: {
                                label: {
                                    rotate: true,
                                    show: false,
                                },
                                borderColor: '#7C9ECD',
                                borderWidth: 0

                            },
                            emphasis: {
                                label: {
                                    show: false,
                                }
                            }
                        },

                        data: seriesData2,
                    }]
                };
                this.optBot = opt;
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "peoMedLeft.stylus"
</style>
