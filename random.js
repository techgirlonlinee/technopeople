const pages = [
 "‘do you have that on vinyl’",
 "trashing techhouse",
 "saying i love techno but actually listens to techhouse",
 "‘can I get on the guestlist’",
 "making fun of solomun",
 "‘check out my soundcloud bro’"
]

const outputTag = document.querySelector(".text") 

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber]
}

const random = function (){
	event.preventDefault();
  pageNumber = Math.floor( Math.random() * pages.length )
    updateSection ()
}

  
// document.getElementById("intro").addEventListener("click", random)
// event.preventDefault();

document.querySelector("body").addEventListener("click", random)


document.addEventListener ("keyup", function (event){
  if (event.key == "ArrowRight"){
    random () }
})

