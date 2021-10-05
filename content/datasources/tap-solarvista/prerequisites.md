---
layout: default
title: Prerequisites
permalink: /datasources/tap-solarvista/prerequisites
parent: Solarvista
grand_parent: Datasources
nav_order: 1

---

# Solarvista {{page.title}}

---

## Requirements

To complete the following setup guide and obtain your required authentication details:
 - You will need access to a Solarvista account with access to your API.
 - You will need the `AccountId` from your Solarvista account.
 - You will need a `Client ID` to create your access token and then credentials. The administator for your API should be able to provide you with this.
 - You will need to have [Postman](https://www.postman.com/) installed.

If you do not have a Solarvista account with API access you will need to ask your administator to create one for you.

[Postman](https://www.postman.com/) is an application used API calling, testing and development. We use it in our set up guide to get the authentication details from your Solarvista API.

---

## Postman Setup

Once you have [Postman](https://www.postman.com/) downloaded and installed, you should download our Solarvista Postman Collection.

`{{site.www_url}}/docs/solarvista_postman_collection.json`{: #postman-collection-url .fs-5 }
{: .text-center }

Below are links to useful Postman Documentation that will help you with the Solarvista API Access Setup:
- [Installing Postman](https://learning.postman.com/docs/getting-started/installation-and-updates/)
- [Navigating Postman](https://learning.postman.com/docs/getting-started/navigating-postman/)
- [Importing Collections to Postman](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/)

---

## Importing the Solarvista Postman Collection

Once you have postman install and running:

1. Download our Solarvista Postman Collection.
2. Create or enter a Postman Workspace.
3. Click the Import button, found just left of the top of the main center screen.
4. Drag and drop, or browse to the solarvista_postman_collection.json you downloaded onto the window.
5. Now you should see Solarvista API in your list of collections.

---

## Solarvista API Access Setup

1. Download and Import our Solarvista Postman Collection
1. Click on the name of the collection in the list of collections on the left hand side of Postman.
2. Click on the three dots at the end of the name.
3. In center of your screen the Solarvista collection will have opened. Click on the `Variables` tab just below the name.
4. Set the `account` variable in Postman to your Solarvista `AccountId`.
5. Set the `setupClientId` variable in postman to the `Client ID` supplied to you by the administator of your Solarvista API.
6. In the tabs where you found `Variables`, click on `Authorization`.
7. Scroll to the bottom of the `Authorization` tab and click `Get New Access Token`.
8. A window will pop up, click through the options and select the account you with to generate this token for.
9. After choosing your account, the window will countdown from 5, and then display a `MANAGE ACCESS TOKENS` window. Click `Use Token` in the top right.
10. Expand the collection in the list of the left hand side of Postman, and click on `Setup Token` right at the bottom.
11. Click the `Send` button in the top right.
12. You will then get a response in the bottom center of Postman with your `clientId` and `code` which are required for a Solarvista Pipeline.
13. (Optional) In the collection list on the left hand side of postman, there is a POST request called Work-Items. Click this and click the Send button. If you get a list of Work Items as the response, you know you have API access on your user account.

If at any stage you get a message saying you do not have access to this API, you will need to get you admininstator to update your account's permissions.
