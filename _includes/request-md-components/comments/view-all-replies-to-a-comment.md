## View all replies to a comment

GET
{:.label .label-GET}

/api/comments/{comment-id}
{:.path .path-GET}

Returns all replies to the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request

#### cURL

{% include snippets/comments/view-all-replies-to-a-comment/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/view-all-replies-to-a-comment/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Comment object](#comment-object) with HAL links.

---