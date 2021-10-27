---
layout: default
title: Glossary
permalink: /glossary
nav_order: 10
---

# {{page.title}}

Glossary of Matatika terms.
{: .fs-5 }

You can find the technical glossary [here](https://github.com/Matatika/matatika-examples/tree/master/matatika_technical_glossary).
{: .fs-5 }

---

- TOC
{: toc }

---

## Channel

Channels are a way to group [datasets](#dataset) together into a single source. Channels are made automatically if you push a [dataset](#dataset) with a source that doesnt exist in your [workspace](#workspace).

- [How to assign a source to a dataset]({{site.baseurl}}/data-visualisation/dataset-yaml)

---

## Dataset

Datasets are the insights within the Matatika platform. They can be charts, tables, or csv (excel) download links. The easiest way to define a new dataset is to use the [dataset file format]({{site.baseurl}}/data-visualisation/dataset-yaml). 

[Visulisation Examples]({{site.baseurl}}/data-visualisation/examples/)
[Dataset File Examples](https://github.com/Matatika/matatika-examples/tree/master/example_datasets)

Once you have set up a [data import](#data-import), if there are any Matatika datasets associated with your datasource, they will be added to your workspace during the data import config job. This job sets up the workspace with settings and files needed to run your data import.

If you make your own datasets you can publish them by folllowing our [Getting Started Tutorial - Publish a Dataset]({{site.baseurl}}/getting-started/publish-a-dataset-cli).

---

## Data Import

A data import is effectivly a pipeline that connects a [data source](#data-source) to a [data store](#data-store).

You can find your [workspace's](#workspace) data import by clicking on your profile image in the top right, then selecting data imports from the drop down menu. Note you can only access the data imports of a workspace if you are either the owner or a admin of the workspace.

Once you have set up a data import, it will run a config job which will set up the workspace and its repository with setting and files needed to run your data import.

---

## Data Source

A data source is a data extraction script. When you choose a data source to use in a [data import](#data-import), you will usually be required to supply settings to allow the our data source to connect to your data. 

Some of our supported data sources come with related transforms and [datasets]({{site.baseurl}}/data-visualisation/dataset-yaml), these data sources are marked with the Matatika logo in the top left.

---

## Data Store

A data store is a destination to store your data. A [workspace](#workspace) will have PostgreSQL data store created for it that will be used by default.

---

## Workspace

A workspace is an invite only data collaboration space hosted by us. You can have many workspaces, and each one comes with its own default [data store](#data-store) in the form of a PostgreSQL database.

The main workspace view is the feed, this shows [datasets](#dataset) based on their relevance to you.

A workspace will contain its own specific datasets, [channels](#channel) and [data imports](#data-import).
