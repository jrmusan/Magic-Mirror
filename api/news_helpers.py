#Fetch News using requests module
def getNews(data):

	#Read only the URLs from the results and return them
	urls = []
	for a in data["articles"]:
		urls.append(a['title'])
	return urls

