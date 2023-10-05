## Initialise an alert on a dataset

POST
{:.label .label-POST}

datasets/{dataset-id}/alerts
{:.path .path-POST}

Initialises a new alert on a dataset.

### Prerequisites
- The authenticated user must own a Matatika account

### Request

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/alerts/initialise-an-alert-on-a-dataset/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/alerts/initialise-an-alert-on-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

{% include snippets/api/alerts/initialise-an-alert-on-a-dataset/response-body.md %}

---
