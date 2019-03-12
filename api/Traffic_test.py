import unittest
from Traffic import extract_travel_time

class TestStringMethods(unittest.TestCase):
    def test_extract_travel_time1(self):
        mock_data = {
            'destination_addresses': ['4400 Central Florida Blvd, Orlando, FL 32816, USA'],
            'origin_addresses': ['50-2 W South St, Orlando, FL 32801, USA'],
            'rows': [{
                'elements': [{
                    'distance': {'text': '22.7 km', 'value': 22738},
                    'duration': {'text': '20 mins', 'value': 1171},
                    'status': 'OK'
                    }]
                }],
            'status': 'OK'
        }
        self.assertEqual('20 mins', extract_travel_time(mock_data))

    def test_extract_travel_time2(self):
        mock_data = {
            'rows': [{
                'elements': [{
                    'duration': {'text': '19 hours 17 mins'}
                }]
            }],
            'status': 'OK'
        }
        self.assertEqual('19 hours 17 mins', extract_travel_time(mock_data))

if __name__ == '__main__':
    unittest.main()
