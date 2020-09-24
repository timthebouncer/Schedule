<template>
    <div class="calendar">
        <div class="calendar-bar">
            <span class="calendar-month">{{month}}</span>
            <button @click="today">Today</button>

            <i @click="changeIndex(-1)" class="el-icon-arrow-left"></i>
            <i @click="changeIndex(+1)" class="el-icon-arrow-right"></i>
        </div>
        <div class="calendar-grid">
            <div class="calendar-date not-current">
                <span class="calendar-date__day">30</span>
            </div>
            <div class="calendar-date not-current" >
                <span class="calendar-date__day">31</span>
            </div>
            <div class="calendar-date">
                <span class="calendar-date__day">{{today.day}}</span>
            </div>
            <div class="calendar-date">
                <span class="calendar-date__day"></span>
                <div class="caledar-date__schedule">
                    <div class="calendar-date__row">特休</div>
                </div>
            </div>
            <div class="calendar-date">
                <span class="calendar-date__day">3</span>
                <div class="calendar-date__row">加班2h</div>
            </div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date"></div>
            <div class="calendar-date not-current">
                <span class="calendar-date__day">1</span>
            </div>
            <div class="calendar-date not-current">
                <span class="calendar-date__day">2</span>
            </div>
            <div class="calendar-date not-current">
                <span class="calendar-date__day">3</span>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name:'calendar',
        data(){
            return{
                index:0,
                month:"",
                menu: [
                    {type:"",day:1},
                    {type:"",day:2},
                    {type:"",day:3},
                    {type:"",day:4},
                    {type:"",day:5},
                    {type:"",day:6},
                    {type:"",day:7},
                    {type:"",day:8},
                    {type:"",day:9},
                    {type:"",day:10},
                    {type:"",day:11},
                    {type:"",day:12},
                    {type:"",day:13},
                    {type:"",day:14},
                    {type:"",day:15},
                    {type:"",day:16},
                    {type:"",day:17},
                    {type:"",day:18},
                    {type:"",day:19},
                    {type:"",day:20},
                    {type:"",day:21},
                    {type:"",day:22},
                    {type:"",day:23},
                    {type:"",day:24},
                    {type:"",day:25},
                    {type:"",day:26},
                    {type:"",day:27},
                    {type:"",day:28},
                    {type:"",day:29},
                    {type:"",day:30},
                    {type:"",day:31}
                ]}
            },
        computed:{
            today(){
                console.log(this.menu[this.index])
                return this.menu[this.index]
            },
            // dayChange(){
            // moment('YYYY-MM-DD').subtract(1, 'month').format('LL')
            // moment('YYYY-MM-DD').add(1, 'month').format('LL')
            //     }

            }
            // total(){
            //     return this.menu.length
            // }
        ,
        methods:{
            changeIndex(change) {
                this.month = this.month + change + this.menu
            },
            moment: function (date) {
                    return moment(date)
                },

        }
    }
</script>

<style lang="sass">
    .calendar
        margin-left: 250px
        // margin-right: 400px
        padding: 40px
        &-bar
            position: relative
            display: flex
            align-items: center
            justify-content: flex-end
            i
                color: #5843be
                font-size: 20px
                margin-left: 15px
        &-month
            font-size: 32px
            font-weight: bold
            position: absolute
            left: 0
        &-grid
            width: 841px
            margin-top: 25px
            border: 1px solid #beb
            border-width: 1px  0   0  1px
            display: flex
            flex-wrap: wrap
        &-date
            padding: 4px
            position: relative
            width: 120px
            height: 120px
            border-style: solid
            border-color: #beb
            border-width:  0  1px 1px  0
        &__day
            display: block
            color: #777
            text-align: right
        &__row
            width: 100%
            padding: 2px 4px
            border-radius: 4px
            height: 24px
            background: lighten(#5843BE,40%)
        .not-current
            background: rgba(0,0,0,0.04)
            span
                color: #ccc
</style>