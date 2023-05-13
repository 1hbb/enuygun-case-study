# Use an official Node.js runtime as a parent image
FROM node:14.3.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app will listen on
EXPOSE 9002

# Start the app
CMD [ "npm", "start" ]