<template>
    <div>
        <b-card style="max-width: 35rem;" class="mx-auto">
            <b-card-title>Annotator Signup</b-card-title>    
            <b-form 
            @submit.prevent="submitForm"
            >
                <b-form-group 
                id="firstname-group-1"
                label="First Name"
                label-for="firstname-input-1"
                label-cols-sm="4"
                label-cols-lg="4"
                >
                    <b-form-input
                    id="firstname-input-1"
                    name="firstname"
                    v-model="form.firstname"
                    required
                    placeholder="First Name"
                    v-on:input="$v.form.firstname.$touch"
                    :state="$v.form.firstname.$dirty ? !$v.form.firstname.$error: null"
                    ></b-form-input>
                </b-form-group>
                <b-form-group 
                id="lastname-group-1"
                label="Last Name"
                label-for="lastname-input-1"
                label-cols-sm="4"
                label-cols-lg="4"
                >
                    <b-form-input
                    id="lastname-input-1"
                    name="lastname"
                    v-model="form.lastname"
                    required
                    placeholder="Last Name"
                    v-on:input="$v.form.lastname.$touch"
                    :state="$v.form.lastname.$dirty ? !$v.form.lastname.$error: null"
                    ></b-form-input>
                </b-form-group>
                <b-form-group 
                id="username-group-1"
                label="Username"
                label-for="username-input-1"
                label-cols-sm="4"
                label-cols-lg="4"
                >
                    <b-form-input
                    id="username-input-1"
                    name="username"
                    v-model="form.username"
                    required
                    placeholder="Username"
                    v-on:input="$v.form.username.$touch"
                    :state="$v.form.username.$dirty ? !$v.form.username.$error: null"
                    ></b-form-input>
                </b-form-group>
                <b-form-group 
                id="email-group-1"
                label="Email"
                label-for="email-input-1"
                label-cols-sm="4"
                label-cols-lg="4"
                >
                    <b-form-input
                    id="email-input-1"
                    name="email"
                    v-model="form.email"
                    required
                    placeholder="Email"
                    v-on:input="$v.form.email.$touch"
                    :state="$v.form.email.$dirty ? !$v.form.email.$error: null"
                    ></b-form-input>
                </b-form-group>
                <b-form-group 
                id="pwd-group-1"
                label="Password"
                label-for="pwd-input-1"
                label-cols-sm="4"
                label-cols-lg="4"
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
                <b-form-group 
                id="pwd-group-1"
                label="Confirm Password"
                label-for="pwd-input-2"
                label-cols-sm="4"
                label-cols-lg="4"
                >
                    <b-form-input
                    name="password"
                    id="pwd-input-2"
                    type="password"
                    v-model="form.confirmPassword"
                    required
                    placeholder="Confirm Password"
                    v-on:input="$v.form.confirmPassword.$touch"
                    :state="$v.form.confirmPassword.$dirty ? !$v.form.confirmPassword.$error: null"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                id="input-group-3"
                label="speciality"
                label-for="speciality-input"
                label-cols-sm="4"
                label-cols-lg="4"
                >
                    <b-form-select
                    id="speciality-input"
                    v-model="form.speciality"
                    :options="speciality"
                    required
                    ></b-form-select>
                </b-form-group>
                <b-form-group>
                    <b-button block type="submit" variant="primary">Signup</b-button>
                </b-form-group>
            </b-form>
        </b-card>
    </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators'

export default {
    name: "ClientLogin",
    data() {
        return {
            form: null,
            submitStatus: null,
            loading: false,
            speciality: [{ text: 'Dentist', value: 1 }, { text: 'Radiologist', value: 2 }, { text: 'General', value: 3 }],
        }
    },
    created() {
        this.resetForm()
    },
    validations: {
        form: {
            firstname: {
                required,
            },
            lastname: {

            },
            username: {
                required,
            },
            email: {
                required,
            },
            password: {
                required,
            },
            confirmPassword: {
                required,
            },
            speciality: {
                required,
            }
        }
    },
    methods: {
        submitForm() {
            console.log('submitted')
            this.$v.$touch()
            if (this.$v.form.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                this.submitStatus = null
                this.loading = true
                let payload = {
                    username: this.form.username,
                    password: this.form.password,
                    confirm_password: this.form.confirmPassword,
                }
                
                // this.$store.dispatch(
                //     'retrieveTokenClient', payload
                // ).then(response => {
                //     console.log('success')
                //         // this.$router.push({ name: 'todo' })
                // })
            }
        },
        resetForm() {
            this.form = {
                username: '',
                password: '',
                confirmPassword: ''
            }
            this.$nextTick(() => { this.$v.$reset() })
        }
    }
    
}
</script>

<style>

</style>
