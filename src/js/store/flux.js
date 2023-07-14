const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [], 
			planets: [],
			vehicles: [],
			character: {},
			planet: {},
			favorites: [],
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
					const datos = await response.json()
					setStore({
						planets: datos.results
					})
				} catch(error){
					console.log(error)
				}
			},


			obtenerVehicles: async() => {
				try{
					const response = await fetch ("https://swapi.dev/api/vehicles")
					const info = await response.json()
					setStore({
						vehicles: info.results
					})
				} catch(error){
					console.log(error)
				}
			},

			obtenerPersonaje: async(id) => {
				try{
					const response = await fetch ("https://swapi.dev/api/people/"+id)
					const data = await response.json()
					setStore({
						character: data
					})
				} catch(error){
					console.log(error)
				}
			},

			obtenerPlaneta: async(id) => {
				try{
					const response = await fetch ("https://swapi.dev/api/planets/"+id)
					const data = await response.json()
					setStore({
						planet: data
					})
				} catch(error){
					console.log(error)
				}
			},

			addFavorites:(item) => {
				const store = getStore()
				if (store.favorites.includes(item)){
					const actions = getActions()
					actions.deleteFavorite(item)	
				}
				else {
					setStore({
						favorites: [...store.favorites, item]
					})
				}
			},
			deleteFavorite:(item) => {
				const store = getStore()
				let nuevoArray = []
				nuevoArray = store.favorites.filter((element)=>element !== item)
				setStore({
					favorites: nuevoArray
				})
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
