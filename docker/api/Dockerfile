FROM node:16.13.1-bullseye

ARG UID
ARG GID

RUN apt update

RUN groupmod -g ${GID:-1000} node \
    && usermod -u ${UID:-1000} node \
    && apt install -y sudo vim\
    && echo "node ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/node\
    && chmod 0440 /etc/sudoers.d/node