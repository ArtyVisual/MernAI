1. Clone the repository
git clone https://github.com/ArtyVisual/MernAI.git
cd Mern_Task

2. Install dependencies
cd frontend
npm install

3. Configure environment variables

Create a .env file inside the frontend folder:

OPENROUTER_API_KEY=your_openrouter_api_key
MONGO_URI=your_mongodb_connection_string

4. Run the Application
npm start

The application will be available at:
http://localhost:3000


Usage

-Enter a prompt in the input node
-Click Run Flow to generate an AI response
-Click Save to store the prompt and response in MongoDB