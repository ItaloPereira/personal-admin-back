FROM node:10.4.0

WORKDIR /app

EXPOSE 3000

ENTRYPOINT /app/entrypoint.sh


