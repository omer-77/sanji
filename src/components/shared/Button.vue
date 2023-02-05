<template>
  <button
    class="button"
    :class="{ 'button--primary': primary, 'button--outlined': outlined }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      defult: true,
    },
    outlined: {
      type: Boolean,
      defult: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  font-size: 12px;
  border-radius: calc(#{$border-radius} * 0.68);
  padding: 8px 22px;
  line-height: 1.1;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.01rem;
  border: none;
  transition: background 0.25s ease-in-out, color 0.15s ease-in-out,
    opacity 0.15s ease-in-out;

  &:not([disabled]):hover {
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }

  /* Colors
    *************************************/
  &--primary {
    background-color: $primary;
    color: $white;

    &:not([disabled]):active,
    &:not([disabled]):hover {
      opacity: 0.8;
    }

    &:not([disabled]):active {
      box-shadow: 0px 0px 0px 3px rgba($primary, 0.3);
    }

    &.button--inverse {
      background-color: rgba($primary, 0.08);
      color: $primary;
    }
    &.button--inverse:not([disabled]):active,
    &.button--inverse:not([disabled]):hover {
      color: $primary;
      background-color: rgba($primary, 0.3);
    }
    &.button--inverse:not([disabled]):active {
      box-shadow: 0px 0px 0px 3px rgba($primary, 0.075);
    }
  }

  &--outlined {
    border: 1px solid $primary;
    background: transparent;
    color: $primary;
  }

  > div {
    margin: 0 auto;
  }
}
</style>
