## View a channel

GET
{:.label .label-GET}

/api/channels/{channel-id}
{:.path .path-GET}

Returns the channel `{channel-id}`.

### Prerequisites
- Channel `{channel-id}` must exist

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/channels/view-a-channel/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/channels/view-a-channel/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Channel object](#channel-object) with HAL links.

---
