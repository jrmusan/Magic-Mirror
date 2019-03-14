def extract_weather_data(json_data):
    hourly_data_list = json_data['hourly']['data']
    low_temp = hourly_data_list[0]['apparentTemperature']
    high_temp = hourly_data_list[0]['apparentTemperature']

    for day in hourly_data_list:
        day_temp = day['apparentTemperature']
        if day_temp > high_temp:
            high_temp = day_temp
        if day_temp < low_temp:
            low_temp = day_temp

    return {
        'current': json_data['currently']['apparentTemperature'],
        'low': low_temp,
        'high': high_temp,
        'summary': json_data['currently']['summary']
    }