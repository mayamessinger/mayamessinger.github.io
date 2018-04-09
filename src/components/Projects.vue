<template>
	<div id="projects">
		Mozilla Open Source Contributions<a href="https://bugzilla.mozilla.org/user_profile?user_id=601855">>></a><br/><br/>
		HackDuke<a href="https://hackduke.org">>></a><br/>
		- Logistics lead 2017-2018<br/>
		- Ideate website developer<a href="https://ideate.hackduke.org">>></a><br/>
	</div>
</template>

<script>
export default {
  name: "Projects",
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

#projects	{
	color: #2f4f4f;
	font-family: 'Jura', sans-serif;
	font-size: 1.25em;
	margin-left: 30%;
	margin-right: 4%;
	margin-top: 3%;
	text-align: left;
}

a	{
	padding-left: 0.75%;
}

</style>