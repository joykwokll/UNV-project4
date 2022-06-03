# UNV AESTHETICS 

## Project Brief
### Technical Requirements

- Use MongoDB, Express, React and Node (MERN Stack)
- Have at least 2 related models (with references) and an additional user model with authentication. There should be at least 2 types of users.
- Include all major CRUD functions for at least one of the models
- Nicely styled front-end with clean & well-formatted CSS, with or without a framework.
- Deploy your application online, so that it is publically accessible
- User stories that apply to the functionality of your app, crafted as a team.

### Final Deliverables
- Deployed on Heroku: https://unv-project4.herokuapp.com/


##  Description

UNV Aesthetics Salon is a well established beauty and wellness brand that is in the market for almost 19 years. It provides first class treatments and have won numerous awards over the years. Their original website does not include an appointment feature and this is where my inspiration and idea came from. 

### Technologies Used
- React: CRA (Front-end)
- Express (Back-end)
- MongoDB (Database)
- Postman (Database)
- Figma (Fireframing)
- Github & Github Desktop
- Heroku (Deployment)
- Bootstrap (CSS)


### General Approach

I started off with wireframing and I have crafted a sheet of sample data to understand the features that are needed for a website like this. I have also plotted an User Story to understand the flow of how this website will behave. As well as picturing an experience of how the user will feel when using this improved website. 


### Installation Instructions
- Clone or download the repo
- `npm install`


###  User Stories

Who are your users? : Existing Customers as well as new potential customers who may have came across our website and are keen to learn more about our services. \
&nbsp;  
What do they want? : To be able to learn more about our services, gained beauty tips during their stay, make appointment conveniently with our website as well as have a record with us. \
&nbsp;  
Why? : Currently, UNV salon is still using manual methods to make facial appointments. They are writing down every appointments made on a book. A few days prioir to the appointment, staff will have to phone the customers to remind and confirm the appointment. As technology advances, I thought that it is time to bring this feature online as it is more convenient and time saving.  


### Wireframes/Sample Data

Sample Data: https://docs.google.com/spreadsheets/d/1yeQZ79UxBNOltaZIYBmq8SFcuM_xwtSKShV31Xbe4j4/edit?usp=sharing

---

## Planning and Development Process


**Week 1**

1. Create new Github Repository for both front end and back end. 

2. Create a wireframe using figma to draft out the visuals of the website. Wireframes bring clarity to your projects, allowing you to work through all the interactions and layout needs.

3. Set up the project files and installed the necessary dependencies\
  
   - Front-end: CRA - npx create-react-app
  
   - Back-end: Express - npm i express

4. Create sample data after brainstorming what is needed for the website. 

5. Front-end: Do up all the necessary routes and create needed components and link them up. Import font from google fonts. Create all the routes needed. Do up the Navigation Bar.

6. Test deploy to Heroku after linking. 

**Week 2**

1. Create a MongoDB database and link the database through both local and cloud. Link MongoDB to back-end.

3. Back-end: Create important models & schemas according to sample data did previously. Done up User and Appointment schemas.

4. Back-end: Create User and Appointment controllers and link it to the schemas.

5. Front-end: Get CSS from react bootstrap, apply it to all the routes. Adjust accordingly, the forms/buttons/row/card.

6. Input content accordingly to each route. Make sure that all the CSS are in place. 

7. Start building up user account and register/login using jwt. Get the jwt token stored and the sessions working. Create the register and login form and route in the front end. Link the data to MongoDB and get both front-end fetch and back-end post to work together. 

8. Set up log out and allow customers to log out successfully.

9. Create reset password route and button, do up the logic and link to gmail. Get it working together with the database. Reset password successfully.

10. Allow login with either Email, Contact or Username. 

**Week 3**

1. Create appointment form and CSS. Does both front-end fetch and back-end post for the appointment. Allow creation of appointments. 

2. Display their respective appointments accordingly through their username on the profile page.

3. Allow editing and deleting of appointments. Do up valid alerts if successful, and invalid alerts if there is an error.

4. Display profile details of each individual users on their profile page.

5. Create an admin route where only the admin will know this route and they will be able to see all the appointments made at one glance in a page.

6. Edit the icon's image and name on the tab to display as UNV brand logo and name.  

7. Add and commit throughout and deploy to heroku.

8. Clean up CSS and make sure everything are in position. Add in divider and footer bar. 

9. Complete this read-me page.


### Major Hurdles

One main hurdle is the reset password part. It is much more complicated than I expected. There are multiple unexpected errors and crashes along the way. 
Deployment to heroku wasn't as smooth sailing too. However, I googled the error and solved them one after another overtime.  
Another main hurdle will be the part where I allow login with either Username, Email or Contact number. I spent quite awhile trying to get the logic to work. 



### Unsolved Problems (Will be improving them too)

1a. Admin route to require login and only can be accessed by Admins.
1b. Admin to be able to edit or delete the appointments in the admin routes.
1c. Admin to be able to check off the appointments after treatment is completed. 
1d. In any case where customers did not turn up of the session, admin can add in a comment under the appointment in the admin route. 



### Possible Improvements

1. Add a "Contact me" button or a form for customers to fill up at the bottom of every service pages in any event they might be interested. This will either lead them to the appointment page, or directly request them to send us an email for a follow up.
2. To inform the customer if their requested appointment slot is unavailable. (Display all the appointment timings, and grey out any taken slots)
3. Sent an email to their respective email to confirm appointment made.
4. Email reminder to be sent to customers one day prior to their arranged appointment.
5. User's profile page to show the history of the previous appointments made.
6. Allow the booking of recurring appointments for example every 5th of the month.
7. Add a promotion page and a form to allow customers to sign up for discounted first trial.
8. Allow customers to create a personalised account. For example, in the register process, they will get to pick out their key concerns needs and main skin issues they would like to focus on. (eg, pigmentation, pimples, anti-aging, etc) 
9. Record the bill for each facial session in the profile page.
10. Services can be sold in package. Allow products to be purchased off this website too.
11. Customers to leave reviews in Google reviews and fetch google API to display it in the website.
12. Join us page to post job listings needed in the company. Allow public to apply for the job.
13. Beauty tips page to act like a forum/blog. Users will be able to post, like and comment. 


### Screenshots of WIP

\
&nbsp;  
<img width="1440" alt="Screenshot 2022-06-03 at 5 16 21 PM" src="https://user-images.githubusercontent.com/94371596/171872022-29d7abd8-fdba-430a-9c72-52cd747b10f5.png">\
&nbsp;   
<img width="1440" alt="Screenshot 2022-06-03 at 3 17 16 PM" src="https://user-images.githubusercontent.com/94371596/171872052-33360039-518a-4937-9fd8-27c192d79417.png">
&nbsp;   



