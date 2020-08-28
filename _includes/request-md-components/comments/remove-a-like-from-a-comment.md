## Remove a like from a comment

DELETE
{:.label .label-DELETE}

/api/comment/{comment-id}/like
{:.path .path-DELETE}

Removes a like of the comment `{comment-id}` from the authenticated profile and decrements its like count `likeCount` by 1.

### Prerequisites

- Comment `{comment-id}` must exist

### Request

#### cURL

{% include snippets/comments/remove-a-like-from-a-comment/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/remove-a-like-from-a-comment/python-requests.md %}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
