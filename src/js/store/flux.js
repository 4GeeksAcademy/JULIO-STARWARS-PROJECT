const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [], 
			planets: [],
		},
		actions: {
			obtenerPersonajes: async() => {
				try{
					const response = await fetch ("https://swapi.dev/api/people")
					const data = await response.json()
					setStore({
						characters: data.results
					})
				} catch(error){
					console.log(error)
				}
			},
			obtenerPlanetas: async() => {
				try{
					const response = await fetch ("https://swapi.dev/api/planets")
					const data = await response.json()
					setStore({
						planets: data.results
					})
				} catch(error){
					console.log(error)
				}
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
