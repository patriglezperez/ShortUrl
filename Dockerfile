FROM node:17.8.0
#create app directory
RUN mkdir /src
WORKDIR /src

ADD . /src

RUN npm install

EXPOSE 3000
CMD node index.js

