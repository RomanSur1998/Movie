let users = document.querySelector('.users')
let b = fetch('https://www.omdbapi.com/?apikey=b6003d8a&s=All')
b.then((res)=>{
  console.log(res)
  return res.json()
}).then((info)=>{
  console.log(info.Search)
  users.innerHTML =''
info.Search.forEach((elem)=>{
  users.innerHTML +=`
  <div class="user-n" >
  <img
  src="${elem.Poster}"
   alt="user"
    width="100"/>
  <h5>${elem.Title}</h5>
  <h6> Year : ${elem.Year}</h6>
  <h6>ImdbID :${elem.imdbID}</h6>
  <h6 id ="last">Type :${elem.Type}</h6>
  `
})
}).catch()