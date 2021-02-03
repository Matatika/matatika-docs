## View the feed of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/feed
{:.path .path-GET}

Returns the feed of the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/feed/view-a-workspace-feed/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/feed/view-a-workspace-feed/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataset object](datasets#dataset-object) collection with HAL links.

---
