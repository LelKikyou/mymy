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
                {
                    name: "标题3",
                    url: 'b1'
                },
                {
                    name: "标题4",
                    url: 'b2'
                },
                {
                    name: "标题5",
                    url: 'b1'
                },
                {
                    name: "标题6",
                    url: 'b2'
                },
                {
                    name: "标题7",
                    url: 'b1'
                },
                {
                    name: "标题8",
                    url: 'b2'
                },
                {
                    name: "标题9",
                    url: 'b1'
                },
                {
                    name: "标题10",
                    url: 'b2'
                }
            ],
            active:-2
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
        }
    },
    mutations:{
        spliceNav(state,index){
            state.tabData.nav.splice(index,1);
        },
        addNav(state,data){
            state.tabData.nav.push(data);
        },
        setTabData(state,data){
            state.tabData=data;
        },
        setActive(state,index){
            state.tabData.active=index;
        }
    }
}