<template>
    <div>
        <b-container>
            <h2 class="text-center">Client Manage</h2>
            <b-row mt-5>
                <b-col cols="8" offset="2">
                    <h4>Datasets :</h4>
                    <div class="mt-5 overflow-auto">

                        <b-table
                        id="my-table"
                        :items="items"
                        :per-page="perPage"
                        :current-page="currentPage"
                        small
                        >
                            <template slot="edit" slot-scope="row">
                                <!-- <router-link
                                    tag='b-button' 
                                    :to="{name:'manage_client_data'}">
                                        Edit
                                </router-link> -->
                                <b-button size="sm" @click="Edit(row)" class="mr-2">Edit</b-button>
                            </template>
                        </b-table>
                        <p class="mt-3">Current Page: {{ currentPage }}</p>
                        <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        ></b-pagination>

                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import store from '../../store.js'
export default {
    name: 'ClientManage',
    components: {

    },
    data () {
        return {
            userData: {},
            perPage: 3,
            currentPage: 1,
            items: []
        }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    beforeMount () {
        this.$store.dispatch(
                    'getDatasetList'
                ).then(res => {
                    var data_set, category, edit = ''
                    var temp = []
                    for (let i = 0; i < res.data.results.length; i++) {
                        temp.push({
                            data_set: res.data.results[i].id,
                            name: res.data.results[i].name,
                            label_kind: res.data.results[i].label_kind,
                            edit: ''
                        })
                    }
                    temp.reverse()
                    this.items = temp
                        // this.$router.push({ name: 'todo' })
                })
    },
    methods: {
        Edit (row) {  
            this.$router.push({name: 'manage_client_data', params: {id: row.item.data_set}})
        }
    }
}
</script>

<style>

</style>
