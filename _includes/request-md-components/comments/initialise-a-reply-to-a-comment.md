## Initialise a reply to a comment

POST
{:.label .label-POST}

/api/comments/{comment-id}
{:.path .path-POST}

Initialises a new reply comment to the comment `{comment-id}`. Post-initialisation, the comment can be created and subsequently updated.

### Prerequisites

- Comment `{comment-id}` must exist

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/comments/initialise-a-reply-to-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/comments/initialise-a-reply-to-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Comment object](#comment-object) with HAL links.

---
