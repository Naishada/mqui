class Question{
    constructor(){
        this.input = createInput("Name");
        this.option1 =  createElement("h3");
        this.option2 = createElement("h4");
        this.question = createElement("h2");
        this.title = createElement("h1");

    }

    display(){
        //heading - h1,h2,h3
        this.title.html("My Quiz Game");
        this.title.position(350,0);
        this.question.html("What is lake that Elsa wants to visit ?");
        this.question.position(150,80);
        this.option1.html("Nile");
        this.option1.position(150,100);
        this.option2.html("Ahtohallan");
        this.option2.position(150,120);
        this.input.position(150,230);
        
        
    }
};