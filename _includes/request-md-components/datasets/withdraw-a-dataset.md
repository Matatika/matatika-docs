## Withdraw a dataset

DELETE
{:.label .label-DELETE}

/api/datasets/{dataset-id}
{:.path .path-DELETE}

Withraws the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/datasets/withdraw-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/datasets/withdraw-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
