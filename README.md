[![Build Status](https://travis-ci.org/ocean/ansible-nginx.svg)](https://travis-ci.org/ocean/ansible-nginx)
Role Name
========

Ansible role to install free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server

Requirements
------------

This role requires Debian/CentOs system

Role Variables
--------------

- nginx:
  -  document_root: /usr/share/nginx/html/
  -  php_engine: fpm
  -  port: 80
  -  workers: 4
  

Dependencies
------------

None

Example Playbook
-------------------------

    - hosts: web-servers
      roles:
         - { role: weldpua2008.ansible-nginx, nginx.document_root: /var/www/html/, nginx.php_engine: fpm, nginx.port: 80, nginx.workers: 4 }

Tasks
-----

  - Install [nginx](http://nginx.org/)
  - Setup minimal settings using nginx.conf and defaut enabled website
  - Enable PHP-FPM


License
-------

MIT

Author Information
------------------

Valeriy Solovyov
