<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div class="table-action-area">
                <div @click="openDialog('save', item)">
                  <Button primary> Edit </Button>
                </div>
                <div @click="deleteItem(item.id)">
                  <Button primary outlined> Delete</Button>
                </div>
              </div>
            </td>
          </tr>
          <td></td>
          <td></td>
          <td>
            <div class="add-product" @click="openDialog('create', {})">
              <Button primary>Add Product </Button>
            </div>
          </td>
          <tr />
        </tbody>
      </template>
    </v-simple-table>
    <ProductCrudModal
      :isDialogOpen="isDialogOpen"
      @closeDialog="closeDialog"
      @submit="submit"
      :state="state"
      :formData="formData"
    />
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue";
import ProductCrudModal from "@/components/shared/ProductCrudModal.vue";

export default {
  components: { Button, ProductCrudModal },
  data() {
    return {
      isDialogOpen: false,
      state: "",
      formData: {
        name: "",
        price: 0,
        id: 0,
      },
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    openDialog(state, item) {
      if (state === "save") {
        this.formData = item;
      }

      this.state = state;
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
      this.state = "";
    },
    async submit(formData) {
      if (this.state === "create") {
        await this.$axios.post("/products", {
          name: formData.name,
          price: formData.price,
        });
      } else {
        await this.$axios.put(`/products/${formData.id}`, {
          name: formData.name,
          price: formData.price,
        });
      }

      this.closeDialog();
      this.$emit("refetchProducts");
    },
    async deleteItem(id) {
      await this.$axios.delete(`/products/${id}`);
      this.$emit("refetchProducts");
    },
  },
};
</script>

<style lang="scss" scoped>
.table-action-area {
  display: flex;
  justify-content: center;

  button {
    margin: 0 0.5rem;
  }
}

.add-product {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @include sm {
    margin-bottom: 1rem;
  }
}
</style>
