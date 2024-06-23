export const createData = (data) => {
    const urls = data.mediaNew.map(item => item.mediaLink);
    const mediaObj = data.mediaNew.map(item => ({
        colour: item.color,
        mediaLink: "link",
        metal: item.metal
    }));
   
    return {
        productName:data.productName,
        productDescription: data.productDescription,
        productCode: data.productCode,
        media: urls,
        inStock: data.inStock,
        offer: data.offer,
        category: data.category,
        collection:data.collection,
        solitaireSize: data.solitaireSize,
        solitaireShape: data.solitaireShape,
        metalColour: data.metalColour,
        metalPurity: data.metalPurity,
        info: {
            setting:data.setting,
            metal:data.metal,
            size:data.size,
            cut:data.cut,
            details:data.details
        },
        mediaNew: mediaObj,
        user: "admin"
      }
}
