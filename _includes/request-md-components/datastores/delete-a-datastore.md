## Delete a datastore

DELETE
{:.label .label-DELETE}

/api/datastores/{datastore-id}
{:.path .path-DELETE}

Deletes the datastore `{datastore-id}`.

### Prerequisites
- Datastore `{datastore-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datastores/delete-a-datastore/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datastores/delete-a-datastore/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---
