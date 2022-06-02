<template>
  <v-container-fluid class="d-flex justify-center pt-5 pb-5" id="calendar-week">
    <CalendarDay 
        v-for="day in sharedState.data" 
        :key="day.id" 
        :day="day"
        :active="day.active" 
    />
  </v-container-fluid>
</template>
<script>
import { store } from "../../public/store.js";
import CalendarDay from "../components/CalendarDay.vue";

export default {
  name: "CalendarWeek",

  components: {
    CalendarDay,
  },

  data() {
    return {
      sharedState: store.state,
    };
  },
};
</script>
<style lang="scss" scoped>
#calendar-week {
  background-color: gray;
}
</style>