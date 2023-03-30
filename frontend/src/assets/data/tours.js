import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Vũng tàu",
    city: "Vũng tàu",
    distance: 300,
    address: 'Địa điểm',
    price: 100,
    maxGroupSize: 10,
    desc: "Vũng tàu",
    reviews: [
      {
        name: "Bui Van Thien",
        rating: 4.6,
      },
      {
        name: "Phan Thi Bich Ha",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Đà lạt",
    city: "Đà lạt",
    distance: 400,
    address: 'Địa điểm',
    price: 88,
    maxGroupSize: 8,
    desc: "Đà lạt",
    reviews: [
      {
        name: "Bùi Văn Thiện",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Quy Nhơn",
    city: "Quy Nhơn",
    distance: 500,
    address: 'Địa điểm',
    price: 99,
    maxGroupSize: 8,
    desc: "Quy Nhơn",
    reviews: [
      {
        name: "Bùi Văn Thiện",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Kon Tum",
    city: "Kon Tum",
    distance: 500,
    address: 'Địa điểm',
    price: 99,
    maxGroupSize: 8,
    desc: "Kon Tum",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Thủ Đức",
    city: "Thủ Đức",
    distance: 500,
    address: 'Địa điểm',
    price: 99,
    maxGroupSize: 8,
    desc: "Thủ Đức",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Phù Cát",
    city: "Phù Cát",
    distance: 500,
    address: 'Địa điểm',
    price: 99,
    maxGroupSize: 8,
    desc: "Phù Cát",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Bến Tre",
    city: "Bến Tre",
    distance: 500,
    address: 'Địa điểm',
    price: 99,
    maxGroupSize: 8,
    desc: "Bến Tre",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Lâm Đồng",
    city: "Lâm Đồng",
    address: 'Địa điểm',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Lâm Đồng",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
