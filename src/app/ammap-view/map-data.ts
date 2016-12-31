/**
* @Author: mars
* @Date:   2016-12-31T01:55:24-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-31T02:39:27-05:00
*/
import { capitalCodeMap } from './capital-data';

const targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

export let mapData = {};
  /**
   * Define SVG path for target icon
   */
export let countries = [ {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Vienna",
      "code": "AT",
      "latitude": 48.2092,
      "longitude": 16.3728
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Minsk",
      "code": "BY",
      "latitude": 53.9678,
      "longitude": 27.5766
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brussels",
      "code": "BE",
      "latitude": 50.8371,
      "longitude": 4.3676
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Sarajevo",
      "code": "BA",
      "latitude": 43.8608,
      "longitude": 18.4214
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Sofia",
      "code": "US",
      "latitude": 42.7105,
      "longitude": 23.3238
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Zagreb",
      "code": "US",
      "latitude": 45.8150,
      "longitude": 15.9785
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Pristina",
      "code": "US",
      "latitude": 42.666667,
      "longitude": 21.166667
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Prague",
      "code": "US",
      "latitude": 50.0878,
      "longitude": 14.4205
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Copenhagen",
      "code": "US",
      "latitude": 55.6763,
      "longitude": 12.5681
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Tallinn",
      "code": "US",
      "latitude": 59.4389,
      "longitude": 24.7545
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Helsinki",
      "latitude": 60.1699,
      "longitude": 24.9384
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Berlin",
      "latitude": 52.5235,
      "longitude": 13.4115
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Athens",
      "latitude": 37.9792,
      "longitude": 23.7166
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Budapest",
      "latitude": 47.4984,
      "longitude": 19.0408
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Reykjavik",
      "latitude": 64.1353,
      "longitude": -21.8952
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Dublin",
      "latitude": 53.3441,
      "longitude": -6.2675
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Rome",
      "latitude": 41.8955,
      "longitude": 12.4823
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Riga",
      "latitude": 56.9465,
      "longitude": 24.1049
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Vaduz",
      "latitude": 47.1411,
      "longitude": 9.5215
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Vilnius",
      "latitude": 54.6896,
      "longitude": 25.2799
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Luxembourg",
      "latitude": 49.6100,
      "longitude": 6.1296
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Skopje",
      "latitude": 42.0024,
      "longitude": 21.4361
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Valletta",
      "latitude": 35.9042,
      "longitude": 14.5189
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Chisinau",
      "latitude": 47.0167,
      "longitude": 28.8497
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Monaco",
      "latitude": 43.7325,
      "longitude": 7.4189
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Podgorica",
      "latitude": 42.4602,
      "longitude": 19.2595
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Amsterdam",
      "latitude": 52.3738,
      "longitude": 4.8910
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Oslo",
      "latitude": 59.9138,
      "longitude": 10.7387
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Warsaw",
      "latitude": 52.2297,
      "longitude": 21.0122
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Lisbon",
      "latitude": 38.7072,
      "longitude": -9.1355
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bucharest",
      "latitude": 44.4479,
      "longitude": 26.0979
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "San Marino",
      "latitude": 43.9424,
      "longitude": 12.4578
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Belgrade",
      "latitude": 44.8048,
      "longitude": 20.4781
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bratislava",
      "latitude": 48.2116,
      "longitude": 17.1547
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Ljubljana",
      "latitude": 46.0514,
      "longitude": 14.5060
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Madrid",
      "latitude": 40.4167,
      "longitude": -3.7033
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Stockholm",
      "latitude": 59.3328,
      "longitude": 18.0645
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bern",
      "latitude": 46.9480,
      "longitude": 7.4481
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Kiev",
      "latitude": 50.4422,
      "longitude": 30.5367
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Gibraltar",
      "latitude": 36.1377,
      "longitude": -5.3453
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Saint Peter Port",
      "latitude": 49.4660,
      "longitude": -2.5522
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Douglas",
      "latitude": 54.1670,
      "longitude": -4.4821
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Saint Helier",
      "latitude": 49.1919,
      "longitude": -2.1071
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Longyearbyen",
      "latitude": 78.2186,
      "longitude": 15.6488
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Kabul",
      "latitude": 34.5155,
      "longitude": 69.1952
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Yerevan",
      "latitude": 40.1596,
      "longitude": 44.5090
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Baku",
      "latitude": 40.3834,
      "longitude": 49.8932
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Manama",
      "latitude": 26.1921,
      "longitude": 50.5354
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Dhaka",
      "latitude": 23.7106,
      "longitude": 90.3978
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Thimphu",
      "latitude": 27.4405,
      "longitude": 89.6730
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bandar Seri Begawan",
      "latitude": 4.9431,
      "longitude": 114.9425
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Phnom Penh",
      "latitude": 11.5434,
      "longitude": 104.8984
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Peking",
      "latitude": 39.9056,
      "longitude": 116.3958
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Nicosia",
      "latitude": 35.1676,
      "longitude": 33.3736
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "T'bilisi",
      "latitude": 41.7010,
      "longitude": 44.7930
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "New Delhi",
      "latitude": 28.6353,
      "longitude": 77.2250
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Jakarta",
      "latitude": -6.1862,
      "longitude": 106.8063
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Teheran",
      "latitude": 35.7061,
      "longitude": 51.4358
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Baghdad",
      "latitude": 33.3157,
      "longitude": 44.3922
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Jerusalem",
      "latitude": 31.76,
      "longitude": 35.17
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Tokyo",
      "latitude": 35.6785,
      "longitude": 139.6823
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Amman",
      "latitude": 31.9394,
      "longitude": 35.9349
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Astana",
      "latitude": 51.1796,
      "longitude": 71.4475
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Kuwait",
      "latitude": 29.3721,
      "longitude": 47.9824
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bishkek",
      "latitude": 42.8679,
      "longitude": 74.5984
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Vientiane",
      "latitude": 17.9689,
      "longitude": 102.6137
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Beyrouth / Beirut",
      "latitude": 33.8872,
      "longitude": 35.5134
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Kuala Lumpur",
      "latitude": 3.1502,
      "longitude": 101.7077
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Ulan Bator",
      "latitude": 47.9138,
      "longitude": 106.9220
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Pyinmana",
      "latitude": 19.7378,
      "longitude": 96.2083
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Kathmandu",
      "latitude": 27.7058,
      "longitude": 85.3157
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Muscat",
      "latitude": 23.6086,
      "longitude": 58.5922
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Islamabad",
      "latitude": 33.6751,
      "longitude": 73.0946
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Manila",
      "latitude": 14.5790,
      "longitude": 120.9726
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Doha",
      "latitude": 25.2948,
      "longitude": 51.5082
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Riyadh",
      "latitude": 24.6748,
      "longitude": 46.6977
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Singapore",
      "latitude": 1.2894,
      "longitude": 103.8500
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Seoul",
      "latitude": 37.5139,
      "longitude": 126.9828
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Colombo",
      "latitude": 6.9155,
      "longitude": 79.8572
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Damascus",
      "latitude": 33.5158,
      "longitude": 36.2939
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Taipei",
      "latitude": 25.0338,
      "longitude": 121.5645
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Dushanbe",
      "latitude": 38.5737,
      "longitude": 68.7738
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bangkok",
      "latitude": 13.7573,
      "longitude": 100.5020
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Dili",
      "latitude": -8.5662,
      "longitude": 125.5880
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Ankara",
      "latitude": 39.9439,
      "longitude": 32.8560
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Ashgabat",
      "latitude": 37.9509,
      "longitude": 58.3794
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Abu Dhabi",
      "latitude": 24.4764,
      "longitude": 54.3705
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Tashkent",
      "latitude": 41.3193,
      "longitude": 69.2481
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Hanoi",
      "latitude": 21.0341,
      "longitude": 105.8372
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Sanaa",
      "latitude": 15.3556,
      "longitude": 44.2081
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Buenos Aires",
      "latitude": -34.6118,
      "longitude": -58.4173
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bridgetown",
      "latitude": 13.0935,
      "longitude": -59.6105
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Belmopan",
      "latitude": 17.2534,
      "longitude": -88.7713
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Sucre",
      "latitude": -19.0421,
      "longitude": -65.2559
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Brasilia",
      "latitude": -15.7801,
      "longitude": -47.9292
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Ottawa",
      "latitude": 45.4235,
      "longitude": -75.6979
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Santiago",
      "latitude": -33.4691,
      "longitude": -70.6420
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bogota",
      "latitude": 4.6473,
      "longitude": -74.0962
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "San Jose",
      "latitude": 9.9402,
      "longitude": -84.1002
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Havana",
      "latitude": 23.1333,
      "longitude": -82.3667
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Roseau",
      "latitude": 15.2976,
      "longitude": -61.3900
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Santo Domingo",
      "latitude": 18.4790,
      "longitude": -69.8908
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Quito",
      "latitude": -0.2295,
      "longitude": -78.5243
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "San Salvador",
      "latitude": 13.7034,
      "longitude": -89.2073
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Guatemala",
      "latitude": 14.6248,
      "longitude": -90.5328
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Ciudad de Mexico",
      "latitude": 19.4271,
      "longitude": -99.1276
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Managua",
      "latitude": 12.1475,
      "longitude": -86.2734
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Panama",
      "latitude": 8.9943,
      "longitude": -79.5188
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Asuncion",
      "latitude": -25.3005,
      "longitude": -57.6362
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Lima",
      "latitude": -12.0931,
      "longitude": -77.0465
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Castries",
      "latitude": 13.9972,
      "longitude": -60.0018
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Paramaribo",
      "latitude": 5.8232,
      "longitude": -55.1679
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Washington",
      "latitude": 38.8921,
      "longitude": -77.0241
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Montevideo",
      "latitude": -34.8941,
      "longitude": -56.0675
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Caracas",
      "latitude": 10.4961,
      "longitude": -66.8983
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Oranjestad",
      "latitude": 12.5246,
      "longitude": -70.0265
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Cayenne",
      "latitude": 4.9346,
      "longitude": -52.3303
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Plymouth",
      "latitude": 16.6802,
      "longitude": -62.2014
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "San Juan",
      "latitude": 18.4500,
      "longitude": -66.0667
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Algiers",
      "latitude": 36.7755,
      "longitude": 3.0597
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Luanda",
      "latitude": -8.8159,
      "longitude": 13.2306
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Porto-Novo",
      "latitude": 6.4779,
      "longitude": 2.6323
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Gaborone",
      "latitude": -24.6570,
      "longitude": 25.9089
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Ouagadougou",
      "latitude": 12.3569,
      "longitude": -1.5352
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bujumbura",
      "latitude": -3.3818,
      "longitude": 29.3622
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Yaounde",
      "latitude": 3.8612,
      "longitude": 11.5217
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bangui",
      "latitude": 4.3621,
      "longitude": 18.5873
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Brazzaville",
      "latitude": -4.2767,
      "longitude": 15.2662
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Kinshasa",
      "latitude": -4.3369,
      "longitude": 15.3271
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Yamoussoukro",
      "latitude": 6.8067,
      "longitude": -5.2728
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Djibouti",
      "latitude": 11.5806,
      "longitude": 43.1425
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Cairo",
      "latitude": 30.0571,
      "longitude": 31.2272
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Asmara",
      "latitude": 15.3315,
      "longitude": 38.9183
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Addis Abeba",
      "latitude": 9.0084,
      "longitude": 38.7575
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Libreville",
      "latitude": 0.3858,
      "longitude": 9.4496
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Banjul",
      "latitude": 13.4399,
      "longitude": -16.6775
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Accra",
      "latitude": 5.5401,
      "longitude": -0.2074
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Conakry",
      "latitude": 9.5370,
      "longitude": -13.6785
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bissau",
      "latitude": 11.8598,
      "longitude": -15.5875
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Nairobi",
      "latitude": -1.2762,
      "longitude": 36.7965
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Maseru",
      "latitude": -29.2976,
      "longitude": 27.4854
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Monrovia",
      "latitude": 6.3106,
      "longitude": -10.8047
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Tripoli",
      "latitude": 32.8830,
      "longitude": 13.1897
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Antananarivo",
      "latitude": -18.9201,
      "longitude": 47.5237
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Lilongwe",
      "latitude": -13.9899,
      "longitude": 33.7703
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Bamako",
      "latitude": 12.6530,
      "longitude": -7.9864
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Nouakchott",
      "latitude": 18.0669,
      "longitude": -15.9900
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Port Louis",
      "latitude": -20.1654,
      "longitude": 57.4896
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Rabat",
      "latitude": 33.9905,
      "longitude": -6.8704
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Maputo",
      "latitude": -25.9686,
      "longitude": 32.5804
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Windhoek",
      "latitude": -22.5749,
      "longitude": 17.0805
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Niamey",
      "latitude": 13.5164,
      "longitude": 2.1157
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Abuja",
      "latitude": 9.0580,
      "longitude": 7.4891
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Kigali",
      "latitude": -1.9441,
      "longitude": 30.0619
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Dakar",
      "latitude": 14.6953,
      "longitude": -17.4439
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Freetown",
      "latitude": 8.4697,
      "longitude": -13.2659
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Mogadishu",
      "latitude": 2.0411,
      "longitude": 45.3426
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Pretoria",
      "latitude": -25.7463,
      "longitude": 28.1876
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Mbabane",
      "latitude": -26.3186,
      "longitude": 31.1410
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Dodoma",
      "latitude": -6.1670,
      "longitude": 35.7497
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Lome",
      "latitude": 6.1228,
      "longitude": 1.2255
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "code": "US",
      "title": "Tunis",
      "latitude": 36.8117,
      "longitude": 10.1761
    }];


countries.forEach(c => {
  c.code = capitalCodeMap[c.title];
});