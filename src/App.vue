<template>
    <div id="app">
        <div class="sidebar">
<!--            <div class="menu">-->
                <router-link class="menu" to="/">上班/下班</router-link>
                <router-link class="menu" to="/about">單據申請</router-link>
                <router-link class="menu" to="/schedule">日程表</router-link>
<!--            </div>-->

        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
    mounted() {
        this.$store.dispatch('INIT_CHECK')
    }

    }
</script>

<style lang="sass">
    *
        box-sizing: border-box
        font-family: 微軟正黑體
    body
        padding: 0
        margin: 0
        position: relative
        height: 100vh
    .sidebar
        position: absolute
        cursor: pointer
        width: 250px
        padding: 25px 40px
        height: 100%
        color: #6a6a6a
    .menu
        text-decoration: none
        display: flex
        letter-spacing: 1.5px
        padding: 10px 20px
        border-radius: 15px
        margin-bottom: 15px
        &:hover
            background: #c9beff
        &.active
            color: #fff
            background: #5843BE

</style>
