<template>
  <div class="main-container">
    <div class="about-section">
      <div class="left">
        <h1 class="header">Lorem ipsum dolor sit amet, consectetur</h1>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna ali
        </div>
        <div class="action-area">
          <Button primary>call to action</Button>
          <Button primary outlined>see workspace</Button>
        </div>
      </div>
      <div class="right">
        <img class="image-big" :src="`${imgProvider}/250`" />
        <img class="image-small" :src="`${imgProvider}/150`" />
      </div>
    </div>

    <div class="details-section">
      <div class="left">
        <h4 class="header">Lorem ipsum dolor sit amet, consectetur</h4>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna ali
        </div>
      </div>
      <div class="middle">
        <img class="image-big" :src="`${imgProvider}/250`" />
      </div>
      <div class="right">
        <h4 class="header">Lorem ipsum dolor sit amet, consectetur</h4>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna ali
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue";

export default {
  components: { Button },
  data() {
    return {
      imgProvider: process.env.VUE_APP_IMG_CDN,
    };
  },
};
</script>

<style lang="scss" scoped>
h1,
h4 {
  text-align: left;

  @include sm {
    text-align: center !important;
  }
}

.main-container {
  color: $primary;
  margin-top: 55px;
  padding: 40px 50px;

  @include sm {
    margin-top: 85px;
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

  .about-section {
    display: flex;
    justify-content: center;
    align-items: center;

    @include sm {
      flex-direction: column;
      margin-top: 120px;
    }

    .left {
      width: 20rem;
      margin-right: 10rem;

      @include sm {
        margin: 0;
      }

      .header {
        font-size: 42px;
        font-weight: bolder;
        margin-bottom: 16px;
        text-align: left;
      }

      .action-area {
        button {
          margin: 0 5px;
        }
      }
    }

    .right {
      position: relative;
      top: 0;
      left: 0;

      @include sm {
        margin: 5rem 0;
      }

      .image-big {
        background: $img;
        width: 250px;
        height: 250px;
        position: relative;
        top: 0;
        left: 0;
      }

      .image-small {
        background: $img-dark;
        width: 150px;
        height: 150px;
        position: absolute;
        top: -30px;
        right: -30px;
      }
    }
  }

  .details-section {
    display: flex;
    margin-top: 88px;

    @include sm {
      flex-direction: column;
      margin-top: 0rem;
    }

    .left {
      width: 40rem;

      @include sm {
        width: 10rem !important;
        align-self: center;
      }
    }

    .middle {
      margin: 0 5rem;

      @include sm {
        margin: 0;
      }
    }

    .right {
      align-self: end;

      @include sm {
        width: 10rem !important;
        align-self: center !important;
        margin: 0;
      }
    }
  }
}
</style>
