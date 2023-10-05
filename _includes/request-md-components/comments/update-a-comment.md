## Update a comment

PUT
{:.label .label-PUT}

/api/comments/{comment-id}
{:.path .path-PUT}

Updates the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request
#### Body
[Comment](#comment) resource.
{% include snippets/api/comments/update-a-comment/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/view-a-comment/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/comments/view-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

[Comment](comments#comment) with HAL links.
{% include snippets/api/comments/view-a-comment/response-body.md %}

---
