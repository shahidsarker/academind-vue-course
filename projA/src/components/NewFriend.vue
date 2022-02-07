<template>
  <form>
    <div>
      <label for="nameInput">Name </label>
      <input type="text" name="nameInput" v-model="nameInput" />
    </div>
    <div>
      <label for="phone">Phone </label>
      <input type="tel" name="phone" v-model="phone" />
    </div>
    <div>
      <label for="email">Email </label>
      <input type="email" name="email" v-model="email" />
    </div>
    <button @click.prevent="addFriend">Add Friend</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nameInput: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addFriend() {
      this.$emit("addFriend", {
        name: this.nameInput,
        phone: this.phone,
        email: this.email,
      });
      this.nameInput = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style></style>
