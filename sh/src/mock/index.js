import Mock from "mockjs"

const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let req = {
        edges:[],
        nodes:[]
    };
    let initData=[
        {name:'性别',value:'xb'},
        {name:'年龄',value:'nl'},
        {name:'民族',value:'mz'},
        {name:'罪名',value:'zm'},
        {name:'文化程度',value:'bqwhcd'},
        {name:'户口分类',value:'hklx'},
        {name:'捕前职业',value:'bqzy'},
        {name:'婚姻状况',value:'hyzl'},
        {name:'政治面貌',value:'bqmm'},
        {name:'团伙人数',value:'thrs'},
        {name:'前科次数',value:'qkcs'},
        {name:'计分考核',value:'jfkh'},
    ];
    let tree=[
        {from:1,to:7},
        {from:4,to:6},
        {from:0,to:8},
        {from:0,to:10},
        {from:3,to:4},
        {from:1,to:3},
        {from:5,to:6},
        {from:2,to:5},
        {from:0,to:7},
        {from:9,to:10},
        {from:0,to:11},
        {from:8,to:10},
        {from:3,to:7},
        {from:4,to:5},
        {from:2,to:4},
        {from:1,to:4},
        {from:6,to:7},
        {from:1,to:6},
        {from:2,to:6},
        {from:3,to:6},
        {from:5,to:8},
        {from:4,to:7},
        {from:4,to:8},
        {from:0,to:2},
        {from:7,to:8},
        {from:6,to:8},
        {from:5,to:10},
        {from:0,to:5},
        {from:2,to:7},
        {from:3,to:8},
        {from:2,to:8},
        {from:2,to:10},
        {from:0,to:6},
        {from:3,to:5},
        {from:6,to:10},
        {from:5,to:7},
        {from:1,to:8},
        {from:2,to:3},
        {from:4,to:10},
        {from:7,to:10},
        {from:1,to:5},
        {from:1,to:2},
        {from:0,to:1},
        {from:0,to:9},
        {from:0,to:3}
    ];
    for (let i = 0; i < tree.length; i++) {
        const color = Math.floor((i * 256) / tree.length);
        const RGB = `RGB(${color},${color},${color})`;
        let tmpObj={
            id:i,
            from:tree[i].from,
            to:tree[i].to,
            color:{color: RGB}
        }
        req.edges.push(tmpObj)
    }
    for (let j = 0; j < 12; j++) {
        let tmpObj2={
            color: {background: "#2cb2af", border: "#2cb2af", hover: {background: "#FDB63A",
                    border: "#FDB63A"}, highlight: {background: "#FDB63A",
                    border: "#fff"}},
            font: {color: "#fff", size: 17},
            id: j,
            key: initData[j].value,
            label: initData[j].name,
            scaling: {min: 10, max: 20, label: {enabled: true, max: 20, min: 10}},
            shape: "circle",
            value: Random.float(0, 0, 3, 6),
        }
        req.nodes.push(tmpObj2)
    }
    return {
        code: 200,
        data: req,
        msg: 'success'
    }
}
Mock.mock('/mock/netWorkData','post',produceNewsData);

const PieData = function(options){
    let initData={
        '文化程度':{
            pie:[{
                name: 'Chrome',
                y: 61.41
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }],
            bar:{}
        },
        '性别':{
            pie:[{
                    name: '男',
                    y: 61.41
                }, {
                    name: '女',
                    y: 50.41
                },
            ],
            bar:{}
        }
    }
    let curText=JSON.parse(options.body).curText
    let req=initData[curText];
    return {
        code: 200,
        data: req,
        msg: 'success'
    }
}
Mock.mock('/mock/PieData','post',PieData);

