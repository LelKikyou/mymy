export default {
    state:{
        tabData: {
            nav:[
                {
                    name: "标题1",
                    url: 'b1'
                },
                {
                    name: "标题2",
                    url: 'b2'
                },
                // {
                //     name: "标题3",
                //     url: 'b1'
                // },
                // {
                //     name: "标题4",
                //     url: 'b2'
                // },
                // {
                //     name: "标题5",
                //     url: 'b1'
                // },
                // {
                //     name: "标题6",
                //     url: 'b2'
                // },
                // {
                //     name: "标题7",
                //     url: 'b1'
                // },
                // {
                //     name: "标题8",
                //     url: 'b2'
                // },
                // {
                //     name: "标题9",
                //     url: 'b1'
                // },
                // {
                //     name: "标题10",
                //     url: 'b2'
                // }
            ],
            active:-2,
            tabScrollLeft:0
        }
    },
    getters:{
        getNav(state){
            return state.tabData.nav;
        },
        getActive(state){
            return state.tabData.active;
        },
        getTabData(state){
            return state.tabData;
        },
        getTabScrollLeft(state){
            return state.tabData.tabScrollLeft;
        }
    },
    mutations:{
        spliceNav(state,index){
            state.tabData.nav.splice(index,1);
        },
        //添加头部nav方法传入参数
        addNav(state,data){
            let name=data.name;
            let nav=state.tabData.nav;
            let lock=false;
            let active=0;
            for(let i=0;i<nav.length;i++){
                if(name===nav[i].name){
                    lock=true;
                    active=i;
                    break
                }
            }
            if(lock){
                state.tabData.active=active;
            }else {
                state.tabData.active=nav.length;
                nav.push(data);
            }
        },
        setTabData(state,data){
            state.tabData=data;
        },
        setActive(state,index){
            state.tabData.active=index;
        },
        setTabScrollLeft(state,left){
            state.tabData.tabScrollLeft=left;
        }
    }
}