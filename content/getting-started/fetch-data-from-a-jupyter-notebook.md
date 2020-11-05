---
layout: default
title: Fetch Data from a Jupyter Notebook
permalink: /getting-started/fetch-data-from-a-jupyter-notebook
parent: Getting Started
nav_order: 5
---

# {{page.title}}

- Time required: _5 minutes_

---

## Prerequisites

You must have already:

- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.app_url}}) or API
- Published a dataset or access to an existing dataset

Refer to the previous [Getting Started guides]({{site.baseurl}}/getting-started) if you are unsure of these requirements.

---

## Introduction

Each dataset has a `data` endpoint, which returns live data from the database workspace schema based on the dataset `query`. The Matatika library `fetch` method is used to tap into this endpoint and return a snapshot of the dataset data at that instance. Using a [Jupyter Notebook](https://jupyter.readthedocs.io/en/latest/), we can create an interactive environment to fetch some data and perform transform and visualisation operations.

---

## Fetching Data

Dataset data can be fetched by invoking `fetch` in the following way:

```py
from matatika.library import MatatikaClient

# create the client and call 'fetch'
client = MatatikaClient(auth_token, endpoint_url, None)
df = client.fetch(dataset_id)
```

By default, the method will return a [`pandas.DataFrame`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html) object constructed from the raw API response. From here it becomes easy to begin analysing, transforming and visualising the data in useful ways with the pandas library.
