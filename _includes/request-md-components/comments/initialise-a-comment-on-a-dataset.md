## Initialise a comment on a dataset

POST
{:.label .label-POST}

/api/datasets/{dataset-id}/comments
{:.path .path-POST}

Initialises a new comment with a UUID. Post-initialisation, the comment can be created and subsequently updated.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### cURL

{% include snippets/comments/initialise-a-comment/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/initialise-a-comment/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Comment object](#comment-object) with HAL links.

---
