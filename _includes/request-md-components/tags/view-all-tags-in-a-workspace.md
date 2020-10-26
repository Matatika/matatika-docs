## View all tags in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/tags
{:.path .path-GET}

Returns all tags in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/tags/view-all-tags-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/tags/view-all-tags-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Tag object](#tag-object) collection with HAL links.

---
