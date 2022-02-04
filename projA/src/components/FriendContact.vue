<template>
  <li>
    <h2>{{ name }}{{ friendIsFave === 1 ? " (Fave)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Fave</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFave: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFave = this.friendIsFave === 1 ? 0 : 1;
      // this.$emit('toggleFavorite', )
    },
  },
};
</script>

<style></style>
