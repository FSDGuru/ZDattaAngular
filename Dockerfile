FROM --platform=linux/amd64 nginx:latest

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./dist/flight /usr/share/nginx/html



