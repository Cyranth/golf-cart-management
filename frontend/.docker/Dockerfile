ARG BASE_IMAGE_TAG
FROM node:${BASE_IMAGE_TAG}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
