const animation = ['|','/','-','\\','|','/','-','\\','|'];
let counter = 0;
let delay = 100;
for (const item of animation) {
  setTimeout(() => {process.stdout.write(`\r${item}     `);counter++;
    if (counter === animation.length) {
      console.log();
    }
  }, delay);
  delay += 200;
}