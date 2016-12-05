/*
* So, you are on of those few people actually reading the config file. Great!
* You are now able to optimise ETS2 Local Radio for you.
* As always, have fun, and when something breaks, try reverting to the default :-)
 */

var g_skinConfig = {
    "radius": 7500,                     //What the base radius (broadcasting range) for all cities is in meters.
    "treshold": 300,                    //How much closer you need to be to a different country to switch to that country (in meters)
    "whitenoise": true,                 //Whether to play static when a station is far away
    "peerJSkey": "damhc79361fhto6r",    //API key for PeerJS (remote control), no reason to change this yet
    "ets2": {
        "map": "cities-promods-rusmap.js",  //What map you're using, this is ProMods + RusMap by default. Pick one of the files in the cities folder.
        "stations": "stations-europe.js",   //What stations file to use, currently only stations-europe available.
    },
    "ats": {
        "map": "cities-ats.js",             //What map you're using, this is ProMods + RusMap by default. Pick one of the files in the cities folder.
        "stations": "stations-america.js",  //What stations file to use, currently only stations-europe available.
    }
};