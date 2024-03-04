# Final Project for SW Engineering Class CSC 648-848 Fall 2023 [Team 5]

## Purpose of this project:

During the course, I had the opportunity to learn about practical aspects of software development in a team. 
The class simulated a small software company, where students were divided into teams and worked together to create a full-stack web platform for tutoring. 
The focus was on applying modern Agile software engineering processes, which included creating comprehensive project documentation (located in the "Milestones" folder) and implementing quality assurance to ensure successful final project delivery.

## Project management:

For effective project management, during our first project milestone (Milestone 0), we decided to use a Trello board as the foundation of our project management plan. It helped us to communicate effectively. 
We customized the board to suit our project requirements and created separate lists to represent various stages of the project, such as "ToDo," "Doing," and "Done." 
This method helped us track tasks with accuracy and precision. Each card on the board contained all the necessary information, such as project requirements, deadlines, and assigned team members. 
We could quickly move the cards across the lists as tasks progress, which provides us with a clear visual representation of the project's status and progress.

## Product Summary:

Name of the Product: Gators Tutor

Gators Tutor is a user-friendly online tutoring platform exclusively
designed for San Francisco State University (SFSU) students. The distinctive feature of Gators Tutor is SFSU-specific
search. For example, users searching for tutors on Gators Tutor can filter results
by SFSU-specific classes, ensuring that they receive personalized support that
aligns with their academic curriculum. We also empower SFSU students not only
to seek academic assistance but also to become tutors themselves. Gators Tutor
is the perfect place for any SFSU student seeking assistance in their classes or
wanting to help others and earn extra money. Our user-friendly interface makes
signing up as a tutor, searching for a tutor, or scheduling online tutoring sessions
effortless

## Features

    ● User authentication and authorization for students and tutors
    ● Profile creation and management for tutors
    ● Subject-based tutor search with filters
    ● Booking and scheduling system for tutoring sessions
    ● Responsive design for mobile and desktop devices

## Set up the development environment

2. Download and install [NodeJs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. Download and install [MySQL Server](https://dev.mysql.com/downloads/installer)

### Build and Run Instructions

1. Clone the repository

```
git clone https://github.com/spushkin/CSC648_SFSU_Tutor_Project.git
```

2. `cd ./CSC648_SFSU_Tutor_Project/application/Front-End`
   
3. `npm install`

4. `npm run start`

## Tech Stack

    ● Frontend: JavaScript, React, HTML, CSS
    ● Backend: Node.js (v18.17.1), Express
    ● Database: MySQL (v8.0.33)
    ● Data Format: JSON
    ● Deployment: AWS (Amazon Web Services)

## Database Organization

**I. DB organization:**

Table: **User**

<sup>

● Id 

● First Name

● Last Name

● Email

● Password

</sup>

Table: **Tutor**

<sup>

● Id

● Name

● Email

● SubjectID

● CV

● Description

● Photo

● Video (optional)

● Availability Schedule (optional)

</sup>

Table: **Message**

<sup>

● Id

● SenderID 

● RecevierID 

● Text

</sup>

Table: **Topic**

<sup>

● Id 

● Name 

● Description

</sup>

Table: **Category**

<sup>

● Id 

● Name 

● Description

</sup>

Screenshot:

![5_SFSU_tutor](https://github.com/spushkin/CSC648_SFSU_Tutor_Project/assets/42389366/b7f04708-2124-445e-90c2-537a472935a1)

## Product Screenshots:
![1_SFSU_tutor](https://github.com/spushkin/CSC648_SFSU_Tutor_Project/assets/42389366/24faa2f5-404d-4225-a782-85d64597a02e)
![2_SFSU_tutor](https://github.com/spushkin/CSC648_SFSU_Tutor_Project/assets/42389366/86907f19-cc16-4b18-a22f-1a583c01d4c9)
![3_SFSU_tutor](https://github.com/spushkin/CSC648_SFSU_Tutor_Project/assets/42389366/458b1383-abcc-4a0e-93f9-cafe03a3b4cd)
