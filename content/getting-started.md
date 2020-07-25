---
layout: default
title: Getting Started
permalink: /getting-started
nav_order: 2
---

# {{page.title}}

---

## Sign Up
Head to the [Matatika website]({{site.www_url}}){:target="_blank"} and sign up for an account. You will need to verify your account through the email you signed up with - be sure to check your spam folder if you don't see the email!

---

## Create a Workspace
Access the Matatika app [here]({{site.app_url}}){:target="_blank"} or through the website links. The first time you visit this service, you will be prompted to create a new workspace: fill out the 'Name' field (and optionally 'Approved Domains') and click 'Continue'.

![new workspace in the matatika app](assets/img/app-new-workspace.png)

Once completed, you will have full access to the app. Keep the name you gave your workspace in mind for the [Making Your First API Call](getting-started#making-your-first-api-call) step.

---

## Getting a Token
A Bearer token is needed to authorise any requests sent to the Matatika API. After creating an account, logging into the app and creating a workspace, a token will be available [here]({{site.api_keys_url}}){:target="_blank"}.

- This token will be vaild for **2 hours** under the condition that the user remains logged into the app
- If the user logs out of the app during the token's active period or the token expires, the token is revoked and a new one will be issued on a subsequent sign-in

![api keys in the matatika app](assets/img/app-api-keys.png)

### Permanent Access
If continuous access to the Matatika API is required for development purposes, you can register for a unique client ID and secret [here]().

---

## Making Your First API Call
You are now ready to make your first call the Matatika API! The tool you use to accomplish this is up to you, but we recommend [cURL](https://curl.haxx.se/docs/manual.html){:target="_blank"} or [Postman](https://learning.postman.com/docs/postman/launching-postman/introduction/){:target="_blank"}.

In this example, we will be querying the Matatika API's `workspaces` endpoint to list the workspaces our profile is a member of. In the response of this request, details of the workspace created earlier in this guide should be found.

### cURL
cURL is installed by default on Windows 10, macOS and some Linux distributions (your milage may vary). Open command-prompt or terminal and run the following command, making sure to substitute `$ACCESS_TOKEN` or `%ACCESS_TOKEN%` with the Bearer token obtained earlier:

#### macOS/Linux
```bash
curl -i \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    {{ site.catalog_uri }}/workspaces
```

#### Windows
```bat
curl -i ^
    -H "Authorization: Bearer %ACCESS_TOKEN%" ^
    {{ site.catalog_uri }}/workspaces
```

The response received should be similar to that in the [view workspaces response](workspaces#response) section of the workspaces endpoint documentation:

```json
{
    "_embedded": {
        "workspaces": [
            {
                "id": "{workspace-id}",
                "name": "{workspace-name}",
                "domains": "{workspace-domains}",
                "_links": {
                    "self": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}"
                    },
                    "update delete workspace": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}"
                    },
                    "make-default": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}/default"
                    },
                    "members": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}/members"
                    },
                    "invitations": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}/invitations"
                    },
                    "create invitation": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}/invitations",
                    },
                    "datasets": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}/datasets",
                    },
                    "publish dataset": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}/datasets",
                    },
                    "channels": {
                        "href": "https://catalog.matatika.com/api/workspaces/{workspace-id}/channels",
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "https://catalog.matatika.com/api/workspaces?page=0&size=20"
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
ACCESS_TOKEN="..."
curl -i \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    {{ site.catalog_uri }}/workspaces
```

#### Windows
```bat
set ACCESS_TOKEN="..."
curl -i ^
    -H "Authorization: Bearer %ACCESS_TOKEN%" ^
    {{ site.catalog_uri }}/workspaces
```

### Postman
The Postman app is available for download [here](https://www.postman.com/downloads/){:target="_blank"}. Once installed, simply import [our maintained Postman collection](){:target="_blank"}, configure authorisation and start sending requests!

<!-- To import the collection into Postman, navigate to 'File -> Import...', select the 'Link' tab and enter `https://catalog.matatika.com:443/api/postman-collection.json`. -->

![authorisation in postman](assets/img/postman-auth.png)

To set the authorisation for the collection, locate it in the 'Collections' tab of the left-hand side bar, click the ellipsis icon and select 'Edit'. Inside the 'EDIT COLLECTION' pop-up window, navigate to the 'Authorization' tab, select 'Bearer Token' in the 'TYPE' drop-down field, and then paste your Matatika API Bearer token in the 'Token' text field. Click the 'Update' button and you're all ready to go!

---

## Publishing Your First Dataset

To "publish a dataset" means to submit data to a workspace. A dataset must have an unique indentifier in the workspace it is being published to, which is achieved through an `alias`. We can publish a empty dataset to an exisiting workspace using just `alias`, but we will provide a bit more information for the following example. 

First, we will need to obtain the workspace ID of the workspace we wish to publish our dataset to. Following the same steps as in [Making Your First API Call](#making-your-first-api-call) for your preferred tool, we can perform a GET request to the `/workspaces` endpoint to return a collection of the workspaces our profile is a member of. The response should contain the details of the workspace we created when signing into the Matatika app for the first time. From here, we can find the key `id` and extract its value - our workspace ID.

Now, we will perform a POST request to the `workspaces/{workspace-id}/datasets` path in order to publish a dataset to our workspace.

### cURL
Again, make sure to substitute `$ACCESS_TOKEN` or `%ACCESS_TOKEN%`with your API token and `$WORKSPACE_ID` or `%WORKSPACE_ID%` with your workspace ID.

#### macOS/Linux
```bash
curl -i \
    -H "Content-Type: application/hal+json" \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    -d '{"alias": "hello-world", "information": "My First Dataset", "description": "My first dataset published to a workspace using cURL"}' \
    {{ site.catalog_uri }}/api/workspaces/$WORKSPACE_ID/datasets
```
#### Windows
```bat
curl -i ^
    -H "Content-Type: application/hal+json" ^
    -H "Authorization: Bearer %ACCESS_TOKEN%" ^
    -d "{""alias"": ""hello-world"", ""information"": ""My First Dataset"", ""description"": ""My first dataset published to a workspace using cURL""}" ^
    {{ site.catalog_uri }}/workspaces/%WORKSPACE_ID%/datasets
```



### Postman
Within [our maintained Postman collection](){:target="_blank"}, find the 'Publish a workspace dataset' request under the 'Workspaces' folder. Substitute `{{workspace-id}}` with the workspace ID we obtained earlier, and press the 'Send' button.

---

That's all there is to it! If everything was set up correctly, you should have received a response with a status of `201 Created` and a body containing information about the dataset you just published. Subsequent requests to this same URL using the same `alias` will yield a status of `200 OK`.

---