## View a comment

GET
{:.label .label-GET}

/api/comments/{comment-id}
{:.path .path-GET}

Returns the comment `{comment-id}`.

### Prerequisites

- Comment `{comment-id}` must exist

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/comments/view-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/comments/view-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Comment object](#comment-object) with HAL links.

---
