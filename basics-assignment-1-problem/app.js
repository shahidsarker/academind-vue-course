const app = Vue.createApp({
  data() {
    return {
      name: "Shahid",
      age: 30,
      favoriteNumber: Math.random(),
      imageUrl:
        "https://www.simplyrecipes.com/thmb/fBMHARoX5g53ZlptqLt1XfPjvr0=/1800x1229/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__10__quick-mac-cheese-horiz-a-1800-2086266fbc1b48a28a575b793d2926fd.jpg",
    };
  },
});

app.mount("#assignment");
