<template>
    <div class="sidebar" >
        <ul>
            <li class="side-link"><router-link
                        tag='span' 
                        :to="{name:'client_dashboard'}">
                            Home
                    </router-link></li>
            <li class="side-link">
                <a @click="toggleDataset">Dataset <font-awesome-icon :icon="caret" /></a>
                <ul v-if="dataset">
                    <li class="side-child"><router-link
                        tag='span' 
                        :to="{name:'client_create'}">
                            Create New
                    </router-link></li>
                    <li class="side-child"><router-link
                        tag='span' 
                        :to="{name:'client_manage'}">
                            Manage
                    </router-link></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    data () {
        return {
            dataset: false,
            caret: 'caret-down'
        }
    },
    methods: {
        toggleDataset () {
            this.dataset = !this.dataset
            if (this.caret === 'caret-down') {
                this.caret = 'caret-up'
            }
            else {
                this.caret = 'caret-down'
            }
        }
    }
}
</script>

<style>
.sidebar {
    cursor: pointer;
    height: 100%;
    width: 16.666%;
    position: fixed;
    color: #ffffff;
    /* z-index: 1; */
    /* top: 0; */
    /* left: 0; */
    background-color: #3C464F;
    overflow-x: hidden;
    padding-top: 20px;
}

.side-child {
    cursor: pointer;
    padding: 6px 8px 6px 0px;
    text-decoration: none;
    font-size: 14px;
    color: #fff;
    display: block;
}

.side-child:hover {
  color: #007bff;
}

.side-link {
  padding: 6px 8px 6px 0px;
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  display: block;
}

.side-link:hover {
  color: #007bff;
}
</style>
