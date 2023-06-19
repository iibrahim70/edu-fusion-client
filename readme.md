# Fashion Design School MERN Stack Website [DressX](https://dressx-5c7eb.web.app/)

![Greetings](https://img.shields.io/badge/Hello-Welcome%20to%20Fashion%20Design%20School%20MERN%20Stack%20Website-brightgreen)

Welcome to the Fashion Design School MERN Stack Website README file! This project is a comprehensive website built for a fashion design school, utilizing the MERN (MongoDB, Express.js, React, Node.js) stack. The website incorporates various technologies such as React, Tailwind CSS, and Daisy UI for the frontend, and Firebase for authentication. The backend is built using Node.js, MongoDB, and Express.js. Several packages are used, including Tanstack Query, Axios, clsx, Framer Motion, Lottiefiles, React Icons, React Router DOM, SweetAlert2, Toastify JS, and Swiper JS.

The website consists of three dashboards: one for students, one for instructors, and one for the admin. Each dashboard has specific functionalities and access restrictions. Let's explore each of them:

## Admin Dashboard

The admin dashboard is a private route accessible only to administrators and secured with a JSON Web Token (JWT). It includes two main routes:

1. **Manage Classes**: In this route, admins can handle the classes posted by instructors. They can approve or reject the classes, making them visible to users.
2. **Manage Users**: This route enables admins to manage users' roles. Users can change their roles between admin, instructor, and student. When a user logs in, their default role is set as a student.

## Instructor Dashboard

The instructor dashboard is another private route secured with a JSON Web Token (JWT), exclusive to instructors. It offers two routes:

1. **Add Classes**: Instructors can post their courses in this route. They can provide detailed information about the classes they offer.
2. **My Classes**: Instructors can view the classes they have added in this route and perform updates if necessary.

## Student Dashboard

The student dashboard uses JSON Web Token (JWT) for authentication. It provides three routes for students:

1. **Selected Classes**: This route displays the classes selected by students. Students can choose classes they are interested in attending.
2. **Enroll Classes**: Students can pay and enroll in the classes they have selected through this route.
3. **Payment Route**: This route shows the payment history and details of the classes the student has enrolled in.

## Home Page

The home page contains five routes to navigate through different sections of the website:

1. **Home**: This is the landing page of the website.
2. **Classes**: This route displays the classes posted by approved instructors. Users can select a class and proceed to payment. If a user is not logged in, they will be redirected to the login page.
3. **Instructor**: In this route, the admin showcases the instructors who have been granted the instructor role.
4. **Dashboard**: The dashboard route is a private route accessible only to logged-in users. It provides access to user-specific functionalities.
5. **Login/Signup**: This route handles user authentication. Users can log in or sign up to access the website's features.

## Technologies Used

- Frontend:
  - React
  - Tailwind CSS
  - Daisy UI

- Backend:
  - Node.js
  - MongoDB
  - Express.js

- Authentication:
  - Firebase

- Packages:
  - Tanstack Query
  - Axios
  - clsx
  - Framer Motion
  - Lottiefiles
  - React Icons
  - React Router DOM
  - SweetAlert2
  - Toastify JS
  - Swiper JS

## Payment
For Payment, Stripe Integration is used. Please refer to the Stripe documentation for implementation details.

## Contributions

Contributions to the Fashion Design School MERN stack website are welcome. If you find any issues or have any suggestions, please open an issue or submit a pull request on GitHub.

## Contact

For any further information or inquiries, please contact us at [Email](aviknuhash70@gmail.com).
