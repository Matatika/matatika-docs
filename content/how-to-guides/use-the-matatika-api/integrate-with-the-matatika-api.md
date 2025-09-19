---
title: Integrate With The Matatika API
permalink: /how-to-guides/use-the-matatika-api/integrate-with-the-matatika-api
parent: Use the Matatika API
grand_parent: How-To Guides
nav_order: 4
---

# {{page.title}}

*Time required: **2 minutes***

---

## Prerequisites
You must have already:
- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.matatika.links.app}}) or API

---

## Introduction

To integrate with the Matatika API you will want to take advantage of our API clients. With an API client you will be able to refresh access tokens when you need them.

---

## Steps

1. Go to the Matatika app, and into a workspace.
1. Click you profile picture in the top right, and click `API Keys` in the drop down.

**On Matatika Cloud**
- Click `+ NEW TOKEN`, provide a name and click `CREATE`. Make note of the `Client ID` and `Client secret`.

Using these credentials you can now call our Auth0 IDP and get an access token when required.

Next you can follow this Auth0 guide - [Call Your API Using the Client Credentials Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-client-credentials-flow#request-tokens)

In the requests you will need to use our:
- URL : `https://{{site.matatika.links.auth0_domain}}/oauth/token`
- Audience : `{{site.matatika.links.catalog}}`

---

Now you have your developer token you can follow our next how-to guide:

[Make Your First API Call]({{site.baseurl}}/how-to-guides/use-the-matatika-api/making-your-first-api-call){: .btn}
{: .text-center}

---

## Further Reading

- [Matatika API Documentation]({{site.baseurl}}/api)
- [Using our Postman Collection]({{site.baseurl}}/api/postman-collection)
