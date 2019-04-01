import datetime
# import to handle the ICS file from webcourses
from icalendar import Calendar, Event

def extract_calendar_data( ics_string ):

    # read in the ics file
    gcal = Calendar.from_ical(ics_string)

    # initialize array of events
    calendar_events = []

    # store current month and year
    x = datetime.datetime.now()
    current_month = x.strftime("%m")
    current_day = x.strftime("%d")
    current_year = x.year

    # iterate through
    for component in gcal.walk():

        if component.name == "VEVENT":
            event_name = component.get('summary')
            event_date = component.get('dtstart').dt
            print(event_date)

            #	Index ref	  0123456789
            # dtstart:    20190220T003000Z

            # select only events happening this month
            if event_date.year == current_year and event_date.strftime("%m") == current_month :

                # format date as "m_String d_number", where m is month and d is day of month
                event_date =  x.strftime("%B") + " " + event_date.strftime("%d")

                # parse description
                # if len( event_description ) > 20 :
                #     event_description = event_description[0:18] + "..."

                # parse title
                if len( event_name ) > 24 :
                    event_name = event_name[0:22] + "..."

                # add event name, date, and descr to array as single event object
                calendar_events.append({
                                          'name': event_name,
                                          'description': 'test descr',
                                          'date': event_date
                                          })
    # only store last 3 events of month
    lastThreeEvents = []
    lastThreeEvents.append( calendar_events.pop() )
    lastThreeEvents.append( calendar_events.pop() )
    lastThreeEvents.append( calendar_events.pop() )
    calendar_events = lastThreeEvents


    # return array of events
    return calendar_events
