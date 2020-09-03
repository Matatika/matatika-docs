## View all comments on a dataset

GET
{:.label .label-GET}

/api/datasets/{dataset-id}/comments
{:.path .path-GET}

Returns the comments on the dataset `{dataset-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### cURL

{% include snippets/comments/view-all-comments-on-a-dataset/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/view-all-comments-on-a-dataset/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Comment object](#comment-object) collection with HAL links.

---
