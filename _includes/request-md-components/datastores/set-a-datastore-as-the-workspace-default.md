## Set a datastore as the workspace default

POST
{:.label .label-POST}

/api/datastores/{datastore-id}/default
{:.path .path-POST}

Sets the datastore `{datastore-id}` as the workspace default.

### Prerequisites
- Datastore `{datastore-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datastores/set-a-datastore-as-the-workspace-default/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datastores/set-a-datastore-as-the-workspace-default/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

No response body provided.

---
