<template>
    <div class="checkin-control">
        <div class="checkin-clock">
            <p>{{time}}</p>
        </div>
        <div class="checkin-input">
            <label class="checkin-label">
                <div class="title">員工編號:</div>
                <input @keydown.enter="searchHandler" v-model="searchText" class="content" placeholder="請輸入員工編號"/>
            </label>
            <label class="checkin-label">
                <div class="title">員工名稱:{{findEmp.name}}</div>
            </label>
            <label class="checkin-label">
                <div class="title">職稱:{{findEmp.title}}</div>
            </label>
        </div>
        <div class="checkin-footer">
            <button class="button" @click="checkHandler">打卡</button>
            <button class="button" @click="resetHandler">重設</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Info",
        data() {
            return {
                time: '',
                timer: null,
                resultKeyword: '1',
                searchText: ""
            }
        },
        computed: {
            empList() {
                return this.$store.state.empList
            },
            findEmp() {
                return this.empList.find(item => {
                    return this.resultKeyword === item.id
                }) || {}
            }
        },
        mounted() {
            this.updateTime()
            this.timer = setInterval(() => {
                // console.log(123)
                this.updateTime()
            }, 1000)
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        methods: {
            updateTime() {
                let date = new Date();
                this.time = date.toTimeString().substr(0, 8)
            },
            searchHandler() {
                this.resultKeyword = this.searchText
            },
            checkHandler() {
                //取得現有時間,員工編號
                this.$store.commit('CHECK_IN', {
                    id: this.findEmp.id,
                    time: this.time})
            },
            resetHandler() {
                this.$store.commit("RESET",{
                    id:this.findEmp.id,
                    time: this.time
                })
            },
        }

    }
</script>
<style lang="sass">
    .checkin
        &-control
            padding: 0 30px
            padding-top: 50px
            position: fixed
            top: 0
            right: 0
            height: 100%
            width: 400px
            background: #FCFCFC
        &-clock
            text-align: center
            font-size: 40px
            font-weight: bold
            margin-bottom: 20px
            padding-bottom: 50px
            border-bottom: 1px solid #e6e6e6
        &-input
            label
                margin-top: 40px
            input
                border: 0px
                font-size: 16px
                height: 40px
                outline: unset
                &::placeholder
                    color: #a1a2a3
                    font-style: italic
            .title
                font-size: 18px
                font-weight: 900
                margin-top: 10px
                margin-left: 20px
        &-footer
            border-top: 1px solid #E5E5E5
            padding-top: 40px
            display: flex
            width: 360px
            position: absolute
            bottom: 50px

            >.button
                display: flex
                justify-content: center
                align-items: center
                flex: 1
                height: 50px
                margin: 10px
                font-size: 18px
                letter-spacing: 3px
                border-radius: 12px
                cursor: pointer
                &:first-child
                    background: #195
                    color: #fff
                    &:hover
                        background: lighten(#195, 5%)
                &:last-child
                    color: #6a6a6a
                    &:hover
                        background: darken(#fff, 5%)
</style>