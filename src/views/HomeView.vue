<template>
    <div>
        <b-container>
            <p class="text-center">Welcome to Civixa</p>
            <b-row>
                <b-col cols="6" class="text-center">
                    <router-link
                        tag='b-button' 
                        :to="{name:'annotator_login'}">
                            Annotator
                    </router-link>
                </b-col>
                <b-col cols="6" class="text-center">
                    <router-link
                        tag='b-button' 
                        :to="{name:'client_login'}">
                            Client
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    components: {

    }
}
</script>

<style>

</style>
