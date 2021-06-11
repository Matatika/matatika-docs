## Initialise a reply to a comment

POST
{:.label .label-POST}

/api/comments/{comment-id}
{:.path .path-POST}

Initialises a new reply comment to the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/initialise-a-reply-to-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/comments/initialise-a-reply-to-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Comment](comments#comment) with HAL links.

---
