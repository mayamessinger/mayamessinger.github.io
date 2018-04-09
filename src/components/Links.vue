<template>
	<footer id="links">
		<span><a title="GitHub" href="https://github.com/mayamessinger"><img src="/src/assets/github.svg" alt="GitHub"/></a></span>
		<span><a title="LinkedIn" href="https://www.linkedin.com/in/mayamessinger/"><img src="/src/assets/linkedin.png" alt="LinkedIn"/></a></span>
		<span><a title="email" href="mailto:maya.messinger@duke.edu"><img src="/src/assets/email.svg" alt="email"/></a></span>
		<span><a title="Facebook" href="https://www.facebook.com/maya.messinger"><img src="/src/assets/facebook.png" alt="Facebook"/></a></span>
	</footer>
</template>

<script>
export default {
  name: "Links",
  data () {
    return {
    }
  },
  props:	[
  ]
}
</script>

<style lang="scss">
footer	{
	bottom: 3%;
	position: absolute;
	text-align: center;
}

span	{
	font-size: 2em;
	margin: 0 2%;
}

img	{
	max-height: 2%;
	max-width: 2%;
}

</style>