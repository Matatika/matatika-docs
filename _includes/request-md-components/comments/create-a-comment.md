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

{% include snippets/api/comments/create-a-comment/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`message` | `String` | The comment message | Must not be empty
`datasetId` | `String` | The target dataset ID of the comment | Must be a valid and existing dataset UUID

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/comments/create-a-comment/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/comments/create-a-comment/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201
{:.label .label-PUT}

[Comment object](comments#comment) with HAL links.

---
