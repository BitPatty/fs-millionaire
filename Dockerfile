FROM node:14.15.1-alpine3.12 AS build

# Set max memory limit for node processes
ENV NODE_OPTIONS=--max_old_space_size=4096
ENV REACT_APP_BACKEND_URL='https://fs-mil-api-dev.zint.ch/'

# Install build dependencies
RUN apk --no-cache add shadow \
  gcc \
  musl-dev \
  autoconf \
  automake \
  make \
  libtool \
  nasm \
  tiff \
  jpeg \
  zlib \
  zlib-dev \
  file \
  pkgconf 

# Install dependencies
WORKDIR /src
COPY . .
RUN yarn
RUN yarn build


FROM socialengine/nginx-spa:latest AS final
COPY --from=build /src/build /app
WORKDIR /app

# Unset node options
ENV NODE_OPTIONS=
RUN chmod -R 777 /app
