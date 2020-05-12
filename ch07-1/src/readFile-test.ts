import { readFile } from 'fs'

readFile('../packages.json', (err: Error | null, buffer: Buffer): void => {
  if (err) {
    throw err;
  } else {
    const content: string = buffer.toString();
    console.log(content);
  }
});
