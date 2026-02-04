
// create loadCatagories

const loadCatagories=() =>
{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=> res.json())
    .then(data => displayCategories(data.categories))
    .catch((error)=> console.log(error))
}



// caculate time 
function getTime(time){
  const hour=parseInt(time / 3600);
  let remainSecond=(time % 3600);
  const minute=parseInt(remainSecond /60);
  remainSecond=remainSecond % 60;
 return `${hour} hour ${minute} minute ${remainSecond} second ago`
}


  // 
const loadCategoryVideos=(id)=>{
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res=> res.json())
    .then(data => displayVideos(data.category) )
    .catch((error)=> console.log(error))
}



// create displayCategories
const displayCategories =(categories)=>{
   const categoryContainer=document.getElementById('categories')

   categories.forEach((item)=>{
    console.log(item)
  
    // create button
    const buttonContainer=document.createElement("div")
    
    buttonContainer.innerHTML=`
     <button onclick="loadCategoryVideos(${item.category_id})" class="btn">
        ${item.category}
     </button>

    `

    // add button to categoryContainer
    categoryContainer.append(buttonContainer)
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

const cardDemo={
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

const displayVideos=(videos)=>
{
   const videoContainer=document.getElementById("videos")
   videoContainer.innerHTML=" ";
  //  if button has nothing then show it

  if(videos.length==0)
  {
    videoContainer.classList.remove("grid")
    videoContainer.innerHTML=`
      <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center" >
      <img src="Icon.png" />
      <h2 class="text-xl text-center font-bold">
       No Content Here in this Category
      </h2>
      </div>

    `;
    return;
  }
  else{
     videoContainer.classList.add("grid")
  }
   videos.forEach(video =>{
     console.log(video)
    //  create card
     const card=document.createElement("div");
     card.classList="card  card-compact"
     card.innerHTML= `
     
     <figure class="h-[200px] relative" >
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover "
      alt="Shoes" >

      ${
        video.others.posted_date?.length==0 ?"":`
      <span class="absolute text-xs right-2 bottom-2 text-white bg-black rounded p-1">${getTime( video.others.posted_date)}</span>`
      }

  </figure>
  <div class="px-0 py-2 flex">
    <div>
      <img class="h-10 w-10 rounded-full object-cover " src="${video.authors[0].profile_picture} ">
    </div>
    <div class="px-2">
      <h2 class="font-bold">${video.title}</h2>
      <div class="flex item-center gap-3 ">
      <p class="text-gray-400">${video.authors[0].profile_name}</p>
      ${video.authors[0].verified == true?'<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />' :""}
      </div>
    </div>

  </div>
     
     `
     videoContainer.append(card)

   })
}

// get hour and rest time



loadCatagories();
loadvideos();
