<template>
  <div class="header">
    <div class="header-logo">Logo</div>
    <div class="header-content">
      <div class="navigation-list">
        <router-link
          v-for="(item, index) in navigationList"
          :to="item.route"
          :key="index"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="header-action">
      <Button primary>Call To Action</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue";

export default {
  components: { Button },
  data() {
    return {
      activeRoute: "home",
      navigationList: [
        {
          name: "home",
          route: "/",
        },
        {
          name: "about",
          route: "/#",
        },
        {
          name: "services",
          route: "/##",
        },
        {
          name: "products",
          route: "/Products",
        },
      ],
    };
  },
  methods: {
    handleClick(item) {
      if (item.route.length) {
        this.$router.push(item.route);
      }

      this.activeRoute = item.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  position: fixed;
  background-color: $bg-color;
  color: $primary;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 60px;
  height: 50px;

  @include sm {
    flex-direction: column;
    height: fit-content;
    padding: 20px;
  }

  &-logo {
    color: $primary;

    @include sm {
      margin-bottom: 13px;
    }
  }

  &-content {
    display: flex;
    width: 401px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;

    a,
    .router-link {
      color: $primary;
      text-decoration: none;
      margin: 15px;
      font-size: 12px;
      cursor: pointer;
      text-transform: capitalize;

      &.active {
        opacity: 0.5;
      }

      @include sm {
        float: none;
        display: block;
        text-align: left;
        margin: 10px;
      }
    }
  }
}

@include sm {
  .navigation-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .headet-action {
    margin-top: 10px;
  }
}
</style>
