<template>
  <div class="votecard">
    <h1 class="text-center">Up Vote!</h1>
    <VoteCard
      v-for="item in submissions"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :votes="item.votes"
      @reset="resetVotes"
      @upvote="upvote"
      @downvote="downvote"
    />
  </div>
</template>

<script>
import VoteCard from "../components/VoteCard.vue";
import submissions from "../../public/seed.js";

export default {
  name: "UpVoteView",

  components: {
    VoteCard,
  },

  data() {
    return {
      submissions: submissions.name,
    };
  },
  methods: {
    printData() {
      console.log(submissions);
    },

    upvote(id) {
        this.submissions[id-1].votes += 1;
    },

    downvote(id) {
        this.submissions[id-1].votes -= 1;
    },

    resetVotes(id) {
        this.submissions[id-1].votes = 0;
    },
  },
  computed: {
    sortedSubmissions() {
      let sorted = this.submissions;
      return sorted.sort((a, b) => {
        return a.votes - b.votes;
      });
    },
  },
};
</script>

<style lang="css">
.votecard {
  justify-content: center;
  min-width: 460px;
}
.votecard:hover {
  color: blue;
}
</style>