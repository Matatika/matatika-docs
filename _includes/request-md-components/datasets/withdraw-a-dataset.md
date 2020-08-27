## Withdraw a dataset

DELETE
{:.label .label-DELETE}

/api/datasets/{dataset-id}
{:.path .path-DELETE}

Withraws the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### cURL

{% include snippets/datasets/withdraw-a-dataset/curl-request.md %}

#### Python (Requests)

{% include snippets/datasets/withdraw-a-dataset/python-requests.md %}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
