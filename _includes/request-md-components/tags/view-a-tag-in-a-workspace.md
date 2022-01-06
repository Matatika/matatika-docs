## View a tag in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/tags/{tag-id}
{:.path .path-GET}

Returns the tag `{tag-id}` in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist
- Tag `{tag-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/tags/view-a-tag-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/tags/view-a-tag-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Tag](#tag) with HAL links.

{% include snippets/api/tags/view-a-tag-in-a-workspace/response-body.md %}

---
