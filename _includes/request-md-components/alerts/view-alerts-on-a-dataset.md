## View alerts on a dataset

GET
{:.label .label-GET}

datasets/{dataset-id}/alerts
{:.path .path-GET}

View alerts on a dataset.

### Prerequisites
- The authenticated user must own a Matatika account

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/alerts/view-alerts-on-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/alerts/view-alerts-on-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

{% include snippets/api/alerts/view-alerts-on-a-dataset/response-body.md %}

---
