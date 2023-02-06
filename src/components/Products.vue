<template>
  <div class="products-container">
    <v-container class="mx-10">
      <v-row class="products-title">
        <v-col cols="6" sm="6">
          <h1>products</h1>
        </v-col>
        <v-col cols="6" sm="4">
          <v-text-field
            label="Search By Name"
            solo
            @input="search"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <DataTable
            :data="filteredProducts"
            @refetchProducts="fetchProducts"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DataTable from "@/components/shared/DataTable.vue";

export default {
  components: { DataTable },

  data() {
    return {
      products: [],
      filteredProducts: [],
    };
  },

  async created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await this.$axios.get(`/products`);

        this.filteredProducts = res.data;
        this.products = res.data;
      } catch (e) {
        console.error(e);
      }
    },
    search(search) {
      if (search) {
        const filteredArray = this.products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );

        this.filteredProducts = filteredArray;

        return;
      }

      this.filteredProducts = this.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.products-container {
  margin-top: 5rem;

  @include sm {
    margin-top: 14rem;
  }
}
</style>
