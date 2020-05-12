import { readFile } from 'fs'

export const readFilePromise = (filename: string): Promise<string> => {
  return new Promise<string>((
    resolve: (value: string) => void,
    reject: (error: Error) => void) => {
      readFile(filename, (err: Error | null, buffer: Buffer): void => {
        if (err) {
          reject(err);
        } else {
          resolve(buffer.toString());
        }
      });
    }
  );
}