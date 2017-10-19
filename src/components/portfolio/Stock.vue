<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{stock.name}}
					<small>(price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input class="form-control" :class="{danger: moreStock}"type="number" v-model.number="quantity"></input>
				</div>
				<div class="pull-right">
					<button class="btn" @click="sell"
					:class="{disabled: moreStock, 'btn-success': !moreStock}"
					 :disabled="moreStock || quantity <= 0  || !Number.isInteger(quantity)">{{moreStock ? 'Limit Stock' : 'Sell'}}</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	
	.danger{
		border: 1px solid red;
	}

</style>
<script>
import {mapActions} from 'vuex';
	export default{
		props:['stock'],
		data(){
			return{
				quantity: 0
			}
		},
		methods:{
			...mapActions([
				'sellStock'
				]),
			sell(){
				const order= {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};
				console.log(order)
				this.sellStock(order);
				this.quantity =0;

			}
		},
		computed:{
			moreStock(){
				return this.quantity > this.stock.quantity
			}
		}
	}
</script>