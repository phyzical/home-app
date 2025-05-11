FROM node:16-alpine AS build

COPY package.json yarn.lock ./

RUN yarn install

COPY src ./src
COPY public ./public
COPY vue.config.js babel.config.js .eslintrc.js .eslintignore .sass-lint.yml .stylelintrc ./

ARG VUE_APP_RELEASE_VERSION="VERSION_PROVIDED_ON_BUILD"
ENV VUE_APP_RELEASE_VERSION=$VUE_APP_RELEASE_VERSION

RUN yarn build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build dist /usr/share/nginx/html

ARG VUE_APP_RELEASE_VERSION="VERSION_PROVIDED_ON_BUILD"
ENV VUE_APP_RELEASE_VERSION=$VUE_APP_RELEASE_VERSION

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]