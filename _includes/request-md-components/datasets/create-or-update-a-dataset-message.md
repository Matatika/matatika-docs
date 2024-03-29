## Create or update a dataset message

PUT
{:.label .label-PUT}

/api/datasets/{dataset-id}/messages/{message-id}
{:.path .path-PUT}

Creates or updates the dataset message `{message-id}` for the dataset `{dataset-id}`. This appears as [`DATASET_MESSAGE`](notifications#notification-type) [notification](notifications) for the recipient.

### Prerequisites
- Dataset `{dataset-id}` must exist

### Request
#### Body
[Dataset Message](#dataset-message) resource.
{% include snippets/api/datasets/create-or-update-a-dataset-message/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/create-or-update-a-dataset-message/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datasets/create-or-update-a-dataset-message/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK / 201 Created`
{: .dummy-heading .path-PUT}

[Dataset Message](#dataset-message) with HAL links.
{% include snippets/api/datasets/create-or-update-a-dataset-message/response-body.md %}

---
