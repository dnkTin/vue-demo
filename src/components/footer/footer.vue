<template>
  <div>
    <p>static: {{ bindStatic }}</p>
    <p>dynamic: {{ bindDynamic }}</p>

    <div :style="{ background: 'lightblue' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bindStatic: {
      type: String
    },
    bindDynamic: {
      type: String
    }
  }
};
</script>

<style scoped>
div {
  background: #79b16e;
}
</style>
