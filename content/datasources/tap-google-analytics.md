---
layout: default
title: tap-google-analytics
permalink: /datasources/tap-google-analytics
parent: Datasources
has_children: true
nav_order: 1
---

# {{page.title}}

---

We make use of the Meltano [`tap-google-analytics`](https://gitlab.com/meltano/tap-google-analytics) for which documentation can be found here on the [Meltano Hub - Google Analytics](https://hub.meltano.com/extractors/google-analytics)
{: .fs-5 }

---

## Authentication

For setting up your oauth authentication for Google Analytics, we recommend using the basic steps laid out in [Google Analytics API](https://developers.google.com/identity/protocols/oauth2).

---

## Properties

## Access Token

Google Analytics API `oauth_credentials.access_token`

To get your Access Token you will need to follow the steps that are linked in out [Authentication](#authenticaion) section.

More Info: [https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#OAuth2Authorizing](https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#OAuth2Authorizing)

## Client ID

Google Analytics API `oauth_credentials.client_id`

To get your Access Token you will need to follow the steps that are linked in out [Authentication](#authenticaion) section.

More Info: [https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#OAuth2Authorizing](https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#OAuth2Authorizing)

## Client Secret

Google Analytics API `oauth_credentials.client_secret`

To get your Access Token you will need to follow the steps that are linked in out [Authentication](#authenticaion) section.

More Info: [https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#OAuth2Authorizing](https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#OAuth2Authorizing)

## Refresh Token

Google Analytics API `oauth_credentials.refresh_token`

To get your Access Token you will need to follow the steps that are linked in out [Authentication](#authenticaion) section.

More Info: [https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#OAuth2Authorizing](https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#OAuth2Authorizing)

## View ID

To find your View ID, go to your Google Analytics page and next to the logo at the top left, click on the section that says "All account > property". 

This will open a small window where you can find the views, and their IDs, related to your properties and apps.

## Start Date

Providing a start date allows you to set how much historical data you wish to import into you workspace. 

This date has to be in the ISO-8601 date format, see the example below.

Example: 2020-10-01T13:12:11Z


## End Date

Providing an end date allows you to limit how much data you wish to import into you workspace. 

This date has to be in the ISO-8601 date format, see the example below.

Example: 2020-10-01T13:12:11Z

## Reports

The name of any reports you wish to include from the Google Analytics API. 

Leaving this field blank is a valid configuration.