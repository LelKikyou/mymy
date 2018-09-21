<template>
    <div class="home">
        <headTab></headTab>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import headTab from '../components/headTab/headTab'

    export default {
        name: 'home',
        data() {
            return {
            }
        },
        created(){
        },
        components: {
            headTab: headTab
        }
    }
</script>
<style scoped>
    .home {
        width: 100%;
        height: 100%;
    }

    .home .content {
        width: 100%;
        height: calc(100% - 60px);
    }
</style>
