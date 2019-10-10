<template>
    <div class="judExpRight">
        <titleName>鉴定机构规模构成</titleName>
        <charts :option="optTop" class="rightTop"></charts>
        <titleName>鉴定案件类别构成</titleName>
        <charts :option="optMid" class="rightMid"></charts>
        <titleName>鉴定案件状态分布</titleName>
        <charts :option="optBot" class="rightBot"></charts>
        <div class="botList">
            <div :class="['list','list_'+i]" :style="countList(i)" v-for="(data,i) in botChartsData">
                <div class="cir">{{data.name}}</div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import titleName from "@/components/titleName"
    import charts from "@/components/charts"

    export default {
        name: "judExpRight",
        components: {
            titleName,
            charts
        },
        data() {
            return {
                optTop: {},
                optBot: {},
                optMid: {}
            }
        },
        mounted() {
            this.init();
        },
        props: {
            botChartsData: {
                type: Array,
                default() {
                    return [
                        {
                            name: "案件类型1",
                            value: 754
                        },
                        {
                            name: "案件类型2",
                            value: 388
                        },
                        {
                            name: "案件类型3",
                            value: 458
                        }
                    ]
                }
            }
        },
        methods: {
            init() {
                this.drawTop();
                this.drawMid();
                this.drawBot();
            },
            drawTop() {
                const opt = {
                    tooltip: {
                        formatter: '{b}: {c}人, 占比{d}%'
                    },
                    series: {
                        type: 'pie',
                        color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"],
                        radius: [65, 90],
                        name: '访问来源',
                        label: {
                            formatter: "{b}\n{c}，{d}%",
                            color: "#fff",
                            fontSize: 14,
                        },
                        labelLine: {
                            // length: 5,
                            // length2:3,
                            lineStyle: {
                                color: "#fff",
                            }
                        },
                        itemStyle:{
                            borderColor: '#05223a',
                            borderWidth: 2,
                        },
                        hoverOffset: 5,
                        selectedOffset: 5,
                        data: [
                            {value: 335, name: '5人以内'},
                            {value: 679, name: '35人以上'},
                            {value: 1548, name: '25-35人'},
                            {value: 679, name: '15-25人'},
                            {value: 679, name: '5-15人'},
                        ],
                    }
                };
                this.optTop = opt;
            },
            //
            drawMid() {
                let data = this.botChartsData;
                let sumNum = eval(data.map(item => {
                    return item.value
                }).join('+'));
                let yData = data.map(i => {
                    return `${(i.value / sumNum * 100).toFixed(2)}%`  //保留2位小数
                });

                function getData(data, initRadius, initWidth, initSpace) {
                    var res = [];
                    for (let i = 0; i < data.length; i++) {
                        res.push({
                            type: 'pie',
                            clockWise: true, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            radius: [initRadius + (i * (initSpace + initWidth)) + "%", initRadius + (i * (initSpace + initWidth) + initWidth) + "%"],
                            center: ["50%", "50%"],
                            label: {
                                show: false
                            },
                            color: ["#00ffd0", "#00ff55", "#177dff"].reverse()[i],
                            // color: ["#00ffd0", "#00ff55", "#177dff", "#00b6ff", "#41d700", "#d7d700", "#ff7d35", "#ff4141"].reverse()[i],
                            data: [{
                                value: data[i].value,
                                name: data[i].name
                            }, {
                                value: sumNum - data[i].value,
                                itemStyle: {
                                    color: "rgba(0,0,0,0)"
                                },
                                tooltip: {
                                    show: false
                                }
                            }]
                        });
                        res.push({
                            name: '',
                            type: 'pie',
                            silent: true,
                            z: 1,
                            clockWise: false, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            radius: [initRadius + (i * (initSpace + initWidth)) + "%", initRadius + (i * (initSpace + initWidth) + initWidth) + "%"],
                            center: ["50%", "50%"],
                            label: {
                                show: false
                            },
                            color: 'rgba(0,255,255,0.2)',
                            data: [{
                                value: 0,
                                tooltip: {
                                    show: false
                                },
                            }]
                        });
                    }
                    return res;
                }

                const opt = {
                    tooltip: {
                        show: true,
                        trigger: "item",
                        formatter: "{b}:{c}({d}%)"
                    },
                    yAxis: [{
                        show: false
                    }],
                    xAxis: [{
                        show: false
                    }],
                    series: getData(data, 30, 10, 10)
                };
                this.optMid = opt;
            },
            drawBot() {
                const opt = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    grid: {
                        left:"20px",
                        right:"20px",
                        bottom:"40px",
                        top:"40px",
                        containLabel: true
                    },
                    xAxis: {
                        type : 'category',
                        axisLine: {
                            lineStyle: {
                                color: "#00fefe",
                                width: 1
                            }
                        },
                        splitLine: {
                            show:false
                        },
                        axisLabel: {
                            color: "#fff",
                            interval: 0,
                            formatter:function(params) {
                                var newParamsName = "";
                                var paramsNameNumber = params.length;
                                var provideNumber = 3;  //一行显示几个字
                                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                                if (paramsNameNumber > provideNumber) {
                                    for (var p = 0; p < rowNumber; p++) {
                                        var tempStr = "";
                                        var start = p * provideNumber;
                                        var end = start + provideNumber;
                                        if (p == rowNumber - 1) {
                                            tempStr = params.substring(start, paramsNameNumber);
                                        } else {
                                            tempStr = params.substring(start, end) + "\n";
                                        }
                                        newParamsName += tempStr;
                                    }

                                } else {
                                    newParamsName = params;
                                }
                                return newParamsName
                            },
                        },
                        axisTick: {
                            show: false
                        },
                        data : ['案件总数','登记未审批','审核通过','签订协议','鉴定完毕','回执登记','归档']
                    },
                    yAxis: {
                        axisLine: {
                            show:false
                        },
                        splitLine: {
                            lineStyle: {
                                color: ["#007a77"]
                            }
                        },
                        axisTick: {
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
                            type: 'bar',
                            stack: '总量',
                            barWidth:22,
                            itemStyle: {
                                normal: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                },
                                emphasis: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
                            data: [0, 1700, 1400, 1200, 300, 0,0]
                        },
                        {
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            barWidth:22,
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 1,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: '#00b5b6' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#11ebbf' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                },
                                // barBorderRadius: [4, 0, 0, 4],
                            },
                            data:[2900, 1200, 300, 200, 900, 300, 300]
                        }
                    ]
                };
                this.optBot = opt;
            },
            countList(i) { //计算样式
                return `color:${["#02ffd0", "#00ff56", "#177cfe", "#00b6ff"][i]}`
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "judExpRight.stylus"
</style>
