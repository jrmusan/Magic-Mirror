import unittest
from flask import Flask
from flask_testing import TestCase
from weather_helpers import extract_weather_data
from traffic_helpers import extract_travel_time
from mock_data import *


class WeatherHelpersTest(unittest.TestCase):
    def test_extract_weather_data(self):
        self.assertEqual(extract_weather_data(mock_data_weather), {
            'current': 59,
            'low': 58,
            'high': 59,
            'summary': 'Overcast'
        })

class TrafficHelpersTest(unittest.TestCase):
    def test_extract_travel_time_mins_only(self):
        self.assertEqual('20 mins', extract_travel_time(mock_data_traffic_mins_only))

    def test_extract_travel_time_hours_and_mins(self):
        self.assertEqual('19 hours 17 mins', extract_travel_time(mock_data_traffic_hours_and_mins))  

if __name__ == '__main__':
    unittest.main()