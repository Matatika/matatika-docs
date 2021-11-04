---
layout: default
title: Fetch Data into a Jupyter Notebook
permalink: /getting-started/fetch-data-into-a-jupyter-notebook
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

Each dataset has a `data` endpoint, which returns live data from the database workspace schema based on the dataset `query`. The Matatika library `fetch` method is used to tap into this endpoint and return a snapshot of the dataset data. Using a [Jupyter Notebook](https://jupyter.readthedocs.io/en/latest/){:target="_blank"}, we can create an interactive environment to fetch some data and perform transform and visualisation operations.

You can follow along with this guide using our [simple_jupyter_fetch example notebook](https://github.com/Matatika/matatika-examples/tree/master/simple_jupyter_fetch){:target="_blank"}.

---

## Fetching Data

Dataset data can be retrieved by invoking `fetch` as follows:

```py
from matatika.library import MatatikaClient

# create the client and call 'fetch'
client = MatatikaClient(auth_token, endpoint_url, None)
data = client.fetch(dataset_id)
```

By default, the method will return a Python dictionary object constructed from the raw API response. From here, with the use of data-centric libraries such as [pandas](https://pandas.pydata.org/){:target="_blank"}, [NumPy](https://numpy.org/){:target="_blank"} or [SciPy](https://www.scipy.org/){:target="_blank"}, it becomes easy to begin analysing, transforming and visualising the data in useful ways.

---

## Using the Data

We can create a [`pandas.DataFrame`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html){:target="_blank"} using the [`from_dict`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.from_dict.html){:target="_blank"} method, and supplying the Matatika client-library `fetch` method return value as the argument.

```py
import pandas as pd

# create the dataframe from the dataset data dictionary
df = pd.DataFrame.from_dict(data)
df.head()
```

The resulting dataframe can be visualised using the `plot` method, which functions as a wrapper for the plotting backend (by default this is [Matplotlib](https://matplotlib.org/index.html){:target="_blank"}).

```py
df.plot()
```

![total users plot]({{site.baseurl}}/assets/img/total-users-plot.png)

After some data clean-up, processing, and visualisation adjustments, it is possible to create plots that offer tailored insights.

![total users plot with rolling average band]({{site.baseurl}}/assets/img/total-users-plot-with-rolling-average-band.png)
