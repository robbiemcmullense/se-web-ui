FROM mhart/alpine-node:12.13

ARG NODE_ENV=prod
ARG GITHUB_TOKEN
ARG NPM_TOKEN
ARG PROXY=http://165.225.38.37:80

ENV NODE_ENV=$NODE_ENV
ENV GITHUB_TOKEN=$GITHUB_TOKEN
ENV GITHUB_REPO=$GITHUB_REPO
ENV HTTP_PROXY=$PROXY
ENV HTTPS_PROXY=$PROXY

# Install Chome headless
ENV CHROME_BIN="/usr/bin/chromium-browser"\
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"

RUN set -x \
  && apk update \
  && apk upgrade \
  # replacing default repositories with edge ones
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" > /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
  \
  # Add the packages
  && apk add --no-cache dumb-init curl make gcc g++ python linux-headers binutils-gold gnupg libstdc++ nss chromium \
  \
  && npm install puppeteer@0.13.0 \
  \
  # Do some cleanup
  && apk del --no-cache make gcc g++ python binutils-gold gnupg libstdc++ \
  && rm -rf /usr/include \
  && rm -rf /var/cache/apk/*
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
RUN yarn install
RUN yarn build

RUN yarn test


# Release the library to nexus (npm-internal)
RUN npm config set "@se:registry" "https://nexus.tools.struxurewarecloud.com/repository/npm-internal/" \
  && npm config set "//nexus.tools.struxurewarecloud.com/repository/npm-internal/:_authToken" $NPM_TOKEN
# RUN yarn release
