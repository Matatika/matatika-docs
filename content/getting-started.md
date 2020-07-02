---
layout: default
title: Getting Started
permalink: /getting-started
nav_order: 2
---

# {{page.title}}


## Sign Up
Head to the [Matatika website](https://matatika.com) and sign up for an account. You will need to verify your account through the email you signed up with - be sure to check your spam folder if you don't see the email!

## Create a Workspace
Access the Matatika app [here](https://app.matatika.com) or through the website links. The first time you access this service, you will be prompted to create a new workspace: fill out the 'Name' field (and optionally 'Approved Domains') and click 'Continue'.

![new workspace in the matatika app](assets/img/app-new-workspace.png)

Once completed, you will have full access to the app. Keep the name you gave your workspace in mind for the [Making Your First API Call](getting-started#making-your-first-api-call) step.

## Getting a Token
A Bearer token is needed to authorise any requests sent to the Matatika API. After creating an account, logging into the app and creating a workspace, a token will be available [here]().
- This token will be vaild for **___ seconds** under the condition that the user remains logged into the app
- If the user logs out of the app during the token's active period or the token expires, the token is revoked and a new one will be issued on a subsequent sign-in

### Permanent Access
If continuous access to the Matatika API is required for development purposes, you can register for a unique client ID and secret [here]().

## Making Your First API Call
You are now ready to make your first call the Matatika API! The tool you use to accomplish this is up to you, but we recommend [cURL](https://curl.haxx.se/docs/manual.html) or [Postman](https://learning.postman.com/docs/postman/launching-postman/introduction/).

In this example, we will be querying the Matatika API's `workspaces` endpoint to list the workspaces our profile is a member of.

### cURL
cURL is installed by default on Windows 10, macOS and some Linux distributions (your milage may vary). Open command-prompt or terminal and run the following command, making sure to substitute `<ACCESS_TOKEN>` with the Bearer token obtained earlier:

```
curl -H "Authorization: Bearer <ACCESS_TOKEN>" https://catalog-staging.matatika.com:443/api/workspaces
```

The response received should be similar to that in the [view workspaces response](workspaces#response) section of the workspaces endpoint documentation:

```json
{
    "_embedded": {
        "workspaces": [
            {
                "id": "<WORKSPACE_ID>",
                "name": "<WORKSPACE_NAME>",
                "domains": "<WORKSPACE_DOMAINS>",
                "_links": {
                    "update workspace": {
                        "href": "https://catalog-staging.matatika.com/api/workspaces/<WORKSPACE_ID>",
                        "type": "PUT"
                    },
                    "delete workspace": {
                        "href": "https://catalog-staging.matatika.com/api/workspaces/<WORKSPACE_ID>",
                        "type": "DELETE"
                    },
                    "self": {
                        "href": "https://catalog-staging.matatika.com/api/workspaces/<WORKSPACE_ID>"
                    },
                    "profiles": {
                        "href": "https://catalog-staging.matatika.com/api/workspaces/<WORKSPACE_ID>/profiles",
                        "type": "GET"
                    },
                    "create invitation": {
                        "href": "https://catalog-staging.matatika.com/api/workspaces/<WORKSPACE_ID>/invite",
                        "type": "POST"
                    },
                    "invitations": {
                        "href": "https://catalog-staging.matatika.com/api/workspaces/<WORKSPACE_ID>/invitations",
                        "type": "GET"
                    },
                    "datasets": {
                        "href": "https://catalog-staging.matatika.com/api/workspaces/<WORKSPACE_ID>/datasets",
                        "type": "GET"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://catalog-staging.matatika.com/api/workspaces?page=0&size=20"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 1,
        "totalPages": 1,
        "number": 0
    }
}
```

If you plan to explore the Matatika API further, it may make sense to resolve the Bearer token to a temporary environment variable.

#### macOS/Linux

```bash
ACCESS_TOKEN=<ACCESS_TOKEN>
curl -H "Authorization: Bearer $ACCESS_TOKEN" https://catalog-staging.matatika.com:443/api/workspaces
```

#### Windows
```
set ACCESS_TOKEN=<ACCESS_TOKEN>
curl -H "Authorization: Bearer %ACCESS_TOKEN%" https://catalog-staging.matatika.com:443/api/workspaces
```

### Postman
The Postman app is available for download [here](https://www.postman.com/downloads/). Once installed, you can simply import [our maintained Postman collection](), configure authorisation and start sending requests!

![authorisation in postman](assets/img/postman-auth.png)

To set the authorisation for the collection, locate it in the 'Collections' tab of the left-hand side bar, click the ellipsis icon and select 'Edit'. Inside the 'EDIT COLLECTION' pop-up window, navigate to the 'Authorization' tab, select 'Bearer Token' in the 'TYPE' drop-down field, and then paste your Matatika API Bearer token in the 'Token' text field. Click the 'Update' button and you're all ready to go!