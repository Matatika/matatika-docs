## GitHub webhook workspace deployment

POST
{:.label .label-POST}

/api/workspaces/{workspaces-id}/deployments/github-webhook
{:.path .path-POST}

Receives `POST` requests from GitHub and starts a workspace deploy job.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/deployment/github-webhook-deploy/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/deployment/github-webhook-deploy/python-requests.md %}
{: .tabs-section-end}

### Response
`202 Accepted`
{: .dummy-heading .path-POST}

[Job](jobs) with HAL links.
{% include snippets/api/deployment/github-webhook-deploy/response-body.md %}

---
