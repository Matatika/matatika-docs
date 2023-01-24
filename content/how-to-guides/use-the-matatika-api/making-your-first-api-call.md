---
title: Making Your First API Call
permalink: /how-to-guides/use-the-matatika-api/making-your-first-api-call
parent: Use the Matatika API
grand_parent: How-To Guides
nav_order: 2

---

# {{page.title}}

*Time required: **5 minutes***

---

You are now ready to make your first call the Matatika API! The tool you use to accomplish this is up to you, but we recommend [cURL](https://curl.haxx.se/docs/manual.html){:target="_blank"} or [Postman](https://learning.postman.com/docs/postman/launching-postman/introduction/){:target="_blank"}.

In this example, we will be querying the Matatika API `workspaces` endpoint to list the workspaces our profile is a member of. In the response of this request, details of the workspace created earlier in this guide should be found.

## cURL
cURL is installed by default on Windows 10, macOS and some Linux distributions (your milage may vary). Open command-prompt or terminal and run the following command, making sure to substitute `$ACCESS_TOKEN` or `%ACCESS_TOKEN%` with the Bearer token obtained earlier:

### macOS/Linux
```bash
curl -i \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    {{ site.matatika.links.catalog }}/workspaces
```

### Windows
```bat
curl -i ^
    -H "Authorization: Bearer %ACCESS_TOKEN%" ^
    {{ site.matatika.links.catalog }}/workspaces
```

If you plan to explore the Matatika API further, it may make sense to resolve the Bearer token to a temporary environment variable.

### macOS/Linux
```bash
ACCESS_TOKEN="..."
curl -i \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    {{ site.matatika.links.catalog }}/workspaces
```

### Windows
```bat
set ACCESS_TOKEN="..."
curl -i ^
    -H "Authorization: Bearer %ACCESS_TOKEN%" ^
    {{ site.matatika.links.catalog }}/workspaces
```

## Postman
The Postman app is available for download [here](https://www.postman.com/downloads/){:target="_blank"}. Once installed, follow these steps to import and set up authorisation for our maintained Postman collection.

Once completed, open the *Workspaces* folder, select the request titled *View all workspaces* and click *Send*.

---

If everything was configured correctly, the API should respond with a status of `200 OK` and a JSON-formatted [Workspace]({{site.baseurl}}/api/resources/workspaces#workspace) body:

```json
{
    "_embedded": {
        "workspaces": [
            {
                "id": "{workspace-id}",
                "name": "{workspace-name}",
                "domains": "{workspace-domains}",
                "repositoryUrl" : "{repository-url}",
                "defaultWorkspace" : false,
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
                    },
                    "tags" : {
                        "href" : "http://catalog.matatika.com/api/workspaces/{workspace-id}/tags"
                    },
                    "search" : {
                        "href" : "http://catalog.matatika.com/api/workspaces/{workspace-id}/search"
                    },
                    "feed" : {
                        "href" : "http://catalog.matatika.com/api/workspaces/{workspace-id}/feed"
                    },
                    "dataplugins" : {
                        "href" : "http://catalog.matatika.com/api/workspaces/{workspace-id}/dataplugins"
                    },
                    "pipelines" : {
                        "href" : "http://catalog.matatika.com/api/workspaces/{workspace-id}/pipelines"
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

[Publish Your First Dataset]({{site.baseurl}}/how-to-guides/use-the-matatika-api/publish-a-dataset-api){: .btn}
{: .text-center}