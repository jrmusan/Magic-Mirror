
import requests
import json
import config
from flask import Flask
app = Flask(__name__)

ORLANDO_COORD_STR = '28.5383,-81.3792'
WEATHER_QUERY_PARAMS = '?exclude=hourly,minutely,daily,alerts,flags'

@app.route("/weather")
def weather():
    r = requests.get('https://api.darksky.net/forecast/{}/{}{}'.format(config.darksky_key, ORLANDO_COORD_STR, WEATHER_QUERY_PARAMS))

    # TODO: Error checking
    return json.dumps(r.json())

@app.route("/news")
def news():
    return "This will return data fetched via News API"

@app.route("/reddit")
def reddit():
    return "This will return data fetched via Reddit API"
