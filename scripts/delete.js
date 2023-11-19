const func = require('./funstions');

const collectionNameFromArg = process.argv[2];

func.deleteCollectionData(collectionNameFromArg);