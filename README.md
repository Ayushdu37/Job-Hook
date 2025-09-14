# 🎯 JobHook - Full-Stack Job Portal Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-jobhook--frontend.onrender.com-blue)](https://jobhook-frontend.onrender.com)
[![Backend API](https://img.shields.io/badge/Backend%20API-jobhook--backend.onrender.com-green)](https://jobhook-backend.onrender.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**JobHook** is a modern, full-stack job portal platform that connects job seekers with employers. Built with cutting-edge technologies, it provides a seamless experience for both job seekers and recruiters to manage job applications, postings, and profiles.

## 🌟 Live Demo

- **Frontend**: [https://jobhook-frontend.onrender.com](https://jobhook-frontend.onrender.com)
- **Backend API**: [https://jobhook-backend.onrender.com](https://jobhook-backend.onrender.com)

## 🚀 Features

### 👤 For Job Seekers
- **User Registration & Authentication** - Secure JWT-based login system
- **Profile Management** - Create and manage detailed profiles with skills, experience, and certifications
- **Job Search & Filtering** - Advanced search with filters for location, salary, experience, and job type
- **Job Applications** - Easy one-click job application system
- **Application Tracking** - Track application status (Applied, Interviewing, Selected, Rejected)
- **Job History** - View all applied jobs and their current status
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices

### 🏢 For Employers/Recruiters
- **Job Posting** - Create and manage job listings with rich descriptions
- **Application Management** - Review and manage job applications
- **Candidate Profiles** - View detailed candidate profiles and resumes
- **Interview Scheduling** - Schedule interviews and update application status
- **Dashboard Analytics** - Track job posting performance and application metrics

### 🔧 Technical Features
- **Real-time Notifications** - Get notified about application updates and new opportunities
- **Secure Authentication** - JWT-based authentication with role-based access control
- **Email Integration** - OTP verification and password reset via email
- **Advanced Search** - Intelligent job search with multiple filters
- **Responsive UI** - Modern, intuitive interface built with Mantine UI
- **RESTful API** - Well-structured backend API with proper error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Mantine UI** - Beautiful and accessible UI components
- **Redux Toolkit** - State management
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Spring Boot 3.3.2** - Java-based backend framework
- **Spring Security** - Authentication and authorization
- **Spring Data MongoDB** - Database operations
- **JWT (JSON Web Tokens)** - Secure authentication
- **Maven** - Dependency management
- **Lombok** - Reduces boilerplate code

### Database & Services
- **MongoDB** - NoSQL database for flexible data storage
- **MongoDB Atlas** - Cloud database hosting
- **Gmail SMTP** - Email service for notifications and OTP

## 📁 Project Structure

```
JobHook/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── Components/       # Reusable UI components
│   │   ├── Pages/           # Application pages
│   │   ├── Services/        # API services and utilities
│   │   ├── Slices/          # Redux state management
│   │   └── Interceptor/     # Axios configuration
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
├── backend/                 # Spring Boot backend application
│   ├── src/main/java/com/jobportal/
│   │   ├── api/            # REST controllers
│   │   ├── service/        # Business logic
│   │   ├── repository/     # Data access layer
│   │   ├── entity/         # Database entities
│   │   ├── dto/            # Data transfer objects
│   │   └── jwt/            # JWT authentication
│   └── pom.xml             # Maven dependencies
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Java 17** or higher
- **Node.js 16** or higher
- **MongoDB** (local or MongoDB Atlas)
- **Maven 3.6+**

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Ayushdu37/Job-Hook.git
cd Job-Hook
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies and run
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The frontend will start on `http://localhost:3000`

### Environment Configuration

#### Backend Configuration
Update `backend/src/main/resources/application.properties`:

```properties
# MongoDB Configuration
spring.data.mongodb.uri=mongodb://localhost:27017/jobportal
# Or use MongoDB Atlas:
# spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/jobportal

# Email Configuration
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your-email@gmail.com
spring.mail.password=your-app-password
```

#### Frontend Configuration
Create `frontend/.env.local` for local development:

```env
REACT_APP_API_URL=http://localhost:8080
```

## 🎯 API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /users/register` - User registration
- `POST /users/sendOtp/{email}` - Send OTP for verification
- `GET /users/verifyOtp/{email}/{otp}` - Verify OTP

### Jobs
- `GET /jobs/getAll` - Get all jobs
- `GET /jobs/get/{id}` - Get job by ID
- `POST /jobs/post` - Post a new job
- `POST /jobs/apply/{id}` - Apply for a job
- `GET /jobs/postedBy/{id}` - Get jobs posted by user

### User Management
- `GET /users/profile/{id}` - Get user profile
- `PUT /users/profile` - Update user profile
- `GET /users/history/{id}` - Get user job history

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Encryption** - BCrypt password hashing
- **CORS Configuration** - Cross-origin resource sharing
- **Input Validation** - Server-side validation for all inputs
- **Role-based Access** - Different access levels for users and employers

## 🚀 Deployment

### Frontend Deployment (Render/Netlify/Vercel)
1. Connect your GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/build`
4. Add environment variable: `REACT_APP_API_URL=https://your-backend-url.com`

### Backend Deployment (Render/Heroku)
1. Connect your GitHub repository
2. Set build command: `cd backend && mvn clean package`
3. Set start command: `cd backend && java -jar target/JobPortal-0.0.1-SNAPSHOT.jar`
4. Add environment variables for database and email configuration

## 🧪 Testing

### Manual Testing
- User registration and login
- Job posting and application
- Profile management
- Search and filtering functionality

### API Testing
Use tools like Postman or curl to test API endpoints:

```bash
# Test job listing
curl -X GET https://jobhook-backend.onrender.com/jobs/getAll

# Test user registration
curl -X POST https://jobhook-backend.onrender.com/users/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123","accountType":"APPLICANT"}'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Future Enhancements

- [ ] Resume upload and parsing
- [ ] Advanced job recommendations using AI
- [ ] Video interview scheduling
- [ ] Company reviews and ratings
- [ ] Salary insights and analytics
- [ ] Mobile app development
- [ ] Real-time chat between employers and candidates
- [ ] Advanced analytics dashboard

## 🐛 Known Issues

- Some dependency vulnerabilities (can be fixed with `npm audit fix`)
- Email service requires Gmail app password setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayush Dubey**
- GitHub: [@Ayushdu37](https://github.com/Ayushdu37)
- LinkedIn: [Ayush Dubey](https://www.linkedin.com/in/ayush-dubey-655a13331/)
- Email: ayushdu21@gmail.com

## 🙏 Acknowledgments

- [Mantine UI](https://mantine.dev/) for the beautiful UI components
- [Spring Boot](https://spring.io/projects/spring-boot) for the robust backend framework
- [MongoDB](https://www.mongodb.com/) for the flexible database solution

## 📊 Project Statistics

- **Total Commits**: 37+
- **Languages**: TypeScript (76.6%), Java (21.7%), Other (1.7%)
- **Frontend**: React with TypeScript
- **Backend**: Spring Boot with Java
- **Database**: MongoDB
- **Deployment**: Render (Frontend & Backend)

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [https://jobhook-frontend.onrender.com](https://jobhook-frontend.onrender.com)
