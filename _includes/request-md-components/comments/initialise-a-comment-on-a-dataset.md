## Initialise a comment on a dataset

POST
{:.label .label-POST}

/api/datasets/{dataset-id}/comments
{:.path .path-POST}

Initialises a new comment on the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/comments/initialise-a-comment-on-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/comments/initialise-a-comment-on-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Comment object](#comment-object) with HAL links.

---
