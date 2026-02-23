let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let img = document.querySelector("img");
let message = document.querySelector(".message");



button.onclick = function(){
  console.log("button check");
  
  
  let answer1 = input1.value;
  console.log("answer1");
  let answer2 = input2.value
  console.log("answer2");
  
  
  if(answer1 === "Zorkaberries" && answer2 === "tacos"){
    console.log("starfire");
    document.querySelector("div").innerHTML = "Congrats your Teen Titan is Starfire! You got Starfire because of your unwavering love for your planets fruit, and You are the warm-hearted, fiercely loyal, and incredibly naive person who wears their heart on their sleeve";
   img.src="https://static.wikia.nocookie.net/teen-titans-go/images/9/9f/Leg_Day_Image38.png/revision/latest?cb=20150807121207";
      } else if(answer1 === "Blue Fizzy Pop" && answer2 === "tacos"){
        console.log(".Cyborg");
    document.querySelector("div").innerHTML = "Congrats your Teen Titan is Cyborg!  You are the loyal, tech-savvy Older sibbling figure who loves solving problems and protecting your team, while occasionally indulging in your favorite drink."
        img.src="https://m.media-amazon.com/images/M/MV5BMjM5Nzk3MTA4M15BMl5BanBnXkFtZTgwNzEwODEyMjE@._V1_.jpg";
      
    
} else if(answer1 === "Cherry pie" && answer2 === "Pizza"){
    console.log(".raven");
      document.querySelector("div").innerHTML = "Congrats your Teen Titan is Raven!  you are the emotional anchor and the secret powerhouse of the group"
  img.src="https://teentitansgoprofile.wordpress.com/wp-content/uploads/2015/04/teen_titans_go_raven.jpg";