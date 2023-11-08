## Search for datasets in a workspace using msearch

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/datasets/_msearch
{:.path .path-POST}

Searches the workspace `{workspace-id}` for datasets using an elastic search query.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/search/msearch-in-a-workspace-by-free-text/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/search/msearch-in-a-workspace-by-free-text/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

{% include snippets/api/search/msearch-in-a-workspace-by-free-text/response-body.md %}

`204 No Content`
{: .dummy-heading .path-POST}

No response body provided.

---
