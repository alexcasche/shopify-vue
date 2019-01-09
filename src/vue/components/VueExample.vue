<template>
  <div>
    <h1>Vue Component</h1>
    <p>Shopify Prop: {{ externalProp }}</p>
    <p>Store Value: {{ value }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    externalProp: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters("example", ["value"])
  }
};
</script>