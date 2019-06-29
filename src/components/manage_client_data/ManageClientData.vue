<template>
  <div>
    <b-container>
      <h2 class="text-center">Manage</h2>
      <b-row mt-3>
        <b-col cols="10" offset="1">
          <div class="block">
            <b-form>
              <b-form-group id="input-group-1">
                <b-row>
                  <b-col cols="8">
                    <b-row>
                        <b-col cols="3">
                            <label>Name</label>
                        </b-col>
                        <b-col cols="9">
                            <label>{{form.name}}</label>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="3">
                        <label>Category</label>
                      </b-col>
                      <b-col cols="9">
                        <label>{{form.category}}</label>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="4">
                        <b-form-file
                        accept="image/jpeg, image/png"
                        multiple
                        v-model="file"
                        :state="Boolean(file)"
                        placeholder="Choose a file..."
                        drop-placeholder="Drop file here..."
                        ></b-form-file>
                        <b-button class="mt-3" block>Upload</b-button>
                    </b-col>
                </b-row>
              </b-form-group>
              <b-form-group id="input-group-3">
                <b-row>
                  <b-col cols="2">
                    <label>Classes</label>
                  </b-col>
                  <b-col cols="10">
                    <multiselect :multiple="true" v-model="value" :options="classes"></multiselect>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-form>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="1">
        </b-col>
        <b-col cols="10">
            <b-card-group deck>
            <b-card
                class="text-center"
                fluid
                no-body
                style="max-width: 14rem;"
                img-src="https://picsum.photos/250/250/?image=54"
                img-alt="Image"
                img-top
            >
                <h4 slot="header">Image 1</h4>
            </b-card>
            <b-card
                class="text-center"
                no-body
                style="max-width: 14rem;"
                img-src="https://picsum.photos/250/250/?image=58"
                img-alt="Image"
                img-top
            >
                <h4 slot="header">Image 2</h4>
            </b-card>
            <b-card
                class="text-center"
                no-body
                style="max-width: 14rem;"
                img-src="https://picsum.photos/250/250/?image=59"
                img-alt="Image"
                img-top
            >
                <h4 slot="header">Image 3</h4>
            </b-card>
            </b-card-group>
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "ManageClientData",
  components: {
    Multiselect
  },
  data() {
    return {
      form: {
        name: 'Dataset 1',
        category: 'Medical',
        // label_kind: '',
      },
      file: null,
      classes: ["General", "Annotator", "Client", "Dentist"],
      value: ["General", "Client"]
    };
  },
  mounted() {
      console.log(this.$route.params)
  },
  methods: {
  }
};
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect__tag {
  background: #007bff;
}

.multiselect__tag-icon:hover {
  color: #fff;
  background: #0069d9;
}

.multiselect__option--highlight {
  background: #007bff;
}

.multiselect__option--highlight::after {
  background: #007bff;
}
</style>
