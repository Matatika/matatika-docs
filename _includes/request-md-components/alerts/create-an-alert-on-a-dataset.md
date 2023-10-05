## Create an alert on a dataset

PUT
{:.label .label-PUT}

datasets/{dataset-id}/alerts/{alert-id}
{:.path .path-PUT}

Create a new alert on a dataset.

### Prerequisites
- The authenticated user must own a Matatika account

### Request

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/alerts/create-an-alert-on-a-dataset/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/alerts/create-an-alert-on-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`201 Created`
{: .dummy-heading .path-PUT}

{% include snippets/api/alerts/create-an-alert-on-a-dataset/response-body.md %}

---
