## Record a view of a dataset

PUT
{:.label .label-PUT}

/api/datasets/{dataset-id}/view
{:.path .path-PUT}

"Adds a view to the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/datasets/record-a-view-of-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/datasets/record-a-view-of-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

No response body provided.

---
