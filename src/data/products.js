const productData = [
    {
        id: "canon-1dx-m3",
        name: "Canon 1DX mark II",
        model: "EOS 1DX mark III",
        manufacturer: "Canon",
        sensorType: "full-frame",
        mirrorType: "slr",
        productClass: "premium",
        technology: "digital",
        category: "camera",
        description:
            "Canon EOS 1DX Mark III is a premium digital SLR. It features a newly designed CMOS sensor with dual pixel autofocus and is capable of 16fps bursts through the optical viewfinder or 20fps in live view.",
        imageURLs: ["/img/canon-eos-1dxm3-01.png", "/img/canon-eos-1dxm3-02.png"],
        price: 4500
    },
    {
        id: "canon-5d-m4",
        name: "Canon 5D mark IV",
        model: "EOS 5D Mark IV",
        manufacturer: "Canon",
        sensorType: "full-frame",
        mirrorType: "slr",
        productClass: "professional",
        technology: "digital",
        category: "camera",
        description:
            "The EOS 5D Mark IV is a professional-grade full-frame dSLR produced by Canon. Featuring a best-in-class processor and greatly improved dual pixel autofocus, it can capture images up to 30MP and videos up to 4K.",
        imageURLs: [
            "/img/canon-eos-5dm4-01.png",
            "/img/canon-eos-5dm4-02.png",
            "/img/canon-eos-5dm4-03.png"
        ],
        price: 2200
    },
    {
        id: "canon-90d",
        name: "Canon 90D",
        model: "EOS 90D",
        manufacturer: "Canon",
        sensorType: "aps-c",
        mirrorType: "slr",
        productClass: "enthusiast",
        technology: "digital",
        category: "camera",
        description:
            "The Canon EOS 90D is a mid-range APS-C digital SLR that targets advanced photography enthusiasts. It features an all-new 32.5MP CMOS sensor and uses Canon's latest Digic 8 processor as well as an updated metering sensor.",
        imageURLs: [
            "/img/canon-eos-90d-01.png",
            "/img/canon-eos-90d-02.png",
            "/img/canon-eos-90d-03.png"
        ],
        price: 1200
    },
    {
        id: "canon-rp",
        name: "Canon EOS RP",
        model: "EOS RP",
        manufacturer: "Canon",
        sensorType: "full-frame",
        mirrorType: "mirrorless",
        productClass: "professional",
        technology: "digital",
        category: "camera",
        description:
            "The Canon EOS RP is a compact full-frame mirrorless camera that uses the company's RF lens mount. It features a 26MP CMOS sensor, Digic 8 processor and Dual Pixel AF system with 88% x 100% coverage and Eye AF.",
        imageURLs: [
            "/img/canon-eos-rp-01.png",
            "/img/canon-eos-rp-02.png",
            "/img/canon-eos-rp-03.png"
        ],
        price: 1000
    },
    {
        id: "nikon-d5",
        name: "Nikon D5",
        model: "D5",
        manufacturer: "Nikon",
        sensorType: "full-frame",
        mirrorType: "slr",
        productClass: "premium",
        technology: "digital",
        category: "camera",
        description:
            "The D5 is Nikon's flagship full-frame DSLRs, and boasts a myriad of powerful new imaging innovations, including a 20.8-megapixel CMOS sensor, an all-new 153-point AF system, 4K UHD video capture and an unprecedented native ISO range, from 100 to 102,400.",
        imageURLs: ["/img/nikon-d5-01.png", "/img/nikon-d5-02.png", "/img/nikon-d5-03.png"],
        price: 5000
    },
    {
        id: "nikon-d850",
        name: "Nikon D850",
        model: "D850",
        manufacturer: "Nikon",
        sensorType: "full-frame",
        mirrorType: "slr",
        productClass: "professional",
        technology: "digital",
        category: "camera",
        description:
            "The D850 is Nikon's next-generation high resolution, full-frame DSLR. It features a 45.7 Megapixel BSI CMOS sensor with no optical low-pass filter and an Expeed 5 image processor, which allow for fast burst rates and 4K video capture.",
        imageURLs: ["/img/nikon-d850-01.png", "/img/nikon-d850-02.png", "/img/nikon-d850-03.png"],
        price: 2300
    },
    {
        id: "nikon-d7500",
        name: "Nikon D7500",
        model: "D7500",
        manufacturer: "Nikon",
        sensorType: "aps-c",
        mirrorType: "slr",
        productClass: "enthusiast",
        technology: "digital",
        category: "camera",
        description:
            "The Nikon D7500 is a midrange DSLR that brings updates to the D7200 and also borrows technology from the D500. It features the 20MP CMOS sensor from the D500, making it capable of 4K video at up to 30fps, and expanding its sensitivity to a maximum of ISO 1,640,000.",
        imageURLs: [
            "/img/nikon-d7500-01.png",
            "/img/nikon-d7500-02.png",
            "/img/nikon-d7500-03.png"
        ],
        price: 1100
    },
    {
        id: "nikon-z50",
        name: "Nikon Z50",
        model: "Z50",
        manufacturer: "Nikon",
        sensorType: "aps-c",
        mirrorType: "mirrorless",
        productClass: "beginner",
        technology: "digital",
        category: "camera",
        description:
            "The Nikon Z50 is a compact mirrorless camera with an APS-C sensor (known as DX-format in Nikon-speak) that uses the company's Z-mount. It uses a 20.9MP BSI CMOS sensor (derived from the D500's) with on-sensor phase detection, but not in-body image stabilization like the full-frame Z6 and Z7.",
        imageURLs: ["/img/nikon-z50-01.png", "/img/nikon-z50-02.png", "/img/nikon-z50-03.png"],
        price: 1000
    },
    {
        id: "nikon-d3500",
        name: "Nikon D3500",
        model: "D3500",
        manufacturer: "Nikon",
        sensorType: "aps-c",
        mirrorType: "slr",
        productClass: "beginner",
        technology: "digital",
        category: "camera",
        description:
            "The Nikon D3500 is the company's entry-level DSLR camera. It's essentially the same as its predecessor, the D3400, except that it now uses the same body as the D5600. It continues to have a 24MP APS-C CMOS sensor, EXPEED 4 image processor, Full HD video capture and an easy-to-use interface.",
        imageURLs: [
            "/img/nikon-d3500-01.png",
            "/img/nikon-d3500-02.png",
            "/img/nikon-d3500-03.png"
        ],
        price: 400
    },
    {
        id: "sony-a9-2",
        name: "Sony a9 II",
        model: "a9 II",
        manufacturer: "Sony",
        sensorType: "full-frame",
        mirrorType: "mirrorless",
        productClass: "premium",
        technology: "digital",
        category: "camera",
        description:
            "The Sony Alpha a9 II is the company's sports-oriented full-frame mirrorless camera. It features a 24MP stacked CMOS sensor which permits 20 fps burst shooting without the 'blackout' found on traditional DSLRs courtesy of its electronic shutter (it can shoot at 10 fps with its mechanical shutter).",
        imageURLs: ["/img/sony-a9-2-01.png", "/img/sony-a9-2-02.png", "/img/sony-a9-2-03.png"],
        price: 4400
    },
    {
        id: "sony-a7r-4",
        name: "Sony a7R IV",
        model: "a7R IV",
        manufacturer: "Sony",
        sensorType: "full-frame",
        mirrorType: "mirrorless",
        productClass: "premium",
        technology: "digital",
        category: "camera",
        description:
            "The Sony A7R IV is the successor to the full-frame 42.4MP A7R III and features a newly-developed 61.2MP BSI-CMOS sensor with a native 100-32,000 ISO range (expandable to 50-102,400). Besides the higher pixel count, the A7R IV has an updated hybrid AF system comprising 567 on-sensor phase-detection AF points as well as 425 contrast-detect points, covering 74% of the image frame.",
        imageURLs: ["/img/sony-a7r-4-01.png", "/img/sony-a7r-4-02.png", "/img/sony-a7r-4-03.png"],
        price: 3500
    },
    {
        id: "sony-a6500",
        name: "Sony a6500",
        model: "a6500",
        manufacturer: "Sony",
        sensorType: "aps-c",
        mirrorType: "mirrorless",
        productClass: "enthusiast",
        technology: "digital",
        category: "camera",
        description:
            "The Sony Alpha a6500 is a higher-end version of the company's a6300 mirrorless camera. The major additions are a new LSI that greatly improves AF and burst shooting performance, 5-axis image stabilization, and a touchscreen LCD with 'touchpad AF.'",
        imageURLs: ["/img/sony-a6500-01.png", "/img/sony-a6500-02.png", "/img/sony-a6500-03.png"],
        price: 950
    }
    // lenses
    // {
    //     id: "canon-24-105-f4-l-is-usm",
    // name: "",
    //     model: "EF 24-105mm F4 L IS USM",
    //     manufacturer: "Canon",
    //     sensorType: "full-frame",
    //     mirrorType: "mirrored",
    //     productClass: "professional",
    //     technology: "digital",
    //     category: "lens",
    //     imageURLs: ["https://site.com/imgs/canon-ef-24-105-f4-l-is-usm.png"],
    //     price: 500
    // }
];

export default productData;
