# BkC Default

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/block-cat/default.svg)](https://packagist.org/packages/block-cat/default)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**

Aceasta este o extensie [Flarum](https://flarum.org/) care oferă niște posibilități de configurare rapide a portletelor după câteva opțiuni generale.

![](https://i.imgur.com/1Rcls8h.png)

Majoritatea setărilor sunt prezentate în panoul de administrare ca pe niște elemente `ON/OFF`, atât cu descriere textuală, cât și vizuală.

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.0.0` de [Flarum](https://flarum.org/).

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require block-cat/default *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update block-cat/default
php flarum migrate
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove block-cat/default
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/block-cat/default)
- [Changelog](CHANGELOG.md)
