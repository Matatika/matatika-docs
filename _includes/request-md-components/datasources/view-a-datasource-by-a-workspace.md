## View a datasource by a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasources/{datasource-id}
{:.path .path-GET}

Returns the datasource `{datasource-id}` by the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist
- Datasource `{datasource-id}` must exist

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/datasources/view-a-datasource-by-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/datasources/view-a-datasource-by-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Datasource object](#datasource-object) with HAL links.

---
