FROM oraclelinux:6
RUN curl --silent --location https://rpm.nodesource.com/setup | bash -
RUN yum update -y && yum install -y gcc gcc-c++ nodejs && rm -rf /var/cache/yum/*
# VOLUME [ "/sys/fs/cgroup" ]
# COPY package.json /src/
WORKDIR /src
CMD [ "gcc", "--version" ]
