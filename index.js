

function input(){
    var output = document.querySelector(".output");
    var btn = document.querySelector(".btn");
    const loveScore = Math.floor(Math.random() * 100) + 1;
    for(let i = 0; i<2; i++){
        var input = document.querySelectorAll(".name")[i].value;
        
        if(input.length === 0){
            console.log("empty");
        }else{
            if(loveScore > 80){
                output.textContent = `${loveScore}% 💘
                Your both are ment for each other💏`;
                frontEnd();
            }
            else if (loveScore > 60 ){
                output.textContent = `${loveScore}% 💘
                STRONG LOVE💞`;
                frontEnd();
            }
            else if (loveScore > 49 ){
                output.textContent = `${loveScore}% 💘
                You can still make the love stronger`;
                frontEnd();
            }
            else {
                output.textContent = `${loveScore}% 😪
                Not ment for each other💔`;
                frontEnd();
            }
        }
    }
    

}
var exit = document.querySelector("#exit");

exit.addEventListener("click", function(){
    location.reload();
})


function frontEnd(){
    document.querySelector("#main").remove();
    document.querySelector(".h1").classList.add("display");
    document.querySelector(".btn").remove();
    exit.style.display = "block";
}