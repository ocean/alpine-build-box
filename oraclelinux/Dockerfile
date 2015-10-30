FROM oraclelinux:6
RUN yum update && yum install gcc g++ make python nodejs && rm -rf /var/cache/yum/*
# VOLUME [ "/sys/fs/cgroup" ]
# COPY package.json /src/
WORKDIR /src
CMD [ "gcc", "--version" ]
