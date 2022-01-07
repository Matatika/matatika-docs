## View all replies to a comment

GET
{:.label .label-GET}

/api/comments/{comment-id}
{:.path .path-GET}

Returns all replies to the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/view-all-replies-to-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/comments/view-all-replies-to-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Comment](comments#comment) with HAL links.
{% include snippets/api/comments/view-all-replies-to-a-comment/response-body.md %}

---
