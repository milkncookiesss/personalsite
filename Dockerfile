FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

LABEL author="Peter Park"

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]