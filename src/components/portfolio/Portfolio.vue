<template>
	<div>
		<my-stock v-for="stock in stocks" :stock="stock"></my-stock>
	</div>
</template>

<script>
import Stock from './Stock.vue';
	export default{
		computed:{
			stocks(){
				return this.$store.getters.stockPortfolio;
			}
		},
		components:{
			'my-stock': Stock
		}

	}
</script>