<template>
  <div id="app">
    <!-- <input v-model="dynamicBind" type="text" />
    <header-tag :quotes="quotes" :maxQuote="maxQuote"></header-tag>
    <add-quote @newQuote="addQuoteToList"></add-quote>
    <quote-list :quotes="quotes" @deleteQuote="removeQuote"></quote-list>
    <form-page></form-page>

    <footer-tag :bindDynamic="dynamicBind" bindStatic="thisId">
      <p>Slot tu cha nay</p>
    </footer-tag> -->
    <table-data></table-data>
  </div>
</template>

<script>
import QuoteList from "./components/quoteList/quoteGrid";
import AddQuote from "./components/newQuote/newQuote";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import FormPage from "./components/formPage/formPage";
import TableData from "./components/tableData/tableData";
export default {
  name: "app",
  components: {
    "quote-list": QuoteList,
    "add-quote": AddQuote,
    "header-tag": Header,
    "footer-tag": Footer,
    "form-page": FormPage,
    "table-data": TableData
  },
  data() {
    return {
      maxQuote: 10,
      quotes: [
        { text: "new One", id: 1 },
        { text: "new Two", id: 2 }
      ],
      dynamicBind: ""
    };
  },
  methods: {
    addQuoteToList(data) {
      this.quotes.push({
        id: this.quotes.length,
        text: data
      });
    },
    removeQuote(id) {
      this.quotes.splice(id, 1);
    }
  }
};
</script>

<style></style>
