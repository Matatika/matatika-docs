## Record a view of a dataset

PUT
{:.label .label-PUT}

/api/datasets/{dataset-id}/view
{:.path .path-PUT}

"Adds a view to the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/record-a-view-of-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/record-a-view-of-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

No response body provided.

---
