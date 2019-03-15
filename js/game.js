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
                    text: "Travel to the moon",
                    nextLevel: "Moon",
                },
                
                {
                    text: "Travel to the sun",
                    nextLevel: "Sun",
                },
            ]
        },

        Mars: {
            background_image: "Alien.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
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
        
        Capture: {
            background_image: "Spaceship.jpg",
            music: "",
            message: "Another alien comes up behind you and captures you",
            choices: [
                {
                    text: "RIP",
                    nextLevel: "Game_Over",
                }
            ]
        },
        
        Moon: {
            background_image: "",
            music: "",
            message: "",
            choices: [
                {
                    text: "",
                    nextLevel: "",
                },
                {
                    text: "",
                    nextLevel: "",
                },
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
        }   
    }
};
