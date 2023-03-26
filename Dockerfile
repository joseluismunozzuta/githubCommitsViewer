FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install && cd frontend && npm install
RUN npm run build && cd frontend && npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]

