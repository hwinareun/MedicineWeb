const removeDuplicateObjects = async (arr) => {
    const uniqueJsonArray = [];
    const seen = new Set();

    for(const item of arr) {
        const itemStr = JSON.stringify(item);

        if(!seen.has(itemStr)) {
            seen.add(itemStr);
            uniqueJsonArray.push(item);
        }
    }

    return uniqueJsonArray;
}

module.exports = removeDuplicateObjects;