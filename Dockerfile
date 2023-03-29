# Use the latest node image as a base
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json files and install the dependencies
COPY package*.json ./
RUN npm install

# Copy the frontend and backend directories
COPY ./frontend ./frontend
COPY ./backend ./backend

# Build the frontend
RUN cd frontend && npm run build

# Expose the port that the backend will run on
EXPOSE 3000

# Start the backend
CMD ["npm", "run", "start:prod"]