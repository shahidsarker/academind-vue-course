<template>
  <div>
    <h2>username: {{ username }}</h2>
    <h3>age: {{ age }}</h3>
  </div>
</template>

<script>
// ActiveUser should output a username (h2) and age (h3)
export default { props: ["username", "age"] };
</script>

<style></style>
