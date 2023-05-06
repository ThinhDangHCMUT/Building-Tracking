import React, {useContext, useState, useEffect} from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import { DataContextAPI } from "../../context/dataContext";


import Card from "../Card/Card";

const Cards = () => {
  const { payload } = useContext(DataContextAPI)
  // const {currentTime, setCurrentTime} = useState([])
  const [data1, setData1] = useState(cardsData)
  // const [data2, setData2] = useState(cardsData)
  console.log("done: ", data1)
  // console.log("date: ", (new Date()).get())
  useEffect(() => {
    const timer = setInterval(()=> {
      if(payload.message?.split(",")[0].split(":")[1] === '0'){
        console.log(payload.message?.split(",")[1].split(":")[1])
        setData1(data1.map((item,id) => {
          return {
            ...item,
            value: payload.message?.split(",")[id+1].split(":")[1].includes('}') ? payload.message?.split(",")[id+1].split(":")[1].split("}")[0] : payload.message?.split(",")[id+1].split(":")[1],
            series: [
              {
                ...item.series[0],
                data: [...item.series[0].data, parseFloat(item.value) ],
                time: [...item.series[0].time, new Date()]
              }
            ]
          }
        }))
      }
    },1000)
    return () => clearInterval(timer)
  },[payload])
  

  return (
    <div className="Cards">
      {data1.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
