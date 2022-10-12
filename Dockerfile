FROM node:latest

RUN mkdir /home/app
WORKDIR /home/app

COPY . .


RUN npm i


EXPOSE 3000

CMD [ "npm" ,"start" ]