## Update a comment

PUT
{:.label .label-PUT}

/api/comments/{comment-id}
{:.path .path-PUT}

Updates the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request

#### cURL

{% include snippets/comments/update-a-comment/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/update-a-comment/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

[Comment object](#comment-object) with HAL links.

---
