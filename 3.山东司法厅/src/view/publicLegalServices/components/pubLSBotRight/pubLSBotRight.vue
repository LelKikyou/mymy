<template>
    <div class="pubLSBotRight">
        <chart :option="option"></chart>
    </div>
</template>

<script>
    import chart from "@/components/charts"

    export default {
        name: "pubLSBotRight",
        components: {
            chart
        },
        data() {
            return {
                option: {}
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.draw();
            },
            draw() {
                let data = [
                    {
                        name: "城市法律服务所",
                        value: 565
                    },
                    {
                        name: "农村法律服务所",
                        value: 922
                    }
                ];
                let sumNum = eval(data.map(item => {
                    return item.value
                }).join('+'));

                /*
                data 数据来源
                initRadius 初始化圆心的宽度
                initSpace 饼图之间的间隔
                initWidth 饼图的宽度
                 */
                function getData(data, initRadius, initWidth, initSpace) {
                    var res = []
                    for (let i = 0; i < data.length; i++) {
                        res.push({
                            type: 'pie',
                            clockWise: false, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            radius: [initRadius + (i * (initSpace + initWidth)) + "%", initRadius + (i * (initSpace + initWidth) + initWidth) + "%"],
                            center: ["50%", "25%"],
                            label: {
                                formatter: ['{b|{b}}', '{c|{c}人}'].join('\n'),
                                rich: {
                                    b: {
                                        width: 100,
                                        align: "center",
                                        fontSize: 12,
                                        color: "#fff",
                                        lineHeight: 20,
                                    },
                                    c: {
                                        fontWeight: "bold",
                                        width: 100,
                                        align: "center",
                                        fontSize: 24,
                                        lineHeight: 20,
                                    }
                                }
                            },
                            color: ["#00ffd0", "#00ff55"][i],
                            data: [{
                                value: data[i].value,
                                name: data[i].name
                            }, {
                                value: sumNum - data[i].value,
                                name: '',
                                itemStyle: {
                                    color: "rgba(0,0,0,0)",
                                    borderWidth: 0
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
                            center: ["50%", "25%"],
                            label: {
                                show: false
                            },
                            color: ["#03475a"],
                            data: [{
                                value: 0,
                            }]
                        });
                    }
                    return res;
                }

                const opt = {
                    title: {
                        text: '法律服务所',
                        subtext: '分布',
                        x: 'center',
                        y: 96,
                        textStyle: {
                            fontSize: 16,
                            color: ['#fff']
                        },
                        subtextStyle: {
                            color: '#fff',
                            fontSize: 16
                        }
                    },
                    series: getData(data, 25, 6, 4)
                };
                let genderData = [
                    {value: 2419, name: '女性'},
                    {value: 5794, name: '男性'},
                ];
                const optGenderseries = {
                    type: 'pie',
                    color: ["#ff6360", "#177dff"],
                    radius: [70, 80],
                    center: ['32%', '75%'],
                    label: {
                        formatter: '{b|{b}} \n{c|{c}}人\n 占比{d}%',
                        position: "inside",
                        rich: {
                            b: {
                                align: "center",
                                fontSize: 16,
                                color: "#fff",
                                lineHeight: 20,
                            },
                            c: {
                                fontWeight: "bold",
                                align: "center",
                                fontSize: 18,
                                lineHeight: 20,
                                color: "#fff",
                            }
                        }
                    },
                    labelLine: {
                        length: 0,
                        length2: 0
                    },
                    data: genderData,

                };
                opt.series.push(optGenderseries);
                let data2 = [
                    {value: 7051, name: '律师专业'},
                    {value: 1162, name: '其他专业'},
                ];
                const opt2series = {
                    type: 'pie',
                    color: ["#00ff55", "#00ffd0"],
                    radius: [70, 80],
                    center: ['75%', '75%'],
                    label: {
                        formatter: '{b|{b}} \n{c|{c}}人\n 占比{d}%',
                        position: "inside",
                        rich: {
                            b: {
                                align: "center",
                                fontSize: 16,
                                color: "#fff",
                                lineHeight: 20
                            },
                            c: {
                                fontWeight: "bold",
                                align: "center",
                                fontSize: 18,
                                lineHeight: 20,
                                color: "#fff",
                            }
                        }
                    },
                    labelLine: {
                        length: 0,
                        length2: 0,
                    },
                    hoverOffset: 5,
                    selectedOffset: 5,
                    data: data2,
                };
                opt.series.push(opt2series);
                this.option = opt;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "pubLSBotRight.stylus"
</style>
