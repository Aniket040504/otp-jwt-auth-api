# OTP + JWT Authentication API

A secure and scalable authentication API built with **TypeScript**, Node.js, Express, and MongoDB that supports JWT-based authentication along with OTP (One-Time Password) verification via Twilio SMS.

---

## Features

- User Signup & Login with JWT authentication  
- OTP generation and verification for phone number authentication  
- OTP stored securely in MongoDB with expiration  
- Twilio SMS integration for sending OTPs  
- Rate limiting for OTP requests to prevent abuse  
- Environment variable configuration for secrets and keys  
- Clean REST API endpoints  
- Fully typed with TypeScript for a better developer experience and reliability

---

## Technologies Used

- TypeScript  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT (jsonwebtoken)  
- Twilio SMS API  
- dotenv for environment configuration  

---

## Getting Started

### Prerequisites

- Node.js (v14 or later)  
- MongoDB (local or cloud like MongoDB Atlas)  
- Twilio Account with phone number  
- npm or yarn  
### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/otp-jwt-auth-api.git
cd otp-jwt-auth-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and add the following:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
  ```

4. Package.json scripts
   
```bash
 "scripts": {
    "build": "npm install && tsc",
    "start": "ts-node src/server.ts",
    "prod": "node dist/server.js",
    "dev": "nodemon src/server.ts",
}
```

6. Run the TypeScript compiler and start the server (using ts-node or your preferred method):
   
```bash
npm run dev
```

API Endpoints

```bash
Method	Endpoint	Description	Body Parameters
POST	/api/signup	Register a new user	{ username, email, password }
POST	/api/login	Login user	{ email, password }
POST	/api/sendotp	Send OTP to phone number	{ phone }
POST	/api/verifyotp	Verify OTP and authenticate	{ phone, otp }
```

Usage

Sign up and log in with email and password

Use /sendotp endpoint to send OTP to a phone number

Verify OTP using /verifyotp endpoint to complete authentication

## License

MIT License © [Berserk454]



