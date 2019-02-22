// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "Venue1.png",
    levels: {

        start: {
            
            message: "You arrive at the venue with your team and start to unload",
            choices: [
                {
                    text: "Enter the venue",
                    nextLevel: "venue",
                },

                {
                    text: "Help unload",
                    nextLevel: "unload",
                },
            ]
        },

        venue: {
            background_image: "InsideVenue.png",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Wow the there are so many seats! ",
            choices: [
                {
                    text: "You are Excited",
                    nextLevel: "Nervous",
                },
                
                {
                    text: "You are Nervous",
                    nextLevel: "Nervous",
                },
            ]
        },

        unload: {
            background_image: "Bus.png",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Great Choice! Now you have to go meet the rest inside.",
            choices: [
                {
                    text: "Follow the team",
                    nextLevel: "venue",
                },
                {
                    text: "Go change into costume",
                    nextLevel: "change",
                },
            ]
        },

    }
};



