## Delete a comment

DELETE
{:.label .label-DELETE}

/api/comments/{comment-id}
{:.path .path-DELETE}

Deletes the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request

#### cURL

{% include snippets/comments/delete-a-comment/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/delete-a-comment/python-requests.md %}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
