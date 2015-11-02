FROM oraclelinux:6
# RUN curl --silent --location https://rpm.nodesource.com/setup_0.12 | bash -
# RUN yum update -y && yum install -y gcc gcc-c++ nodejs && rm -rf /var/cache/yum/*
RUN yum update -y && yum install -y gcc gcc-c++ && rm -rf /var/cache/yum/*
RUN curl https://rpm.nodesource.com/pub_0.12/el/6/x86_64/nodejs-0.12.7-1nodesource.el6.x86_64.rpm -o /root/nodejs-0.12.7-1nodesource.el6.x86_64.rpm && rpm -ivh /root/nodejs-0.12.7-1nodesource.el6.x86_64.rpm
# VOLUME [ "/sys/fs/cgroup" ]
# COPY package.json /src/
WORKDIR /src
CMD [ "gcc", "--version" ]
