## View all workspace dataplugins

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

{% include snippets/api/dataplugins/view-all-workspace-dataplugins/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/dataplugins/view-all-workspace-dataplugins/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Dataplugin](#dataplugin) collection with HAL links.
{% include snippets/api/dataplugins/view-all-workspace-dataplugins/response-body.md %}

---
