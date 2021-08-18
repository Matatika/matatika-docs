---
layout: default
title: Authentication
permalink: /datasources/tap-solarvista/authentication
parent: tap-solarvista
grand_parent: Datasources
nav_order: 2

---

# {{page.title}}

---

Solarvista Authentication Guide
{: .fs-5 }

---

## Requirements

To complete the following setup guide and obtain your required authentication details:
 - You will need access to a Solarvista account with access to your API.
 - You will need the `AccountId` from your Solarvista account.
 - You will need a `Client ID` to create your access token and then credentials. The administator for your API should be able to provide you with this.
 - You will need to have [Postman](https://www.postman.com/) installed.

If you do not have a Solarvista account with API access you will need to ask your administator to create one for you.

[Postman](https://www.postman.com/) is an application used API calling, testing and development. We use it in our set up guide to get the authentication details from your Solarvista API.

Once you have Postman installed, download our [Solarvista Postman Collection]() which has all the API requests you need to follow the below steps.

## Postman Setup



## Solarvista API Access Setup

1. Click on the name of the collection in the list of collections on the left hand side of Postman.
2. Click on the three dots at the end of the name.
3. In center of your screen the Solarvista collection will have opened. Click on the `Variables` tab just below the name.
4. Set the `account` varaible in Postman to your Solarvista `AccountId`.
5. Set the `setupClientId` variable in postman to the `Client ID` supplied to you by the administator of your Solarvista API.
6. In the tabs where you found `Variables`, click on `Authorization`.
7. Scroll to the bottom of the `Authorization` tab and click `Get New Access Token`.
8. A window will pop up, click through the options and select the account you with to generate this token for.
9. After choosing your account, the window will countdown from 5, and then display a `MANAGE ACCESS TOKENS` window. Click `Use Token` in the top right.
10. Expand the collection in the list of the left hand side of Postman, and click on `Setup Token` right at the bottom.
11. Click the `Send` button in the top right.
12. You will then get a reponse in the bottom center of Postman with your `clientId` and `code` which are required for a Solarvista Pipeline.