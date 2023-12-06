## Chat Web Application

By Tristan John P. Girao, utilizing the capability of Socket.io on persistent connecting of Server and Client.

### Created Using:

- T3 Stack by Theo
- Tailwind CSS
- MongoDB
- Express JS
- Node JS
- Socket.io

### Features:

- Multi-users and multi-rooms
- Sign up on Next Auth using Google Auth Provider
- Update user profile
- Add user as a friend to allow peer to peer message
- Email verification on GMail using NodeMailer
- Create Room
- Join Room
- Leave Room

### Guide

1. Clone the app

2. Open the project in your favorite text editor

3. Go to backend folder

4. Run `npm install` to install dependencies

5. Create `.env` in the backend root folder with the following environment variables.

### List of environment variables of Backend

> DATABASE_URL

### List of environment variables of T3 stack by Theo

> DATABASE_URL

> NEXTAUTH_SECRET

> NEXTAUTH_URL

> GOOGLE_CLIENT_ID

> GOOGLE_CLIENT_SECRET

> CRYPTO_SECRET

> GOOGLE_APP_EMAIL

> MONGODB_USERNAME

> MONGODB_PASSWORD

> GOOGLE_APP_PASSWORD

> JWT_SECRET

You can create your secrets by running `openssl rand -base64 32` in a terminal.

### Home Page Desktop

![alt text](./readme%20assets/chat-app-desktop.png)

### Home Page Desktop

![alt text](./readme%20assets/chat-app-mobile.png)
