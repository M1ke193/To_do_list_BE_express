FROM node:18.17.1-alpine3.18
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "serve" ]