## Update a datacomponent

PUT
{:.label .label-PUT}

/api/datacomponents/{datacomponent-id}
{:.path .path-PUT}

Updates the datacomponent `{datacomponent-id}`.

### Prerequisites
- Datacomponent `{datacomponent-id}` must exist

### Request
#### Body
[Datacomponent](#datacomponent) resource.
{% include snippets/api/datacomponents/update-a-datacomponent/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datacomponents/update-a-datacomponent/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datacomponents/update-a-datacomponent/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

[Datacomponent](#datacomponent) with HAL links.
{% include snippets/api/datacomponents/update-a-datacomponent/response-body.md %}

---
