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

{% include snippets/comments/update-a-comment/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`message` | `String` | The comment message | Must not be empty

#### cURL

{% include snippets/comments/update-a-comment/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/update-a-comment/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

[Comment object](#comment-object) with HAL links.

---
