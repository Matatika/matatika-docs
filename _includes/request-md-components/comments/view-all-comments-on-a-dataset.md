## View all comments on a dataset

GET
{:.label .label-GET}

/api/datasets/{dataset-id}/comments
{:.path .path-GET}

Returns all comments on the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/view-all-comments-on-a-dataset/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/comments/view-all-comments-on-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Comment](comments#comment) collection with HAL links.
{% include snippets/api/comments/view-all-comments-on-a-dataset/response-body.md %}

---
