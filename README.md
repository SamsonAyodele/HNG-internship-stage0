# HNG-internship-stage0

HNG Internship Public API
📌 Description
This is a simple public API built for the HNG Internship, providing registered email, current datetime, and GitHub repository URL. The API is developed using Node.js, Express, and TypeScript and is deployed on Vercel.

SetUp instructions
clone the repository
git clone https://github.com/your-username/hng-intership-api-stage0.git
cd hng-intership-api-stage0

Install dependencies
👉 npm install

Set Up Environment Variables
Create a .env file in the root directory and add:
👉 port: 4000

Run the server Locally
npm run dev
The server should now be running at:
👉 http://localhost:4000

Build for production
👉 npm run build

Start the compiler
👉 npm start

📖 API Documentation
🌐 Base URL (Production)
👉 https://hng-intership-api-stage0.vercel.app

📌 Endpoints
1️⃣ Get API Details
URL: /api
Method: GET
Response:
{
"slackUsername": "SamsonAyodele",
"currentDateTime": "2025-02-02T12:00:00Z",
"githubRepo": "https://github.com/your-username/hng-intership-api-stage0"
}

Deployment
This API is deployed on Vercel.

Preview URL: https://hng-intership-api-stage0.vercel.app
