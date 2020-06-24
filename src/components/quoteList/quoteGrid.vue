<template>
  <div>
    <quote-detail
      v-for="(quote, i) in quotes"
      :key="i"
      :quote="quote"
      @click.native="deleteQuote(i)"
    ></quote-detail>
  </div>
</template>

<script>
import QuoteDetail from "./../quoteDetail/quote.vue";
export default {
  components: {
    "quote-detail": QuoteDetail
  },
  props: {
    quotes: {
      type: Array
    }
  },
  methods: {
    deleteQuote(id) {
      this.$emit("deleteQuote", id);
    }
  }
};
</script>

<style scoped></style>
