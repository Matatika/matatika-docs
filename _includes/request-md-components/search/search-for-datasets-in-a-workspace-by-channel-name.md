## Search for datasets in a workspace by channel name

GET
{:.label .label-GET}

/api/workspaces/{workspaces-id}/search?q=in:{channel-name}
{:.path .path-GET}

Searches the workspace `{workspace-id}` for datasets by the channel `{channel-name}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-channel-name/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-channel-name/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Dataset](datasets#dataset) collection with HAL links.
{% include snippets/api/search/search-for-datasets-in-a-workspace-by-channel-name/response-body.md %}

`204 No Content`
{: .dummy-heading .path-POST}

No response body provided.

---
