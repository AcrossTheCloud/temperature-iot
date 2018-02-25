# temperature-iot
esp32 + lambda API + charting code for temperature sensing

## legal
AWS and SNTP portions of the esp32 code from the [Espressif IoT Development Framework](https://github.com/espressif/esp-idf) licensed under the [Apache license](LICENSE.apache), the rest licensed under the [GPL-v3 license](LICENSE).

## API deployment
### Requirements
* node.js v6 or higher with corresponding npm
* serverless: `npm i -g serverless`
### Installation
```shell
cd api
serverless deploy
```

## IoT configuration
fixme
(Needs along with description of how to set up the thing, policy, sending to dynamoDB table and action, to describe how AWS Root CA, private cert and key need to go under esp32/main/certs/)

## esp32
```shell
cd esp32
make menuconfig
```
Be sure to set:
* the path to python2 under "SDK tool configuration",
* the USB-serial device under "Serial flasher config",
* your WiFi network and password under "Example config", and
* the AWS IoT endpoint (from `aws iot describe-endpoint` in the CLI / the AWS console) under "Component config" -> "Amazon Web Services IoT Platform".
then
```
make flash
```
