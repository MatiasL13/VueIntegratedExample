<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/portfolio" tag="li" active-class="active" exact><a>Portfolio</a></router-link>
        <router-link to="/stocks" tag="li" active-class="active" exact><a>Stocks</a></router-link>
        
      </ul>
    
        <strong class="navbar-text navbar-right">funds {{funds | currency}}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay">End day</a></li>
        <li class="dropdown"   
        @click="dropDownOpen = !dropDownOpen" 
        :class="{open: dropDownOpen}">
        	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & load <span class="caret"></span></a>
        	<ul class="dropdown-menu">
        		<li><a href="" @click.prevent="saveData">Save</a></li>
        		<li><a href="" @click.prevent="loadData">Load</a></li>
        	</ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script >
import {mapActions} from 'vuex';
	export default{
    data(){
      return{
        dropDownOpen: false
      }
    },
		computed:{
			funds(){ return this.$store.getters.funds}
		},
    methods:{

      ...mapActions([
        'randomStocks', 'loadDataFromServer'
        ]),
      endDay(){
        console.log("endday");
        this.randomStocks();
      },
      saveData(){
        const data={
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        console.log(data);
        this.$http.put('data.json',data);
      },
      loadData(){
        this.loadDataFromServer();
      }

    }
	}
</script>