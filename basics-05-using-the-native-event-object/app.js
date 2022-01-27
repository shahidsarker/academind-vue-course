const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50)
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
    },
    // name(val) {
    //   this.fullName = val === "" ? "" : val + " " + this.lastName;
    // },
    // lastName(val) {
    //   this.fullName = val === "" ? "" : this.name + " " + val;
    // },
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
