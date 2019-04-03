# Grabbing some posts from reddit!
import requests
import json
import praw

def extract_reddit_titles():

redditTitles = []

# Using authorized mode!
reddit = praw.Reddit(client_id=config.client_id,client_secret=config.secret_client,user_agent=config.usr_agent,username=config.usr_name, password=config.reddit_ps)

showerThoughts = reddit.subreddit('Showerthoughts')

# Grab 5 stories from showerThoughts
for submission in showerThoughts.hot(limit=5):
	redditTitles.append(submission.title)

# Grab 5 stories from UCF 	
for submission in ucfReddit.hot(limit=5):
	redditTitles.append(submission.title)

# Return json dumped version of this dictionary
json_string = json.dumps(redditTitles)

return json_string			