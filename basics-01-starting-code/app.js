const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and master Vue",
      courseGoalB: "<h2>Master</h2> Vue and create great apps!",
      vueLink: "http://example.com/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
