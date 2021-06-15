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

Key | Value | Description
--- | ----- | -----------
`Accept` | `text/csv` | Returns the data in CSV format.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/view-the-data-of-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/view-the-data-of-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
- `200`: The dataset data (defaults to JSON format).
- `204`: No response body provided.

{% include snippets/api/datasets/view-the-data-of-a-dataset/response-body.md %}

---
