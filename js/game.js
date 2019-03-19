// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "seahorse.jpg",
    levels: {

        start: {
            message: "You are going on an expedition into space.",
            choices: [
                {
                    text: "Travel to Mars",
                    nextLevel: "Mars",
                },
                
                {
                    text: "Travel to the sun",
                    nextLevel: "Sun",
                },
            ]
        },

        Mars: {
            background_image: "Alien.jpg",
            music: "",
            message: "You spot an alien.",
            choices: [
                {
                    text: "Go and greet it.",
                    nextLevel: "Greet",
                },
                
                {
                    text: "Stay in the spaceship and take pictures of the alien.",
                    nextLevel: "Capture",
                }
            ]
        },
        
        Greet: {
            background_image: "House.jpg",
            music: "",
            message: "Surprisingly, the alien can speak your language and welcomes you with open arms",
            choices: [
                {
                    text: "Follow the alien to its household.",
                    nextLevel: "Household",
                },
                
                {
                    text: "You get spooked and decide to go back to your spaceship",
                    nextLevel: "Capture",
                }
            ]
        },
        
        Household: {
            background_image: "GroupOfAliens.jpg",
            music: "",
            message: "You meet more indivisuals of the alien kind",
            choices: [
                {
                    text: "Announce yourself as the king",
                    nextLevel: "King",
                },
                
                {
                    text: "Bring an alien back to earth",
                    nextLevel: "Earth",
                }
            ]
        },
        
        King: {
            background_image: "King.jpg",
            music: "",
            message: "You have become the king of the aliens",
            choices: [
                {
                    text: "Poggers",
                    nextLevel: "Win",
                }
            ]
        },
        
        Earth: {
            background_image: "Hero.jpg",
            music: "",
            message: "You have become a scientific hero on earth",
            choices: [
                {
                    text: "Poggers",
                    nextLevel: "Win",
                }
            ]
        },
        
        Capture: {
            background_image: "Scary.webp",
            music: "",
            message: "Another alien comes up behind you and captures you",
            choices: [
                {
                    text: "RIP",
                    nextLevel: "Game_Over",
                }
            ]
        },
        
        Sun: {
            background_image: "FIRE.gif",
            music: "",
            message: "What did you think was going to happen...",
            choices: [
                {
                    text: "You burn in a flame of fire",
                    nextLevel: "Game_Over",
                },
            ]
        },
        
        Game_Over: {
            background_image: "Died.gif",
            music: "",
            message: "It is doomed",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },   
        
        Win: {
            background_image: "Win.gif",
            music: "",
            message: "You win.... I guess......",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }
            ]
        }
    }
};

