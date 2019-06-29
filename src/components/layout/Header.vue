<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">Civixa</b-navbar-brand>

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse">
                <div v-if="loggedIn" >
                    <b-navbar-nav>
                        <b-nav-item @click="sidebarToggle"><font-awesome-icon icon="bars" /></b-nav-item>
                    </b-navbar-nav>
                </div>
            <!-- <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav> -->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->
                <b-nav-item v-if="loggedIn">
                    <font-awesome-icon style="font-size:20px;" :icon="user" /> {{userData.first_name}}
                </b-nav-item>
                <b-nav-item v-if="loggedIn" @click="logout">
                    <font-awesome-icon :icon="signout" />
                </b-nav-item>
                <b-nav-item-dropdown v-if="!loggedIn" text="Sign Up" right>
                    <router-link
                        tag='b-dropdown-item' 
                        :to="{name:'annotator_signup'}">
                            Sign up as Annotator
                    </router-link>
                    <router-link
                        tag='b-dropdown-item' 
                        :to="{name:'client_signup'}">
                            Sign up as client
                    </router-link>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown v-if="!loggedIn" right>
                <!-- Using button-content slot -->
                <template slot="button-content">Log In</template>
                <router-link
                    tag='b-dropdown-item' 
                    :to="{name:'client_login'}">
                        Log in as client
                </router-link>
                <router-link
                    tag='b-dropdown-item' 
                    :to="{name:'annotator_login'}">
                        Log in as annotator
                </router-link>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import store from '../../store'
export default {
    name: "TopHeader",
    props: ['sidebarToggle'],
    data () {
        return {
            loggedIn: false,
            userData: {},
            signout: 'sign-out-alt',
            user: 'user-circle'
        }
    },
    mounted () {
        if(this.$store.state.client_token !== null) {
            this.loggedIn = true
        } else {
            this.loggedIn = false
        }
        this.userData =  JSON.parse(localStorage.getItem('user_data'));
    },
    methods: {
        logout () {
            this.$store.dispatch('destroyTokenClient').then(() => {
                this.$router.push({ name: 'client_login' })
            })
        }
    }
}
</script>

<style>

</style>
