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
            music: "Crowd_Applause.wav",
            message: "Wow the there are so many seats! ",
            choices: [
                {
                    text: "You are Excited",
                    nextLevel: "excited",
                },
                
                {
                    text: "You are Nervous",
                    nextLevel: "nervous",
                },
            ]
        },

        unload: {
            background_image: "Bus.png",
            music: "talking.mp3",
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
        
            excited: {
            background_image: "InsideVenue.png",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Wow the there are so many seats! Time to go on stage! ",
            choices: [
                {
                    text: "Kill this Choreography",
                    nextLevel: "kill",
                },
                
                {
                    text: "Have a quick freak out and then chill",
                    nextLevel: "kill",
                },
            ]
        },
             kill: {
            background_image: "StageLights.jpg",
            music: "Cheer.wav",
            message: "Yes! You did amazing and even got a standing ovation!How will you accept first place?",
            choices: [
                {
                    text: "With Grace and Gratitude ",
                    nextLevel: "grace",
                },
                
                {
                    text: "Scream I Won! and then smuggly smile at the other teams.",
                    nextLevel: "win",
                },
            ]
        },
     change: {
            background_image: "ChangeRoom.png",
            music: "talking.mp3",
            message: "AS you enter many teams look intimidating. How will you respond?",
            choices: [
                {
                    text: "Shake it off beacuse you know it is just a scare tactic",
                    nextLevel: "kill",
                },
                
                {
                    text: "Mug them back! Who says you can't stoop low everyonce in a while.",
                    nextLevel: "kill",
                },
            ]
        },
         grace: {
            background_image: "win.jpg",
            music: "Cheer.wav",
            message: "Beautiful performance! Nice way to take the high road! See what happens when you are the best!",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
                
                {
                    text: "End Game",
                    nextLevel: "end",
                },
                
            ]
        }, 
                
         win: {
            background_image: "win.jpg",
            music: "Cheer.wav",
            message: "Okay! That performance did show them! See what happens when you are the best!",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
                
                {
                    text: "End Game",
                    nextLevel: "end",
                },
                
            ]
        },
        
        end: {
            background_image: "end.jpg",
            music: "Cheer.wav",
            message: "Great Game! Happy to see you play! Now you can say you have performed with a standing ovation!",
            
        },
    }
};



