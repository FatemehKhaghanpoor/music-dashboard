function fetchData(){
    const url="http://localhost:3000/singer";
    
    fetch(url).then(res=>{return res.json()})
    .then(data => data.forEach(data =>{
        const element= `<li> <a href="#">
        <img src=${data.cover} alt="" width="60px" height="40px" >
        <div class="recmusic">
        <span><h4>${data.name}</h4></span>
        <span><h7>${data.singer}</h7></span>
    </div>
    </a>  </li>`

    document.getElementById("recmusic").insertAdjacentHTML(`beforeend`,element)
    })).catch(er =>console.log(er));
    
    
   
}
export{fetchData}
