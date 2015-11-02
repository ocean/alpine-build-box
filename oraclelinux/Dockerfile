FROM oraclelinux:6
RUN yum update -y && yum install -y gcc gcc-c++ git && rm -rf /var/cache/yum/*
# RUN curl https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm -o /root/epel-release-latest-6.noarch.rpm && yum install -y /root/epel-release-latest-6.noarch.rpm
# RUN yum update -y && yum install -y clang git && rm -rf /var/cache/yum/*
RUN curl https://rpm.nodesource.com/pub_0.12/el/6/x86_64/nodejs-0.12.7-1nodesource.el6.x86_64.rpm -o /root/nodejs-0.12.7-1nodesource.el6.x86_64.rpm && yum install -y /root/nodejs-0.12.7-1nodesource.el6.x86_64.rpm
# VOLUME [ "/sys/fs/cgroup" ]
# ENV CC=/usr/bin/clang CXX=/usr/bin/clang++
WORKDIR /src
CMD [ "node", "--version" ]
