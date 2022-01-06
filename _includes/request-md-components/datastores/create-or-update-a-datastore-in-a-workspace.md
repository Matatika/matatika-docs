## Create or update a datastore in a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/datastores/{datastore-id}
{:.path .path-PUT}

Creates or updates the datastore `{datastore-id}` in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Body
[Datastore](#datastore) resource.
{% include snippets/api/datastores/create-a-datastore-in-a-workspace/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datastores/create-a-datastore-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datastores/create-a-datastore-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201 / 200
{:.label .label-PUT}

[Datastore](#datastore) with HAL links.
{% include snippets/api/datastores/create-a-datastore-in-a-workspace/response-body.md %}

---
