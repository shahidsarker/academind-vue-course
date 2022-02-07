<template>
  <active-user :username="user.username" :age="user.age" />
  <user-data @add-user="addUserData" />
</template>

<script>
export default {
  data() {
    return {
      user: { username: "", age: 0 },
    };
  },
  methods: {
    addUserData(username, age) {
      this.user = { username: username, age: +age };
    },
  },
};
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid tomato;
  padding: 1rem;
}
</style>
