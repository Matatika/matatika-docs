## Set a datastore as the workspace default

PUT
{:.label .label-PUT}

/api/datastores/{datastore-id}/default
{:.path .path-PUT}

Sets the datastore `{datastore-id}` as the workspace default.

### Prerequisites
- Datastore `{datastore-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datastores/set-a-datastore-as-the-workspace-default/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datastores/set-a-datastore-as-the-workspace-default/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

No response body provided.

---
