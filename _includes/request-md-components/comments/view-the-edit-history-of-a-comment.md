## View the edit history of a comment

GET
{:.label .label-GET}

/api/comments/{comment-id}/history
{:.path .path-GET}

Returns the edit history of the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/comments/view-the-edit-history-of-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/comments/view-the-edit-history-of-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

{% include snippets/comments/view-the-edit-history-of-a-comment/response-body.md %}

---
