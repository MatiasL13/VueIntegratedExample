<template>
    <div class="container">
    	<div class="row">
    	    	<my-header></my-header>

    	    	<router-view></router-view>
	    </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
    export default {
    	components: {
    		'my-header':Header
    	},
    	created(){
    		this.$store.dispatch('setStocks');
    	}
    }
</script>

<style>

</style>
