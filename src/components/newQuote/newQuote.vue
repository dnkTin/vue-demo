<template>
  <div>
    <textarea v-model="quote" name="" id="" cols="30" rows="10"></textarea>
    <button @click="addQuote">
      Add new quote
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: ""
    };
  },
  methods: {
    addQuote() {
      this.$emit("newQuote", this.quote);
    }
  }
};
</script>

<style scoped></style>
