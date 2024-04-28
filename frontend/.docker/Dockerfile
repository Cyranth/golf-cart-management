ARG BASE_IMAGE_TAG
FROM node:${BASE_IMAGE_TAG}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${FRONTEND_PORT}

CMD [ "npm", "run", "dev" ]
