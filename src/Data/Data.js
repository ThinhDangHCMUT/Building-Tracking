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
export const cardsData = [
  {
    title: "Nhiệt độ 1",
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
        time: [],
        name: "Nhiệt độ 1",
        data: [],
      },
    ],
  },
  {
    title: "Độ ẩm 1",
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
        time: [],
        name: "Độ ẩm 1",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Nhiệt độ 2",
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
        time: [],
        name: "Nhiệt độ 2",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Độ ẩm 2",
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
        time: [],
        name: "Độ ẩm 2",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Nhiệt độ 3",
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
        time: [],
        name: "Nhiệt độ 3",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Độ ẩm 3",
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
        time: [],
        name: "Độ ẩm 3",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Nhiệt độ 4",
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
        time: [],
        name: "Nhiệt độ 4",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Độ ẩm 4",
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
        time: [],
        name: "Độ ẩm 4",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Khí Gas",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "",
    png: UilFire,
    series: [
      {
        time: [],
        name: "Gas",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Khói",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "",
    png: UilMoneyWithdrawal,
    series: [
      {
        time: [],
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
    name: "Nhiệt độ 1 ",
    noti: "warning.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Nhiệt độ 2 ",
    noti: "warning.",
    time: "25 seconds ago",
  },
  {
    img: img3,
    name: "Humidifier 1 ",
    noti: "warning.",
    time: "25 seconds ago",
  },
];
