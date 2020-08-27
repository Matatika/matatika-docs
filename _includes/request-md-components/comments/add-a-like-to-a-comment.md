## Add a like to a comment

PUT
{:.label .label-PUT}

/api/comment/{comment-id}/like
{:.path .path-PUT}

Adds a like to the comment `{comment-id}` from the user profile.

### Prerequisites

- Comment `{comment-id}` must exist

### Request

#### cURL

{% include snippets/comments/add-a-like-to-a-comment/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/add-a-like-to-a-comment/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

No response body provided.

---
