## View the feed of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/feed
{:.path .path-GET}

Returns the feed of the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/feed/view-a-workspace-feed/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/feed/view-a-workspace-feed/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Dataset](datasets#dataset) collection with HAL links.
{% include snippets/api/feed/view-a-workspace-feed/response-body.md %}

---
