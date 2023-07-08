// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilTemperature,
  UilTear,
  UilFire,

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Floor 1",
  },
  {
    icon: UilEstate,
    heading: "Floor 2",
  },
];

// Analytics Cards Data
export const cardsData1 = [
  {
    title: "Nhiệt độ",
    type: "T",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "",
    png: UilTemperature,
    series: [
      {
        // time: [],
        name: "Nhiệt độ 1",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Độ ẩm",
    type: "H",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "",
    png: UilTear,
    series: [
      {
        // time: [],
        name: "Độ ẩm 1",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Khí Gas",
    type: "G",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "",
    png: UilFire,
    series: [
      {
        // time: [],
        name: "Gas",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Khói",
    type: "S",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "",
    png: UilMoneyWithdrawal,
    series: [
      {
        // time: [],
        name: "Smoke",
        data: [10, 100, 50, 70, 80, 30, 40],

      },
    ],
  },

];
export const cardsData2 = [
  {
    title: "Nhiệt độ",
    type: "T",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "",
    png: UilTemperature,
    series: [
      {
        // time: [],
        name: "Nhiệt độ 1",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Độ ẩm",
    type: "H",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "",
    png: UilTear,
    series: [
      {
        // time: [],
        name: "Độ ẩm 1",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Khí Gas",
    type: "G",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "",
    png: UilFire,
    series: [
      {
        // time: [],
        name: "Gas",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Khói",
    type: "S",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "",
    png: UilMoneyWithdrawal,
    series: [
      {
        // time: [],
        name: "Smoke",
        data: [10, 100, 50, 70, 80, 30, 40],

      },
    ],
  },

];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Nhiệt độ tầng 1 ",
    noti: "warning",
    color: 'red',
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Nhiệt độ tầng 2 ",
    noti: "warning",
    color: 'red',
    time: "25 seconds ago",
  },
  {
    img: img3,
    name: "Độ ẩm tầng 1 ",
    color: 'red',
    noti: "warning",
    time: "25 seconds ago",
  },
];

//Config tooltip for chart

export const configData = {
  options: {
    chart: {
      type: "area",
      height: "auto",
    },

    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },

    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "mm:ss",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [

      ],
    },
  },
};