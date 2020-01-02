FROM nginx:1.17.6-alpine

ENV NGINX_PORT 80
ENV HOSTNAME reverseproxy


# CMD apt update \
#     && apt full-upgrade

COPY docker/nginx/conf.d /etc/nginx/conf.d
