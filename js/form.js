class Form{
    constructor(){
       //this.input = createInput("NOME");
       this.input = createInput("").attribute("placeholder", "Nome");//Name
       this.button = createButton('Jogar');//Play
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reiniciar');//Reset
       this.warning = createElement('h2');
       
       this.warningvis = false;

       this.thisplayer = null;
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.warning.hide();
    }
    display() {
        this.warning.html("Nome Vazio.");
        this.warning.position(width + 550, -150);
        this.warning.style('color', 'red');
        this.title.html("Apanhador De Frutas");//FRUIT CATCHER
        this.title.position(width / 2 - 310, 50);//350, 50
        //this.title.position(width / 2, 50);//350, 50
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        //this.title.style('text-align', 'center');
        this.input.position(width / 2 - 85, 400);//550, 400 
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(width / 2 - 80, 500);//560, 500
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(width - 120, height - 50);//900, 660
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            if(!this.input.value() == ""){
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                playerCount += 1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);
                this.greeting.html("Olá " + player.name)//Hello
                this.greeting.position(width / 2 - 110, 250);//400, 250
                //this.greeting.position(width / 2, 250);//400, 250
                this.greeting.style('color', 'magenta');//white
                this.greeting.style('font-size', '100px');
            }

            if(this.input.value() == ""){
                this.warning.position(width / 2 - 50, 30);
                this.warningvis = true;
                setTimeout(() => {
                    this.warning.position(width + 550, -150);
                    this.warningvis = false;
                  }, 1500);
            }

        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            var playerAtEndRef = database.ref('playerAtEnd');
            playerAtEndRef.remove();

            location.reload();
        });

    }

    fixPos(){
        if(this.reset.x !== width - 120 || this.reset.y !== height - 50){
            this.reset.position(width - 120, height - 50);//900, 660
        }
        if(this.title.x !== width / 2 - 310){
            this.title.position(width / 2 - 310, 50);//350, 50
        }
        if(this.greeting.x !== width / 2 - 110){
            this.greeting.position(width / 2 - 110, 250);//400, 250
        }
        if(this.button.x !== width / 2 - 80 || this.button.y !== height / 2 - 10 + 135){
            this.button.position(width / 2 - 80, height / 2 - 10 + 135);//560, 500
        }
        if(this.input.x !== width / 2 - 85 || this.input.y !== height / 2 + 25){
            this.input.position(width / 2 - 85, height / 2 + 25);//550, 400
        }
        if(this.warning.x !== width / 2 - 50 && this.warningvis == true){
            this.warning.position(width / 2 - 50, 30);
        }
    }


}
