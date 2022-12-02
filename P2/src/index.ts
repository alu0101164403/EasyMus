import { publicDecrypt } from 'crypto';
import * as fs from 'fs';

/**
 * __readFiles__
 * Read files line by line and remove elements (, and .) 
 * @file the document that need to read
 * @return a matrix of string
 */
export default function readFiles (file: string) {
    let documents: string[][] = [];
    let documentsByWords: string[] = [];
    let document: string[];

    try {
      // read contents of the file
      const data = fs.readFileSync(file, 'utf-8');
    
      // remove punctuation marks and separate by lines and by words
      data.split(/\r?\n/).forEach(line => {
          document = line.replaceAll(",", "").replaceAll(".", "").toLowerCase().split(" ");
          documents.push(document);
      });
    } catch (err) {
      console.error(err);
    }

    console.log(documents)
    return documents;
}
