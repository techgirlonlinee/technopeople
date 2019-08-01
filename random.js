const pages = [
 "tattoo artist / looking for a cute girl to spoil / good vibes only",
 "vegan / tattoos / goth",
 "vegan / dog-lover / gin freak",
 "fries / fitness / dogs",
 "dogs > people / if you’re not cute don’t talk to me",
 "dj / wild nights only / edm forever",
 "vegan / if you can't handle me at my worst then you don't deserve me at my best",
 "bdsm / techno / vegan",
 "here for a few days / need someone cute to show me around",
 "check out my music - link below",  
 "freelance writer / stay at home cat mom",
 "i only wear black / techno / amalie lens is goals",  
 "INFP / cooking / concerts",
 "f4f / vegan / asian girls only",
 "420 / deep-conversations / world-traveler",
 "foodie / gin / fitness / cocaine",
 "model / art student / dm to collab",
 "just moved here / looking for friends / don’t hit on me",
 "want to improve my english / girl friends only / no lesbians",
 "employed at urban outfitters / let’s go to festivals",
 "proud / poly / 420",
 "in a complicated relationship / no strings attached",
 "cuddle after sex", 
 "shaved head / theory theory theory / bartender",
 "shaved head don’t discriminate / femme only",
 "glitter queer / comedy club / self-love" ,
 "dog walker / nap-enthusiast / coffee-lover",
 "ibiza is the best place on earth",
 "art student / here to make friends / dm for a shoot",
 "cocaine / 69 / 420",
 "actually 17",  
 "my diet is cocaine",
 "no smokers / looking for someone who actually cares about their body / be my gym buddy",
 "MD + EDM",  
 "pretty girls only / no smoker",
 "feeling cute might reveal that i just recently got a divorced later",
 "photographer / looking for models + more",  
 "dj at DIY venue / only talk to me at night",
 "blue hair / anime" ,
 "i love japan / summer is kimono season" ,
 "just came back from ibiza / looking for a girl to have fun with me and my bf",
 "fitness / finance / travel",
 "consulting / if you want someone smart and ambitious what are you waiting for",  
 "instagram model / world traveller / food addict",
 "ENFP / bored of this app, let’s get drinks",
 "short hair now / concerts / drinks",
 "looking for a travel buddy / fuck this weather let’s go to asia",
 "cat owner / introvert / guitarist" 
]

const outputTag = document.querySelector("p") 

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber]
}

const random = function (){
  pageNumber = Math.floor( Math.random() * pages.length )
    updateSection ()
}

  
document.getElementById("button").addEventListener("click", random)

document.addEventListener ("keyup", function (event){
  if (event.key == "ArrowRight"){
    random () }
})

