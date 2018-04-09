<template>
  <div>
    <persInfo>
    </persInfo>
    <tabs
      @about="scrollToAbout($event)"
      @resume="scrollToResume($event)"
      @projects="scrollToProjects($event)">
    </tabs>
    <links>
    </links>
  </div>
</template>

<script>
import PersInfo from "./components/PersInfo.vue";
import Tabs from "./components/Tabs.vue";
import Links from "./components/Links.vue";

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    PersInfo,
    Tabs,
    Links
  },
  methods: {
    scrollToAbout: function(e) {
    },
    scrollToResume: function(e) {
      window.open("/src/assets/ResumeMMessinger.pdf");
    },
    scrollToProjects: function(e) {
    }
  }
}
</script>

<style lang="scss">
#app {
  
}
</style>