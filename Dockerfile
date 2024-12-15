FROM node:18-slim as builder
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start" ]
