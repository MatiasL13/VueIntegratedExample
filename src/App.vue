<template>
    <div class="container">
    	<div class="row">
    	    	<my-header></my-header>
                <transition :enter-active-class="'animated fadeIn '"   :leave-active-class="'animated  fadeOut' " mode="out-in">
    	    	<router-view></router-view>
                    
                </transition>
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
