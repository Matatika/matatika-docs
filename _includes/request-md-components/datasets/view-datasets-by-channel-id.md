## View datasets by channel ID

GET
{:.label .label-GET}

/api/datasets/{channel-id}
{:.path .path-GET}

Returns all datasets of the channel `{channel-id}`.

### Prerequisites

- Channel `{channel-id}` must exist

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/datasets/view-datasets-by-channel-id/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/datasets/view-datasets-by-channel-id/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataset object](#dataset-object) collection with HAL links.

---
