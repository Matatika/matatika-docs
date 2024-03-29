---
title: Publish a Jupyter Notebook
permalink: /how-to-guides/analyze-data/publish-a-jupyter-notebook
parent: Analyze Data
grand_parent: How-To Guides
nav_order: 3
---

# {{page.title}}

*Time required: **5 minutes***

---

## Prerequisites

You must have already:

- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.matatika.links.app}}) or API
- Installed the [Matatika CLI]({{site.baseurl}}/cli) and configured a context

---

## Introduction

A [Jupyter Notebook](https://jupyter.readthedocs.io/en/latest/){:target="_blank"} is an interactive Python environment formed of text and executable code blocks, offering a flexible and iterative programmatic approach to research and development work. Notebooks are commonly used as a research tool in the data science field, but are now also emerging as viable or - in some cases - more practical alternatives to certain facets of business analytics, such as constructing performance reports.

---

## Publish A Notebook

In this example, we will be publishing [this notebook](https://github.com/Matatika/matatika-examples/tree/master/simple_cli_publish_notebook){:target="_blank"}. Alternatively, you can use your own notebook file. Keep in mind that when publishing any notebook, only the **text cells** and the **output of code cells** will be included in the resultant dataset.

Firstly, download and/or locate the notebook file with the `.ipynb` extension. To publish the notebook, run:

```bash
matatika publish total_users_insights.ipynb
```

If the process was successful, the CLI will respond with details of the publish:

```
Successfully published 1 dataset(s)

DATASET ID                              ALIAS   TITLE                                       STATUS
053bd57c-2343-4244-905d-0cc6eb1c0318    None    Total Website Users Over the Last 50 Days   NEW
```

Here we can see that the published dataset `title` was resolved from the first heading tag in the file. If no heading tag is present in the file, then an automatically generated title will be used instead.

When viewing the dataset in the app, we can see the published notebook is displayed like any other dataset:

![total users plot]({{site.baseurl}}/assets/img/app-published-dataset-notebook.png)
