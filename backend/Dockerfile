FROM node:lts-alpine AS back-build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY . ./

RUN npm i

CMD ["npm", "run", "start"]