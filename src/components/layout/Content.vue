<template>
    <div>
        <b-container>
            <router-view/>
        </b-container>
    </div>
</template>

<script>
import TopHeader from './Header'
export default {
    name: "Content",
    components: {
        TopHeader
    },
    data () {
        return {
            loggedIn: false,
            sidebarVisible: false
        }
    },
    mounted () {
        if(this.$store.state.client_token !== null) {
            console.log('this is it')
            this.loggedIn = true
        } else {
            this.loggedIn = false
        }
    },
    methods: {
        sidebarToggle () {
           this.sidebarVisible = !this.sidebarVisible
        }
    }
}
</script>

<style>

</style>
