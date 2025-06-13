# Next.js Authentication Application

A full-stack authentication system built with Next.js 13, featuring protected routes and JWT-based authentication.

## Features

### 1. User Authentication
- **Signup**
  - Frontend form validation
  - Password hashing with bcryptjs
  - MongoDB user storage
  - Email uniqueness check
  - Email verification system
  - Loading states during signup
  - Error handling and user feedback

- **Login**
  - JWT token generation
  - Secure HTTP-only cookies
  - Password verification
  - Error handling
  - Protected route redirection
  - Remember me functionality
  - Loading states during authentication

- **Logout**
  - Token removal
  - Session cleanup
  - Secure cookie removal
  - Redirect to login
  - Client-side state cleanup

### 2. Route Protection
- Middleware-based route protection
- Protected routes:
  - `/profile/*` - User profile pages
  - `/` - Home page
  - `/api/*` - API routes
- Public routes:
  - `/login` - Login page
  - `/signup` - Signup page
  - `/verifyemail` - Email verification
  - `/resetpassword` - Password reset

### 3. User Profile
- Protected user dashboard
- Display user details
- Dynamic profile routes
- Session management
- User data fetching
- Profile update functionality
- Email verification status

### 4. Email System
- Email verification
- Password reset emails
- Mailtrap integration
- HTML email templates
- Token-based verification
- Expiry system for tokens

## Technical Implementation

### Frontend
- React.js with Next.js 13
- Tailwind CSS for styling
- Axios for API requests
- Client-side form validation
- Loading states and error handling
- Toast notifications
- Dynamic routing
- Protected client components

### Backend
- Next.js API routes
- MongoDB with Mongoose
- JWT authentication
- Password hashing with bcrypt
- HTTP-only cookies
- Email service integration
- Token generation and validation

### Security Features
- Protected API routes
- Secure password storage
- JWT token validation
- HTTP-only cookies
- Route protection middleware
- CORS protection
- Rate limiting
- Input sanitization

## Project Structure
```
next-auth/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── users/
│   │   │       ├── login/
│   │   │       ├── signup/
│   │   │       ├── logout/
│   │   │       └── me/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── profile/
│   │   └── verifyemail/
│   ├── models/
│   │   └── userModel.ts
│   ├── helpers/
│   │   ├── mailer.ts
│   │   └── getDataFromToken.ts
│   ├── middleware.ts
│   └── dbConfig/
│       └── dbConfig.ts
├── .env
└── package.json
```

## Environment Variables
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
DOMAIN=your_domain
MAILTRAP_HOST=your_smtp_host
MAILTRAP_PORT=your_smtp_port
MAILTRAP_USERNAME=your_smtp_username
MAILTRAP_PASSWORD=your_smtp_password
MAILTRAP_SENDEREMAIL=your_sender_email
```

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
   - Create `.env` file in root directory
   - Add all required environment variables

4. Run the development server
```bash
npm run dev
```

## Future Improvements
- [ ] OAuth integration (Google, GitHub)
- [ ] Two-factor authentication
- [ ] Session management
- [ ] User roles and permissions
- [ ] Account deletion
- [ ] Enhanced security measures
- [ ] Social logins
- [ ] Profile image upload

## Learning Outcomes
1. Next.js 13 API routes implementation
2. JWT-based authentication flow
3. MongoDB integration with Next.js
4. Route protection using middleware
5. Client-side form handling
6. Security best practices
7. Cookie-based authentication
8. Error handling strategies
9. Email service integration
10. Token-based verification systems