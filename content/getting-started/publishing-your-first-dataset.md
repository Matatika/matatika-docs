---
layout: default
title: Publishing Your First Dataset
permalink: /getting-started/publishing-your-first-dataset
parent: Getting Started
nav_order: 3
---

# {{page.title}}

- Time required: *5 minutes*

---

## Publishing Your First Dataset
To "publish a dataset" means to submit data to a workspace. A dataset must have an unique indentifier in the workspace it is being published to, which is achieved through an `alias`. We can publish a empty dataset to an exisiting workspace using just `alias`, but we will provide a bit more information for the following example. 

First, we will need to obtain the workspace ID of the workspace we wish to publish our dataset to. Following the same steps as in [Making Your First API Call]({{site.baseurl}}/getting-started/making-your-first-api-call) for your preferred tool, we can perform a GET request to the `/workspaces` endpoint to return a collection of the workspaces our profile is a member of. The response should contain the details of the workspace we created when signing into the Matatika app for the first time. From here, we can find the key `id` and extract its value - our workspace ID.

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
{% raw %}

Within the Matatika API collection, find the 'Publish a workspace dataset' request under the 'Workspaces' folder. [Follow these steps](https://learning.postman.com/docs/sending-requests/variables/) to assign the variable `{{workspace-id}}` with the value of the workspace ID we obtained earlier, and press the 'Send' button.

{% endraw %}

---

That's all there is to it! If everything was set up correctly, you should have received a response with a status of `201 Created` and a body containing information about the dataset you just published. Subsequent requests to this same URL using the same `alias` will yield a status of `200 OK`.