## Edit a dataset

PATCH
{:.label .label-PATCH}

/api/datasets/{dataset-id}
{:.path .path-PATCH}

Edits the dataset `{dataset-id}`.

### Prerequisites
- Dataset `{dataset-id}` must exist

### Request
#### Body

This request can update one or more of the [dataset](#dataset) fields at once. With a single request, it is possible to - *for example* - edit the dataset `title` only, or both `title` and `description` (shown below).

{% include snippets/api/datasets/edit-a-dataset/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/edit-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/edit-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PATCH}

[Dataset](#dataset) with HAL links.

---
