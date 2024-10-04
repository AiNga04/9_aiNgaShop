const products = [
  {
    hot: true,
    sale: 10,
    img: "img/iphone-14.jpg",
    title: "Iphone 14",
    company: "Apple",
    detail: {
      screen: "Super Retina XDR, 6.1', OLED",
      os: "iOS 16",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A15 Bionic",
      ram: "6 GB",
      storage: "128 GB",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.0",
      battery: "3200 mAh",
    },
    originPrice: 29900000,
    rate: 4.5,
    vote: 123,
    salePrice: 26910000,
  },
  {
    hot: false,
    sale: 15,
    img: "img/iphone-14-pro.jpg",
    title: "Iphone 14 Pro",
    company: "Apple",
    detail: {
      screen: "ProMotion Super Retina XDR, 6.1', OLED",
      os: "iOS 16",
      camera: "48 MP",
      cameraFront: "12 MP",
      cpu: "A16 Bionic",
      ram: "6 GB",
      storage: "256 GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.2",
      battery: "3500 mAh",
    },
    originPrice: 34900000,
    rate: 4.7,
    vote: 98,
    salePrice: 29615000,
  },
  {
    hot: true,
    sale: 5,
    img: "img/iphone-14-pro-max.jpg",
    title: "Iphone 14 Pro Max",
    company: "Apple",
    detail: {
      screen: "ProMotion Super Retina XDR, 6.7', OLED",
      os: "iOS 16",
      camera: "48 MP",
      cameraFront: "12 MP",
      cpu: "A16 Bionic",
      ram: "6 GB",
      storage: "512 GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.2",
      battery: "4500 mAh",
    },
    originPrice: 39900000,
    rate: 4.8,
    vote: 150,
    salePrice: 37905000,
  },
  {
    hot: false,
    sale: 20,
    img: "img/iphone-se-2022.jpg",
    title: "Iphone SE 2022",
    company: "Apple",
    detail: {
      screen: "IPS LCD, 4.7', Retina",
      os: "iOS 15",
      camera: "12 MP",
      cameraFront: "7 MP",
      cpu: "A15 Bionic",
      ram: "3 GB",
      storage: "64 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      battery: "1821 mAh",
    },
    originPrice: 18900000,
    rate: 4.2,
    vote: 75,
    salePrice: 17010000,
  },
  {
    hot: true,
    sale: 12,
    img: "img/iphone-13.jpg",
    title: "Iphone 13",
    company: "Apple",
    detail: {
      screen: "Super Retina XDR, 6.1', OLED",
      os: "iOS 15",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A15 Bionic",
      ram: "4 GB",
      storage: "128 GB",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.0",
      battery: "3240 mAh",
    },
    originPrice: 27900000,
    rate: 4.6,
    vote: 200,
    salePrice: 24612000,
  },
  {
    hot: false,
    sale: 8,
    img: "img/iphone-13-pro.jpg",
    title: "Iphone 13 Pro",
    company: "Apple",
    detail: {
      screen: "ProMotion Super Retina XDR, 6.1', OLED",
      os: "iOS 15",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A15 Bionic",
      ram: "6 GB",
      storage: "256 GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.2",
      battery: "3095 mAh",
    },
    originPrice: 32900000,
    rate: 4.7,
    vote: 180,
    salePrice: 30188000,
  },
  {
    hot: true,
    sale: 18,
    img: "img/iphone-13-pro-max.jpg",
    title: "Iphone 13 Pro Max",
    company: "Apple",
    detail: {
      screen: "ProMotion Super Retina XDR, 6.7', OLED",
      os: "iOS 15",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A15 Bionic",
      ram: "6 GB",
      storage: "512 GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.2",
      battery: "4352 mAh",
    },
    originPrice: 37900000,
    rate: 4.9,
    vote: 220,
    salePrice: 31150000,
  },
  {
    hot: false,
    sale: 10,
    img: "img/iphone-12.jpg",
    title: "Iphone 12",
    company: "Apple",
    detail: {
      screen: "Super Retina XDR, 6.1', OLED",
      os: "iOS 14",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A14 Bionic",
      ram: "4 GB",
      storage: "128 GB",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.0",
      battery: "2815 mAh",
    },
    originPrice: 24900000,
    rate: 4.3,
    vote: 160,
    salePrice: 22410000,
  },
  {
    hot: true,
    sale: 25,
    img: "img/iphone-12-mini.jpg",
    title: "Iphone 12 Mini",
    company: "Apple",
    detail: {
      screen: "Super Retina XDR, 5.4', OLED",
      os: "iOS 14",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A14 Bionic",
      ram: "4 GB",
      storage: "64 GB",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.0",
      battery: "2227 mAh",
    },
    originPrice: 21900000,
    rate: 4.4,
    vote: 140,
    salePrice: 16425000,
  },
  {
    hot: false,
    sale: 5,
    img: "img/iphone-12-pro.jpg",
    title: "Iphone 12 Pro",
    company: "Apple",
    detail: {
      screen: "Super Retina XDR, 6.1', OLED",
      os: "iOS 14",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A14 Bionic",
      ram: "6 GB",
      storage: "256 GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.2",
      battery: "2815 mAh",
    },
    originPrice: 29900000,
    rate: 4.5,
    vote: 130,
    salePrice: 28455000,
  },
  {
    hot: true,
    sale: 20,
    img: "img/iphone-11.jpg",
    title: "Iphone 11",
    company: "Apple",
    detail: {
      screen: "Liquid Retina HD, 6.1', LCD",
      os: "iOS 13",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A13 Bionic",
      ram: "4 GB",
      storage: "64 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      battery: "3110 mAh",
    },
    originPrice: 19900000,
    rate: 4.1,
    vote: 100,
    salePrice: 15920000,
  },
  {
    hot: false,
    sale: 30,
    img: "img/iphone-xr.jpg",
    title: "Iphone XR",
    company: "Apple",
    detail: {
      screen: "Liquid Retina HD, 6.1', LCD",
      os: "iOS 12",
      camera: "12 MP",
      cameraFront: "7 MP",
      cpu: "A12 Bionic",
      ram: "3 GB",
      storage: "64 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      battery: "2942 mAh",
    },
    originPrice: 16900000,
    rate: 4.0,
    vote: 85,
    salePrice: 11830000,
  },
  {
    hot: true,
    sale: 7,
    img: "img/iphone-xs.jpg",
    title: "Iphone XS",
    company: "Apple",
    detail: {
      screen: "Super Retina OLED, 5.8', OLED",
      os: "iOS 12",
      camera: "12 MP",
      cameraFront: "7 MP",
      cpu: "A12 Bionic",
      ram: "4 GB",
      storage: "64 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      battery: "2658 mAh",
    },
    originPrice: 21900000,
    rate: 4.3,
    vote: 110,
    salePrice: 20370000,
  },
  {
    hot: false,
    sale: 12,
    img: "img/iphone-xs-max.jpg",
    title: "Iphone XS Max",
    company: "Apple",
    detail: {
      screen: "Super Retina OLED, 6.5', OLED",
      os: "iOS 12",
      camera: "12 MP",
      cameraFront: "7 MP",
      cpu: "A12 Bionic",
      ram: "4 GB",
      storage: "256 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      battery: "3174 mAh",
    },
    originPrice: 23900000,
    rate: 4.4,
    vote: 95,
    salePrice: 21032000,
  },
  {
    hot: true,
    sale: 9,
    img: "img/iphone-x.jpg",
    title: "Iphone X",
    company: "Apple",
    detail: {
      screen: "Super Retina OLED, 5.8', OLED",
      os: "iOS 11",
      camera: "12 MP",
      cameraFront: "7 MP",
      cpu: "A11 Bionic",
      ram: "3 GB",
      storage: "64 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      battery: "2716 mAh",
    },
    originPrice: 18900000,
    rate: 4.2,
    vote: 120,
    salePrice: 17019000,
  },
  {
    hot: false,
    sale: 22,
    img: "img/iphone-8.jpg",
    title: "Iphone 8",
    company: "Apple",
    detail: {
      screen: "Retina HD, 4.7', LCD",
      os: "iOS 11",
      camera: "12 MP",
      cameraFront: "7 MP",
      cpu: "A11 Bionic",
      ram: "2 GB",
      storage: "64 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      battery: "1821 mAh",
    },
    originPrice: 14900000,
    rate: 3.8,
    vote: 60,
    salePrice: 11642000,
  },
  {
    hot: true,
    sale: 14,
    img: "img/iphone-7.jpg",
    title: "Iphone 7",
    company: "Apple",
    detail: {
      screen: "Retina HD, 4.7', LCD",
      os: "iOS 10",
      camera: "12 MP",
      cameraFront: "7 MP",
      cpu: "A10 Fusion",
      ram: "2 GB",
      storage: "32 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 4.2",
      battery: "1960 mAh",
    },
    originPrice: 12900000,
    rate: 3.9,
    vote: 50,
    salePrice: 11130000,
  },
  {
    hot: false,
    sale: 16,
    img: "img/iphone-6s.jpg",
    title: "Iphone 6S",
    company: "Apple",
    detail: {
      screen: "Retina HD, 4.7', LCD",
      os: "iOS 9",
      camera: "12 MP",
      cameraFront: "5 MP",
      cpu: "A9",
      ram: "2 GB",
      storage: "16 GB",
      connectivity: "4G, Wi-Fi 4, Bluetooth 4.1",
      battery: "1715 mAh",
    },
    originPrice: 10900000,
    rate: 3.7,
    vote: 40,
    salePrice: 8906000,
  },
  {
    hot: true,
    sale: 25,
    img: "img/iphone-5s.jpg",
    title: "Iphone 5S",
    company: "Apple",
    detail: {
      screen: "Retina, 4.0', IPS LCD",
      os: "iOS 7",
      camera: "8 MP",
      cameraFront: "1.2 MP",
      cpu: "A7",
      ram: "1 GB",
      storage: "16 GB",
      connectivity: "3G, Wi-Fi 4, Bluetooth 4.0",
      battery: "1560 mAh",
    },
    originPrice: 9900000,
    rate: 3.5,
    vote: 30,
    salePrice: 7425000,
  },
  {
    hot: false,
    sale: 18,
    img: "img/iphone-se-2020.jpg",
    title: "Iphone SE 2020",
    company: "Apple",
    detail: {
      screen: "Retina HD, 4.7', LCD",
      os: "iOS 13",
      camera: "12 MP",
      cameraFront: "7 MP",
      cpu: "A13 Bionic",
      ram: "3 GB",
      storage: "64 GB",
      connectivity: "4G, Wi-Fi 5, Bluetooth 5.0",
      battery: "1821 mAh",
    },
    originPrice: 18900000,
    rate: 4.0,
    vote: 70,
    salePrice: 15840000,
  },
  {
    hot: true,
    sale: 11,
    img: "img/iphone-13-mini.jpg",
    title: "Iphone 13 Mini",
    company: "Apple",
    detail: {
      screen: "Super Retina XDR, 5.4', OLED",
      os: "iOS 15",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A15 Bionic",
      ram: "4 GB",
      storage: "128 GB",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.0",
      battery: "2438 mAh",
    },
    originPrice: 24900000,
    rate: 4.3,
    vote: 90,
    salePrice: 22215000,
  },
  {
    hot: false,
    sale: 19,
    img: "img/iphone-12-pro-max.jpg",
    title: "Iphone 12 Pro Max",
    company: "Apple",
    detail: {
      screen: "Super Retina XDR, 6.7', OLED",
      os: "iOS 14",
      camera: "12 MP",
      cameraFront: "12 MP",
      cpu: "A14 Bionic",
      ram: "6 GB",
      storage: "512 GB",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.2",
      battery: "3687 mAh",
    },
    originPrice: 35900000,
    rate: 4.6,
    vote: 160,
    salePrice: 28929000,
  },
];

localStorage.setItem("products", JSON.stringify(products));
