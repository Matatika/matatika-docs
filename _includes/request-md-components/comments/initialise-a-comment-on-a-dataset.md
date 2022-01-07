## Initialise a comment on a dataset

POST
{:.label .label-POST}

/api/datasets/{dataset-id}/comments
{:.path .path-POST}

Initialises a new comment on the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/initialise-a-comment-on-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/comments/initialise-a-comment-on-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Comment](comments#comment) with HAL links.
{% include snippets/api/comments/initialise-a-comment-on-a-dataset/response-body.md %}

---
