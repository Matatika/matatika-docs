## View all datasources by a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasources
{:.path .path-GET}

Returns all available datasources by the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasources/view-all-datasources-by-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasources/view-all-datasources-by-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Datasource object](#datasource-object) collection with HAL links.

---
