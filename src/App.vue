<template>
  <div>
    <persInfo>
    </persInfo>
    <tabs
      @about="scrollToAbout($event)"
      @resume="scrollToResume($event)"
      @projects="scrollToProjects($event)">
    </tabs>
    <about
      v-if="showAbout">
    </about>
    <projects
      v-if="showProjects">
    </projects>
    <links>
    </links>
  </div>
</template>

<script>
import PersInfo from "./components/PersInfo.vue";
import Tabs from "./components/Tabs.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Links from "./components/Links.vue";

export default {
  name: 'app',
  data () {
    return {
      showAbout: false,
      showProjects:false
    }
  },
  components: {
    PersInfo,
    Tabs,
    About,
    Projects,
    Links
  },
  methods: {
    scrollToAbout: function(e) {
      this.showAbout = !this.showAbout;

      this.showProjects = false;
    },
    scrollToResume: function(e) {
      window.open("/src/assets/ResumeMMessinger.pdf");

      this.showAbout = false;
      this.showProjects = false;
    },
    scrollToProjects: function(e) {
      this.showProjects = !this.showProjects;

      this.showAbout = false;
    }
  }
}
</script>

<style lang="scss">
#app {
  
}
</style>