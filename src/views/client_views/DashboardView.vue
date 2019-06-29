<template>
    <div>
        <sidebar/>
        <dashboard-nav-top/>
    </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar'
import DashboardNavTop from '@/components/layout/DashboardNavTop'

export default {
    name: 'ClientDashboardView',
    components: {
        Sidebar,
        DashboardNavTop
    }
}
</script>

<style>

</style>
