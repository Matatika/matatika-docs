## Search for datasets in a workspace by tag name

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/search?q=tag:{tag-name}
{:.path .path-GET}

Searches the workspace `{workspace-id}` for datasets by the tag `{tag-name}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-tag-name/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-tag-name/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-tag-name/response-body.md %}

`204 No Content`
{: .dummy-heading .path-POST}

No response body provided.

---
