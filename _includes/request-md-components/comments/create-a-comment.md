## Create a comment

PUT
{:.label .label-PUT}

/api/comments/{comment-id}
{:.path .path-PUT}

Creates the comment `{comment-id}`.

### Prerequisites

- The comment must have been initialised in order to create it
- The target dataset `{dataset-id}` or comment `{comment-id}` must exist

### Request
#### Body
[Comment](#comment) resource.
{% include snippets/api/comments/create-a-comment/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/create-a-comment/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/comments/create-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
`201 Created`
{: .dummy-heading .path-PUT}

[Comment](#comment) with HAL links.
{% include snippets/api/comments/create-a-comment/response-body.md %}

---
