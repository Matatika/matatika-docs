## View a dataplugin available to a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/dataplugins/{dataplugin-id}
{:.path .path-GET}

Returns the dataplugin `{dataplugin-id}` available to the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist
- Dataplugin `{dataplugin-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/view-a-dataplugin-available-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/dataplugins/view-a-dataplugin-available-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataplugin](#dataplugin) with HAL links.

{% include snippets/api/dataplugins/view-a-dataplugin-available-to-a-workspace/response-body.md %}

---
