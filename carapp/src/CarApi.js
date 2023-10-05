const Cars = [
    {
    id: 1,
    image: "https://tse1.mm.bing.net/th?id=OIP.DFIw7Y_ITZOFOa_f1kom0QHaDt&pid=Api&P=0&h=180",
    availability: false,
    car: "Mitsubishi",
    car_model: "Montero",
    car_color: "Yellow",
    car_model_year: 2002,
    car_vin: "SAJWJ0FF3F8321657",
    price: "$2814.46"
    },
    {
    id:2,
    image: "https://tse4.mm.bing.net/th?id=OIP.iwE3cgT35eYPOSj6nG2NjQHaEo&pid=Api&P=0&h=180",
    availability: false,
    car: "Volkswagen",
    car_color: "Maroon",
    car_model: "Passat",
    car_model_year: 2008,
    car_vin: "WBANV9C51AC203320",
    price: "$1731.98"
    },
    {
    id:3,
    image: "https://tse3.mm.bing.net/th?id=OIP.VyAnybva5gmnXGGTk9j4kgHaEo&pid=Api&P=0&h=180",
    availability:true,
    car:"Saturn",
    car_model:"L-Series",
    car_color:"Red",
    car_model_year:2003,
    car_vin:"1HGCR6F34EA246317",
    price:"$2238.35"
    },
   {
    id: 4,
    image: "https://tse4.mm.bing.net/th?id=OIP.UaUhTsia5Bk0-5-xLRSveQHaEK&pid=Api&P=0&h=180",
    availability: false,
    car: "Jeep",
    car_color: "Violet",
    car_model: "Compass",
    car_model_year: 2012,
    car_vin: "4USBT33454L511606",
    price: "$2732.99"
    } ,
    {
    id: 5,
    image: "https://tse3.mm.bing.net/th?id=OIP.y8ZAdaaa36IixJTod0h09wHaEK&pid=Api&P=0&h=180",
    availability: false,
    car: "Chevrolet",
    car_color: "Indigo",
    car_model: "Suburban",
    car_model_year: 2009,
    car_vin: "WAUSH98E96A592763",
    price: "$1252.30"
    },
    {
    id: 6,
    image: "https://tse3.mm.bing.net/th?id=OIP.e5395AJgCGMbgtSI6OkEwgHaEh&pid=Api&P=0&h=180",
    availability: true,
    car: "Dodge",
    car_color: "Yellow",
    car_model: "Ram Van B350",
    car_model_year: 1994,
    car_vin: "KNADH4A37A6919967",
    price: "$1762.42"
    },
    {
    id: 7,
    image: "https://tse4.mm.bing.net/th?id=OIP.ZJVb32hpXQMWWL5XIUfZpAHaE8&pid=Api&P=0&h=180",
    availability: true,
    car: "Isuzu",
    car_color: "Teal",
    car_model: "Ascender",
    car_model_year: 2004,
    car_vin: "5GTMNGEE8A8713093",
    price: "$1081.40"
    },
    {
    id: 8,
    image: "https://tse2.mm.bing.net/th?id=OIP.eoXwXrKjli2AKzFxwRgk8AHaE8&pid=Api&P=0&h=180",
    availability: true,
    car: "BMW",
    car_color: "Purple",
    car_model: "6 Series",
    car_model_year: 2008,
    car_vin: "5TDBY5G16DS675822",
    price: "$1258.99"
    },
    {
    id: 9,
    image: "https://tse3.mm.bing.net/th?id=OIP.QXg73qhauLRBmiiuvfJV6wHaEB&pid=Api&P=0&h=180",
    availability: true,
    car: "Mazda",
    car_color: "Red",
    car_model: "Mazda5",
    car_model_year: 2010,
    car_vin: "WAUNE78P18A342660",
    price: "$3963.20"
    },
    {
    id: 10,
    image: "https://tse3.mm.bing.net/th?id=OIP.1p5Q1B6MQa8gTWCn6_ZObgHaEK&pid=Api&P=0&h=180",
    availability: true,
    car: "Audi",
    car_color: "Pink",
    car_model: "Q7",
    car_model_year: 2012,
    car_vin: "WA1WYBFE2AD448505",
    price: "$1144.27"
    },
    {
    id: 11,
    image: "https://tse1.mm.bing.net/th?id=OIP.NqScgnpetZMrZ5LzjBsoVQHaD-&pid=Api&P=0&h=180",
    availability: true,
    car: "Mercedes-Benz",
    car_color: "Aquamarine",
    car_model: "SL-Class",
    car_model_year: 1989,
    car_vin: "4A4AP3AU8FE713946",
    price: "$1386.49"
    },
    {
    id: 12,
    image: "https://tse3.mm.bing.net/th?id=OIP.HbIF2DWxe4l59Cn7N9Rg9AHaEk&pid=Api&P=0&h=180",
    availability: true,
    car: "Volvo",
    car_color: "Red",
    car_model: "C70",
    car_model_year: 2012,
    car_vin: "WAUHGBFC9DN768366",
    price: "$1366.96"
    },
    {
    id: 13,
    image: "https://tse3.mm.bing.net/th?id=OIP.pG3q62k98o0T1-wFEZ5u4wHaE-&pid=Api&P=0&h=180",
    availability: false,
    car: "GMC",
    car_color: "Green",
    car_model: "Envoy XL",
    car_model_year: 2006,
    car_vin: "WA1AV74L67D649365",
    price: "$1221.46"
    },
    {
    id: 14,
    image: "https://tse2.mm.bing.net/th?id=OIP.bvEVwcwgwJFN3Jnetz8DWAHaEy&pid=Api&P=0&h=180",
    availability: true,
    car: "Cadillac",
    car_color: "Pink",
    car_model: "CTS",
    car_model_year: 2003,
    car_vin: "WAUVC68E02A369838",
    price: "$2646.55"
    },
    {
    id: 15,
    image: "https://tse2.mm.bing.net/th?id=OIP.Bbk0OHk-RRDT5397lMEn7wHaEK&pid=Api&P=0&h=180",
    availability: false,
    car: "Ford",
    car_color: "Mauv",
    car_model: "Taurus",
    car_model_year: 2002,
    car_vin: "WAUUL58E15A338821",
    price: "$1801.89"
    },
    {
    id: 16,
    image: "https://tse1.mm.bing.net/th?id=OIP.qwYGNpGtU39V0wVMQbbAbgHaDT&pid=Api&P=0&h=180",
    availability: true,
    car: "Suzuki",
    car_color: "Green",
    car_model: "Swift",
    car_model_year: 1996,
    car_vin: "WAUDH98E78A844182",
    price: "$2716.12"
    },
    {
    id: 17,
    image: "https://tse1.mm.bing.net/th?id=OIP.xGMVIoP2KHtOrUETgd399AHaEK&pid=Api&P=0&h=180",
    availability: false,
    car: "Chrysler",
    car_color: "Mauv",
    car_model: "Town & Country",
    car_model_year: 2010,
    car_vin: "5XXGM4A71CG888959",
    price: "$3480.31"
    },
    {
    id: 18,
    image: "https://tse2.mm.bing.net/th?id=OIP.2J7a_mO0_ym1LPepnuVAYQHaEo&pid=Api&P=0&h=180",
    availability: false,
    car: "Maserati",
    car_color: "Blue",
    car_model: "430",
    car_model_year: 1991,
    car_vin: "2FMPK3J94FB631826",
    price: "$1660.01"
    },
    {
    id: 19,
    image: "https://tse1.mm.bing.net/th?id=OIP.FEyqJudnDpOEU3Q1_Up2GAHaE6&pid=Api&P=0&h=180",
    availability: false,
    car: "Toyota",
    car_color: "Puce",
    car_model: "Tacoma Xtra",
    car_model_year: 1996,
    car_vin: "5TDDCRFH8FS931829",
    price: "$3532.17"
    },
    {
    id: 20,
    image: "https://tse1.mm.bing.net/th?id=OIP.Ww7oI8plGfQp87r_yksfbgHaE5&pid=Api&P=0&h=180",
    availability: false,
    car: "Lotus",
    car_color: "Purple",
    car_model: "Esprit",
    car_model_year: 1991,
    car_vin: "1G6DK8EY0B0373831",
    price: "$1061.74"
    },
    {
    id: 21,
    image: "https://tse3.mm.bing.net/th?id=OIP.jVXvZ_cxdpGD4mS2N-doBgHaE8&pid=Api&P=0&h=180",
    availability: false,
    car: "Land Rover",
    car_color: "Orange",
    car_model: "Discovery Series II",
    car_model_year: 2002,
    car_vin: "1D7RE3BK4AS603019",
    price: "$2911.93"
    },
    {
    id: 22,
    image: "https://tse1.mm.bing.net/th?id=OIP.OED_8jao9pEo1H3NdJg9aAHaE8&pid=Api&P=0&h=180",
    availability: true,
    car: "Geo",
    car_color: "Khaki",
    car_model: "Tracker",
    car_model_year: 1997,
    car_vin: "1D7CE3BK0AS555394",
    price: "$3894.12"
    },
    {
    id: 23,
    image: "https://tse4.mm.bing.net/th?id=OIP.4CjVndErLg6wde94vEw6aAHaFj&pid=Api&P=0&h=180",
    availability: true,
    car: "Mercury",
    car_color: "Violet",
    car_model: "Monterey",
    car_model_year: 2004,
    car_vin: "KMHD35LH2FU144301",
    price: "$2799.57"
    },
    {
    id: 24,
    image: "https://tse1.mm.bing.net/th?id=OIP.dsiC7a1xQd-CPZpBuMeCDgHaE8&pid=Api&P=0&h=180",
    availability: true,
    car: "Lamborghini",
    car_color: "Goldenrod",
    car_model: "Countach",
    car_model_year: 1985,
    car_vin: "WA1AY74L08D036800",
    price: "$2139.19"
    },
    {
    id: 25,
    image: "https://tse2.mm.bing.net/th?id=OIP.GLHQtaq1rpooF9eQzx9PJAHaEo&pid=Api&P=0&h=180",
    availability: true,
    car: "Jaguar",
    car_color: "Orange",
    car_model: "XJ",
    car_model_year: 2006,
    car_vin: "WBALM5C52AE771888",
    price: "$3879.67"
    },
    {
    id: 26,
    image: "https://tse1.mm.bing.net/th?id=OIP.W4LSW0EIs4m7gbJihsn7PgHaEK&pid=Api&P=0&h=180",
    availability: false,
    car: "Subaru",
    car_color: "Fuscia",
    car_model: "Impreza",
    car_model_year: 2006,
    car_vin: "1N6AF0LY5EN597447",
    price: "$2437.81"
    },
    {
    id: 27,
    image: "https://tse1.mm.bing.net/th?id=OIP.HAX-M2GdRIJKAAFWi_VKqgHaE6&pid=Api&P=0&h=180",
    availability: false,
    car: "Porsche",
    car_color: "Blue",
    car_model: "928",
    car_model_year: 1994,
    car_vin: "1GD312CG5CF627983",
    price: "$2112.12"
    },
    {
    id: 28,
    image: "https://tse4.mm.bing.net/th?id=OIP.cdNilryrq_Dl-NaY4q8qKwHaEK&pid=Api&P=0&h=180",
    availability: false,
    car: "Acura",
    car_color: "Violet",
    car_model: "TL",
    car_model_year: 2000,
    car_vin: "3C63DPML9CG620139",
    price: "$3595.67"
    }
];

export default Cars;



