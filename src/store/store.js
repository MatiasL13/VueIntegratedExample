import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
Vue.use(Vuex);

export const store = new Vuex.Store({

	modules:{
		stocks,
		portfolio
	},
	actions:{
		loadDataFromServer({commit}){
			Vue.http.get('data.json')
				.then(response => response.json())
				.then(extractedData =>{
					if(extractedData){
						const stocks = extractedData.stocks;
						const portfolio ={
							stockPortfolio: extractedData.stockPortfolio,
							funds:extractedData.funds
						};

						commit('setStocks',stocks)
						commit('setPortfolio',portfolio)
					}
				});
	}
	}

})