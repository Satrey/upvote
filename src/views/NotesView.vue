<template>
  <div>
    <v-container-fluid theme="dark">
      <h1 class="text-center mt-4 mb-4">Custom Events</h1>
      <NotesInput @add-note="addNewNote"/>
    </v-container-fluid>
    <v-container class="rounded-6">
      <v-card class="" elevation="10">
        <v-table theme="dark">
          <thead>
            <tr>
              <th class="text-center" style="width: 2%">ID</th>
              <th class="text-left">Notes</th>
              <th class="text-left" style="width: 30%">Published</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in notes" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.pub }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import NotesInput from "@/components/NotesInput.vue";

export default {
  name: "NotesView",

  components: {
    NotesInput,
  },

  data() {
    return {
      notes: [
        {
          id: 1,
          name: "First note",
          pub: "21.01.2022",
        },
        {
          id: 2,
          name: "Second note",
          pub: "21.01.2022",
        },
      ],

      currentInput: "",
    };
  },

  methods: {
      addNewNote(event){
          const newId = this.notes.length + 1;
          this.notes.push({id: newId, name: event.name, pub: event.pub});
          console.log('Parent receive data from input component : ',newId ,' : ', event.name, ' : ', event.pub);
      },
  },
};
</script>
<style lang="">
</style>