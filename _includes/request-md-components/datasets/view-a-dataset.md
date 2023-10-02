## View a dataset

GET
{:.label .label-GET}

/api/datasets/{dataset-id}
{:.path .path-GET}

Returns the dataset `{dataset-id}`.

### Prerequisites
- Dataset `{dataset-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/view-a-dataset/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datasets/view-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Dataset](#dataset) with HAL links.
{% include snippets/api/datasets/view-a-dataset/response-body.md %}

---
