<template>
  <section>
    <h2>username: {{ username }}</h2>
    <h3>age: {{ age }}</h3>
  </section>
</template>

<script>
// ActiveUser should output a username (h2) and age (h3)
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
