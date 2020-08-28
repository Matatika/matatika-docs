## Remove a like from a dataset

DELETE
{:.label .label-DELETE}

/api/datasets/{dataset-id}/like
{:.path .path-DELETE}

Removes a like of the dataset `{dataset-id}` from the authenticated profile and decrements its like count `likeCount` by 1.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### cURL

{% include snippets/datasets/remove-a-like-from-a-dataset/curl-request.md %}

#### Python (Requests)

{% include snippets/datasets/remove-a-like-from-a-dataset/python-requests.md %}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
