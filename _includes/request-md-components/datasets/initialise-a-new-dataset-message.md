## Initialise a new dataset message

POST
{:.label .label-POST}

/api/datasets/{dataset-id}/messages
{:.path .path-POST}

Initialises a new dataset message for the dataset `{dataset-id}`

### Prerequisites
- Dataset `{dataset-id}` must exist

### Requests
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/initialise-a-new-dataset-message/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/initialise-a-new-dataset-message/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Dataset Message](#dataset-message) with HAL links.
{% include snippets/api/datasets/initialise-a-new-dataset-message/response-body.md %}

---