const doubleZmData = function(options){

    let req = {
        edges:[],
        nodes:[]
    };
    let initData=[
        {name:'破坏易燃易爆设备罪',value:'29',color:'#0e7f7c'},
        {name:'故意杀人罪',value:'162',color:'#3869b6'},
        {name:'故意伤害罪',value:'164',color:'#8b55f1'},
        {name:'强奸罪',value:'166',color:'#ff864b'},
        {name:'强制猥亵、侮辱妇女罪',value:'168',color:'#0e7f7c'},
        {name:'非法拘禁罪',value:'170',color:'#0e7f7c'},
        {name:'抢劫罪',value:'200',color:'#2cb2af'},
        {name:'盗窃罪',value:'201',color:'#ffde00'},
        {name:'诈骗罪',value:'202',color:'#3869b6'},
        {name:'抢夺罪',value:'203',color:'#0e7f7c'},
        {name:'敲诈勒索罪',value:'209',color:'#0e7f7c'},
        {name:'故意毁坏财物罪',value:'210',color:'#0e7f7c'},
        {name:'扰乱公共秩序罪',value:'213',color:'#3869b6'},
        {name:'妨害司法罪',value:'249',color:'#0e7f7c'},
        {name:'妨害文物管理罪',value:'276',color:'#1eabfc'},
        {name:'走私、贩卖、运输、制造毒品罪',value:'314',color:'#2CD095'},
    ];
    let tree=[
        {from:0,to:7},
        {from:1,to:7},
        {from:2,to:7},
        {from:3,to:7},
        {from:4,to:7},
        {from:5,to:7},
        {from:6,to:7},
        {from:8,to:7},
        {from:9,to:7},
        {from:10,to:7},
        {from:11,to:7},
        {from:12,to:7},
        {from:13,to:7},
        {from:14,to:7},
        {from:15,to:7},
    ];
    for (let i = 0; i < tree.length; i++) {
        const color = Math.floor((i * 256) / tree.length);
        let tmpObj={
            id:i,
            from:tree[i].from,
            to:tree[i].to
        }
        req.edges.push(tmpObj)
    }
    for (let j = 0; j < 16; j++) {
        let tmpObj2={

            font: {color: initData[j].color},
            id: j,
            key: initData[j].value,
            label: initData[j].name,

            shape: "icon",
            icon:{
                code:'\ue900',
                color: initData[j].color,
                face: "Beaver",
                size: 29.02536309269543
            },
            size:30,
        }
        req.nodes.push(tmpObj2)
    }
    return {
        code: 200,
        data: req,
        msg: 'success'
    }
}
Mock.mock('/mock/doubleZmData','post',doubleZmData);

const moveCrimeData=function(options){
    let timeList=[],minTime=2019;
    for(var i=0;i<22;i++){
        minTime--
        timeList.push(minTime)
    }
    let baseData=[];
    let baseList=[
        {fromName:'甘肃省', coords:["102.457625", "38.103267"]},
        {fromName:'陕西省', coords:["109.503789", "35.860026"]},
        {fromName:'河南省', coords:["113.486804", "34.157184"]},
        {fromName:'四川省', coords:["104.08231104016", "30.6567256497"]},
        {fromName:'云南省', coords:["101.592952", "24.864213"]},
        {fromName:'山西省', coords:["112.515496", "37.866566"]},
        {fromName:'河北省', coords:["115.661434", "38.61384"]},
        {fromName:'湖南省', coords:["111.720664", "27.695864"]},
        {fromName:'山东省', coords:["118.527663", "36.09929"]},
        {fromName:'内蒙古自治区', coords:["114.415868", "43.468238"]},
        {fromName:'重庆市', coords:["106.530635", "29.544606"]}
    ]
    for(var j=0;j<11;j++){
        baseData.push({
            coords: [baseList[j].coords, ["121.4648", "31.2891"]],
            count: Random.natural(50, 100),
            fromName:baseList[j].fromName,
            toName: "上海市",
        })
    }

    let req={
        timeList:timeList,
        detailData:[{
            coordinateSystem: "geo",
            data: baseData,
            effect: {color:"#fff",show: true, constantSpeed: 30, symbol: "pin", symbolSize: 5, trailLength: 0},
            large: true,
            lineStyle: {
                emphasis: {shadowColor: "#fff", color: "#ff382c", shadowBlur: 6},
                normal: {
                    color: {
                        colorStops: [{offset: 0, color: "#e5533b"}, {offset: 1, color: "#ff785c"}],
                        global: false,
                        type: "linear",
                        x: 0,
                        x2: 0,
                        y: 0,
                        y2: 1
                    },
                    width: 1,
                    opacity: 0.8,
                    curveness: 0
                }
            },
            name: "线路",
            type: "lines",
            zlevel: 2
        }]
    }
    return {
        code: 200,
        data: req,
        msg: 'success'
    }
}
Mock.mock('/mock/moveCrimeData','post',moveCrimeData);

//login
const loginData=function(options){
    let loginMes=JSON.parse(options.body);
    if(loginMes.username=='admin' && loginMes.password=='123456'){
        let req={
            username:options.username
        }
        return {
            code: 200,
            data: req,
            msg: 'success'
        }
    }else{
        let req={
            data:'用户名或密码错误'
        }
        return {
            code: 400,
            data: req,
            msg: 'fail'
        }
    }

}
Mock.mock('/mock/loginIn','post',loginData);