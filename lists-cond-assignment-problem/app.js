const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: "",
      showTasks: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = "";
    },
    toggleTasks() {
      this.showTasks = !this.showTasks;
    },
  },
});

app.mount("#assignment");
