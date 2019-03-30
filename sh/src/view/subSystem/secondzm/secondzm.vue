<template>
    <div class="box-wrap">
        <div class="box-left">
        <div class="box-title">
            <h3 >二次犯罪</h3>
        </div>
        <div id="mynetwork1" class="mynetwork"></div>
        </div>
        <div class="box-right">
            <div class="box-2">
                <ul class="detail-list">
                    <li class="detail-item ">
                        <span>{{this.curText}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {GetNetWorkData} from "@/api/mockApi"
    export default {
        name: "doublezm",
        components: {

        },
        data() {
            return {
                curText:'文化程度',
            }
        },
        methods:{

        },
        mounted() {
            let that=this;
            GetNetWorkData().then(res => {
                var container = document.getElementById('mynetwork1');
                var data = {
                    "nodes": [
                        {
                        "id": 0,
                        "label": "盗窃罪",
                        "x": 0,
                        "y": 266.6666666666667,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 1,
                        "label": "走私、贩卖、运输、制造毒品罪",
                        "x": 0,
                        "y": 106.66666666666667,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 2,
                        "label": "扰乱公共秩序罪",
                        "x": 0,
                        "y": 586.6666666666667,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 3,
                        "label": "抢劫罪",
                        "x": 0,
                        "y": 480,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 4,
                        "label": "故意伤害罪",
                        "x": 0,
                        "y": 426.6666666666667,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 5,
                        "label": "诈骗罪",
                        "x": 0,
                        "y": 160,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 6,
                        "label": "故意毁坏财物罪",
                        "x": 0,
                        "y": 320,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 7,
                        "label": "金融诈骗罪",
                        "x": 0,
                        "y": 53.333333333333336,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 8,
                        "label": "强奸罪",
                        "x": 0,
                        "y": 640,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 9,
                        "label": "妨害司法罪",
                        "x": 0,
                        "y": 693.3333333333334,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 10,
                        "label": "扰乱市场秩序罪",
                        "x": 0,
                        "y": 533.3333333333334,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 11,
                        "label": "破坏电力设备罪",
                        "x": 0,
                        "y": 213.33333333333334,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 12,
                        "label": "故意杀人罪",
                        "x": 0,
                        "y": 373.33333333333337,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 13,
                        "label": "交通肇事罪",
                        "x": 0,
                        "y": 800,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 14,
                        "label": "非法拘禁罪",
                        "x": 0,
                        "y": 0,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 15,
                        "label": "受贿罪",
                        "x": 0,
                        "y": 746.6666666666667,
                        "size": 5,
                        "type": "首次犯罪",
                        "antitype": "二次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 16,
                        "label": "盗窃罪",
                        "x": 600,
                        "y": 246.15384615384616,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 17,
                        "label": "走私、贩卖、运输、制造毒品罪",
                        "x": 600,
                        "y": 61.53846153846154,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 18,
                        "label": "扰乱公共秩序罪",
                        "x": 600,
                        "y": 676.9230769230769,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 19,
                        "label": "抢劫罪",
                        "x": 600,
                        "y": 553.8461538461538,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 20,
                        "label": "故意伤害罪",
                        "x": 600,
                        "y": 430.7692307692308,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 21,
                        "label": "诈骗罪",
                        "x": 600,
                        "y": 184.6153846153846,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 22,
                        "label": "金融诈骗罪",
                        "x": 600,
                        "y": 0,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 23,
                        "label": "交通肇事罪",
                        "x": 600,
                        "y": 800,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 24,
                        "label": "妨害司法罪",
                        "x": 600,
                        "y": 738.4615384615385,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 25,
                        "label": "猥亵儿童罪",
                        "x": 600,
                        "y": 307.6923076923077,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 26,
                        "label": "扰乱市场秩序罪",
                        "x": 600,
                        "y": 615.3846153846154,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 27,
                        "label": "贪污罪",
                        "x": 600,
                        "y": 123.07692307692308,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 28,
                        "label": "敲诈勒索罪",
                        "x": 600,
                        "y": 369.2307692307692,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 29,
                        "label": "放火罪",
                        "x": 600,
                        "y": 492.3076923076923,
                        "size": 5,
                        "type": "二次犯罪",
                        "antitype": "首次犯罪",
                        "color": {
                            "border": "#aaa",
                            "background": "#e5533b",
                            "hover": {
                            "border": "#18A689",
                            "background": "#e5533b"
                            },
                            "highlight": {
                            "border": "#FFF",
                            "background": "#ee2200"
                            }
                        },
                        "font": {
                            "color": "#fff",
                            "size": 17
                        },
                        "shape": "box"
                        },
                        {
                        "id": 30,
                        "label": "首次犯罪",
                        "x": 0,
                        "y": -50,
                        "shape": "text",
                        "font": {
                            "size": 20,
                            "color": "#ccc"
                        }
                        },
                        {
                        "id": 31,
                        "label": "二次犯罪",
                        "x": 600,
                        "y": -50,
                        "shape": "text",
                        "font": {
                            "size": 20,
                            "color": "#ccc"
                        }
                        }
                    ],
                    "edges": [
                        {
                        "from": 9,
                        "to": 16,
                        "count": 2
                        },
                        {
                        "from": 1,
                        "to": 20,
                        "count": 4
                        },
                        {
                        "from": 9,
                        "to": 20,
                        "count": 2
                        },
                        {
                        "from": 12,
                        "to": 20,
                        "count": 1
                        },
                        {
                        "from": 0,
                        "to": 19,
                        "count": 6
                        },
                        {
                        "from": 7,
                        "to": 21,
                        "count": 1
                        },
                        {
                        "from": 7,
                        "to": 22,
                        "count": 3
                        },
                        {
                        "from": 1,
                        "to": 17,
                        "count": 31
                        },
                        {
                        "from": 1,
                        "to": 16,
                        "count": 3
                        },
                        {
                        "from": 2,
                        "to": 20,
                        "count": 3
                        },
                        {
                        "from": 3,
                        "to": 16,
                        "count": 3
                        },
                        {
                        "from": 4,
                        "to": 20,
                        "count": 5
                        },
                        {
                        "from": 8,
                        "to": 17,
                        "count": 2
                        },
                        {
                        "from": 0,
                        "to": 20,
                        "count": 1
                        },
                        {
                        "from": 6,
                        "to": 18,
                        "count": 3
                        },
                        {
                        "from": 2,
                        "to": 18,
                        "count": 7
                        },
                        {
                        "from": 3,
                        "to": 18,
                        "count": 2
                        },
                        {
                        "from": 1,
                        "to": 18,
                        "count": 1
                        },
                        {
                        "from": 3,
                        "to": 21,
                        "count": 1
                        },
                        {
                        "from": 3,
                        "to": 17,
                        "count": 1
                        },
                        {
                        "from": 10,
                        "to": 21,
                        "count": 2
                        },
                        {
                        "from": 0,
                        "to": 21,
                        "count": 3
                        },
                        {
                        "from": 7,
                        "to": 17,
                        "count": 1
                        },
                        {
                        "from": 0,
                        "to": 18,
                        "count": 4
                        },
                        {
                        "from": 13,
                        "to": 21,
                        "count": 1
                        },
                        {
                        "from": 9,
                        "to": 17,
                        "count": 2
                        },
                        {
                        "from": 3,
                        "to": 25,
                        "count": 1
                        },
                        {
                        "from": 3,
                        "to": 20,
                        "count": 2
                        },
                        {
                        "from": 14,
                        "to": 17,
                        "count": 1
                        },
                        {
                        "from": 4,
                        "to": 17,
                        "count": 2
                        },
                        {
                        "from": 0,
                        "to": 23,
                        "count": 2
                        },
                        {
                        "from": 8,
                        "to": 29,
                        "count": 1
                        },
                        {
                        "from": 14,
                        "to": 20,
                        "count": 1
                        },
                        {
                        "from": 0,
                        "to": 17,
                        "count": 11
                        },
                        {
                        "from": 4,
                        "to": 26,
                        "count": 1
                        },
                        {
                        "from": 5,
                        "to": 21,
                        "count": 4
                        },
                        {
                        "from": 4,
                        "to": 28,
                        "count": 1
                        },
                        {
                        "from": 15,
                        "to": 27,
                        "count": 1
                        },
                        {
                        "from": 0,
                        "to": 26,
                        "count": 1
                        },
                        {
                        "from": 14,
                        "to": 18,
                        "count": 1
                        },
                        {
                        "from": 4,
                        "to": 18,
                        "count": 3
                        },
                        {
                        "from": 2,
                        "to": 17,
                        "count": 1
                        },
                        {
                        "from": 13,
                        "to": 18,
                        "count": 1
                        },
                        {
                        "from": 3,
                        "to": 19,
                        "count": 5
                        },
                        {
                        "from": 0,
                        "to": 16,
                        "count": 104
                        },
                        {
                        "from": 0,
                        "to": 25,
                        "count": 1
                        },
                        {
                        "from": 12,
                        "to": 24,
                        "count": 1
                        },
                        {
                        "from": 11,
                        "to": 17,
                        "count": 1
                        },
                        {
                        "from": 8,
                        "to": 16,
                        "count": 2
                        },
                        {
                        "from": 6,
                        "to": 20,
                        "count": 1
                        }
                    ]
                    }
                const options = {
                    nodes: {
                        scaling: {
                        label: {
                                enabled: true
                            }
                        },
                        fixed: true
                    },
                    edges: {
                        smooth: false,
                        scaling: {
                        label: {
                                enabled: true
                            }
                        },
                        color: {
                            color: '#fff',
                            highlight: '#fff'
                        }
                    },
                    manipulation: {
                        enabled: false
                    },
                    /* physics: {
                    enabled: true,
                    minVelocity: 0.75
                    }, */
                    autoResize: true
                };
                var network =new this.$vis.Network(container, data, options);
                network.on('selectNode', (params) => {
                    that.curText=data.nodes[params.nodes[0]] .label;
                    console.log(that.curText)
                });
                // network.on('click', (params) => {
                //     const nodeList = params.nodes;
                //     if (nodeList.length === 1) {
                //         const node = $scope.ljdata.nodes[nodeList[0]];
                //         const detailedNode = { node };
                //         const distribution = [];
                //         for (let i = 0; i < $scope.ljdata.edges.length; i++) {
                //         if ($scope.ljdata.edges[i].from === node.id) {
                //             distribution.push({ label: $scope.ljdata.nodes[$scope.ljdata.edges[i].to].label, count: $scope.ljdata.edges[i].count });
                //         } else if ($scope.ljdata.edges[i].to === node.id) {
                //             distribution.push({ label: $scope.ljdata.nodes[$scope.ljdata.edges[i].from].label, count: $scope.ljdata.edges[i].count });
                //         }
                //         }
                //         distribution.sort((a, b) => {
                //         return a.count > b.count ? -1 : 1;
                //         });
                //         detailedNode.distribution = distribution;
                //         $scope.detailedLjNode = detailedNode;
                //         $scope.$apply();
                //     }
                //     });
                //     network.on('deselectNode', (params) => {
                //     $scope.detailedLjNode = null;
                //     $scope.$apply(); // 需要手动刷新
                // });
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>
<style lang="stylus" scoped>
    @import "secondzm.stylus"
</style>