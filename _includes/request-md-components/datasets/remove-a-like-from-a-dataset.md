## Remove a like from a dataset

DELETE
{:.label .label-DELETE}

/api/datasets/{dataset-id}/like
{:.path .path-DELETE}

Removes a like of the dataset `{dataset-id}` from the authenticated user profile.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/remove-a-like-from-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/remove-a-like-from-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---
