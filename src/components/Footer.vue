<template>
  <div class="footer-continer">
    <div class="left">
      <img class="image-big" src="https://fakeimg.pl/250/" />
    </div>
    <div class="right">
      <h1 class="header">Lorem ipsum dolor sit amet, consectetur</h1>
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor
        incididunt ut labore et dolore magna ali
      </div>
      <div class="action-area">
        <Button primary>call to action</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue";

export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
.footer-continer {
  background: $bg-color-dark;
  display: flex;
  margin-top: 6rem;

  @include sm {
    flex-direction: column;
    padding-bottom: 2rem;
  }

  h1,
  h4 {
    text-align: left;

    @include sm {
      text-align: center !important;
    }
  }

  .left {
    width: 50%;
    margin-right: 5rem;

    @include sm {
      width: -webkit-fill-available;
      margin: 0;
    }

    .image-big {
      background: $img;
      width: 250px;
      height: 250px;
      position: relative;
      top: -43px;
      left: 120px;

      @include sm {
        left: 0;
      }
    }
  }

  .right {
    width: 20rem;
    margin-top: 1rem;

    @include sm {
      width: -webkit-fill-available;
      padding: 0 2rem;
    }

    .description {
      font-size: 12px;
      margin-bottom: 16px;
      text-align: left;
      color: $secondary;
      margin-top: 1rem;

      @include sm {
        text-align: center;
      }
    }

    .action-area {
      display: flex;

      @include sm {
        justify-content: center;
      }

      button {
        margin: 0 5px;
      }
    }
  }
}
</style>
