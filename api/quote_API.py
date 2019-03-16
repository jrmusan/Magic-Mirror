#!/usr/bin/python

import sys,io,requests

# Grab a random quote

r = requests.get('http://quotes.rest/qod.json?category=inspire&maxlength=200') 
data = r.json()

def da_quote(data):
	daQuote = data['contents']['quotes'][0]['quote']

print(r)
print(daQuote)