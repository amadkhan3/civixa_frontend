<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Civixa</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Products</b-nav-item>
            <b-nav-item href="#">Documentation</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>Register</em></template>
                <b-dropdown-item href="#">Client</b-dropdown-item>
                <b-dropdown-item href="#">Annotator</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>Login</em></template>
                <b-dropdown-item :to="{name:'client_login'}">Client</b-dropdown-item>
                <b-dropdown-item :to="{name:'annotator_login'}">Annotator</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'GeneralNav'
}
</script>

<style>

</style>
