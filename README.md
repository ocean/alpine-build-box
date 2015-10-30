[![Build Status](https://travis-ci.org/ocean/alpine-build-box.svg)](https://travis-ci.org/ocean/alpine-build-box)
Alpine Linux CSS & JavaScript Build Box
========

A small, fast, light Docker container based on Alpine Linux for solving dependency problems by running gulp builds inside itself.

<!-- Requirements
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
 -->

License
-------

MIT

Author Information
------------------

Drew Robinson
