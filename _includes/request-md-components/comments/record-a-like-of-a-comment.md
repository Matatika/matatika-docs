## Record a like of a comment

PUT
{:.label .label-PUT}

/api/comments/{comment-id}/like
{:.path .path-PUT}

Records a like of the comment `{comment-id}` from the authenticated user profile.

### Prerequisites

- Comment `{comment-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/record-a-like-of-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/comments/record-a-like-of-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

No response body provided.

---
