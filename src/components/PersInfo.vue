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
@font-face {
  font-family: "Corbert";
  src: url(https://mayamessinger.github.io/src/css/fonts/Corbert-Regular.otf) format("otf");
}

@font-face {
  font-family: "Simplifica";
  src: local("Simplifica"), url("https://mayamessinger.github.io/src/css/fonts/SIMPLIFICA Typeface.ttf") format("ttf");
}

.info {
  margin-top: 3%;
  text-align: center;
}

.name {
  font-family: "Simplifica";
  font-size: 3em;
}

.major  {
  font-size: 2em;
}

.university {
  font-size: 1.5em;
}
</style>