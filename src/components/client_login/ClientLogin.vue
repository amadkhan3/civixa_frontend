<template>
    <div>
        <b-card style="max-width: 20rem;" class="mx-auto">
            <b-card-title>Client Login</b-card-title>    
            <b-form 
            @submit.prevent="submitForm"
            >
                <b-form-group 
                id="username-group-1"
                label="Username"
                label-for="username-input-1"
                description="Enter your username/email here"
                >
                    <b-form-input
                    id="username-input-1"
                    name="username"
                    v-model="form.username"
                    required
                    placeholder="Enter Username"
                    v-on:input="$v.form.username.$touch"
                    :state="$v.form.username.$dirty ? !$v.form.username.$error: null"
                    ></b-form-input>
                </b-form-group>
                <b-form-group 
                id="pwd-group-1"
                label="Password"
                label-for="pwd-input-1"
                description="Please enter your Password."
                >
                    <b-form-input
                    name="password"
                    id="pwd-input-1"
                    type="password"
                    v-model="form.password"
                    required
                    placeholder="Password"
                    v-on:input="$v.form.password.$touch"
                    :state="$v.form.password.$dirty ? !$v.form.password.$error: null"
                    ></b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-button block type="submit" variant="primary">Login</b-button>
                </b-form-group>
            </b-form>
        </b-card>
    </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators'
import store from '../../store.js'
import { mapActions } from 'vuex'

export default {
    name: "ClientLogin",
    data() {
        return {
            form: null,
            submitStatus: null,
            loading: false
        }
    },
    created() {
        this.resetForm()
        // console.log(store.getters.loggedIn, 'this is logged in')
    },
    validations: {
        form: {
            username: {
                required,
            },
            password: {
                required,
            }
        }
    },
    methods: {
        // ...mapActions([
        //     'retrieveTokenClient'
        // ]),
        submitForm() {
            this.$v.$touch()
            if (this.$v.form.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                this.submitStatus = null
                this.loading = true
                let payload = {
                    username: this.form.username,
                    password: this.form.password
                }
                // this.retrieveTokenClient(payload).then((r) => {
                //     console.log(r,'success')
                // });
                this.$store.dispatch(
                    'retrieveTokenClient', payload
                ).then(response => {
                    this.$router.push({ name: 'client_dashboard' })
                })
            }
        },
        resetForm() {
            this.form = {
                username: '',
                password: ''
            }
            this.$nextTick(() => { this.$v.$reset() })
        }
    }
    
}
</script>

<style>

</style>
