// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave",
            choices: [
                {
                    text: "Enter the cave",
                    nextLevel: "cave",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        cave: {
            message: "Inside the cave, you can go left or right",
            background_image: "fire.gif",
            choices: [
                {
                    text: "Go left",
                    nextLevel: "sword",
                },
                {
                    text: "Go right",
                    nextLevel: "dragonNoSword",
                },
            ]
        },

        sword: {
            message: "You discover a sword and take it!",
            background_image: "sword.jpg",
            choices: [
                {
                    text: "Explore the rest of the cave",
                    nextLevel: "dragonWithSword",
                },
            ]
        },

        dragonNoSword: {
            message: "You encounter a dragon!",
            background_image: "dragon2.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            choices: [
                {
                    text: "Attack the dragon!",
                    nextLevel: "killedByDragon",
                },
                {
                    text: "Run!!",
                    nextLevel: "cowardlySurvival",
                },
            ]
        },

        dragonWithSword: {
            message: "You encounter a dragon!",
            background_image: "dragon2.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            choices: [
                {
                    text: "Attack the dragon!",
                    nextLevel: "slayTheDragon",
                },
                {
                    text: "Run!!",
                    nextLevel: "cowardlySurvival",
                },
            ]
        },

        killedByDragon: {
            message: "You die. You attacked a dragon without a weapon.  What'd you think would happen?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        cowardlySurvival: {
            message: "You survive to live another cowardly day",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        slayTheDragon: {
            message: "Using your sword, you slay the dragon! That person you like is totally going to be into you now.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
    }
};
