export const images = (imageArr) => {
    // { src: '/assets/p1/RGV.jpg', width: '100%', height: 500, title: '', description: '' },

    // {
    //     src: '/assets/p1/RG.mp4',
    // width: '100%',
    // height: 500,
    // title: '',
    // description: '',
    // type: 'video',
    // poster:
    //         "/assets/p1/RG0001.png",
    //autoPlay:true,
    //loop:true,
    //     sources: [
    //         {
    //             src: "/assets/p1/RG.mp4",
    //             type: "video/mp4",
    //         },
    //     ],
    // },
    const imgObj = [];
imageArr.map(img => {
    if(img.includes('.mp4')) {
    imgObj.push({
        src:img,
        width:'100%',
        height:'500',
        title:"",
        description:'',
        type:'video',
        poster:'',
        autoPlay:true,
        sources: [
            {
                src:img,
                type:'video/mp4'
            }
        ]
    })
} else {
    imgObj.push({
        src:img,
        width:'100%',
        height:'500',
        title:"",
        description:''
    })
}
})
return imgObj;
}