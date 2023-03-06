
const slide = document.querySelector(".slide");

const sliderBg = document.createElement("div")

const posterPath = "http://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg "
const key = "2e9d1426df14f8f8926141cd1d738566"
const url ="https://api.themoviedb.org/3/trending/all/day?api_key=2e9d1426df14f8f8926141cd1d738566"
fetch(url)
.then(res => {
    return res.json()
})
.then((data)=> {
  console.log(data)
  data.results.forEach(img => {
    const {poster_path} = img;
    
    
    

  });
    
  
})