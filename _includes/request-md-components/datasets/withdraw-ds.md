## Withdraw a dataset

DELETE
{:.label .label-DELETE}

/api/datasets/{dataset-id}
{:.path .path-DELETE}

Withraws the dataset `{dataset-id}`.

### Prerequisites
{: .no_toc }

- Dataset `{dataset-id}` must exist

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/datasets/withdraw-a-dataset/curl-request.md %}

#### Python (Requests)
{: .no_toc}

{% include snippets/datasets/withdraw-a-dataset/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
