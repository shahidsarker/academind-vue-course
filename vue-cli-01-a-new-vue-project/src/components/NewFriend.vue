<template>
  <form @submit.prevent="addFriend">
    <div>
      <label for="nameInput">Name </label>
      <input type="text" name="nameInput" v-model="nameInput" />
    </div>
    <div>
      <label for="phoneInput">Phone </label>
      <input type="tel" name="phoneInput" v-model="phoneInput" />
    </div>
    <div>
      <label for="emailInput">Email </label>
      <input type="email" name="emailInput" v-model="emailInput" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      nameInput: "",
      phoneInput: "",
      emailInput: "",
    };
  },
  methods: {
    addFriend() {
      this.$emit(
        "add-friend",
        this.nameInput,
        this.phoneInput,
        this.emailInput
      );
      this.nameInput = "";
      this.phoneInput = "";
      this.emailInput = "";
    },
  },
};
</script>

<style></style>
