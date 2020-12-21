---
layout: default
title: Publish Jupyter Notebooks with Matatika CLI
permalink: /getting-started/publish-jupyter-notebooks-with-matatika-cli
parent: Getting Started
nav_order: 6
---

# {{page.title}}

- Time required: _5 minutes_

---

## Prerequisites

You must have already:

- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.app_url}}) or API
- Installed the [Matatika CLI]({{site.baseurl}}/cli) and configured a context

Refer to the previous [Getting Started guides]({{site.baseurl}}/getting-started) if you are unsure of these requirements.

---

## Introduction

A [Jupyter Notebook](https://jupyter.readthedocs.io/en/latest/) is an interactive Python environment formed of text and executable code blocks, offering a fleixble and iterative programmatic approach to research and development work. Notebooks are commonly used as a research tool in the data science field, but are now also emerging as viable or - in some cases - more practical alternatives to certain facets of business analytics, such as constructing performance reports.

---

## Publish A Notebook

In this example, we will be publishing the notebook we created in the [Fetch Data into a Jupyter Notebook](fetch-data-into-a-jupyter-notebook) guide as a new dataset - you can find the notebook file [here](https://github.com/Matatika/matatika-examples/tree/master/simple_jupyter_fetch). Alternatively, you can use your own notebook file. Keep in mind that when publishing any notebook, only the **text cells** and the **output of code cells** will be included in the resultant dataset.

Firstly, download and/or locate the notebook file with the `.ipynb` extension. To publish the notebook, run:

```bash
matatika publish simple_jupyter_fetch.ipynb
```

If the process was successful, the CLI will respond with details of the publish:

```
Successfully published 1 dataset(s)

DATASET ID                          	ALIAS   TITLE                   STATUS      
31b136c9-14c0-400d-90d5-8d078d1b34e9    None 	Total Website Users     NEW
```

Here we can see that the published dataset `title` was resolved from the first heading tag in the file. If no heading tag is present in the file, then an automatically generated title will be used instead.

When viewing the dataset in the app, we can see the published notebook is displayed like any other dataset:

![total users plot]({{site.baseurl}}/assets/img/app-published-dataset-notebook.png)
