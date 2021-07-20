FROM node:16-alpine

LABEL xyz.Egghdz.images.author="Marty Zhang<marty8zhang@gmail.com>"

RUN npm install --global npm
RUN npm install --global pnpm

EXPOSE 3000/tcp

WORKDIR /app
ADD . .
#RUN node /app/src/chatroom/server.js
