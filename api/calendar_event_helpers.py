# import to handle the ICS file from webcourses
from icalendar import Calendar, Event

def extract_calendar_data(ics_file):
    g = open('ics_file','rb')
    gcal = Calendar.from_ical(g.read())
    for component in gcal.walk():
        if component.name == "VEVENT":
            event_name = component.get('summary')
            event_date = component.get('dtstart')
            event_description = component.get('description')
        
        month_string = "PlaceHolderMonth"
        # parse month from date
        if event_date[4:6] == "01" :
            month_string = "January "
        elif event_date[4:6] == "02" :
            month_string = "February "
        elif event_date[4:6] == "03" :
            month_string = "March "
        elif event_date[4:6] == "04" :
            month_string = "April "
        elif event_date[4:6] == "05" :
            month_string = "May "
        elif event_date[4:6] == "06" :
            month_string = "June "
        elif event_date[4:6] == "07" :
            month_string = "July "
        elif event_date[4:6] == "08" :
            month_string = "August "
        elif event_date[4:6] == "09" :
            month_string = "September "
        elif event_date[4:6] == "10" :
            month_string = "October "
        elif event_date[4:6] == "11" :
            month_string = "November "
        elif event_date[4:6] == "12" :
            month_string = "December "
        
        #		  0123456789
        # DTSTART:20190220T003000Z
        # format date as "m_String d_number", where m is month and d is day of month
        event_date = month_string + event_date[6:8]
        
        # parse description
        if len( event_description ) > 20 :
            event_description = event_description[0:18] + "..."
        
        # add event name, date, and descr to array as single event object
        # TODO
    
    # close file
    g.close()
    
    # return array of events
    return {
        'name': event_name,
        'description': event_description,
        'date': event_date
    }
