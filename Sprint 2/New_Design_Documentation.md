## Program Organization
![high_level_architecture](https://user-images.githubusercontent.com/47402226/54256413-5055ea80-4532-11e9-87cc-c2a304588f1e.png)
### Architectural description
- This project will have both Hardware and software interact with each other to create/build a magic mirror
- The API/Software will loaded into a Raspberry Pi 
  -  wired ethernet connection 
  -  power adapter to power the device
  -  Pi will output contains into the mirror monitor via HDMI/VGA
- Mirror Will Display the followings widget or applet
  -  Calendar
  -  Weather 
  -  Time/Date
  -  Motivational Quotes
  -  News/Reddit

### Table That relates each components from architecture design to each user story

| ID  |Components| User Story                                                                                                                                               | Effort | Priority | Validation | Status | Owner |
|-----|----------|------------------------------------------------------------------------------------------------------------------------------------------------          |--------|----------|------------|--------|-------|
| 000 |Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur.        |        |          |            |        |       |
| 001 |Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                                 |        |          |            |        |       |
| 002 |Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          |        |          |            |        |       |
| 003 |Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. |        |          |            |        |       |
| 004 |Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 |        |          |            |        |       |
| 005 |Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                 |        |          |            |        |       |
| 006 |Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   |        |          |            |        |       |
| 007 |Travel    |As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             |        |          |            |        |       |
| 008 |News      |As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.                  |        |          |            |        |       |
|     |                                                                                                                                                          |        |          |            |        |       |


## Major Classes
![Class Diagram](https://i.imgur.com/GCaxk1l.png)

### Class Description
- @ Joey, you might be able to add a better description for this class diagram
- Leave this as a TODO item

### Table That relates each components from the class design to each user stories

| ID  |Components| User Story                                                                                                                                               | Effort | Priority | Validation | Status | Owner |
|-----|----------|------------------------------------------------------------------------------------------------------------------------------------------------          |--------|----------|------------|--------|-------|
| 000 |Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur.        |        |          |            |        |       |
| 001 |Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                                 |        |          |            |        |       |
| 002 |Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          |        |          |            |        |       |
| 003 |Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. |        |          |            |        |       |
| 004 |Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 |        |          |            |        |       |
| 005 |Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                 |        |          |            |        |       |
| 006 |Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   |        |          |            |        |       |
| 007 |Travel    |As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             |        |          |            |        |       |
| 008 |News      |As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.                  |        |          |            |        |       |
|     |                                                                                                                                                          |        |          |            |        |       |


## Data Design
- Will need to ask Sid.

## Business Rules
- Our application is based on an open-source platform, people will be able to modify things.
## User Interface Design
![user interface](https://camo.githubusercontent.com/7579d31725c01c8f0affd517848d492b800c19e8/68747470733a2f2f692e696d6775722e636f6d2f526d7a435a4b362e6a7067)
### User Interface Description
-  User will be able to interact with our mirror when we hang it in the wall. 
-  They will be able to see events such as, calendar, weather, news, and quotes.

### Table That relates user interface to each user stories
| ID  |Components| User Story                                                                                                                                               | Effort | Priority | Validation | Status | Owner |
|-----|----------|------------------------------------------------------------------------------------------------------------------------------------------------          |--------|----------|------------|--------|-------|
| 000 |Calendar  | As a person with many commitments, I want to be able to view a calendar for the current month, so that I am made aware of when events will occur.        |        |          |            |        |       |
| 001 |Time/Date | As a person with many commitments, I want to be able to view the current time and date, so that I am always on schedule.                                 |        |          |            |        |       |
| 002 |Calendar  | As a student, I want to be able to view the due date of UCF assignments  easily on the calendar, so that I don't forget to hand in assignments.          |        |          |            |        |       |
| 003 |Reddit    | As a student, I want to be able to view the currently trending UCF subreddit posts, so that I can keep up to date with the concerns of the student body. |        |          |            |        |       |
| 004 |Weather   | As a planner, I want to view the current day’s weather, so that I can dress accordingly.                                                                 |        |          |            |        |       |
| 005 |Weather   | As a planner, I want to view the weather outlook for the week so I can plan accordingly.                                                                 |        |          |            |        |       |
| 006 |Quotes    | As an attitude-focused person, I want to be able to read multiple motivational quotes, so that I can feel encouraged to tackle my day.                   |        |          |            |        |       |
| 007 |Travel    |As a young professional, I want to have up to date travel times to work so I can know if there are any accidents on the way.                             |        |          |            |        |       |
| 008 |News      |As a person who likes to stay informed, I'd like an easy way to view the  top news headlines so I can always know of any breaking news.                  |        |          |            |        |       |
|     |                                                                                                                                                          |        |          |            |        |       |

## Resource Management
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

