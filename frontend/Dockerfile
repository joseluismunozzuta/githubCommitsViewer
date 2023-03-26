# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code to the container
COPY . .

# Build the app for production
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
