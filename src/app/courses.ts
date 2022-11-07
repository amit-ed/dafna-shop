export class Course {
  id : number;
  src : string;
  name : string;
  description : string;
  time : string;
  participants : string;
}

export let courses = [
  {
    id: 1,
    src: "https://cdn.shopify.com/s/files/1/0608/7907/7609/products/Hybris-earrings-0343652-3_360x.jpg?v=1643745469",
    name : "סדנת ניקוד",
    description : "מאוד יפים",
    time : "55 דקות",
    participants : "10-15 משתתפים"
  },
  {
    id: 2,
    src: "https://cdn.shopify.com/s/files/1/0608/7907/7609/products/120342-Imana-Necklace-1_360x.jpg?v=1643745531",
    name : "פסיפס",
    description: "מהממת",
    time : "90 דקות",
    participants: "5-10 משתתפים"
  }
];
