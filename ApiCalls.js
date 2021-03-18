export const fetchData = () => {
    // setLoading(true)
    axios.get('https://api.predic8.de:443/shop/categories/')

    .then(result => {
        // just grab the first 5 links
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
                setCategory(result.data.products);
                // newStories.push(result.data.name)                    
                
                productData.forEach(item => {
                    axios.get('https://api.predic8.de:443' + item.product_url)
                    
                .then(r => {
                    newStories.push(r.data)
                    // console.log(r.data)
                    // const productDataDetails = [r.data];
                    setData([...Data,  newStories ])
            
                // productDataDetails.forEach(el => {
                //     axios.get('https://api.predic8.de:443' + el.photo_url)

                //     .then(el => {
                //         // console.log(el)
                //         // newStories.push(el.data)
                //         setphoto(el.data)
                //     })
                //   })    
                })
            })
        })        
        
        // .then((res)=> setData([...Data, newStories ]))
        // .then((res)=> setphoto([...Data, newStories]))
        .catch(err => {
            console.log(err);
        });
      })        
    })
        .catch((err) => {
            console.log('error', err);
        })
    };          
