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

Returns the dataset `dataset-id`.

### Prerequisites
{: .no_toc }

- Dataset `dataset-id` must exist

### Request
{: .no_toc }

#### cURL Example
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

GET
{:.label .label-DELETE}

/api/datasets/{dataset-id}
{:.path .path-DELETE}

Deletes the dataset `dataset-id`.

### Prerequisites
{: .no_toc }

- Dataset `dataset-id` must exist

### Request
{: .no_toc }

#### cURL Example
{: .no_toc }

{% comment %}
{% include snippets/datasets/withdraw-a-dataset/curl-request.md %}
{% endcomment %}

### Response
{: .no_toc .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
