FROM node:lts-alpine

RUN  apk add --update git

RUN npm install -g @angular/cli


WORKDIR /storeHQ

COPY . .

EXPOSE 4200

CMD [ "ng", "serve", "--port", "4200", "--host", "0.0.0.0"], 

