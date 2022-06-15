<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    //
  }),

  created () {
    //this.emitter.$on("add-note", (event) => this.addNewNote(event));
  },

};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
