const pages = [
{copy: "tattoo artist / looking for a cute girl to spoil / good vibes only"},
{copy: "vegan / tattoos / goth"},
{copy: "vegan / dog-lover / gin freak"},
{copy: "fries / fitness / dogs"},
{copy: "dogs > people / if you’re not cute don’t talk to me"},
{copy: "dj / wild nights only / edm forever"},
{copy: "vegan / if you can't handle me at my worst then you don't deserve me at my best"},
{copy: "bdsm / techno / vegan"},
{copy: "here for a few days / need someone cute to show me around"},
{copy: "check out my music - link below"},  
{copy: "freelance writer / stay at home cat mom"},
{copy: "i only wear black / techno / amalie lens is goals"},  
{copy: "INFP / cooking / concerts"},
{copy: "f4f / vegan / asian girls only"},
{copy: "420 / deep-conversations / world-traveler"},
{copy: "foodie / gin / fitness / cocaine"},
{copy: "model / art student / dm to collab"},
{copy: "just moved here / looking for friends / don’t hit on me"},
{copy: "want to improve my english / girl friends only / no lesbians"},
{copy: "employed at urban outfitters / let’s go to festivals"},
{copy: "proud / poly / 420"},
{copy: "in a complicated relationship / no strings attached"},
{copy: "cuddle after sex"}, 
{copy: "shaved head / theory theory theory / bartender"},
{copy: "shaved head don’t discriminate / femme only"},
{copy: "glitter queer / comedy club / self-love" },
{copy: "dog walker / nap-enthusiast / coffee-lover"},
{copy: "ibiza is the best place on earth"},
{copy: "art student / here to make friends / dm for a shoot"},
{copy: "cocaine / 69 / 420"},
{copy: "actually 17"},  
{copy: "my diet is cocaine"},
{copy: "no smokers / looking for someone who actually cares about their body / be my gym buddy"},
{copy: "MD + EDM"},  
{copy: "pretty girls only / no smoker"},
{copy: "feeling cute might reveal that i just recently got a divorced later"},
{copy: "photographer / looking for models + more"},  
{copy: "dj at DIY venue / only talk to me at night"},
{copy: "blue hair / anime" },
{copy: "i love japan / summer is kimono season" },
{copy: "just came back from ibiza / looking for a girl to have fun with me and my bf"},
{copy: "fitness / finance / travel"},
{copy: "consulting / if you want someone smart and ambitious what are you waiting for"},  
{copy: "instagram model / world traveller / food addict"},
{copy: "ENFP / bored of this app, let’s get drinks"},
{copy: "short hair now / concerts / drinks"},
{copy: "looking for a travel buddy / fuck this weather let’s go to asia"},
{copy: "cat owner / introvert / guitarist"} 
]

const outputTag = document.querySelector("p") 
const nextTag = document.querySelector("h2") 

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy
}

const random = function (){
  pageNumber = Math.floor( Math.random() * pages.length )
    updateSection ()
}
  
document.addEventListener("click", random)

document.addEventListener ("keyup", function (event){
  if (event.key == "ArrowRight"){
    random () }
  
  // if (event.key == "ArrowLeft"){
  //   random () }
})

