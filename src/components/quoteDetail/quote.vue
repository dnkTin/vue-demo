<template>
  <div>
    <p>{{ quote.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object
    }
  },
  methods: {
    // deleteQuote() {
    //   console.log(this.quote.id);
    //   this.$emit("deleteQuote", this.quote.id);
    // }
  }
};
</script>

<style scoped>
p {
  padding: 16px;
  margin: 10px auto;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
p:hover {
  cursor: pointer;
  background: rgb(207, 109, 109);
}
</style>
