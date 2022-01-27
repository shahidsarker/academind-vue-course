const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) return "Not there yet";
      else if (this.counter === 37) return 37;
      else return "Too much!";
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.counter = 0;
      }, 5000);
    },
  },
  methods: {
    add(val) {
      this.counter += val;
    },
  },
});

app.mount("#assignment");

// <!-- Show "Not there yet" until you reach a result of exactly 37 -->
// <!-- Show "Too much!" if the result is greater than 37 -->
