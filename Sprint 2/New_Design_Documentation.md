## Program Organization
![TheHighLevel](https://user-images.githubusercontent.com/47402226/54561404-f70b1280-499a-11e9-84bd-8e3cea02a4ca.PNG)

### Architectural Description
| Component Name  | Description                                                                                                                                             
|-----------------|--------------------------------------------------------------------------------------------------
| APIs            | Used to make direct request to the APIs and it will return info to the front-end to be displayed.       
| Raspberry Pi    | Hardware to load application into                               
| Mirror          | Hardware that will display contents/Part of the front-end        
| User            | People that will interact or use  the application
| User Choice     | every User will have option to add and remove feature to display in the interface
| Calendar        | Will show upcoming classes/Events
| Weather         | Will show current temperature and forecost
| Date            | Will show today's date
| Clock           | will show current time of the day
| Travel          | Will used to display up to date travel times
| Reddit/News     | Display top news headlines/breaking news

### Table That relates each components from architecture design to each user story.

| ID  |Components| User Story                                                                                                                                               
|-----|----------|------------------------------------------------------------------------------------------------------------------------------------------------          
| 000 |Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur. 
| 001 |Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                          
| 002 |Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          
| 003 |Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. 
| 004 |Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 
| 005 |Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                
| 006 |Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   
| 007 |Travel    | As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             
| 008 |News      | As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.   


## Major Classes
![ClassDiag](https://user-images.githubusercontent.com/47402226/54484089-767ed180-4835-11e9-8421-f5876e33b44e.PNG)

### Class Description
| Component Name     | Description                                                                                                                                             
|-----------------   |--------------------------------------------------------------------------------------------------
|App Root            | The main app component. Using Angular to the send data to the interface.
|Calendar Component  | Using this class to request data from the IPA and returned data for the calendar components
|Reddit Component    | Using this class to request data from the IPA and returned data for the Reddit components
|Weather Component   | Using this class to request data from the IPA and returned data for the Weather components
|Travel Component    | Using this class to request data from the IPA and returned data for the Travel components
|Date Componet       | Using this class to request data from the IPA and returned data for the Date components
|Clock Component     | Using this class to request data from the IPA and returned data for the Clock components
|Motivation Component| Using this class to request data from the IPA and returned data for the Motivation components
|Flask               | Received HTTP request and called those methods for those instances.


### Table That relates each components from the class design to each user stories

| ID  |Components| User Story                                                                                                                                               
|-----|----------|------------------------------------------------------------------------------------------------------------------------------------------------          
| 000 |Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur. 
| 001 |Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                          
| 002 |Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          
| 003 |Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. 
| 004 |Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 
| 005 |Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                
| 006 |Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   
| 007 |Travel    | As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             
| 008 |News      | As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.   


## Data Design
- For this project, we don't use a database. Instead, we made direct request to the APIs and return the results to the front-end to be displayed

## Business Rules
- Our application is based on an open-source platform, people will be able to modify things.
## User Interface Design
![user interface](https://camo.githubusercontent.com/7579d31725c01c8f0affd517848d492b800c19e8/68747470733a2f2f692e696d6775722e636f6d2f526d7a435a4b362e6a7067)
### User Interface Description

| Component Name         | Description                                                                                                                                             
|-----------------       |--------------------------------------------------------------------------------------------------
|Monitor              	 | will use a monitor as the display for the mirror
|Refective Two Way Mirror| Will be used to show the contents as well as the user face
|Frame                   | Will be used to housing the monitor
|Raspberry Pie           | Will be used to as in intermidary for the hardware and the software
| Calendar               | Will show upcoming classes/Events
| Weather                | Will show current temperature and forecost
| Date                   | Will show today's date
| Clock                  | will show current time of the day
| Travel                 | Will used to display up to date travel times
| Reddit/News            | Display top news headlines/breaking news

### Table That relates user interface to each user stories

| ID  |Components| User Story                                                                                                                                               
|-----|----------|------------------------------------------------------------------------------------------------------------------------------------------------          
| 000 |Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur. 
| 001 |Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                          
| 002 |Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          
| 003 |Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. 
| 004 |Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 
| 005 |Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                
| 006 |Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   
| 007 |Travel    | As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             
| 008 |News      | As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.   

## Resource Management
- Python instead of Angular
## Security
## Performance
## Scalability
## Interoperability
## Internationalization/Localization
## Input/Output
## Error Processing
## Fault Tolerance
## Architectural Feasibility
## Overengineering
## Build-vs-Buy Decisions
This section should list the third party libraries your system is using and describe what those libraries are being used for.
## Reuse
## Change Strategy

