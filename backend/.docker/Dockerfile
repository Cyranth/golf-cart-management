ARG BASE_IMAGE_TAG
FROM node:${BASE_IMAGE_TAG}

WORKDIR /app

ENV NODE_ENV=development

EXPOSE ${API_PORT}

CMD ["npm", "run", "dev"]
