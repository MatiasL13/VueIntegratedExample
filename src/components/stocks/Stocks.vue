<template>
	<div> 
		<my-stock v-for=" stock in stocks " :stock="stock"></my-stock>
	</div>
</template>

<script>
import Stock from './Stock.vue'
	export default{
		components:{
			'my-stock': Stock
		},
		computed:{
			stocks(){
				return this.$store.getters.stocks;
			}
		}

	}
</script>