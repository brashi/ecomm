FROM node:18

ARG PORT=3000
EXPOSE $PORT
WORKDIR /app-ecomm
COPY . .

RUN npm install
ENTRYPOINT npm start