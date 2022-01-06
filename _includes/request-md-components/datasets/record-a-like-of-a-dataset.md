## Record a like of a dataset

PUT
{:.label .label-PUT}

/api/datasets/{dataset-id}/like
{:.path .path-PUT}

Records a like of the dataset `{dataset-id}` from the authenticated user profile.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/record-a-like-of-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/record-a-like-of-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

No response body provided.

---
