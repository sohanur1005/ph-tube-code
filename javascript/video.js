
// create loadCatagories

const loadCatagories=() =>
{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=> console.log(res))
    .catch((error)=> console.log(error))
}

// create displayCategories
const displayCategories =(data)=>
{

}
loadCatagories();
