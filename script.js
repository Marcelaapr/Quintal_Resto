function getMenuItens() {
    
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    
    for(let i = 0; i <= 10; i++) {
      fetch(url)
      .then(response => {return response.json()})
      .then(json => {
        const item = json.meals
        item.forEach(data => {
          //console.log(data)
          document.querySelector('.container').innerHTML +=  `
          <img src="${data.strMealThumb}" />
          `
  
        })
      })
    }
  }
  
  getMenuItens()