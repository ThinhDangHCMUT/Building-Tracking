const mqtt = require("mqtt")
const express = require ("express")

const app = express()
const brokerUrl = 'ws://broker.mqttdashboard.com:8000/mqtt'
const clientId = 'vydoan'
const topic = 'building_data'
const client = mqtt.connect(brokerUrl, { clientId })


client.on('connect', () => {
    //Connect and subscribe to the HiveMQ broker
    console.log('Connected to HiveMQ broker')
    client.subscribe(topic)
})

let lastMessage = null
// Recieve the message from the broker
client.on('message', (topic, message) => {
    lastMessage = message.toString()
    console.log(`Received message on topic ${topic}: ${message.toString()}`)
})

//Send value 
app.get('/api/value', (req, res) => {
    console.log('Sending data to frontend:', lastMessage)
    res.send(lastMessage)
})

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})