## Delete a comment

DELETE
{:.label .label-DELETE}

/api/comments/{comment-id}
{:.path .path-DELETE}

Deletes the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/delete-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/comments/delete-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
