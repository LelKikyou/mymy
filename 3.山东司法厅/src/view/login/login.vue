<template>
    <div class="login">
        <div class="loginFrom">
            <div class="nameTit">
                <img class="img" src="@/assets/mainScreen/LOGO.png"><span>山东省司法厅数据协同平台</span>
            </div>
            <p class="loginTit">用户登录</p>
            <el-form :model="loginForm" :rules="rules" ref="loginForm">
                <el-form-item prop="username">
                    <i class="iconfont iconzhanghao labIcon"></i>
                    <el-input :disabled="loading" placeholder="请输入账号" @keyup.enter.native="handleLogin"
                              v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <i class="iconfont iconmima labIcon"></i>
                    <el-input :disabled="loading" placeholder="请输入密码" type="password" v-model="loginForm.password"
                              @keyup.enter.native="handleLogin"
                              autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :loading="loading" class="loginBtn" type="primary" @click="handleLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    export default {
        name: "login",
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('必填'))
                } else {
                    callback()
                }
            }
            const validatePassword = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('必填'))
                } else {
                    callback()
                }
            };
            return {
                loginForm: {
                    username: "",
                    password: ""
                },
                rules: {
                    username: [{required: true, trigger: 'blur', validator: validateUsername}],
                    password: [{required: true, trigger: 'blur', validator: validatePassword}]
                },
                //加载状态
                loading: false
            }
        },
        methods: {
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        this.$store.dispatch("handleLoginIn", this.loginForm).then(() => {
                            this.loading = false;
                            this.$router.push({
                                path: "/"
                            })
                        }).catch((err) => {
                            alert(err.status)
                            this.loading = false;
                        })
                    }
                })
            }
        }
    }
</script>
<style lang="stylus">
    .login .loginFrom
        .loginBtn
            width 346px
            height 46px
            background-color rgba(5, 134, 155, 0.8)
            border-color #05869b
            font-size 20px
            letter-spacing: 1px;
            &:hover
                background-color #05869b
                border-color rgba(5, 134, 155, 0.8)
        .el-form
            text-align center
            margin-top 25px
        .el-form-item__error
            left 50%
            transform translateX(-170px)
            top 48px
        .labIcon
            border: 1px solid #0ff;
            border-right: none;
            width: 46px;
            color #00ffff
            font-size: 31px;
            vertical-align: top;
            line-height 46px
            height: 46px;
            display: inline-block;
        .el-input
            width 300px
            height 46px
            .el-input__inner
                height 46px
                line-height 46px
                background-color transparent
                border-radius 0
                border-color #00ffff
                color: #ccc
                font-size: 16px
</style>
<style lang="stylus" scoped>
    @import "login.stylus"
</style>
