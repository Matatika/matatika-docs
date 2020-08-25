## Initialise a workspace

POST
{:.label .label-POST}

/api/workspaces
{:.path .path-POST}

Initialises a new workspace with a UUID. Post-initialisation, the workspace can be created and subsequently updated.

### Request

#### cURL

{% include snippets/workspaces/initialise-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/workspaces/initialise-a-workspace/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Workspace object](#workspace-object) with HAL links.

---
