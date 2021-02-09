class Contestant{
    constructor(){
        this.name = null
        this.score = 0
        this.index = null
        this.button = createButton("submit")
    }

    getCount(){
        var contestantCountRef = database.ref("contestantCount");
        contestantCountRef.on("value",function(data){
            contestantCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            contestantCount : count
        })
    }
    update(){
        //player1 - child node - name - value
        //player + playerCount - players/player1 .. players/player2 ...
        var contestantIndex = "contestants/contestant" + this.index
        database.ref(contestantIndex).set({
            name : this.name,
            score : this.score
        })
        
    }
    //Player.getAllPlayersInfo()
    // static function is attached to the class itself
    static getAllContestantsInfo(){
        var contestantsRef = database.ref("contestants");
        contestantsRef.on("value",function(data){
            allContestants = data.val();
        })
    }
    //'this' should refer to form inside the function .. arrow function .. ()=>{//code}
        // arrow function changes binding of 'this'
        this.button.mousePressed(()=>{
            contestant.name = this.input.value();
            this.title.hide();
            this.input.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contetantCount = contestantCount+1;
            contestant.index = contestantCount;
            contestant.updateCount(contestantCount);
            contestant.update();
        })
