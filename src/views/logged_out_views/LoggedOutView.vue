<template>
    <div class="logged-out-view-parent">
        <general-nav></general-nav>
        <!-- this is nested view -->
        <router-view></router-view>
    </div>
</template>

<script>
import GeneralNav from '@/components/layout/GeneralNav'

export default {
    name: 'LoggedOutView',
    components: {
        GeneralNav
    }
}
</script>

<style scoped>
    .logged-out-view-parent {
        height: 100vh;
    }

</style>
