# FROM mhart/alpine-node:12.13
FROM buildkite/puppeteer:v1.15.0

ARG NODE_ENV=prod
ARG GITHUB_TOKEN
ARG NPM_TOKEN
ARG RELEASE=false
ARG PROXY=http://165.225.38.37:80

ENV NODE_ENV=$NODE_ENV
ENV GITHUB_TOKEN=$GITHUB_TOKEN
ENV GITHUB_REPO=$GITHUB_REPO
ENV HTTP_PROXY=$PROXY
ENV HTTPS_PROXY=$PROXY

RUN npm config set "@se:registry" "https://nexus.tools.struxurewarecloud.com/repository/app-services-npm/" \
  && npm config set "//nexus.tools.struxurewarecloud.com/repository/app-services-npm/:_authToken" $NPM_TOKEN \
  && yarn config set strict-ssl false

# if inside SE VPN, define https-proxy and proxy else, leave remove the variables
# ex:
RUN npm config set "proxy" $PROXY \
  && npm config set "https-proxy" $PROXY

WORKDIR /app/
RUN npm -v
RUN node -v

COPY ./ .
# RUN yarn install
# RUN yarn build

# RUN yarn test

RUN if [ "$RELEASE" = "false" ] ; then echo 'Test mode only'; else \
  npm config set "@se:registry" "https://nexus.tools.struxurewarecloud.com/repository/npm-internal/" \
  && npm config set "//nexus.tools.struxurewarecloud.com/repository/npm-internal/:_authToken" $NPM_TOKEN \
  && echo "Releasing the app..." \
  # && yarn release \
  ; fi
