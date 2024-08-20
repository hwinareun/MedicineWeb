const getDifferenceByKeyAndToArray = async (arr1, arr2, key = 'itemSeq') => {
    const set = new Set(await arr2.map(item => item[key]));
    
    const diff = await arr1.filter(item => !set.has(item[key]));

    const resultArray = await diff.map(obj => Object.values(obj));
  
    return [diff, resultArray];
  };

module.exports = getDifferenceByKeyAndToArray;