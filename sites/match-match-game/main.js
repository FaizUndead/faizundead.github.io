;
(function () {

    let container = document.querySelector('.play-deck');
    container.style.visibility = 'hidden';

    //Default settings if not chosen
    let theme = 'bladerunner';
    let difficulty = 12;

    let start;  //Variable for timer

    //Getting settings from player
    let themes = document.querySelector('.theme');
    themes.addEventListener('click', function (event) {
        console.log('theme')
        let elem = event.target;
        elem = elem.closest('.button');

        if (elem === null) return;

        let themeId = elem.dataset.theme;
        themeId = parseInt(themeId);
        //We have 3 themes
        switch (themeId) {
            case 1:
                theme = 'bladerunner';
                break;
            case 2:
                theme = 'hiphop';
                break;
            case 3:
                theme = 'dino';
                break;
            default:
                break;
        }

    });

    let difficulties = document.querySelector('.difficulty');
    difficulties.addEventListener('click', function (event) {
        console.log('diff');
        let elem = event.target;
        elem = elem.closest('.button');
        if (elem === null) return;


        let difId = elem.dataset.dif;
        difId = parseInt(difId);
        //We have 3 difficulties
        switch (difId) {
            case 1:
                difficulty = 12;
                break;
            case 2:
                difficulty = 18;
                break;
            case 3:
                difficulty = 24;
                break;
            default:
                break;
        }

    });


    //Starting new game

    let newGameBtn = document.querySelector('.button_new-game');
    newGameBtn.addEventListener('click', function (event) {
        let elem = event.target;
        elem = elem.closest('.button');
        if (elem === null) return;

        let s = new Settings(difficulty,theme);
        let cards = [];
        let arrDif = s.getDifficulty();
        let path = s.getPath();

        let startScreen = document.querySelector('.start-screen');
        document.body.removeChild(startScreen);
        container.style.visibility = '';

        for (let i = 0; i < arrDif.length; i++) {
            cards[i] = new Card(arrDif[i], i, 'card',path);
        }
        start = Date.now();

        container.addEventListener('click', function (event) {
            let elem = event.target;
            elem = elem.closest('.card');
            if (elem === null) return;

            let i = elem.id;
            let card = cards[i];
            d.dispatch(card);
            if(container.querySelectorAll(':not(.show)').length === 0){
                finish();
                location.reload();
            }

        });




    });



    //Class Card. When creating a new instance of the Class, constructor creates
    //a new node, saves a link, and appends it to container
    class Card {

        //Constructor takes 4 parameters. cont (is for content) - determines what image
        // card will receive, id - unique id of element,
        //path - path to folder where images can be found, it depends on chosen theme
        constructor(cont, id, className, path) {
            this.cont = cont;
            this.id = id;
            this.trigger = false;
            this.path = path;
            let elem = document.createElement('div');

            elem.classList.add(className);
            elem.id = id;
            this.elem = elem;
            elem.style.backgroundImage = `url("${this.path}shirt.jpg")`;
            container.appendChild(elem);

        }
        //Method to show a picture of a card
        highlight() {
            if(this.trigger === true) {
                this.elem.style.backgroundImage = `url("${this.path}shirt.jpg")`;
                this.elem.classList.toggle('show');
                this.trigger = false;
                return;
            }
            this.elem.classList.toggle('show');
            this.elem.style.backgroundImage = `url("${this.path}${this.cont}.jpg")`;
            this.trigger = true;


        }

        //Removes card from play-deck
        hide() {
            this.elem.classList.toggle('hide');
        }
    }

    //Takes cards at which an event occurred
    class Dispatcher {

        constructor() {
            this.card = null;
            this.solved = false;
            this.wrong =false;
            this.toHide = null;

        }

        dispatch(acard) {
            if(this.wrong === true) {
                this.card.highlight();

                this.toHide.highlight();
                this.toHide = null;
                this.card = null;
                this.wrong = false;
            }
            if(this.solved === true) {
                this.card.hide();

                this.toHide.hide();
                this.solved = false;
                this.card =null;
                this.toHide = null;
                return;
            }

            if (this.card === null) {
                acard.highlight();
                this.card = acard;
                return;
            }
            if(this.card.id === acard.id) {

                return;
            }
            if (this.card.cont === acard.cont) {
                this.solved = true;
                acard.highlight();
                this.toHide = acard;




            } else {

                acard.highlight();

                this.toHide = acard;
                this.wrong = true;
            }


        }

    }

    let d = new Dispatcher();

    //Takes a settings from user
    class Settings {
        constructor(difficulty,theme) {
            this.difficulty = difficulty;
            this.theme = theme;

        }

        //Returns and array of random sequence that depends on difficulty
        getDifficulty() {
            let pairs = this.difficulty / 3;
            let arrDif = [];
            for (let i = 0; i < pairs; i++) {
                arrDif.push(1);
                arrDif.push(2);
                arrDif.push(3);

            }
            arrDif = shuffle(arrDif);
            return arrDif;
        }
        //Returns path to folder with images images
        getPath() {
            let path = '' + this.theme+'-images'+ '/';
            return path;
        }
    }

    //Shuffles an array
    function shuffle(array) {
        function compareRandom(a, b) {
            return Math.random() - 0.5;
        }
        let arr = array.sort(compareRandom);
        return arr;
    }


    function finish() {
        let time = Date.now() - start;
        time = Math.floor(time/1000);
        alert('Congratulations your time is '+ time+' seconds!');

    }





})();