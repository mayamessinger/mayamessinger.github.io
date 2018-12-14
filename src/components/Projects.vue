<template>
	<div id="projects">
		Clouddit for reddit<a href="https://mayamessinger.net/Clouddit">>></a><br/>
		- Word cloud of reddit posts, harnessing D3.js module and reddit API <br/><br/>
		LinguisticDB<a href="https://github.com/mayamessinger/LinguisticDB">>></a><br/>
		- Full-stack web development project implemented with PostgreSQL, Node, and Vue.js<br/><br/>
		Mozilla Firefox Open Source Contributions<a href="https://bugzilla.mozilla.org/user_profile?user_id=601855">>></a><br/><br/>
		HackDuke<a href="https://hackduke.org">>></a><br/>
		- Logistics lead 2017-2018, mentor 2018-2019<br/>
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
	margin-left: 25%;
	margin-right: 4%;
	margin-top: 3%;
	text-align: left;
}

#projects a	{
	padding-left: 0.75%;
}

</style>