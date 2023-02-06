<template>
  <v-app>
    <v-dialog
      :value="isDialogOpen"
      @click:outside="closeDialog"
      max-width="400px"
    >
      <v-card>
        <div class="card-header">
          <v-row class="d-flex flex-column pa-4" dense justify="center">
            <h2>{{ state }} product</h2>
          </v-row>
        </div>

        <v-card-text>
          <v-row class="d-flex flex-column" justify="center">
            <v-text-field
              label="Name"
              :value="form.name"
              @input="updateName"
              solo
            >
            </v-text-field>
            <v-text-field
              label="Price"
              :value="form.price"
              @input="updatePrice"
              solo
            ></v-text-field>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-row
            @click="submit"
            class="d-flex flex-column mt-5 mb-2"
            dense
            justify="center"
          >
            <Button primary>{{ state }}</Button>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Button from "@/components/shared/Button.vue";

export default {
  components: { Button },
  data() {
    return {
      form: {
        name: "",
        price: 0,
        id: -1,
      },
    };
  },
  props: {
    isDialogOpen: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: "",
    },
    formData: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    state(val) {
      if (val === "create") {
        this.form.name = "";
        this.form.id = -1;
        this.form.price = "";

        return;
      }

      this.form.name = this.formData.name;
      this.form.id = this.formData.id;
      this.form.price = this.formData.price;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    updateName(name) {
      this.form.name = name;
    },
    updatePrice(price) {
      this.form.price = price;
    },
    submit() {
      this.$emit("submit", this.form);
    },
  },
};
</script>
<style>
/* overrides */
.v-application--wrap {
  display: none !important;
}

.card-header {
  text-transform: capitalize;
}

button {
  text-transform: capitalize;
}
</style>
