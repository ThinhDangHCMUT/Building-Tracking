import React, { useContext, useState, useEffect } from "react";
import "./Cards.css";
import { cardsData1, cardsData2, configData } from "../../Data/Data";
import axios from "axios";
import dayjs from "dayjs";
// import { DataContextAPI } from "../../context/dataContext";
import Card from "../Card/Card";
import { FloorContextAPI } from "../../context/floorContext";

const Cards = () => {
  const { floor } = useContext(FloorContextAPI);
  const [config, setConfig] = useState(configData);
  const [temp, setTemp] = useState([]);
  const [t, setT] = useState({
    F1: { T: [], H: [], G: [], S: [] },
    F2: { T: [], H: [], G: [], S: [] },
  });
  const [data1, setData1] = useState(cardsData1);
  const [data2, setData2] = useState(cardsData2);

  const IP_ADDRESS = "localhost:6969";

  const updateCard = (index, oldData, newData, setData, newValue) => {
    const updateDatas = [...oldData];
    updateDatas[index].series[0].data = newData;
    updateDatas[index].value = newValue;
    setData(updateDatas);
  };

  const buildWarningDataToMongo = (resp) => {
    const datetime = dayjs();
    if (parseFloat(resp["TEMP"]) >= 39 || parseFloat(resp["TEMP"]) <= 13) {
      let data = {
        name: resp["ID"] === 0 ? "Temperature 1" : "Temperature 2",
        status: "warning",
        value: resp["TEMP"],
      };
      axios.post(`http://${IP_ADDRESS}/sensor/data`, data);
    }
    if (parseFloat(resp["HUMI"]) < 30) {
      let data = {
        name: resp["ID"] === 0 ? "Humid 1" : "Humid 2",
        status: "warning",
        value: resp["HUMID"],
      };
      axios.post(`http://${IP_ADDRESS}/sensor/data`, data);
    }
    if (parseFloat(resp["GAS"]) > 40) {
      let data = {
        name: resp["ID"] === 0 ? "GAS 1" : "GAS 2",
        status: "warning",
        value: resp["GAS"],
      };
      axios.post(`http://${IP_ADDRESS}/sensor/data`, data);
    }
    if (parseFloat(resp["SMOKE"]) > 40) {
      let data = {
        name: resp["ID"] === 0 ? "SMOKE 1" : "SMOKE 2",
        status: "warning",
        value: resp["SMOKE"],
      };
      axios.post(`http://${IP_ADDRESS}/sensor/data`, data);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await axios
        .get(`http://${IP_ADDRESS}/sensor`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          let resp = response.data?.data;
          //Save data warning to mongoDB
          buildWarningDataToMongo(resp);
          setTemp(() => {
            temp.push(response.data?.time);
            return temp;
          });

          setT(() => {
            if (resp["ID"] === 0) {
              t.F1.T.push(resp.TEMP);
              t.F1.H.push(resp.HUMI);
              t.F1.G.push(resp.GAS);
              t.F1.S.push(resp.SMOKE);
            }
            if (resp["ID"] === 1) {
              t.F2.T.push(resp.TEMP);
              t.F2.H.push(resp.HUMI);
              t.F2.G.push(resp.GAS);
              t.F2.S.push(resp.SMOKE);
            }
            return t;
          });

          setConfig((prevConfig) => ({
            ...prevConfig,
            options: {
              ...prevConfig.options,
              xaxis: {
                ...prevConfig.options.xaxis,
                categories: temp,
              },
            },
          }));
          if (resp["ID"] === 0) {
            updateCard(0, data1, t.F1.T, setData1, resp["TEMP"]);
            updateCard(1, data1, t.F1.H, setData1, resp["HUMI"]);
            updateCard(2, data1, t.F1.G, setData1, resp["GAS"]);
            updateCard(3, data1, t.F1.S, setData1, resp["SMOKE"]);
          }
          if (resp["ID"] === 1) {
            updateCard(0, data2, t.F2.T, setData2, resp["TEMP"]);
            updateCard(1, data2, t.F2.H, setData2, resp["HUMI"]);
            updateCard(2, data2, t.F2.G, setData2, resp["GAS"]);
            updateCard(3, data2, t.F2.S, setData2, resp["SMOKE"]);
          }
        });
    }, 5000);
    return () => clearInterval(interval);
  }, [config, temp, t, data1, data2]);

  return (
    <div className="Cards">
      {floor === "Floor 1" &&
        data1.map((card, id) => {
          return (
            <div className="parentContainer" key={id}>
              <Card
                title={card.title}
                color={card.color}
                barValue={card.value}
                value={card.value}
                png={card.png}
                series={card.series}
                type={card.type}
                config={config}
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
                config={config}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
