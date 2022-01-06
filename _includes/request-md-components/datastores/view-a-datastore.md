## View a datastore

GET
{:.label .label-GET}

/api/datastores/{datastore-id}
{:.path .path-GET}

Returns the datastore `{datastore-id}`.

### Prerequisites
- Datastore `{datastore-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datastores/view-a-datastore/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datastores/view-a-datastore/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Datastore](#datastore) with HAL links.
{% include snippets/api/datastores/view-a-datastore/response-body.md %}

---
