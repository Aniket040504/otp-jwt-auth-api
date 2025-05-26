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
cd otp-jwt-auth-api ```

2. Install dependencies:

```bash
npm install
