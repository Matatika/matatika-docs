## Update a dataset

PATCH
{:.label .label-PATCH}

/api/datasets/{dataset-id}
{:.path .path-PATCH}

Updates the dataset `{dataset-id}`.

### Prerequisites
- Dataset `{dataset-id}` must exist

### Request
#### Body

This request can update one or more of the [dataset](#dataset) object fields at once. With a single request, it is possible to - *for example* - update the dataset `title` only, or both `title` and `description` (shown below).

{% include snippets/api/datasets/update-a-dataset/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/update-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/update-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PATCH}

[Dataset](#dataset) object with HAL links.

{% include snippets/api/datasets/update-a-dataset/response-body.md %}

---
