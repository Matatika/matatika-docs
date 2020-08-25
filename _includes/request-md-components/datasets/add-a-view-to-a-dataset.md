## Add a view to a dataset

PUT
{:.label .label-PUT}

/api/datasets/{dataset-id}/view
{:.path .path-PUT}

Increments the view counter of the dataset `{dataset-id}` by 1.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### cURL

{% include snippets/datasets/add-a-view-to-a-dataset/curl-request.md %}

#### Python (Requests)

{% include snippets/datasets/add-a-view-to-a-dataset/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

No response body provided.

---
