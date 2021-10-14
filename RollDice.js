var random = 0
var player = true

var player1_count = 0
var player2_count = 0

$(".dice").on("click", () => {
    random = Math.floor((Math.random() * 7));
    $("div.dot-number").html(random)

    if (player == true) {
        player1_count += random

        $(".player-score-1").html(player1_count)
        player = false
        $(".side-colunm-1").css("width","+=50px")

        if (player1_count >= 40) {
            alert("Player-1 has won thank you for playing")
        }
    }

    else if(player == false){
        player2_count += random

        $(".player-score-2").html(player2_count)
        $(".side-colunm-2").css("width","+=50px") 
        player = true

        if (player2_count >= 40) {
            alert("Player-2 has won thank you for playing")   
        }
    }
})


/*     
var styles=
    [{"display": "block", 
    "width": "24px", 
    "height": "24px", 
    "border-radius": "50%", 
    "background-color": "white"}]
 

$(".dice").on("click",()=>{
    $(".dot").css(styles[0])
}) */




