#!/usr/bin/python
source = "4478 Drayton Ln"
dest = "14686 Lady Victoria Blvd"
# setGoogleMapsLocations.sh uses line numbers to modify the above two lines
# so don't move these two from lines 2 and 3


import sys,io,requests

def extract_travel_time(data):
    return data['rows'][0]['elements'][0]['duration']['text']

# enter your api key here 
api_key ='API_KEY'

# url variable store url  
url ='https://maps.googleapis.com/maps/api/distancematrix/json?'
r = requests.get(url + 'origins=' + source +'&destinations=' + dest +'&key=' + api_key) 

print(r.json())
print(extract_travel_time(r.json()))
