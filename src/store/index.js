import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS ={
    load(){
        return JSON.parse(localStorage.getItem('checkIn')  || '[]')
    },
    save(data){
        localStorage.setItem('checkIn', JSON.stringify(data))
    }
}


export default new Vuex.Store({
    state: {
        empList:
            [{
                id: '1',
                name: 'qqq',
                title: 'www',
                today: '',
                date: '',
                onWork: null,
                offWork: null
            },
            {
                id: '2',
                name: 'eee',
                title: 'rrrr',
                today: '',
                date: '',
                onWork: null,
                offWork: null
            },
            {
                id: '3',
                name: 'yyy',
                title: 'jjjj',
                today: '',
                date: '',
                onWork: null,
                offWork: null
            }
            ]
    },
    mutations: {
        SET_CHECK(state, data){
            state.empList = data
            LS.save(state.empList)
        },
        CHECK_IN(state,payload){
            let emp = state.empList.find(item=>item.id === payload.id)
            if(emp){
                if(emp.onWork){
                    emp.offWork = payload.time
                }else{
                    emp.onWork = payload.time
                }
            }
            LS.save(state.empList)
        },
        RESET(state, payload){
            let refresh = state.empList.find(item=>
                item.id === payload.id)
            if(refresh){
                if(refresh.offWork){
                    refresh.offWork = null
                }else {
                    refresh.onWork = null
                }
            }
            LS.save(state.empList)
        },
    },
    actions: {
        INIT_CHECK({commit}){

            commit('SET_CHECK',LS.load())
        }
    },
    modules: {}
})
