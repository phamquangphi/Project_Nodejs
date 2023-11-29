FROM node:16-alpine

EXPOSE 8085

WORKDIR /app


COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD npm run devStart