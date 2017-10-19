<template>
	<div class="col-sm-12 col-md-12">
		<div class="panel panel-default">
			<h1>Trade</h1>
			<hr>
			<h6>You may Save and Load your Data</h6>
			<p>Your funds: {{funds | currency}}</p>
		</div>
		
	</div>
</template>


<script >
	export default{
		computed:{
			funds(){
				return this.$store.getters.funds
			}
		}
	}
</script>