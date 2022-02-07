<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </CourseGoals>
  </div>
</template>

<script>
import BadgeList from "./components/BadgeList.vue";
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals";

export default {
  components: {
    BadgeList,
    CourseGoals,
    TheHeader,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
