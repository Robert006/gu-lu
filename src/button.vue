<template>
    <button class="g-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
      <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
      <g-icon v-if="loading" class="icon loading" name="loading"></g-icon>
          <div class="content">
              <slot />
          </div>
    </button>
</template>

<script>
import Vue from "vue";
import Icon from "./icon";
Vue.component("g-icon", Icon);
export default {
  // props: ["icon", "iconPosition"]
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value == "left" || value == "right";
      }
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  height: var(--button-height);
  line-height: var(--line-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background: var(--buttion-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
