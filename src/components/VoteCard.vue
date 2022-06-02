<template>
  <div>
    <v-container>
      <v-card class="pa-4" elevation="6" shaped @click="printInfo">
        <v-card-title
          >{{ id }}. {{ title }}
          <v-spacer></v-spacer>
          <v-badge color="green" :content="votes"> </v-badge>
        </v-card-title>
        <v-card-text>{{ description }}</v-card-text>
        <v-card-text> </v-card-text>
        <v-row class="pa-4" d-flex>
            <v-btn @click="resetVotes">Reset Vote</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="upvote">Up Vote</v-btn>
            <v-btn class="ms-2 justify-end" @click="downvote">Down Vote</v-btn>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "VoteCard",

  props: {
    id: Number,
    title: String,
    description: String,
    name: String,
    votes: Number,
  },

  data() {
    return {
       
    };
  },

  methods: {
    resetVotes() {
       this.$emit('reset', this.id);
       console.log('Emit reset event');
    },
    upvote() {
       this.$emit('upvote', this.id);
       console.log('Emit upvote event');
    },
    downvote() {
       this.$emit('downvote', this.id);
       console.log('Emit downvote event');
    },      
  },

  computed: {
    //
  },
};
</script>
<style lang="css">
</style>