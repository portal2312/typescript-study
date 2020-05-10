import { readFileSync, readFile } from 'fs'

const buffer: Buffer = readFileSync('./package.json');
console.log(buffer);
const content: string = buffer.toString();
console.log(content);
