<template>
    <div class="calendar">
        <div class="calendar-bar">
            <span class="calendar-month">{{calendar.year}}  {{calendar.month+1}}月</span>
            <button @click="returnToday">Today</button>

            <i @click="changeMonth(false)" class="el-icon-arrow-left"></i>
            <i @click="changeMonth(true)" class="el-icon-arrow-right"></i>
        </div>

        <div class="calendar-grid">
<!--            <div class="calendar-date not-current" >-->
<!--                <span class="calendar-date__day"></span>-->
<!--            </div>-->

            <div class="calendar-date" :class="{'not-current': i.month!==calendar.month}" v-for="(i,key) in calendarMonth" :key="key">
                <span class="calendar-date__day">{{i.date}}</span>
            </div>

<!--            <div class="calendar-date not-current">-->
<!--                <span class="calendar-date__day"></span>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: 'calendar',
        data() {
            return {
                calendar:{
                    year: 0,
                    month: 1,
                    date: 0,
                    day: 0
                },
                today:{
                    year:0,
                    month:0,
                    date:0,
                    day:0
                },
            }
        },
        mounted() {
            const date = new Date()
            this.today.year = this.calendar.year = date.getFullYear()
            this.today.month = this.calendar.month = date.getMonth()
            this.today.date = this.calendar.date = date.getDate()
            this.today.day = this.calendar.day = date.getDay()
        },
        methods: {
            moment: function () {
                return moment();
            },
            changeMonth(isNext){
                let month = this.calendar.month
                isNext === true? (month = month+1):(month = month-1)

                if(month < 0){
                    month = 11
                }else{
                    if (month > 11){
                        month = 0
                    }
                }
                this.calendar.month = month
                this.calendar.date = 1
            },
            returnToday(){
                this.calendar.month =  this.today.month
                this.calendar.date = this.today.date
            }
        },
        computed: {
            firstDay() {
            const mDate = new Date(this.calendar.year,this.calendar.month,1)
            const date = new Date(this.calendar.year,this.calendar.month,1 - mDate.getDay())
            return{
                year:date.getFullYear(),
                month:date.getMonth(),
                date:date.getDate(),
                day:date.getDay()
                }
            },
            calendarMonth(){
                const data = []
                let date
                for(let i=0; i<42; i++){
                 date = new Date(this.firstDay.year,this.firstDay.month,this.firstDay.date +i)
                 data.push({
                    year:date.getFullYear(),
                    month:date.getMonth(),
                    date:date.getDate(),
                    day:date.getDay()
                })

                }
                return data

            },
            // notCurrent(){
            //     if(this.calendar.month != this.today.month)
            //         return false
            // }

        }


    }
</script>

<style lang="sass">

    .sss
        color: #ff253a
        background-color: red

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