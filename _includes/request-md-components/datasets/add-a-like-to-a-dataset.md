## Add a like to a dataset

PUT
{:.label .label-PUT}

/api/datasets/{dataset-id}/like
{:.path .path-PUT}

Increments the like count of the dataset `{dataset-id}` by 1.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### cURL

{% include snippets/datasets/add-a-like-to-a-dataset/curl-request.md %}

#### Python (Requests)

{% include snippets/datasets/add-a-like-to-a-dataset/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

No response body provided.

---
