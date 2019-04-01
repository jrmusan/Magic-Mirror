#Fetch News using requests module
import requests

#import json
apikey = "17e87f1b0c1c4d65a2df0857455716a0"

def getNews(data):

	#Read only the URLs from the results and return them
	urls = []
	for a in data["articles"]:
		urls.append(a['title'])
	return urls

