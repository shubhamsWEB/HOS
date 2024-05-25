export const createData = (data) => {
    const urls = data.mediaNew.map(item => item.mediaLink);
    return {
        productName:data.productName,
        productDescription:data.productDescription,
        productCode:data.productCode,
        inStock:data.inStock,
        offer:data.offer,
        category:data.category,
        collection:data.collection,
        solitaireSize:data.solitaireSize,
        solitaireShape:data.solitaireShape,
        metalColour:data.metalColour,
        metalPurity:data.metalPurity,
        info: {
            setting:data.setting,
            metal:data.metal,
            size:data.size,
            cut:data.cut,
            details:data.details
        },
        // mediaNew:data.mediaNew,
        media:urls,
        user:"admin"
    }
}
