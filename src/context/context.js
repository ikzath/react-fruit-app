import React, { createContext, useState, useEffect, useReducer  } from "react"; 
import axios from "axios";
import AppReducer from "./AppReducer";

// 'set up initial state
const initialState = {
    watchList: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
}

export const MyContextData = createContext(initialState); 

export const MyContext = (props) => {

  const [myState, setMyState] = useState([]);
  let productCollection = []
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {

    const fetchData = () => {
        // setLoading(true)
        axios.get('https://api.predic8.de:443/shop/categories/')
        .then(result => {
            const results = result.data.categories;
            // NESTED AXIOS CALLS
            results.forEach(element => 
            {
            axios
            .get(
                "https://api.predic8.de:443" 
                + element.category_url                    
            )
            .then(result => {
                const productData = result.data.products;                
                
                productData.forEach(item => {
                axios.get('https://api.predic8.de:443' + item.product_url)                    
                .then(r => {
                    if(r.data.photo_url){
                        r.data.photo_url = 'https://api.predic8.de:443' + r.data.photo_url
                    }
                    else{
                        r.data.photo_url = 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png'
                    }
                productCollection.push(r.data)
                
                setMyState([...myState,  productCollection ])
                
                    })
                  })
                })                
                .catch(err => {
                console.log(err);
                });
              })        
            }) 
            .catch((err) => {
            console.log('error', err);
             })
            };  
                        
        fetchData();
  }, []);


    useEffect(() => {

        localStorage.setItem("watchlist", JSON.stringify(state.watchList));

    }, [state]);


      // action to add item to watchlist
        const addFruitToWatchlist = (fruit) => {
            dispatch({ type: "ADD_FRUIT_TO_WATCHLIST", payload: fruit });
        };

      // action to remove item from watchlist
        const removeFruitFromWatchlist = (name) => {
            dispatch({ type: "REMOVE_FRUIT_FROM_WATCHLIST", payload: name });
        };

    //   console.log(myState)


    return (
        <MyContextData.Provider value={{  
            context: myState,
            watchList: state.watchList, 
            addFruitToWatchlist,
            removeFruitFromWatchlist
        }} 
            >
            {props.children}
        </MyContextData.Provider>
    );
};