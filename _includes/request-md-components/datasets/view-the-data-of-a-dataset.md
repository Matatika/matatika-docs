## View the data of a dataset

GET
{:.label .label-GET}

/api/datasets/{dataset-id}/data
{:.path .path-GET}

Returns the data of the dataset `{dataset-id}`.

### Prerequisites
- Dataset `{dataset-id}` must exist

### Request
#### Headers
##### Accept

Media Type(s) | Description
------------- | -----------
`application/json` `*/*` | Sets the response content type format to JSON
`text/csv` | Sets the response content type format to CSV

Defaults to `application/json` (given `Accept */*` or no `Accept` header).

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/view-the-data-of-a-dataset/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/datasets/view-the-data-of-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
- `200`: The dataset data (defaults to JSON format).

{% include snippets/api/datasets/view-the-data-of-a-dataset/response-body.md %}

- `204`: No response body provided.

---
