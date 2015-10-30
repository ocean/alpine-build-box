FROM alpine:3.2
RUN apk add --update gcc g++ python nodejs && rm -rf /var/cache/apk/*
# VOLUME [ "/sys/fs/cgroup" ]
# COPY package.json /src/
WORKDIR /src
CMD [ "gcc", "--version" ]
