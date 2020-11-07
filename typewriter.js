const sentence = "hello there from lighthouse labs";

const gif = function(x) {
  let addLineBreak = `${x}\n`;
  let time = 50;
  for (const char of addLineBreak) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time, time += 50);
  } 
}

gif(sentence);

// node typewriter.js


