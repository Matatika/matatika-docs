## Initialise a workspace

POST
{:.label .label-POST}

/api/workspaces
{:.path .path-POST}

Initialises a new workspace with a UUID. Post-initialisation, the workspace can be created and subsequently updated.

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/workspaces/initialise-a-workspace/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/workspaces/initialise-a-workspace/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-POST}

[Workspace object]({{site.baseurl}}/data-structures#workspace) with HAL links.

---
