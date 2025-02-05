// index.js


//Global Variables
const ramenName = document.querySelector('#ramen-name')
const ramenRestaurant = document.querySelector('#ramen-restaurant')
const ramenImg = document.querySelector('#ramen-image')
const ramenRating = document.querySelector('#ramen-rating')
const ramenComment = document.querySelector('#ramen-comment')
const ramenMenu = document.querySelector('#ramen-menu')


//Helper functions 
const fetchRamen = async () => {
    try {
        const response = await fetch("http://localhost:3000/ramens")
        const data = await response.json()
        data.forEach(ramenObj => {
          const image = document.createElement('img')
          image.src = ramenObj.image
          image.addEventListener('click', () => handleClick(ramenObj))
          ramenMenu.append(image)
        });
    } catch(error){
        alert(error)
    }
};

fetchRamen();

  
const handleClick = (ramen) => {
    ramenName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant
    ramenImg.src = ramen.image
    ramenRating.textContent = `Rating: ${ramen.rating}/10`
    ramenComment.textContent = ramen.comment
};


//Attach Listeners
const addSubmitListener = () => {
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', (event) => {
      event.preventDefault()

   
      const name = document.getElementById('new-name').value
      const restaurant = document.getElementById('new-restaurant').value
      const image = document.getElementById('new-image').value
      const rating = document.getElementById('new-rating').value
      const comment = document.getElementById('new-comment').value

      const newRamen = { name, restaurant, image, rating, comment }
      
      const ramenImage = document.createElement('img')
      ramenImage.src = newRamen.image
      ramenImage.alt = newRamen.name
      ramenImage.addEventListener('click', () => handleClick(newRamen))
      ramenMenu.append(ramenImage)

      form.reset()
    }) 
  };

  addSubmitListener()

//Invoke Logic

// const main = () => {
//     document.addEventListener('DOMContentLoaded', () => {
//         fetchRamen();
//         addSubmitListener();
//     })
// }

// main();


// Export functions for testing
// CODE IS BREAKING AT THIS LINE
//WILL NOT RETAIN THE SUBMIT INFO
// export {    
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };