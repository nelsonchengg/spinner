const spinSticks = ["|", "/", "-", "\\"];
for (let delay = 0; delay < 4800; delay += 200) {
  for (const spinStick of spinSticks) {
    setTimeout(() => { process.stdout.write(`\r${spinStick}`); }, delay);
    delay += 200;
  }
};
setTimeout(() => { process.stdout.write('\n'); }, 5000);