from flask import Flask
app = Flask(__name__)

@app.route("/weather")
def weather():
    return "This will return data fetched via Weather API"

@app.route("/news")
def news():
    return "This will return data fetched via News API"

@app.route("/reddit")
def reddit():
    return "This will return data fetched via Reddit API"