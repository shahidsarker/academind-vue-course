<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<style scoped>
button {
  background-color: white;
  border: 1px solid tomato;
  margin: 0;
  padding: 0.5rem;
}
</style>
