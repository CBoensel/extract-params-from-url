import dotenv from 'dotenv';

// config() will read your .env file, parse the contents, assign it to the process.env scope
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// wrap env in obj for easier access and code completion
export default {
  nodeEnv: process.env.NODE_ENV
};
