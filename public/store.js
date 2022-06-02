import {seedData} from '../public/calendar_seed.js';
import { reactive } from 'vue';

export const store = {
    state: {
        data: reactive(seedData)
    },

    getActiveDay(){
        return this.state.data.find((day) => day.active)
    },

    setActiveDay(id){
        this.state.data.map((dayObj) => {
            dayObj.id === id ? dayObj.active = true : dayObj.active = false;
            console.log('Called method setactiveday from store !!!');
            console.log('Set active day object id : ', dayObj.id, dayObj.active);
        });
    },
}