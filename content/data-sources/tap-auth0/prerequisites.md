---
layout: default
title: Prerequisites
permalink: /data-sources/tap-auth0/prerequisites
parent: Auth0
grand_parent: Data Sources
nav_order: 1

---

# Auth0 {{page.title}}

---

## Requirements

There are three settings that you are required to provide to use our Auth0 data source. These are your Client ID, Client Secret and Domain.

To start with you will need to follow the instructions in the [Auth0 API Docs](https://auth0.com/docs/get-started/auth0-overview/create-applications/machine-to-machine-apps). This will take you through registering a Machine-to-Machine application for our data source to use to get your information.

Please note the required permissions below.

### Permissions

When setting up your Machine-to-Machine application, currently the we require the following read permissions:
- Users
- Clients
- Logs

### Getting your credentials

 Once you have set up your Machine-to-Machine application, with the required permissions, when you look at your application there will be `Domain`, `Client ID` and `Client Secret` fields. These are the setting required by our Auth0 data source.
