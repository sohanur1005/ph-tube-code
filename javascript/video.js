
// create loadCatagories

const loadCatagories=() =>
{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=> res.json())
    .then(data => displayCategories(data.categories))
    .catch((error)=> console.log(error))
}



// create displayCategories
const displayCategories =(categories)=>{
   const categoryContainer=document.getElementById('categories')

   categories.forEach((item)=>{
    console.log(item)
    // create button
    const button=document.createElement("button")
    button.classList="btn";
    button.innerText=item.category;

    // add button to categoryContainer
    categoryContainer.append(button)
   })

}

// load videos
const loadvideos=() =>
{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res=> res.json())
    .then(data => displayVideos(data.videos))
    .catch((error)=> console.log(error))
}

const displayVideos=(videos)=>
{
   const videoContainer=document.getElementById("videos")
   videos.forEach(video =>{
     console.log(video)
    //  create card
     const card=document.createElement("div");
     card.classList="card  card-compact"
     card.innerHTML= `
     
     <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
     
     `
     videoContainer.append(card)

   })
}


loadCatagories();
loadvideos();
