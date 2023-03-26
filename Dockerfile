FROM node:latest
WORKDIR /app
COPY . /app
RUN cd backend && npm install && cd ../frontend && npm install
RUN cd backend && npm run build && cd ../frontend && npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]

