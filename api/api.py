
import requests
import json
import config
from flask import Flask
app = Flask(__name__)

ORLANDO_COORD_STR = '28.5383,-81.3792'
WEATHER_QUERY_PARAMS = '?exclude=minutely,daily,alerts,flags'

@app.route("/api/weather")
def weather():
    r = requests.get('https://api.darksky.net/forecast/{}/{}{}'.format(config.darksky_key, ORLANDO_COORD_STR, WEATHER_QUERY_PARAMS))

    # TODO: Error checking
    return json.dumps(r.json())

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
