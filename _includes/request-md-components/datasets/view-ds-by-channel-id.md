## View all datasets by channel ID

GET
{:.label .label-GET}

/api/datasets/{channel-id}
{:.path .path-GET}

Returns all datasets of the channel `{channel-id}`.

### Prerequisites

- Dataset `{dataset-id}` must exist

### Request

#### cURL

`snippet placeholder`

#### Python (Requests)

`snippet placeholder`

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataset object](#dataset-object) collection with HAL links.

---
