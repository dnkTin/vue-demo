<template>
  <div class="progress-bar-pr">
    <div
      class="progress-bar"
      :style="{ width: (this.quotes.length / maxQuote) * 100 + '%' }"
    >
      {{ quotes.length / maxQuote }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quotes: {
      type: Array
    },
    maxQuote: {
      type: Number
    }
  }
};
</script>

<style scoped>
.progress-bar-pr {
  background: #eee;
  width: 100%;
}
.progress-bar {
  background: rgb(56, 123, 223);
}
</style>
