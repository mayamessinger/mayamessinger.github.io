<template>
  <div class="info">
    <div class="name">Maya Messinger</div>
    <div class="major">BS Computer Science</div>
    <div class="university">Duke University</div>
    <div class="university">Class of 2019</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
    }
  },
  props:	[
  ]
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100');

.info {
  font-family: 'IBM Plex Sans', sans-serif;
  margin-top: 3%;
  text-align: center;
}

.name {
  font-size: 3em;
}

.major  {
  font-size: 2em;
}

.university {
  font-size: 1.5em;
  font-weight: bold;
}
</style>