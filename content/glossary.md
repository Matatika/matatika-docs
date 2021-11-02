---
layout: default
title: Glossary
permalink: /glossary
nav_order: 9
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

Channels are a way to group [datasets](#dataset) together into a single source. Channels are made automatically if you push a [dataset](#dataset) with a source that doesn't exist in your [workspace](#workspace).

- [Channel YAML file documentation]({{site.baseurl}}/data/channel/channel-yaml)
- [How to assign a source to a dataset]({{site.baseurl}}/data/data-visualisation/dataset-yaml)

---

## Configuration Repository

Each [workspace](#workspace) is backed by a [Git](https://github.com/MatatikaBytes) configuration repository.

All data processing and analytical configuration is managed through code, with the Matatika Platform securely managing credentials to [Data Sources](#data-source) and [Data Stores](#data-store).

---

## Dataset

Datasets are the insights within the Matatika platform. They can be charts, tables, or csv (excel) download links. The easiest way to define a new dataset is to use the [dataset file format]({{site.baseurl}}/data/data-visualisation/dataset-yaml). 

[Visulisation Examples]({{site.baseurl}}/data/data-visualisation/examples/)
[Dataset File Examples](https://github.com/Matatika/matatika-examples/tree/master/example_datasets)

Custom datasets can be published with the Matatika [API]({{site.baseurl}}/api/resources) or [CLI]({{site.baseurl}}/cli).  Try it for yourself with our [Getting Started guide to publishing a Dataset]({{site.baseurl}}/getting-started/publish-a-dataset-cli).

Matatika Data Sources will automatically publish datasets during the [data import](#data-import) configuration.

---

## Data Import

A data import is a scheduled set of tasks that extracts data from a [Data Source](#data-source), loads the data into a [Data Store](#data-store), and performs the configured [Transforms](#transforms).  You need adminstrator access to managed the [Workspace](#workspace) data imports.

---

## Data Source

A data source is a file, cloud app or database that you import data from. When you choose a data source to use in a [data import](#data-import), you will usually be required to supply settings that control how Matatika connect's to your data for import. At Matatika, we building a catalog of [data sources]({{site.baseurl}}/data-sources/) that come with related [transforms](#transforms) and [datasets](#dataset).

A Matatika workspace can import data from any of the [300+ Meltano extractors and Singer Taps](https://hub.meltano.com/)

---

## Data Store

A data store is responsible for storing and preparing your data for query. By default, a [workspace](#workspace) is provisioned with an isolated PostgreSQL data store.

A Matatika workspace can use any number of JDBC compliant database or serverless data warehouses such as Google BigQuery or AWS Athena.

---

## Transforms

Transforms are used to prepare your data for analysis.  For example, aggregrating measurements can make big data managable or more performant, dealing with changing names can avoid misleading inconsistencies, and naming your measures and dimensions can align analysis with your business vocabulary.

A Matatika workspace uses [dbt](https://www.getdbt.com/) for robust and reusable transforms.

---

## Workspace

A workspace is an invite only data collaboration space. You can be an owner, administrator or member of many workspaces; with each workspace connected to isolated [Data Stores](#data-store) that are capable of storing billions of rows.  Rather than simple dashboards, member collaboration in the workspace used to improve the relevance of the [datasets](#dataset) shown in your feed.

All Matatika workspace configuration for [datasets](#dataset), [channels](#channel) and scheduled [data imports](#data-import) is able to be managed through the [API]({{site.baseurl}}/api/resources), [CLI]({{site.baseurl}}/cli), or [Configuration Repository](#configuration-repository).
