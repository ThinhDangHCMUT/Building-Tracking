import React, { useContext, useState, useEffect } from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import axios from "axios";
// import { DataContextAPI } from "../../context/dataContext";
import Card from "../Card/Card";
import { FloorContextAPI } from "../../context/floorContext";

const Cards = () => {
  const { floor } = useContext(FloorContextAPI);
  // console.log(floor)
  // const { payload } = useContext(DataContextAPI)
  // console.log(payload)
  const [data1, setData1] = useState(cardsData);
  const [data2, setData2] = useState(cardsData);

  console.log("Data from floor 1: ", data1);
  console.log("Data from floor 2: ", data1);
  const IP_ADDRESS = "localhost";

  // useEffect(() => {
  //   const timer = setInterval(()=> {
  //     if(payload.message?.split(",")[0].split(":")[1] === '0'){
  //       console.log(payload.message?.split(",")[1].split(":")[1])
  //       setData1(data1.map((item,id) => {
  //         return {
  //           ...item,
  //           value: payload.message?.split(",")[id+1].split(":")[1].includes('}') ? payload.message?.split(",")[id+1].split(":")[1].split("}")[0] : payload.message?.split(",")[id+1].split(":")[1],
  //           series: [
  //             {
  //               ...item.series[0],
  //               data: [...item.series[0].data, parseFloat(item.value) ],
  //               time: [...item.series[0].time, new Date()]
  //             }
  //           ]
  //         }
  //       }))
  //     } else if(payload.message?.split(",")[0].split(":")[1] === '1'){
  //       console.log(payload.message?.split(",")[1].split(":")[1])
  //       setData2(data2.map((item,id) => {
  //         return {
  //           ...item,
  //           value: payload.message?.split(",")[id+1].split(":")[1].includes('}') ? payload.message?.split(",")[id+1].split(":")[1].split("}")[0] : payload.message?.split(",")[id+1].split(":")[1],
  //           series: [
  //             {
  //               ...item.series[0],
  //               data: [...item.series[0].data, parseFloat(item.value) ],
  //               time: [...item.series[0].time, new Date()]
  //             }
  //           ]
  //         }
  //       }))
  //     }
  //   },1000)
  //   return () => clearInterval(timer)
  // })

  useEffect(() => {
    const interval = setInterval(async () => {
      await axios
        .get(`http://${IP_ADDRESS}:8000/api/value`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log("Data from backend: ", response.data);
          if (response.data["ID"] === 0) {
            setData1(
              data1.map((item, index) => {
                if(item.type === "T"){
                  return {
                    ...item,
                    value: response.data["TEMP"],
                  };
                }
                if(item.type === "H"){
                  return {
                    ...item,
                    value: response.data["HUMI"],
                  };
                } 
                if(item.type === "G"){
                  return {
                    ...item,
                    value: response.data["GAS"],
                  };
                }
                if(item.type === "S"){
                  return {
                    ...item,
                    value: response.data["SMOKE"],
                  };
                }
              })
            );
          }
          if (response.data["ID"] === 1) {
            setData2(
              data2.map((item, index) => {
                if(item.type === "T"){
                  return {
                    ...item,
                    value: response.data["TEMP"],
                  };
                }
                if(item.type === "H"){
                  return {
                    ...item,
                    value: response.data["HUMI"],
                  };
                } 
                if(item.type === "G"){
                  return {
                    ...item,
                    value: response.data["GAS"],
                  };
                }
                if(item.type === "S"){
                  return {
                    ...item,
                    value: response.data["SMOKE"],
                  };
                }
              })
            );
          }
        });
    }, 1000);
    return () => clearInterval(interval);
  },[data1,data2]);

  return (
    <div className="Cards">
      {floor == "Floor 1" &&
        data1.map((card, id) => {
          return (
            <div className="parentContainer" key={id}>
              <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
                type={card.type}
              />
            </div>
          );
        })}
      {floor === "Floor 2" &&
        data2.map((card, id) => {
          return (
            <div className="parentContainer" key={id}>
              <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
                type={card.type}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
