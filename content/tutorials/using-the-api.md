---
title: Using the API
permalink: /tutorials/using-the-api
parent: Tutorials
nav_order: 3

---

# The Matatika API

Matatika workspaces are built on top of our API. Through the API you can do anything and more than what you can do through your workspace lab.

---

## Requirements

You will need to be an admin of the [workspace]({{site.baseurl}}/glossary#workspace) to get an access token to allow you to use your workspace's API.

### Using the API with Postman

The Postman app is available for download [here](https://www.postman.com/downloads/){:target="_blank"}. Once installed, follow these steps to import and set up authorisation for our maintained Postman collection.

1. Sign into postman, create a workspace then click `Collections` in the top right under your workspace name.
2. Click `Import`, go the the `Link` tab and paste the link found in our [Postman Collection page]({{site.baseurl}}/api/postman-collection)
3. In your Matatika workspace, click your Profile Picture in the top right, and go to `API Keys`

**If you are using Matatika in the Cloud**
- Copy your `Developer Token` and in Postman, on the `Matatika API` collection, click the three dots and `Edit`.

**If you are using Matatika with your Meltano project locally**
- Go to the `Variables` tab, and paste the `Access Token` found under `Personal Access Tokens` into the `BEARER_TOKEN` variable's `CURRENT_VALUE`


Now you are all set up to use our API through postman. Note that your `Developer Token` / `BEARER_TOKEN` is relatively short lived so you many need to refresh it from time to time.

Also in the `Variables` tab that you put your `BEARER_TOKEN` you can set other variables that we use by default through other requests in our Postman collection. Feel free to fill in any you want to use.

You can now make requests through our API to configure and update your workspace.

---

## Further Reading

- [Matatika API Docs]({{site.baseurl}}/api)

