export class Product {
  id : number;
  src : string;
  name : string;
  description : string;
  price : number;
}

export let products = [
  {
    id: 1,
    src: "https://cdn.shopify.com/s/files/1/0608/7907/7609/products/Hybris-earrings-0343652-3_360x.jpg?v=1643745469",
    name : "עגילים",
    desription : "מאוד יפים",
    price: 799,
  },
  {
    id: 2,
    src: "https://cdn.shopify.com/s/files/1/0608/7907/7609/products/120342-Imana-Necklace-1_360x.jpg?v=1643745531",
    name : "שרשרת",
    desription: "מהממת",
    price: 699,
  },
  {
    id: 3,
    src: "https://cdn.shopify.com/s/files/1/0608/7907/7609/products/0122282-Malibu-Wrap-Necklace-Bracelet-2_360x.jpg?v=1643746370",
    name : "ינשוף",
    desription: "מגניב אפשר לשים אותו בסלון",
    price: 299,
  }
];
