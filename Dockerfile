# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY ./frontend/package*.json ./frontend 
COPY ./backend/package*.json ./backend

RUN ls

# Install the dependencies for both the frontend and backend
RUN cd backend && npm install && cd ../frontend && npm install

# Copy the rest of the application code to the container
COPY . .

# Build the frontend application
RUN cd frontend && npm run build

# Expose port 3000 for the frontend and port 8080 for the backend
EXPOSE 3000 3001

# Start the backend and frontend
CMD npm run start:prod
