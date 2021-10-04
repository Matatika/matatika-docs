## Initialise a new datastore in a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/datastores
{:.path .path-POST}

Initialises a new datastore in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datastores/initialise-a-new-datastore-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datastores/initialise-a-new-datastore-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Datastore](#datastore) with HAL links.

---
