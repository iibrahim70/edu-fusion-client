# Fashion Design School MERN Stack Website

Welcome to the Fashion Design School MERN Stack website README! This website is designed to provide a comprehensive platform for fashion design education. It includes separate dashboards for students, instructors, and the admin. 

You can access the live website [here](https://dressx-5c7eb.web.app/).

## Technologies Used

The website is built using the MERN (MongoDB, Express.js, React, Node.js) stack. The following technologies and packages were used in the development:

- MongoDB: NoSQL database for storing application data
- Express.js: Web application framework for Node.js
- React: JavaScript library for building user interfaces
- Node.js: JavaScript runtime environment for server-side development
- React Router: Declarative routing for React applications
- JSON Web Token (JWT): Securely transmit information between parties as a JSON object
- tanstack query, axios, clsx, framer motion, lottiefiles, react icons, sweetalert2, toastify js, swiper js

## Installation

To set up the Fashion Design School MERN Stack website locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the required dependencies: `npm install`
4. Configure the backend by providing the necessary environment variables (e.g., MongoDB connection string, JWT secret).
5. Start the development server: `npm start`

## Features

### Admin Dashboard

- Private route secured with JSON Web Token (JWT) authentication.
- Manage Classes: Admin can manage and approve classes posted by instructors.
- Manage Users: Admin can manage user roles and approve instructor requests.

### Instructor Dashboard

- Private route secured with JSON Web Token (JWT) authentication.
- Add Classes: Instructors can post their courses and update existing classes.
- My Classes: Instructors can view and manage the classes they have added.

### Student Dashboard

- JSON Web Token (JWT) used for authentication.
- Selected Classes: Displays the classes selected by students.
- Enroll Classes: Allows students to enroll in classes and make payments.
- Payment Route: Shows payment history and details.

## Usage

To use the Fashion Design School MERN Stack website, follow these steps:

1. Access the live website [here](https://dressx-5c7eb.web.app/).
2. Depending on your role, log in as an admin, instructor, or student.
3. Explore the respective dashboard functionalities and access the desired routes.
4. Perform actions such as managing classes, approving users, adding classes, enrolling in courses, and making payments.
5. Customize your profile and interact with the website's features based on your specific role and requirements.

## Contributing

Contributions to the Fashion Design School MERN Stack website are welcome. If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b <branch-name>`
3. Implement your changes.
4. Test thoroughly.
5. Commit your changes: `git commit -m '<commit-message>'`
6. Push to the branch: `git push origin <branch-name>`
7. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions regarding the Fashion Design School MERN Stack website, please contact:

- Maron Stake (Project Lead) - maron.stake@example.com
- Project Repository: [GitHub](https://github.com/your-username/your-repo)
