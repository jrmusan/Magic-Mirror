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
![Latest](https://user-images.githubusercontent.com/47402226/55693149-75941800-597b-11e9-85f7-e7b0284a61da.PNG)

### Class Description
| Component Name     | Description                                                                                                                                             
|-----------------   |--------------------------------------------------------------------------------------------------
|App Root            | The main app component. Using Angular to the send data to the interface.
|Calendar Component  | Using this class to request data from the APIs and returned data for the calendar components to the front-end
|Reddit Component    | Using this class to request data from the APIs and returned data for the Reddit components to the front-end
|Weather Component   | Using this class to request data from the APIs and returned data for the Weather components to the front-end
|Travel Component    | Using this class to request data from the APIs and returned data for the Travel components to the front-end
|Date Componet       | Using this class to request data from the APIs and returned data for the Date components to the front-end
|Clock Component     | Using this class to request data from the APIs and returned data for the Clock components to the front-end
|Motivation Component| Using this class to request data from the APIs and returned data for the Motivation components to the front-end
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
- We use Python (Flask) instead of Angular to request and extract data from the APIs for each component (such as Clock, Date, Weather ect..) because it enables us to show only the necessary information we need to display to the front-end for each component instance. This keeps data parsing code out of our frontend rendering logic.
## Security
- As a security measure, We have all the API Keys stored locally instead of having them in github.
## Performance
| Raspberry Pi 3    | Specs Performance                                                                                                                                             
|----------------   |--------------------------------------------------------------------------------------------------
| SoC               | Broadcom BCM2837      
| CPU               | 4× ARM Cortex-A53, 1.2GHz                               
| GPU               | Broadcom VideoCore IV        
| RAM               | 1GB LPDDR2 (900 MHz)
| Networking        | 10/100 Ethernet, 2.4GHz 802.11n wireless
| Bluetooth         | Bluetooth 4.1 Classic, Bluetooth Low Energy
| Storage           | microSD
| GPIO              | 40-pin header, populated
| Ports             | HDMI, 3.5mm analogue audio-video jack, 4× USB 2.0, Ethernet, Camera Serial Interface (CSI)

Software:
- We use the Back-end to proccess data and the front-end to display neccessary data.

## Scalability
- As far as scalability, this project was created mainly for UCF. However, any other colleges that used Webcourses can use it and  implement it to a bigger scale or for a bigger project.
## Interoperability
- Our application is suitable to run or interoperability between devices made by different manufacturers. For instance, Raspberry Pi, Laptop, Desktop Computer, and TV.
## Internationalization/Localization
- Our APIs are pulling localization data or US data per say. For instance, for the Reddit we are pulling data from UCF and for News APIs we are getting top headlines news from CNN.
## Input/Output
- We get the Calendar, Clock, Weather, News/Reddit and Quotes inputs from their appropriate APIs and output their contents respectively on the monitor display.
## Error Processing
- All Errors caught are logged to the concole.
## Fault Tolerance
- Even if we dont get the requested data from the API upon request , it won't crash or take the application down. 
## Architectural Feasibility
Scope of the Architectural Feasiblity
 * Building the program: 
           We used Python, Javascript, HTML, and CSS
 * Accessing Sites: 
            With the APIs, we were able to access the UCF Webcourses Site for Reddit and CNN for news
 * Cost: 
            It costs us 100+ dollars to build this project
## Overengineering
- The use of Angular could be considered over-engineering, because it seem to us that it was too robust for the application at this current state.
## Build-vs-Buy Decisions
We used both Angular and Flask as a third party libraries in our system.
- Angular- Allows us to modularize frontend and request data from each respective frontend component separately.
- Flask- Received HTTP request and called those methods for those instances. 
## Reuse
- Basically, every API features (such as  Calendar, Clock, Weather, News/Reddit) of this app is reusable outside of this project.
## Change Strategy
- Our application is suitable to run on different devices ( For instance, desktop computer, laptop, TV), it doesnt have to run on a magic mirror ONLY.
