const app = Vue.createApp({
  data() {
    return {
      keyDownText: "",
      output: "",
      confirmedOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("you clicked!");
    },
    setText(e) {
      this.output = e.target.value;
    },
    onKeyDown(e) {
      this.keyDownText = e.target.value;
    },
    onConfirm(e) {
      this.confirmedOutput = e.target.value;
    },
  },
});

app.mount("#assignment");
