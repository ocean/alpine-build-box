FROM alpine:3.2
RUN apk add --update gcc g++ nodejs && rm -rf /var/cache/apk/*
# VOLUME [ "/sys/fs/cgroup" ]
# COPY package.json /src/
CMD [ "gcc", "--version" ]
