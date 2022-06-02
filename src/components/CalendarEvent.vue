<template lang="">
    <div>
        <v-card class="pa-3 ma-2 d-card" elevation="4" 
            :style="getBackgroundColor"
            @click="getEvent">
            {{ event.details }}
            <div class="d-flex mt-2">
                <v-spacer></v-spacer>
                <v-icon x-small :color="`:hover ? red : blue`" >mdi-calendar-edit</v-icon>
                <v-icon x-small color="red">mdi-calendar-minus</v-icon>
            </div>
        </v-card> 
    </div>
</template>
<script>
export default {
    name: 'CalendarEvent',
    
    props: ['event'],

    data() {
        return {
            
        }
    },

    computed: {
        getBackgroundColor() {
            const color = ['#FF9999', '#85D6FF', '#99FF99'];
            let randomColor = color[Math.floor(Math.random()*color.length)]
            return `background-color: ${randomColor}`;
        },
    },

    methods: {
        getEvent(){
            console.log('Selected event is : ', this.event.details)
        },
    },
}
</script>
<style lang="scss" scoped>
.d-card {
    box-sizing: border-box;
    border-width: 3px;
    border-color: transparent;
}
.d-card:hover {
    border-width: 3px;
    border-color: rgb(255, 255, 255);
    border-style: dashed;
} 
</style>