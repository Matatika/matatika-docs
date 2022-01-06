## View a comment

GET
{:.label .label-GET}

/api/comments/{comment-id}
{:.path .path-GET}

Returns the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/view-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/comments/view-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Comment](comments#comment) with HAL links.
{% include snippets/api/comments/view-a-comment/response-body.md %}

---
