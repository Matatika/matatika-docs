## Search for datasets in a workspace by free text

GET
{:.label .label-GET}

/api/workspaces/{workspaces-id}/search?q={free-text}
{:.path .path-GET}

Searches the workspace `{workspace-id}` for datasets by the free text `{free-text}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-free-text/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-free-text/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200 / 204
{:.label .label-GET}

- `200`: [Dataset](datasets#dataset) collection with HAL links.

{% include snippets/api/search/search-for-datasets-in-a-workspace-by-free-text/response-body.md %}

- `204`: No response body provided.

---
