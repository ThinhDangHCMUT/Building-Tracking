import { useState, createContext, useEffect } from "react";
import mqtt from "precompiled-mqtt";

export const DataContextAPI = createContext();

export const DataContext = ({ children }) => {
  // ws://broker.mqttdashboard.com:8000/mqtt
  const brokerUrl = "ws://broker.mqttdashboard.com:8000/mqtt";
  const options = {
    clientId: "thinhdang",
    clean: true,
    reconnectPeriod: 1000, // ms
    connectTimeout: 30 * 1000, // ms
  };
  const topic = "building_data";

  const [client, setClient] = useState(null);
  const [payload, setPayload] = useState({});
  const [connect, setConnect] = useState("connect")
  useEffect(() => {
    setClient(mqtt.connect(brokerUrl, options));
  }, []);

  useEffect(() => {
    const Interval = setInterval(() => {
      if (client) {
        client.on("connect", () => {
          // setConnect("okok")
        //   console.log("Connection successfully!!!");
        });
        client.subscribe(topic, 0, (error) => {
          if (error) {
            console.log("Subscribe to topics error", error);
            return;
          }
        //   console.log(`Subscribe to topics: ${topic}`);
           client.on("message", (topic, message) => {
            // const payload = { topic, message: message.toString() };
            setPayload({ topic, message: message.toString() });
            console.log(`received message: ${message} from topic: ${topic}`);
          });
        });
      }
    },1000);

    return () => clearInterval(Interval);
  });

  return (
    <DataContextAPI.Provider
      value={{
        payload,
        client,
      }}
    >
      {children}
    </DataContextAPI.Provider>
  );
};
