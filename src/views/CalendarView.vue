<template>
    <div class="mt-10 mb-10 ma-2 pa-2 wraper">
        <CalendarWeek />
        <CalendarEntry />
    </div>
</template>
<script>
import CalendarEntry from '../components/CalendarEntry.vue'
import CalendarWeek from '../components/CalendarWeek.vue'

export default {

    components: {
        CalendarWeek,
        CalendarEntry,
    },
    
}
</script>
<style lang="scss">
.wraper {
    background-color: rgb(78, 78, 78);
    height: 90%;
}
</style>