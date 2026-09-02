FROM node:20-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 9000

CMD ["npm", "run", "dev"]