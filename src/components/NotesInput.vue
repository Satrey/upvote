<template>
  <div>
    <v-container>
        <v-card 
            theme="dark"
            elevation="10"
        >
            <v-text-field 
                class="" 
                hide-details="true"
                v-model="currentInput"
                @keyup.enter="addNewNote"
            >
            </v-text-field>
            <v-container class="d-flex">
                <v-spacer></v-spacer>
                <v-btn 
                    theme="light"
                    @click="addNewNote" 
                >
                    Добавить
                </v-btn>
            </v-container>
        </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "NoteInput",

  emits: ['add-note'],

  data() {
    return {
      currentInput: '',
    };
  },

  methods: {
      addNewNote(){
          const currentDate = new Date();
          this.$emit('add-note', {name: this.currentInput, pub: currentDate.toLocaleString()});
          this.currentInput = '';
          console.log('Component method send data to parent : ');
      },
  },
};
</script>
<style lang="">
</style>