FROM fedora:23
RUN curl --silent --location https://rpm.nodesource.com/setup | bash -
RUN yum update -y && yum install -y gcc gcc-g++ make python nodejs && rm -rf /var/cache/yum/*
# VOLUME [ "/sys/fs/cgroup" ]
# COPY package.json /src/
WORKDIR /src
CMD [ "gcc", "--version" ]
