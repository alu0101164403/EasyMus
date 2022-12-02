"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const wordsCount_1 = __importDefault(require("./wordsCount"));
const removeStopWords_1 = __importDefault(require("./removeStopWords"));
const fs = __importStar(require("fs"));
/**
 *
 */
function changeCorpus(countWord, corpusFile) {
    // read corpusFile
    const data = fs.readFileSync(corpusFile, 'utf-8');
    const obj = JSON.parse(JSON.stringify(data));
    let corpus = new Map(Object.entries(obj));
    console.log(corpus);
}
exports.default = changeCorpus;
const object1 = {
    a: 'somestring',
    b: 42
};
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
// expected output:
// "a: somestring"
// "b: 42"
let file = './src/fichero/documento_01.txt';
let stopFile = './src/fichero/stop_words_en.txt';
let corpusFile = './src/fichero/corpus_en.txt';
let countWord = (0, wordsCount_1.default)((0, index_1.default)(file));
countWord = (0, removeStopWords_1.default)(countWord, stopFile);
changeCorpus(countWord, corpusFile);
