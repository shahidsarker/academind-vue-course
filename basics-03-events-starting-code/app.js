const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    submitForm(e) {
      alert("submitted!");
    },
    setName(e) {
      this.name = e.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
