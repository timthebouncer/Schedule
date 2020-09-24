<template>
    <div class="checkin-records">
        <div class="checkin-item" v-for="(item, key) in empList" :key="key">
            <div class="checkin-date">
                <div class="week">{{item.today}}</div>
                <div class="date">{{item.date}}</div>
            </div>
            <div class="checkin-record">
                <div class="checkin-on">
                    上班:{{item.onWork}}
                </div>
                <div class="checkin-off">
                    下班:{{item.offWork}}
                </div>
            </div>
        </div>
        <Info/>
    </div>
</template>

<script>
    import Info from '@/components/Info.vue'
    export default {
        name:"See",
        components:{
            Info
        },
        computed:{
            empList(){
                return this.$store.state.empList
            },
            // updateTime(){
            //
            // }

        }
    }
</script>
<style lang="sass">
    .checkin
        &-records
            margin-left: 250px
            margin-right: 400px
            padding: 40px
        &-item
            clip-path: polygon(85% 0, 100% 50%, 85% 100%, 0 100%, 0 0)
            max-width: 300px
            // border: 1px solid #c3c3c0
            border-radius: 30px
            display: flex
            &:hover
                background: #f3f2f3
        &-date
            padding-right: 20px
            margin: 20px
            border-right: 1px solid #E6E6E6
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            .week
                font-size: 14px
                color: #787C84
            .date
                font-size: 32px
                font-weight: bold
        &-record
            padding: 30px 0
            color: #787C84
            display: flex
            flex-direction: column
            justify-content: space-around
</style>