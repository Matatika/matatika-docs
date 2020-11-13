## Search for datasets in a workspace by channel name

GET
{:.label .label-GET}

/api/workspaces/{workspaces-id}/search?q=in:{channel-name}
{:.path .path-GET}

Searches the workspace `{workspace-id}` for datasets by the channel `{channel-name}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-channel-name/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-channel-name/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200 / 204
{:.label .label-GET}

#### Body
- `200`: [Dataset object](#dataset-object) collection with HAL links.
- `204`: No response body provided.

---
