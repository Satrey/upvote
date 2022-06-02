<template lang="">
    <v-hover>
            <v-card class="day-card ma-1 mx-auto " 
                    @click="setActiveDay(day.id)"
                    :class="{ active : day.active }"
            >
                <v-card-title id="card-title">{{day.abbvTitle}}</v-card-title>
                <v-card-subtitle class="mt-2 mb-2">
                    {{day.fullTitle}}
                </v-card-subtitle>
                <v-container-fluid>
                    <CalendarEvent 
                        v-for="(event, index) in day.events" 
                        :key="index"
                        :event="event"
                        :day="day"
                    />
                    <div>
                        <v-icon class="ma-2">mdi-calendar-plus</v-icon>
                    </div>
                </v-container-fluid>
            </v-card>
    </v-hover>
</template>
<script>
import { store } from '../../public/store.js'
import CalendarEvent from "./CalendarEvent.vue";

export default {
  name: "CalendarDay",

  components: {
    CalendarEvent,
  },

  props: ["day"],

  data() {
    return {
        
    };
  },

  methods: {
    setActiveDay(id) {
      store.setActiveDay(id);
      console.log('Called method setactiveday from CalendarDay component!');
    },
  },
};
</script>
<style lang="css">
.day-card {
  min-width: 13%;
}

.day-card:hover {
  background-color: rgb(0, 109, 182);
  color: rgb(0, 255, 0);
}

.active {
  background-color: rgba(58, 61, 102, 0.836);
  color: rgb(0, 255, 0);  
}

.nonactive {
  background-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255); 
}

#card-title {
  color: azure;
  background-color: rgb(112, 112, 112);
}
</style>