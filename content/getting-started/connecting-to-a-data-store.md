---
layout: default
title: Connecting to a Data Store
permalink: /getting-started/connecting-to-a-data-store
parent: Getting Started
nav_order: 11
---

# {{page.title}}
- Time required: _5 minutes_

---

## Prerequisites
- Own or have administrative access to a [workspace]({{site.baseurl}}/glossary#workspace)
- Access to a database or other data storage medium supported by Matatika as a [data store]({{site.baseurl}}/glossary#data-store), such as [PostgreSQL](https://www.postgresql.org/){:target="_blank"} or [Snowflake](https://www.snowflake.com/){:target="_blank"}

---

## Introduction
By default, every [workspace]({{site.baseurl}}/glossary#workspace) is backed by a [PostgreSQL](https://www.postgresql.org/){:target="_blank"} database managed by Matatika. This is set as the default [data store]({{site.baseurl}}/glossary#data-store) for the workspace.

Changing the default [data store]({{site.baseurl}}/glossary#data-store) of a [workspace]({{site.baseurl}}/glossary#workspace) will change where data is loaded into by [data imports]({{site.baseurl}}/glossary#data-import) and queried from by [datasets]({{site.baseurl}}/glossary#dataset).

---

## Connecting to a data store
Matatika supports connecting to a number of [data stores]({{site.baseurl}}/glossary#data-store), such as [PostgreSQL](https://www.postgresql.org/){:target="_blank"} and [Snowflake](https://www.snowflake.com/){:target="_blank"}.

1. Within the [Matatika app]({{site.app_url}}){:target="_blank"}, switch to the [workspace]({{site.baseurl}}/glossary#workspace) that you wish to set an alternate [data store]({{site.baseurl}}/glossary#data-store) for
1. Navigate to the workspace 'Data Stores' page
1. Click 'Add', select your preferred [data store]({{site.baseurl}}/glossary#data-store) and click 'Connect'
1. Enter the relevant credentials and other properties for the selected [data store]({{site.baseurl}}/glossary#data-store)
1. Click 'Save' and then navigate back to the 'Data Stores' page
1. Locate the [data store]({{site.baseurl}}/glossary#data-store) you wish to set as default, click the 'More' context menu button, and then select 'Make default'
  - Once a [data store]({{site.baseurl}}/glossary#data-store) is set the default for a [workspace]({{site.baseurl}}/glossary#workspace), it cannot be deleted until another data store is made the default

After completing these steps:
- All future [data import]({{site.baseurl}}/glossary#data-import) runs will load data into the new default [data store]({{site.baseurl}}/glossary#data-store)
- All [datasets]({{site.baseurl}}/glossary#dataset) will query from the new default [data store]({{site.baseurl}}/glossary#data-store)

No data is transferred or deleted from the Matatika-managed [PostgreSQL](https://www.postgresql.org/){:target="_blank"} database, and it can be made the default [data store]({{site.baseurl}}/glossary#data-store) again at any time.

---

## Custom data stores
For custom [data stores]({{site.baseurl}}/glossary#data-store) (i.e. those not provided by Matatika):
- Loading data via [data import]({{site.baseurl}}/glossary#data-import) runs is supported
- Querying data via [datasets]({{site.baseurl}}/glossary#dataset) is not supported

If a custom [data store]({{site.baseurl}}/glossary#data-store) is set as the default for a [workspace]({{site.baseurl}}/glossary#workspace), data will be loaded into the data store as normal, but any [datasets]({{site.baseurl}}/glossary#dataset) will be empty.

---
