## View a dataset

GET
{:.label .label-GET}

/api/datasets/{dataset-id}
{:.path .path-GET}

Returns the dataset `{dataset-id}`.

### Prerequisites
{: .no_toc }

- Dataset `{dataset-id}` must exist

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% comment %}
{% include snippets/datasets/view-a-dataset/curl-request.md %}
{% endcomment %}

### Response
{: .no_toc .d-inline-block }

200
{:.label .label-GET}

[Dataset object]({{site.baseurl}}/data-structures#dataset) with HAL links.

---
