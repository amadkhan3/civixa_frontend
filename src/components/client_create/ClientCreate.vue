<template>
  <div>
    <b-container>
      <h2 class="text-center">Create New</h2>
      <b-row mt-3>
        <b-col cols="10" offset="1">
          <div class="block">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-1">
                <b-row>
                  <b-col cols="2">
                    <label>Name</label>
                  </b-col>
                  <b-col cols="10">
                    <b-form-input
                      id="input-1"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-row>
                <b-col cols="6">
                  <b-form-group id="input-group-1">
                    <b-row>
                      <b-col cols="4">
                        <label>Dataset Types</label>
                      </b-col>
                      <b-col cols="8">
                        <b-form-select
                          id="input-3"
                          v-model="form.dataset_kind"
                          :options="dataset_types"
                          required
                        ></b-form-select>
                      </b-col>
                    </b-row>
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group id="input-group-3">
                    <b-row>
                      <b-col cols="4">
                        <label>Annotator Type</label>
                      </b-col>
                      <b-col cols="8">
                        <b-form-select
                          id="input-3"
                          v-model="form.label_kind"
                          :options="annotator_types"
                          required
                        ></b-form-select>
                      </b-col>
                    </b-row>
                  </b-form-group>
                </b-col>
              </b-row>
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
              <b-button type="submit" variant="primary">Submit</b-button>
              <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "ClientCreate",
  components: {
    Multiselect
  },
  data() {
    return {
      form: {
        name: "",
        dataset_kind: [],
        label_kind: [],
        // class: null
      },
      dataset_types: [
        { text: "Select One", value: null },
        "General",
        "Annotator",
        "Client",
        "Dentist"
      ],
      annotator_types: [
        { text: "Select One", value: null },
        "General",
        "Annotator",
        "Client",
        "Dentist"
      ],
      classes: ["General", "Annotator", "Client", "Dentist"],
      value: null
    };
  },
  mounted() {     
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    //   alert(JSON.stringify(this.form))
      var dataset_classes = this.value.map(m => {
          return {
              name: m
          }
      })
      console.log(this.form, dataset_classes);
      let payload = {
                    name: this.form.name,
                    dataset_kind: [1],
                    label_kind: 'BB',
                    dataset_classes: dataset_classes
                }
      this.$store.dispatch(
                    'createClient', payload
                ).then(response => {
                    console.log('success')
                        // this.$router.push({ name: 'todo' })
                })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food1 = null;
      this.form.food2 = null;
      this.form.food3 = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
    }
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
