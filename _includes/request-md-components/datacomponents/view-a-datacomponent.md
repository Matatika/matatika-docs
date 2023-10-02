## View a datacomponent

GET
{:.label .label-GET}

/api/datacomponents/{datacomponent-id}
{:.path .path-GET}

Returns the datacomponent `{datacomponent-id}`.

### Prerequisites
- Datacomponent `{datacomponent-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datacomponents/view-a-datacomponent/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datacomponents/view-a-datacomponent/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Datacomponent](#datacomponent) with HAL links.
{% include snippets/api/datacomponents/view-a-datacomponent/response-body.md %}

---
