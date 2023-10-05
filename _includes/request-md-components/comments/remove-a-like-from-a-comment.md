## Remove a like from a comment

DELETE
{:.label .label-DELETE}

/api/comments/{comment-id}/like
{:.path .path-DELETE}

Removes a like of the comment `{comment-id}` from the authenticated user profile.

### Prerequisites

- Comment `{comment-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/remove-a-like-from-a-comment/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/comments/remove-a-like-from-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---
