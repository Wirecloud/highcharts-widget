HighCharts Widget widget
======================

The HighCharts Widget widget is a WireCloud widget that provides ...

Build
-----

Be sure to have installed [Node.js](http://node.js) and [Bower](http://bower.io) in your system. For example, you can install it on Ubuntu and Debian running the following commands:

```bash
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install -g bower
```

If you want the last version of the widget, you should change to the `develop` branch:

```bash
git checkout develop
```

Install other npm dependencies by running: (need root because some libraries use applications, check package.json before to be sure)

```bash
sudo npm install
```

For build the widget you need download grunt:

```bash
sudo npm install -g grunt-cli
```

And now, you can use grunt:

```bash
grunt
```

If everything goes well, you will find a wgt file in the `dist` folder.

## Settings

`No settings`

## Wiring

### Input Endpoints

- `highcharts`: Use this input endpoint if you want to draw a Highchart chart.

    More information: http://api.highcharts.com/highcharts

- `highstock`: Use this input endpoint if you want to draw a Highstock chart.

    More information: http://api.highcharts.com/highstock

### Output Endpoints

- `selected`: When the user click a point the data will be sent.

    Data sent:

    ```
    {
        category :: String | Number,
        percentage :: Number,
        x :: Number,
        y :: Number
    }
    ```

- `selectedFilters`: When the user clicks a point filter data will be sent.

## Usage

The only one limitation right now are that you can't send functions (formatters, events, ...) because the wiring only send Strings.

The input of this widget may have a the dataHandler property which is a function used to define the selectedFilters output.

    Example:
    ```
    function dataHandler (clickData) {
        return clickData.x;
    }
    ```

## Reference

- [FIWARE Mashup](https://mashup.lab.fiware.org/)

## Copyright and License

Copyright (c) 2015 CoNWeT
