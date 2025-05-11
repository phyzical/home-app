FROM node:16-alpine AS build

COPY package.json yarn.lock ./

RUN yarn install

COPY src ./src
COPY scripts ./scripts
COPY public ./public
COPY vue.config.js babel.config.js .eslintrc.js .eslintignore .sass-lint.yml .stylelintrc ./

RUN yarn build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]