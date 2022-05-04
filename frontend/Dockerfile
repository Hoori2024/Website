FROM node:lts-alpine AS front-build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY . ./

RUN npm i

CMD ["npm", "run", "start"]