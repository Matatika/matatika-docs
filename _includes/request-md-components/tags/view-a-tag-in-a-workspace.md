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

- cURL
{: .tab .tabs-section-start}

{% include snippets/tags/view-a-tag-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/tags/view-a-tag-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Tag object](#tag-object) with HAL links.

---
