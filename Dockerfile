FROM node:10-alpine
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    # yarn run build && \
    # yarn run prune && \
    yarn cache clean
EXPOSE 3003
CMD [ "yarn", "start:dev" ]