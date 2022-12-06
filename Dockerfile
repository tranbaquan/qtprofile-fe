FROM nginx
COPY ./dist/qtprofile-fe /usr/share/nginx/html
EXPOSE 80
