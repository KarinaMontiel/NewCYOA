var game = {
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

        cave: {
            message: "You're in a cave.  What'd you expect?",
            choices: [
                {
                text: "Start over",
                nextLevel: "start",
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

    }
};
