const getDifferenceByKeyAndToArray = async (arr1, arr2, key = 'itemSeq') => {
    const set = new Set(await arr2.map(item => item[key]));
    
    const diff = await arr1.filter(item => !set.has(item[key]));
  
    return diff;
  };

module.exports = getDifferenceByKeyAndToArray;