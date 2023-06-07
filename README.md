# node-red-contrib-kepware-iotgateway

This repository contains two nodes for Node-RED, allowing users to perform read and write operations to the Kepware IoT Gateway using its REST API.

## About iotgateway 

The Kepware IoT Gateway REST Server is a plug-in for the Kepware KEPServerEX automation software that allows you to publish data from KEPServerEX to third-party systems using the REST architectural style. 

## Disclaimer

These nodes are not official products of Kepware and the author, Harshad Joshi, is not affiliated with Kepware in any way. These nodes were developed for personal use and shared with the open source community for use and further development.
All trademarks are acknowledged as property of their respective owners 

## Nodes

| Node | Description |
|---|---|
| kepware-read | Reads data from the Kepware IoT Gateway. |
| kepware-write | Writes data to the Kepware IoT Gateway. |

## Installation

1. Clone this repository or download the zip file and extract it or install it from npm using - sudo npm install node-red-contrib-kepware-iotgateway -g
2. Navigate to the Node-RED directory:


cd ~/.node-red
```

3. Install the custom nodes:

```
npm install <path_to_extracted_folder> or sudo npm install node-red-contrib-kepware-iotgateway -g


4. Restart Node-RED.

You should now see the `kepware-read` and `kepware-write` nodes in the Node-RED editor under the function category.

## Usage

Refer the example flow provided with this node 

## Contributing

Contributions are welcome. Please submit a pull request for any enhancements.

## License

This project is licensed under the GPL-3.0 License.

