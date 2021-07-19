## View all datastores in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datastores
{:.path .path-GET}

Returns the datastores in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datastores/view-all-datastores-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datastores/view-all-datastores-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Datastore](#datastore) collection with HAL links.

---
