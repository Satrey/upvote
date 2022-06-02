<template>
  <v-container class="mt-4 rounded-4" id="calendar-entry">
    <v-card class="pa-4">
      <v-text-field
        class="mt-4"
        :label="titleOfActiveDay"
        hide-details="auto"
      ></v-text-field>
      <v-text-field 
        class="mt-4"
        label="Day Event"
      >
      </v-text-field>
      <v-btn>Add Event</v-btn>
    </v-card>
  </v-container>
</template>
<script>
import { store } from '../../public/store.js'

export default {
  name: "CalendarEntry",

  data() {
    return {};
  },

  computed: {
     titleOfActiveDay(){
         return store.getActiveDay().fullTitle;
     }, 
  },

};
</script>
<style lang="scss" scoped>
#calendar-entry {
  background: rgb(255, 255, 255);
}
</style>