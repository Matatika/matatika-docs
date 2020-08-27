## View a dataset

GET
{:.label .label-GET}

/api/datasets/{dataset-id}
{:.path .path-GET}

Returns the dataset {dataset-id}.

### Prerequisites
- Dataset {dataset-id} must exist

### Request

#### cURL

{% include snippets/datasets/view-a-dataset/curl-request.md %}

#### Python (Requests)

{% include snippets/datasets/view-a-dataset/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataset object](#dataset-object) with HAL links.

---
