## View datasets by channel

GET
{:.label .label-GET}

/api/channels/{channel-id}/datasets
{:.path .path-GET}

Returns datasets by the channel `{channel-id}`.

### Prerequisites

- Channel `{channel-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/view-datasets-by-channel/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/view-datasets-by-channel/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataset](#dataset) collection with HAL links.
{% include snippets/api/datasets/view-datasets-by-channel/response-body.md %}

---
