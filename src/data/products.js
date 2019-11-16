const productData = [
    {
        id: "camera",
        productCategory: "camera",
        route: "cameras",
        imageUrl: "https://site.com/imgs/camera.png",
        items: [
            {
                id: "canon-1dx-m3",
                model: "EOS 1DX mark III",
                manufacturer: "Canon",
                sensorType: "full-frame",
                mirrorType: "slr",
                productClass: "premium",
                technology: "digital",
                description:
                    "Canon EOS 1DX Mark III is a premium digital SLR. It features a newly designed CMOS sensor with dual pixel autofocus and is capable of 16fps bursts through the optical viewfinder or 20fps in live view.",
                imageUrls: [
                    "..assets/img/canon-eos-1dxm3-01.png",
                    "..assets/img/canon-eos-1dxm3-02.png"
                ],
                price: 4500
            },
            {
                id: "canon-5d-m4",
                model: "EOS 5D Mark IV",
                manufacturer: "Canon",
                sensorType: "full-frame",
                mirrorType: "slr",
                productClass: "professional",
                technology: "digital",
                description:
                    "The EOS 5D Mark IV is a professional-grade full-frame dSLR produced by Canon. Featuring a best-in-class processor and greatly improved dual pixel autofocus, it can capture images up to 30MP and videos up to 4K.",
                imageUrls: [
                    "..assets/img/canon-eos-5dm4-01.png",
                    "..assets/img/canon-eos-5dm4-02.png",
                    "..assets/img/canon-eos-5dm4-03.png"
                ],
                price: 2500
            },
            {
                id: "canon-90d",
                model: "EOS 90D",
                manufacturer: "Canon",
                sensorType: "aps-c",
                mirrorType: "slr",
                productClass: "enthusiast",
                technology: "digital",
                description:
                    "The Canon EOS 90D is a mid-range APS-C digital SLR that targets advanced photography enthusiasts. It features an all-new 32.5MP CMOS sensor and uses Canon's latest Digic 8 processor as well as an updated metering sensor.",
                imageUrls: [
                    "..assets/img/canon-eos-90d-01.png",
                    "..assets/img/canon-eos-90d-02.png",
                    "..assets/img/canon-eos-90d-03.png"
                ],
                price: 2500
            },
            {
                id: "canon-rp",
                model: "EOS RP",
                manufacturer: "Canon",
                sensorType: "full-frame",
                mirrorType: "mirrorless",
                productClass: "professional",
                technology: "digital",
                description:
                    "The Canon EOS RP is a compact full-frame mirrorless camera that uses the company's RF lens mount. It features a 26MP CMOS sensor, Digic 8 processor and Dual Pixel AF system with 88% x 100% coverage and Eye AF.",
                imageUrls: [
                    "..assets/img/canon-eos-rp-01.png",
                    "..assets/img/canon-eos-rp-02.png",
                    "..assets/img/canon-eos-rp-03.png"
                ],
                price: 2500
            }
        ]
    }
    // {
    //     id: "lens",
    //     productCategory: "lens",
    //     route: "lenses",
    //     imageUrl: "https://site.com/imgs/lens.png",
    //     items: [
    //         {
    //             id: 1,
    //             model: "EF 24-105mm F4 L IS USM",
    //             manufacturer: "Canon",
    //             sensorType: "full-frame",
    //             mirrorType: "mirrored",
    //             productClass: "professional",
    //             technology: "digital",
    //             imageUrls: ["https://site.com/imgs/canon-ef-24-105-f4-l-is-usm.png"],
    //             price: 500
    //         }
    //     ]
    // }
];

export default productData;
