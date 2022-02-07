<template>
  <div>
    <active-user :username="username" :age="age" />
    <user-data @add-user="addUser" />
  </div>
</template>

<script>
export default {
  data() {
    return { username: "", age: "" };
  },
  methods: {
    addUser(username, age) {
      this.username = username;
      this.age = age;
    },
  },
};
</script>

<style></style>
