---
layout: default
title: Datasets
permalink: /endpoints/datasets
parent: Endpoints
nav_order: 4
---

# {{page.title}}

---

## View a dataset

GET
{:.label .label-GET}

/api/datasets/{dataset-id}
{:.path .path-GET}

Returns the dataset `dataset-id`.

### Prerequisites
- Dataset `dataset-id` must exist

### Request
#### cURL Example
{% comment %}
{% include snippets/datasets/view-a-dataset/curl-request.md %}
{% endcomment %}

### Response
{:.d-inline-block}

200
{:.label .label-GET}

[Dataset object](data-structures#dataset) with HAL links.

---

## Withdraw a dataset

GET
{:.label .label-DELETE}

/api/datasets/{dataset-id}
{:.path .path-DELETE}

Deletes the dataset `dataset-id`.

### Prerequisites
- Dataset `dataset-id` must exist

### Request
#### cURL Example
{% comment %}
{% include snippets/datasets/withdraw-a-dataset/curl-request.md %}
{% endcomment %}

### Response
{:.d-inline-block}

204
{:.label .label-DELETE}

No response body provided.

---
