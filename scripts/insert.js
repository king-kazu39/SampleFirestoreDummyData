const func = require('./funstions');

const collectionNameFromArg = process.argv[2];
const jsonDirPath = './json/';
const jsonExt = '.json';
const jsonFilePath = jsonDirPath + collectionNameFromArg + jsonExt;

func.insertData(jsonFilePath);