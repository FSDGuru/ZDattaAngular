FROM --platform=linux/amd64 nginx

WORKDIR /usr/share/nginx/html

COPY ./dist/flight /usr/share/nginx/html


