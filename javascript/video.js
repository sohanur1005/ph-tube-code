
// create loadCatagories

const loadCatagories=() =>
{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=> res.json())
    .then(data => displayCategories(data.categories))
    .catch((error)=> console.log(error))
}

// create displayCategories
const displayCategories =(data)=>
{
   console.log(data)
}
loadCatagories();
