import bed_icon from "../assets/img/constructor/bed_icon.png";
import leg_icon from "../assets/img/constructor/leg_icon.png";
import seat_icon from "../assets/img/constructor/seat_icon.png";
import fabric_icon from "../assets/img/constructor/fabric_icon.png";
import dimension_icon from "../assets/img/constructor/area_icon.png";

import collectionImg_1 from "../assets/img/constructor/collections/collection_1.jpg"
import collectionImg_2 from "../assets/img/constructor/collections/collection_2.jpg"

import fabricImg_1 from "../assets/img/constructor/fabrics/fabric_1.jpg"
import fabricImg_2 from "../assets/img/constructor/fabrics/fabric_2.jpg"

import legImg_1 from "../assets/img/constructor/legs/leg_1.jpg"
import legImg_2 from "../assets/img/constructor/legs/leg_2.jpg"

import lengtAndDepthImg_1 from "../assets/img/constructor/lengthAnddepths/depth_1.jpg"
import lengtAndDepthImg_2 from "../assets/img/constructor/lengthAnddepths/depth_2.jpg"

import seatCushionImg_1 from "../assets/img/constructor/seatCushios/seat_cushion_1.jpg"
import seatCushionImg_2 from "../assets/img/constructor/seatCushios/seat_cushion_2.jpg"



export const constructor_menu_config = [
  {
    id: 1,
    title: "20+ collections",
    icon: bed_icon,
    upperImg: collectionImg_1,
    lowerImg: collectionImg_2,
    upperDescription: 'Winslow Sofa in Performance Classic Weave Bisque',
    lowerDescription: 'Sloan Soaf in Performance Vintage Velvet Ivy'
  },
  {
    id: 2,
    title: "125+ fabrics",
    icon: fabric_icon,
    upperImg: fabricImg_1,
    lowerImg: fabricImg_2,
    upperDescription: 'Performance Velvet Peacock',
    lowerDescription: 'Performance Pebble Knit Oat'
  },
  {
    id: 3,
    title: "20+ legs",
    icon: leg_icon,
    upperImg: legImg_1,
    lowerImg: legImg_2,
    upperDescription: 'Brass Plated Tapered Round Metal Leg',
    lowerDescription: 'Matte Black Tall Curved Wood Leg'
  },
  {
    id: 4,
    title: "length & depths",
    icon: dimension_icon,
    upperImg: lengtAndDepthImg_1,
    lowerImg: lengtAndDepthImg_2,
    upperDescription: 'Standart 36" depth',
    lowerDescription: 'Deep 40" depth'
  },
  {
    id: 5,
    title: "seat cushions",
    icon: seat_icon,
    upperImg: seatCushionImg_1,
    lowerImg: seatCushionImg_2,
    upperDescription: '2 cushions with standart down blend',
    lowerDescription: 'Bench cushion with double down blend'
  },
];
