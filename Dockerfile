FROM node:10-alpine

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
