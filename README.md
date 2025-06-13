# Next.js Authentication Application

A full-stack authentication system built with Next.js 13, featuring protected routes and JWT-based authentication.

## Features

### 1. User Authentication
- **Signup**
  - Frontend form validation
  - Password hashing with bcryptjs
  - MongoDB user storage
  - Email uniqueness check

- **Login**
  - JWT token generation
  - Secure HTTP-only cookies
  - Password verification
  - Error handling

- **Logout**
  - Token removal
  - Session cleanup
  - Redirect to login

### 2. Route Protection
- Middleware-based route protection
- Protected routes:
  - `/profile/*` - User profile pages
  - `/` - Home page
- Public routes:
  - `/login` - Login page
  - `/signup` - Signup page

### 3. User Profile
- Protected user dashboard
- Display user details
- Dynamic profile routes
- Session management

## Technical Implementation

### Frontend
- React.js with Next.js 13
- Tailwind CSS for styling
- Axios for API requests
- Client-side form validation
- Loading states and error handling

### Backend
- Next.js API routes
- MongoDB with Mongoose
- JWT authentication
- Password hashing
- HTTP-only cookies

### Security Features
- Protected API routes
- Secure password storage
- JWT token validation
- HTTP-only cookies
- Route protection middleware

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
│   │   └── profile/
│   ├── models/
│   ├── helpers/
│   └── middleware.ts
├── .env
└── package.json
```

## Environment Setup
Required environment variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
DOMAIN=your_domain
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

3. Create `.env` file with required variables

4. Run the development server
```bash
npm run dev
```

## Future Improvements
- [ ] Email verification
- [ ] Password reset functionality
- [ ] OAuth integration
- [ ] Remember me functionality
- [ ] User profile updates
- [ ] Enhanced security measures

## Learning Outcomes
1. Next.js 13 API routes implementation
2. JWT-based authentication flow
3. MongoDB integration with Next.js
4. Route protection using middleware
5. Client-side form handling
6. Security best practices
7. Cookie-based authentication
8. Error handling strategies