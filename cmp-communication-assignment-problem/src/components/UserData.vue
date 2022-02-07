<template>
  <section>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="nameInput" placeholder="username" />
      <input type="number" v-model="ageInput" placeholder="age" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nameInput: "",
      ageInput: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("add-user", this.nameInput, this.ageInput);
      this.nameInput = "";
      this.ageInput = "";
    },
  },
  emits: ["add-user"],
};
</script>

<style></style>
