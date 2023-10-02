## Deploy your workspace repository

POST
{:.label .label-POST}

/api/workspaces/{workspaces-id}/deployments
{:.path .path-POST}

Deploys the workspace `{workspace-id}`.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/deployment/deploy-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/deployment/deploy-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`202 Accepted`
{: .dummy-heading .path-POST}

[Job](jobs) with HAL links.
{% include snippets/api/deployment/deploy-workspace/response-body.md %}

---
