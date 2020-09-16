## View all comments on a dataset

GET
{:.label .label-GET}

/api/datasets/{dataset-id}/comments
{:.path .path-GET}

Returns the comments on the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/comments/view-all-comments-on-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/comments/view-all-comments-on-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Comment object](#comment-object) collection with HAL links.

---
