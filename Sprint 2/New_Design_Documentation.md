## Program Organization
### Architectural Design/Diagram

![NewHighLeve](https://user-images.githubusercontent.com/47402226/54579995-5e958200-49dc-11e9-9791-510319845960.PNG)

### Architectural Description
| Component Name  | Description                                                                                                                                             
|-----------------|--------------------------------------------------------------------------------------------------
| APIs            | Used to make direct request to the APIs and it will return info to the front-end to be displayed.       
| Raspberry Pie   | Hardware to load the system application into                               
| Mirror/Monitor  | Hardware that will display contents/Part of the front-end        
| Calendar        | Will show upcoming classes/Events
| Weather         | Will show current temperature and forecost
| Date            | Will show today's date
| Clock           | will show current time of the day
| Travel          | Will used to display up to date travel times
| Reddit/News     | Display top news headlines/breaking news

### Table That relates each components from architecture design to each user story.

|Components| User Story                                                                                                                                               
|----------|------------------------------------------------------------------------------------------------------------------------------------------------          
|Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur. 
|Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                          
|Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          
|Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. 
|Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 
|Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                
|Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   
|Travel    | As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             
|News      | As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.   


## Major Classes
### Classes Design/Diagram
![ClassDiag](https://user-images.githubusercontent.com/47402226/54484089-767ed180-4835-11e9-8421-f5876e33b44e.PNG)

### Class Description
| Component Name     | Description                                                                                                                                             
|-----------------   |--------------------------------------------------------------------------------------------------
|App Root            | The main app component. Using Angular to the send data to the interface.
|Calendar Component  | Using this class to request data from the IPA and returned data for the calendar components to the front-end
|Reddit Component    | Using this class to request data from the IPA and returned data for the Reddit components to the front-end
|Weather Component   | Using this class to request data from the IPA and returned data for the Weather components to the front-end
|Travel Component    | Using this class to request data from the IPA and returned data for the Travel components to the front-end
|Date Componet       | Using this class to request data from the IPA and returned data for the Date components to the front-end
|Clock Component     | Using this class to request data from the IPA and returned data for the Clock components to the front-end
|Motivation Component| Using this class to request data from the IPA and returned data for the Motivation components to the front-end
|Flask               | Received HTTP request and called those methods for those instances.


### Table That relates each components from the class design to each user stories

|Components| User Story                                                                                                                                               
|----------|------------------------------------------------------------------------------------------------------------------------------------------------          
|Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur. 
|Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                          
|Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          
|Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. 
|Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 
|Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                
|Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   
|Travel    | As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             
|News      | As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.   


## Data Design
- For this project, we don't use a database. Instead, we made direct request to the APIs and return the results to the front-end to be displayed

## Business Rules
- Our application is based on an open-source platform, people will be have the capability to modify the codes.
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

|Components| User Story                                                                                                                                               
|----------|------------------------------------------------------------------------------------------------------------------------------------------------          
|Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur. 
|Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                          
|Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          
|Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. 
|Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 
|Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                
|Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   
|Travel    | As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             
|News      | As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.   

## Resource Management
- We use Python instead of Angular to request or pull down data from the APIs for each component (such as Clock, Date, Weather ect..) because it enables us to show only the necessary information we need to display to the front-end for each instances.
## Security
- As a security measure, We have all the API Keys stored locally instead of having them in github.
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
We used both Angular and Flask as a third party libraries in our system.
- Angular- It enable us to use package functionality to request data from the APIs.
- Flask- Received HTTP request and called those methods for those instances. 
## Reuse
## Change Strategy

