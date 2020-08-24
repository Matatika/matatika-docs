---
layout: default
title: Datasets
permalink: /endpoints/datasets
parent: Endpoints
nav_order: 4
---

# {{page.title}}
{: .no_toc }

---

#### Table of Contents
{: .no_toc }

- TOC
{: toc }

---

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