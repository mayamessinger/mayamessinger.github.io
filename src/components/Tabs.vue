<template>
	<div id="tabs">
		<span><a href="javascript:void(0)" @click="$emit('about')">About</a></span>
		<span><a href="javascript:void(0)" @click="$emit('resume')">Resume</a></span>
		<span><a href="javascript:void(0)" @click="$emit('projects')">Projects</a></span>
	</div>
</template>

<script>
export default {
  name: "Tabs",
  data () {
    return {
    }
  },
  props:	[
  ]
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poiret+One');

#tabs	{
	margin: 6%;
	text-align: center;
}

span	{
	font-family: 'Poiret One', cursive;
	font-size: 2em;
	margin: 0 2%;
}

a	{
	color: #505050;
	text-decoration: none;
}

</style>