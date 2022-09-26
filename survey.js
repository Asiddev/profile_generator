const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer1) => {
  rl.question("What's your nick name?  ", (answer2) => {
    rl.question("What's an activity you like doing? ", (answer3) => {
      rl.question("What do you listen to while doing that? ", (answer4) => {
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.) ?",
          (answer5) => {
            rl.question(
              "What's your favourite thing to eat for that meal?",
              (answer6) => {
                rl.question(
                  "Which sport is your absolute favourite?",
                  (answer7) => {
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!",
                      (answer8) => {
                        console.log(
                          `Hey! Node is ${answer1}. My nickname is ${answer2} and i like ${answer3} while listening to ${answer4}. After that ill enjoy my favourite meal of the day ${answer5}. My favourite meal during that time is ${answer6}. Sometimes i will put my favourite sport  ${answer7} on tv while i eat. If i eat enough i feel like i might get a superpower like ${answer8}`
                        );
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  });
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
