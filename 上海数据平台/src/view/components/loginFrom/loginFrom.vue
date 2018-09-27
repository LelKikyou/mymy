<template>
    <div class="loginFrom">
        <div style="position: relative">
            <i class="iconfont icon-zhanghu"></i>
            <Input v-model="login.username" @keyup.enter.native="loginBtn" placeholder="账户"/>
        </div>
        <div style="position: relative;margin-top: 20px;">
            <i class="iconfont icon-mima"></i>
            <Input v-model="login.password" @keyup.enter.native="loginBtn" type="password" placeholder="密码"/>
        </div>
        <div v-show="err" class="err">
            <i class="iconfont icon-jinggao"></i>
            <span>{{err}}</span>
        </div>
        <div style="margin-top: 30px;position: relative;">
            <img v-show="loading" width="40" disabled style="position: absolute;top: 5px;left: 155px;"
                 src="../../../assets/login/Loading.gif">
            <Button @click="loginBtn" :disabled="loading" v-text="loading?'':'登录'"></Button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {TOKEN} from "../../../api/URL";
    import Cookies from "js-cookie"
    export default {
        name: "loginFrom",
        data() {
            return {
                err: "",
                loading: false,
                login: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions({
                loginUser: "loginUser"
            }),
            loginBtn() {
                Cookies.set(TOKEN,"xx")
                this.$router.push({
                    name: 'home'
                })


                // this.loading = true;
                // //获取登录信息
                // this.loginUser(this.login).then((res) => {
                //     this.loading = false;
                //     this.err = res.mes;
                //     this.$router.push({
                //         name: 'home'
                //     })
                // }).catch((err) => {
                //     this.loading = false;
                //     this.err = err.mes;
                // })
            }
        }
    }
</script>

<style>
    .loginFrom {
        width: 100%;
        height: 100%;
    }

    .loginFrom > div {
        width: 100%;
        height: 50px;
    }

    .loginFrom .ivu-input {
        height: 50px;
        padding-left: 60px;
        background-color: #729abd;
        border: 1px solid #729abd;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
    }

    .loginFrom .ivu-input:focus {
        border-color: #bebb6d;
    }

    .loginFrom .iconfont {
        position: absolute;
        top: 5px;
        left: 20px;
        z-index: 1;
        font-size: 30px;
        color: #375579;
    }

    .loginFrom .ivu-btn {
        width: 100%;
        height: 50px;
        background-color: #cfbb40;
        font-size: 30px;
        border: none;
        color: #fff;
        line-height: 30px;
    }

    .loginFrom .ivu-btn:active {
        background-color: #fbd22c;
        color: #fff;
    }

    .loginFrom .ivu-btn:hover {
        background-color: #e8ca39;
        color: #fff;
    }

    .loginFrom .err {
        position: relative;
        margin-top: 10px;
        width: 100%;
        height: 30px;
    }

    .loginFrom .err .iconfont {
        position: absolute;
        top: 0;
        left: 22px;
        color: #03daf6;
        font-size: 20px;
    }

    .loginFrom .err span {
        position: absolute;
        top: 2px;
        left: 60px;
        font-size: 17px;
        color: #03daf6;
    }

    .loginFrom .err .ivu-btn.disabled, .ivu-btn.disabled.active, .ivu-btn.disabled:active, .ivu-btn.disabled:focus, .ivu-btn.disabled:hover, .ivu-btn[disabled], .ivu-btn[disabled].active, .ivu-btn[disabled]:active, .ivu-btn[disabled]:focus, .ivu-btn[disabled]:hover, fieldset[disabled] .ivu-btn, fieldset[disabled] .ivu-btn.active, fieldset[disabled] .ivu-btn:active, fieldset[disabled] .ivu-btn:focus, fieldset[disabled] .ivu-btn:hover {
        background-color: #fbd22c !important;
    }
</style>