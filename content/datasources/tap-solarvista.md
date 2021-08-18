---
layout: default
title: tap-solarvista
permalink: /datasources/tap-solarvista
parent: Datasources
has_children: true
nav_order: 1
---

# {{page.title}}

---

We make use of our own Meltano extractor [`tap-solarvista`](https://github.com/Matatika/tap-solarvista). All the documentation for `tap-solarvista` is in the README in the github repository linked above.
{: .fs-5 }

---

## Authentication

To get the properties required to extract data from your Solarvista API, you can follow the steps laid out in our [Authenticaion Guide]().

---

## Properties

## Account

Solarvista API `account`

To get your `account` id you will need to follow the steps that are linked in our [Authentication](#authenticaion) section.

## ClientId

Solarvista API `clientId`

To get your `clientId` you will need to follow the steps that are linked in our [Authentication](#authenticaion) section.

## Code

Solarvista API `code`

To get your `code` you will need to follow the steps that are linked in our [Authentication](#authenticaion) section.

## Datasources

You can provide a list of datasouces from the Solarvista API that you want to sync data from, we support:
- `customer`
- `site`
- `equipment`
- `work-item`
- `work-item-history`
- `activity`
- `users`
- `territory`
- `project`
- `appointment`
- `skill`

## Start Date

Providing a start date allows you to set how much historical data you wish to import into you workspace. 

This date has to be in the ISO-8601 date format, see the example below.

Format: `YYYY-MM-DDTHH:MM:SSZ`
Example: `2020-10-01T13:12:11Z`

