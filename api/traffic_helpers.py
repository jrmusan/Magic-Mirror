#!/usr/bin/python
source = "4478 Drayton Ln"
dest = "14686 Lady Victoria Blvd"
# setGoogleMapsLocations.sh uses line numbers to modify the above two lines
# so don't move these two from lines 2 and 3

import config
import sys,io,requests

def extract_travel_time(data):
    return data['rows'][0]['elements'][0]['duration']['text']
