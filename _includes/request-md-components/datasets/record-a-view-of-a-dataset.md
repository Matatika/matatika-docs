## Record a view of a dataset

PUT
{:.label .label-PUT}

/api/datasets/{dataset-id}/view
{:.path .path-PUT}

Increments the view count of the dataset `{dataset-id}` by 1.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### cURL

{% include snippets/datasets/record-a-view-of-a-dataset/curl-request.md %}

#### Python (Requests)

{% include snippets/datasets/record-a-view-of-a-dataset/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

No response body provided.

---
