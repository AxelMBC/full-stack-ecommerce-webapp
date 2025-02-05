import dellxps13Img from "../../../public/products/laptops/dellXps13.jpg";
import macbookpro16Img from "../../../public/products/laptops/mcbookPro16.jpg";
import hpspectrex360Img from "../../../public/products/laptops/hpSpectrex360.jpg";

export const productList = [
  {
    id: 1,
    name: "Dell XPS 13",
    description: "InfinityEdge display, Intel Core i7 processor.",
    price: "$1,299",
    image: dellxps13Img,
    rating: 4,
    specs: {
      cpu: "Intel Core i7-1185G7",
      ram: "16GB LPDDR4x",
      storage: "512GB SSD",
      display: "13.4-inch FHD+ (1920x1200)",
      battery: "Up to 14 hours",
    },
  },
  {
    id: 2,
    name: "MacBook Pro 16''",
    description: "Powerful performance for professionals.",
    price: "$2,399",
    image: macbookpro16Img,
    rating: 5,
    specs: {
      cpu: "Apple M2 Pro",
      ram: "16GB Unified Memory",
      storage: "1TB SSD",
      display: "16-inch Retina Display",
      battery: "Up to 21 hours",
    },
  },
  {
    id: 3,
    name: "HP Spectre x360",
    description: "2-in-1 convertible with touch display.",
    price: "$1,499",
    image: hpspectrex360Img,
    rating: 3,
    specs: {
      cpu: "Intel Core i7-1165G7",
      ram: "16GB LPDDR4",
      storage: "512GB SSD",
      display: "13.3-inch OLED Touch",
      battery: "Up to 12 hours",
    },
  },
];
