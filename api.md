# API

## Overview

**API** package is located in `/platform/packages`. It's using **Laravel Passport**. Learn more here: https://laravel.com/docs/9.x/passport.

## Install

Run following command to install passport:

```bash
php artisan passport:install
```

## Generate API document

We're using [Scribe](https://github.com/knuckleswtf/scribe) to made API documentation. Run below command to generate docs.

```bash
php artisan scribe:generate
```

Go to `http://your-domain/docs` to see API documentation.
