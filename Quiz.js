class Quiz{
    constructor(){
        
    }

    getState(){
        var  gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
       database.ref('/').update({
           gameState:state
       });

    }

    start(){
       if(gameState === 0){
            contestant = new Contenstant()
            contestant.getCount();
            question = new Question();
            question.display();
        }
    }
    play(){
        background("blue");
        textSize(20);
        var title1= createElement("h1");
        title1.html("Results of the quiz")
        title1.position(350,0);

        // display information of all the players
        Contenstant.getAllContestantsInfo();
        console.log(allContestants);

        //for-in loop
        // Name : Distance
        for(var ctr in allContestants){
            var correctAns = "2";
            if(correctAns === allContestants[plr].answer){
                fill("green");
            }
            else{
                fill("red");
            }
        }
    }
}
