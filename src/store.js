import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios';

Vue.use(Vuex)
axios.defaults.baseURL = '/api'
export default new Vuex.Store({
    state: {
        client_token: localStorage.getItem('client_access_token') || null,

    },
    getters: {
        loggedIn(state) {
            return state.client_token !== null
        }
    },
    mutations: {
        retrieveTokenClient(state, token) {
            state.client_token = token
        },
        destroyTokenClient(state) {
            state.client_token = null
        },
        // getDatasetList(state, token) {
        //     state.client_token = token
        // }
    },
    actions: {
        getDatasetList (context) {
            return new Promise((resolve, reject) => {
                const header = {'Authorization': 'Token ' + this.state.client_token}
                axios.get('/clients/datasets/', {headers: header })
                .then(res => {
                    console.log(res) // eslint-disable-line no-console
                    context.commit('getDatasetList')
                    resolve(res)
                })
                .catch(err => {
                    console.log(err) // eslint-disable-line no-console
                    reject(err)
                })
            })
        },
        createClient (context, payload) {
            return new Promise((resolve, reject) => {
                const header = {'Authorization': 'Token ' + this.state.client_token}
                axios.post('/clients/datasets/', payload,{ headers:  header  })
                .then(res => {
                    console.log(res) // eslint-disable-line no-console
                    context.commit('createClient')
                    resolve(res)
                })
                .catch(err => {
                    console.log(err) // eslint-disable-line no-console
                    reject(err)
                })
            })
        },
        registerClient (context, payload) {
            return new Promise((resolve, reject) => {
                axios.post('/clients/register/', payload)
                .then(res => {
                    console.log(res) // eslint-disable-line no-console
                    context.commit('registerClient')
                    resolve(res)
                })
                .catch(err => {
                    console.error(err) // eslint-disable-line no-console
                    reject(err)
                })
            })
        },
        retrieveTokenClient(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/clients/api-token-auth/', credentials)
                .then(res => {
                    var userData = res.data
                    // console.log(userData)
                    const token = res.data.token
                    localStorage.setItem('client_access_token', token)
                    localStorage.setItem('user_data',  JSON.stringify(userData))
                    context.commit('retrieveTokenClient', token)
                    resolve(res)
                })
                .catch(err => {
                    console.error(err) // eslint-disable-line no-console
                    reject(err)
                })
            })
        },
        destroyTokenClient(context, credentials) {
            axios.defaults.headers.common['Authorization'] = 'Token ' + context.state.client_token
            // return new Promise((resolve, reject) => {
            //     axios.post('/clients/logout/')
            //     .then(res => {
                    localStorage.removeItem('client_access_token')
                    localStorage.removeItem('user_data')
                    context.commit('destroyTokenClient')
                //     resolve(res)
                // })
                // .catch(err => {
                //     localStorage.removeItem('client_access_token')
                //     localStorage.removeItem('user_data')
                //     context.commit('destroyTokenClient')
                //     reject(err)
                // })
            // })
        }
    }
})