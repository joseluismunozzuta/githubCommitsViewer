# Use the latest node image as a base
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the frontend and backend directories
COPY ./frontend ./frontend
COPY ./backend ./backend

#Install dependencies
RUN cd backend && npm install
RUN cd frontend && npm install

# Build the frontend
RUN cd frontend && npm run build

# Copy the package.json
COPY ./backend/package*.json ./

# Expose the port that the backend will run on
EXPOSE 3001

# Start the backend
CMD ["cd backend", "npm", "run", "start:prod"]