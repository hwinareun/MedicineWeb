const drugInfoFilter = async (items) => (
    await items.map(item => ({
        itemSeq: Number(item.itemSeq),
        itemName: item.itemName,
        efcyQesitm: item.efcyQesitm,
        useMethodQesitm: item.useMethodQesitm,
        seQesitm: item.seQesitm,
        depositMethodQesitm: item.depositMethodQesitm,
        itemImage: item.itemImage
    }))
);

const drugImageInfoFilter = async (items) => (
    await items.map(item => ({
        itemSeq: Number(item.ITEM_SEQ),
        printFront: item.PRINT_FRONT,
        printBack: item.PRINT_BACK,
        drugShape: item.DRUG_SHAPE,
        colorClass1: item.COLOR_CLASS1,
        colorClass2: item.COLOR_CLASS2,
        lineFront: item.LINE_FRONT,
        lineBack: item.LINE_BACK
    }))
);

const drugEtcFilter = async (items) => (
    await items.map(item => ({
        itemSeq: Number(item.ITEM_SEQ),
        ingrEngName: item.INGR_ENG_NAME,
        ingrKorName: item.INGR_KOR_NAME,
        dosageForm: item.DOSAGE_FORM,
        strength: item.STRENGTH
    }))
);

module.exports = {
    drugInfoFilter,
    drugImageInfoFilter,
    drugEtcFilter
};
