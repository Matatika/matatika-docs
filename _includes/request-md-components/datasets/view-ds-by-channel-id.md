## View all datasets by channel ID

GET
{:.label .label-GET}

/api/datasets/{channel-id}
{:.path .path-GET}

Returns all datasets of  the channel `{channel-id}`.

### Prerequisites
{: .no_toc }

- Dataset `{dataset-id}` must exist

### Request
{: .no_toc }

#### cURL
{: .no_toc }

`snippet placeholder`

#### Python (Requests)
{: .no_toc}

`snippet placeholder`

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

[Dataset object]({{site.baseurl}}/data-structures#dataset) collection with HAL links.

---
