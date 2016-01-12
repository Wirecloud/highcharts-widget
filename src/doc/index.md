## Introduction

Highcharts Widget

## Settings

## Wiring

### Input Endpoints

- `highcharts`: Use this input endpoint if you want to draw a Highchart chart.

    More information: http://api.highcharts.com/highcharts

- `highstock`: Use this input endpoint if you want to draw a Highstock chart.

    More information: http://api.highcharts.com/highstock

### Output Endpoints

- `selected`: When the user click a point the data will be sended.

    Data sended:

    ```
    {
        category :: String | Number,
        percentage :: Number,
        x :: Number,
        y :: Number
    }
    ```

## Usage

The only one limitation right now are that you can't send functions (formatters, events, ...) because the wiring only send Strings

## Reference

- [FIWARE Mashup](https://mashup.lab.fiware.org/)

## Copyright and License

CC,BY-NC,3.0
