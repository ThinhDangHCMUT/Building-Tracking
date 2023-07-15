import React, { useState, useEffect } from "react";
import "./Updates.css";
import dayjs from "dayjs";
import axios from "axios";
import _ from "lodash";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const IP_ADDRESS = "localhost:6969";

const Updates = () => {
  const [dayValue, setDayValue] = useState(dayjs());
  console.log("IP", IP_ADDRESS);
  console.log("newValue--->", dayValue.format("YYYY-MM-DD"));
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `http://${IP_ADDRESS}/sensor/data?date=${dayValue.format(
            "YYYY-MM-DD"
          )}`
        )
        .then((response) => {
          console.log("ressss ->", response.data);
          let temp = _.uniqBy(response.data, "value");
          console.log(temp);
          setUpdate(temp);
        });
    };
    fetchData();
  }, [dayValue]);

  return (
    <div className="Updates">
      <div className="datepicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Dashboard Date"
            inputFormat="MM/DD/YYYY"
            value={dayValue}
            onChange={(newValue) => setDayValue(newValue)}
          />
        </LocalizationProvider>
      </div>
      <div className="updateContainer">
        {update && update.length ? (
          update.map((item) => {
            let timeData = dayjs(item.createdDay);
            return (
              <div className="update">
                <div className="noti">
                  {item.name && (
                    <div
                      style={{
                        marginBottom: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div>
                        {" "}
                        <span style={{ fontWeight: `bold` }}>{item.name}</span>
                        <span style={{ color: `red` }}> {item.status}</span>
                      </div>
                      <span>{item.value}</span>
                      <span>vào lúc: {timeData.format("HH:mm:ss")}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div> Không có dữ liệu trong ngày hôm nay</div>
        )}
      </div>
    </div>
  );
};

export default Updates;
