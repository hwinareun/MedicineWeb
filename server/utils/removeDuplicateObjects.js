const removeDuplicateObjects = async (arr) => {
    return await arr.filter((value, index, self) =>
        index === self.findIndex((t) => (
            JSON.stringify(t) === JSON.stringify(value)
        ))
    );
};

module.exports = removeDuplicateObjects;