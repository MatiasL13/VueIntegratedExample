const state={
	funds: 10000,
	stocks: []
};

const mutations ={

	buyStock(state,{stockId,quantity,stockPrice}){
		const record = state.stocks.find(element => element.id == stockId);
		if(stockPrice * quantity <= state.funds)
		{
			state.funds -= stockPrice * quantity;
			if (record){
				record.quantity += quantity;
			}else{
				state.stocks.push({
					id:stockId,
					quantity: quantity
				});
			}
		}
		
	},
	sellStock(state,{stockId,quantity,stockPrice}){
		const record = state.stocks.find(element => element.id == stockId);
		if (record.quantity > quantity){
			record.quantity -= quantity;
			state.funds += stockPrice * quantity;
		}else{
			state.stocks.splice(state.stocks.indexOf(record),1);
			state.funds += stockPrice * record.quantity;
		}
	},
	setPortfolio(state, portfolio){
		state.funds = portfolio.funds;
		state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
	}
};

const actions ={
	sellStock({commit},order){
		commit('sellStock',order);
	}
};

const getters = {
	funds(state){
		return state.funds;
	},
	stockPortfolio(state, getters){
		return state.stocks.map(stock =>{ 
			const record = getters.stocks.find(element=> element.id == stock.id); // find the record
			return{
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			}
		});
	}
};

export default{
	state,mutations,actions,getters
}