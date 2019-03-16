import unittest
from quote_API import da_quote

# This test is used to ensure that we are correctly grabbing and returning the right data from the API

class TestStringMethods(unittest.TestCase):
	def test_da_quote1(self):
		mock_data = {
			{
				"success": {
					"total": 1
				},
				"contents": {
					"quotes": [
						{
							"quote": "Each player must accept the cards life deals him or her: but once they are in hand, he or she alone must decide how to play the cards in order to win the game.",
							"length": "159",
							"author": "Voltaire",
							"tags": [
								"game",
								"games",
								"inspire",
								"order",
								"tso-life"
							],
							"category": "inspire",
							"date": "2019-03-16",
							"permalink": "https://theysaidso.com/quote/GhK26WkA8I_Mk3ZSV6evAQeF/voltaire-each-player-must-accept-the-cards-life-deals-him-or-her-but-once-they-a",
							"title": "Inspiring Quote of the day",
							"background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
							"id": "GhK26WkA8I_Mk3ZSV6evAQeF"
						}
					],
					"copyright": "2017-19 theysaidso.com"
				}
			}
		}
		self.assertEqual('Each player must accept the cards life deals him or her: but once they are in hand, he or she alone must decide how to play the cards in order to win the game.', da_quote(mock_data))
		
if __name__ == '__main__':
	unittest.main()		