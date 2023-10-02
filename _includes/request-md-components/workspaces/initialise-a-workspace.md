## Initialise a workspace

POST
{:.label .label-POST}

/api/workspaces
{:.path .path-POST}

Initialises a new workspace.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/initialise-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/workspaces/initialise-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Workspace](#workspace) with HAL links.
{% include snippets/api/workspaces/initialise-a-workspace/response-body.md %}

---
