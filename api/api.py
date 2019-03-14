
import requests
import json
import config
from flask import Flask
from functools import reduce
app = Flask(__name__)

ORLANDO_COORD_STR = '28.5383,-81.3792'
WEATHER_QUERY_PARAMS = '?exclude=minutely,daily,alerts,flags'

@app.route("/api/weather")
def weather():
    r = requests.get('https://api.darksky.net/forecast/{}/{}{}'.format(config.darksky_key, ORLANDO_COORD_STR, WEATHER_QUERY_PARAMS))
    json_data = r.json()
    hourly_data_list = json_data['hourly']['data']

    low_temp = hourly_data_list[0]['apparentTemperature']
    high_temp = hourly_data_list[0]['apparentTemperature']
    for day in hourly_data_list:
        day_temp = day['apparentTemperature']
        if day_temp > high_temp:
            high_temp = day_temp
        if day_temp < low_temp:
            low_temp = day_temp

    # TODO: Error checking
    return json.dumps({
        'current': json_data['currently']['apparentTemperature'],
        'low': low_temp,
        'high': high_temp,
        'summary': json_data['currently']['summary']
    })

@app.route("/api/news")
def news():
    return "This will return data fetched via News API"

@app.route("/api/reddit")
def reddit():
    return "This will return data fetched via Reddit API"
    
@app.route("/api/traffic")
def traffic():
    # Hardcode home
    source = '28.5383,-81.3792'      
    # Hardcode destination
    dest = '28.597240,-81.203796'
    # url variable store url  
    url ='https://maps.googleapis.com/maps/api/distancematrix/json?'
    r = requests.get(url + 'origins=' + source +'&destinations=' + dest +'&key=' + api_key) 
    data = r.json()
    travelTime = data['rows'][0]['elements'][0]['duration']['text']
    return json.dumps(travelTime)
