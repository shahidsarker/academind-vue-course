<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">username: </label>
      <input type="text" v-model="username" />
    </div>

    <div>
      <label for="age">age: </label>
      <input type="number" v-model="age" />
    </div>
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("add-user", this.username, this.age);
      this.username = "";
      this.age = "";
    },
  },
};
</script>

<style></style>
