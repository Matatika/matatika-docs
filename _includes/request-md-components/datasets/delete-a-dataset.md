## Delete a dataset

DELETE
{:.label .label-DELETE}

/api/datasets/{dataset-id}
{:.path .path-DELETE}

Deletes the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/delete-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/delete-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---
