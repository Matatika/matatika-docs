## View a datasource available to a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasources/{datasource-id}
{:.path .path-GET}

Returns the datasource `{datasource-id}` available to the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist
- Datasource `{datasource-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasources/view-a-datasource-available-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasources/view-a-datasource-available-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Datasource](#datasource) object with HAL links.

{% include snippets/api/datasources/view-a-datasource-available-to-a-workspace/response-body.md %}

---
