## View all dataplugins available to a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/dataplugins
{:.path .path-GET}

Returns all dataplugins available to the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/dataplugins/view-all-dataplugins-available-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/dataplugins/view-all-dataplugins-available-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataplugin](#dataplugin) collection with HAL links.

{% include snippets/api/dataplugins/view-all-dataplugins-available-to-a-workspace/response-body.md %}

---
