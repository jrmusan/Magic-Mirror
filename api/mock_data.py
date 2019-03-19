mock_data_weather = {
    "latitude": 28.5383,
    "longitude": -81.3792,
    "timezone": "America/New_York",
    "currently": {
        "time": 1552878704,
        "summary": "Overcast",
        "icon": "cloudy",
        "nearestStormDistance": 16,
        "nearestStormBearing": 313,
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 59.43,
        "apparentTemperature": 59.43,
        "dewPoint": 53.03,
        "humidity": 0.79,
        "pressure": 1020.81,
        "windSpeed": 10.1,
        "windGust": 10.43,
        "windBearing": 14,
        "cloudCover": 1,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 262.76
    },
    "hourly": {
        "summary": "Overcast throughout the day.",
        "icon": "cloudy",
        "data": [
            {
                "time": 1552878000,
                "summary": "Overcast",
                "icon": "cloudy",
                "precipIntensity": 0,
                "precipProbability": 0,
                "temperature": 59.56,
                "apparentTemperature": 59.56,
                "dewPoint": 53.13,
                "humidity": 0.79,
                "pressure": 1020.84,
                "windSpeed": 10.14,
                "windGust": 10.48,
                "windBearing": 15,
                "cloudCover": 1,
                "uvIndex": 0,
                "visibility": 10,
                "ozone": 262.74
            },
            {
                "time": 1552881600,
                "summary": "Overcast",
                "icon": "cloudy",
                "precipIntensity": 0,
                "precipProbability": 0,
                "temperature": 58.89,
                "apparentTemperature": 58.89,
                "dewPoint": 52.63,
                "humidity": 0.8,
                "pressure": 1020.65,
                "windSpeed": 9.93,
                "windGust": 10.23,
                "windBearing": 13,
                "cloudCover": 1,
                "uvIndex": 0,
                "visibility": 10,
                "ozone": 262.87
            }
        ]
    }
}

mock_data_traffic_mins_only = {
    'destination_addresses': ['4400 Central Florida Blvd, Orlando, FL 32816, USA'],
    'origin_addresses': ['50-2 W South St, Orlando, FL 32801, USA'],
    'rows': [{
        'elements': [{
            'distance': {'text': '22.7 km', 'value': 22738},
            'duration': {'text': '20 mins', 'value': 1171},
            'status': 'OK'
        }]
    }],
    'status': 'OK'
}

mock_data_traffic_hours_and_mins = {
    'rows': [{
        'elements': [{
            'duration': {'text': '19 hours 17 mins'}
        }]
    }],
    'status': 'OK'
}

mock_quote_data = {
    "success": {
        "total": 1
    },
    "contents": {
        "quotes": [
            {
                "quote": "Each player must accept the cards life deals him or her: but once they are in hand, he or she alone must decide how to play the cards in order to win the game.",
                "length": "159",
                "author": "Voltaire",
                "tags": [
                    "game",
                    "games",
                    "inspire",
                    "order",
                    "tso-life"
                ],
                "category": "inspire",
                "date": "2019-03-16",
                "permalink": "https://theysaidso.com/quote/GhK26WkA8I_Mk3ZSV6evAQeF/voltaire-each-player-must-accept-the-cards-life-deals-him-or-her-but-once-they-a",
                "title": "Inspiring Quote of the day",
                "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
                "id": "GhK26WkA8I_Mk3ZSV6evAQeF"
            }
        ],
        "copyright": "2017-19 theysaidso.com"
    }
}
