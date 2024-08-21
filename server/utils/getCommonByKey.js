const removeDuplicateObjects = require("./removeDuplicateObjects");

const getCommonByKey = async (arr1, arr2, key = 'itemSeq') => {

    const filteredArr1 = await arr1.filter(item1 => arr2.some(item2 => item1[key] === item2[key]));
    const filteredArr2 = await arr2.filter(item1 => arr1.some(item2 => item1[key] === item2[key]));
    // const filteredArr3 = new Set(await arr3.filter(item1 => filteredArr1.some(item2 => item1[key] === item2[key])));

    // const filteredArr3_1 = await removeDuplicateObjects(filteredArr3);

    const ArrayArr1 = await filteredArr1.map(obj => Object.values(obj));
    const ArrayArr2 = await filteredArr2.map(obj => Object.values(obj));
    // const ArrayArr3 = await filteredArr3_1.map(obj => Object.values(obj));

    return [filteredArr1, filteredArr2, ArrayArr1, ArrayArr2];
}

module.exports = getCommonByKey;