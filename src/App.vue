<template>
  <div>
    <persInfo>
    </persInfo>
    <tabs @about="scrollToAbout($event)" @resume="scrollToResume($event)" @projects="scrollToProjects($event)">
    </tabs>
  </div>
</template>

<script>
import PersInfo from "./components/PersInfo.vue";
import Tabs from "./components/Tabs.vue";

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    PersInfo,
    Tabs
  },
  methods: {
    scrollToAbout: function(e) {
    },
    scrollToResume: function(e) {
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