## Create a comment

PUT
{:.label .label-PUT}

/api/comments/{comment-id}
{:.path .path-PUT}

Creates a new comment `{comment-id}`.

### Prerequisites

- The comment must have been initialised in order to create it
- The target dataset `{dataset-id}` or comment `{comment-id}` must exist

### Request

#### Body

{% include snippets/comments/create-a-comment/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`message` | `String` | The comment message | Must not be empty
`datasetId` | `String` | The target dataset ID of the comment | Must be a valid and existing dataset UUID

#### cURL

{% include snippets/comments/create-a-comment/curl-request.md %}

#### Python (Requests)

{% include snippets/comments/create-a-comment/python-requests.md %}

### Response
{: .d-inline-block }

201
{:.label .label-PUT}

[Comment object](#comment-object) with HAL links.

---
