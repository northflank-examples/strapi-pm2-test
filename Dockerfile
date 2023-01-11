FROM node:16
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn global add pm2
EXPOSE 1337
CMD ["pm2-runtime", "server.js"]
