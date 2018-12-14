<template>
	<div id="about">
		I'm Maya, a Computer Science major (and History minor) at Duke University, expecting to graduate in May 2019.<br/>
		Home city: Austin, Texas<br/>
		Future workplace: <a href="https://rev.com">Rev.com</a><br/><br/>
		Software engineer.<br/>
		Full-stack web developer.<br/>
		Problem-solver.<br/>
	</div>
</template>

<script>
export default {
  name: "About",
  data () {
    return {
    }
  },
  props:	[
  ]
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Jura');

#about	{
	color: #2f4f4f;
	font-family: 'Jura', sans-serif;
	font-size: 1.25em;
	margin-left: 4%;
	margin-right: 4%;
	margin-top: 3%;
	text-align: center;
}

</style>