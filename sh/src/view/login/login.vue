<template>
    <div class="login">
        <div class="content">
            <div class="title">上海执行矫治平台</div>
            <div class="login-content">
                <loginFrom></loginFrom>
            </div>
        </div>
    </div>
</template>

<script>
    import loginFrom from './components/loginFrom/loginFrom'
    export default {
        name: "login",
        components: {
            loginFrom
        }
    }
</script>

<style scoped>
    .login {
        position: relative;
        width: 100%;
        height: 100%;
        background: url("../../assets/shzxjzpt/body_bg.png") no-repeat;
        background-size: cover;
    }

    .login .content {
        width: 350px;
        height: 335px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .title {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        letter-spacing: 1px;
        color:#fff
    }

    .login-content {
        margin-top: 40px;
        width: 100%;
        height: 240px;
    }
</style>