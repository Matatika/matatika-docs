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

---

## Introduction
Every [workspace]({{site.baseurl}}/glossary#workspace) is backed by a [PostgreSQL](https://www.postgresql.org/){:target="_blank"} database, managed by Matatika. For a new workspace, this database is set as the default [data store]({{site.baseurl}}/glossary#data-store) out-of-the-box.

Changing the default [data store]({{site.baseurl}}/glossary#data-store) of a [workspace]({{site.baseurl}}/glossary#workspace) means to change from where data is loaded into and queried from by [datasets]({{site.baseurl}}/glossary#dataset).

---

## Connecting to a data store
Migrating away from the managed [data store]({{site.baseurl}}/glossary#data-store) means allowing Matatika access to some external data store(s) that you provide credentials for.

1. Within the [Matatika app]({{site.app_url}}){:target="_blank"}, switch to the [workspace]({{site.baseurl}}/glossary#workspace) that you wish to set an alternate [data store]({{site.baseurl}}/glossary#data-store) for
1. Navigate to the workspace 'Data Stores' page
1. Click 'Add', select your preferred [data store]({{site.baseurl}}/glossary#data-store) and click 'Connect'
1. Enter the relevant credentials and other properties for the selected [data store]({{site.baseurl}}/glossary#data-store)
1. Click 'Save' and then navigate back to the 'Data Stores' page
1. Locate the [data store]({{site.baseurl}}/glossary#data-store) you wish to set as default, click the 'More' context menu button, and then select 'Make default'
  - Once a [data store]({{site.baseurl}}/glossary#data-store) is set the default for a [workspace]({{site.baseurl}}/glossary#workspace), it cannot be deleted until another data store is made the default

After completing these steps, the new default [data store]({{site.baseurl}}/glossary#data-store) will become the target for future [data import]({{site.baseurl}}/glossary#data-import) runs and the source for all [datasets]({{site.baseurl}}/glossary#dataset). No data is transferred or deleted from the Matatika-managed [PostgreSQL](https://www.postgresql.org/){:target="_blank"} database, and it can be made the default data store again at any time.

---

## Custom data stores
For custom [data stores]({{site.baseurl}}/glossary#data-store) (i.e. those not provided by Matatika):
- Loading data via [data import]({{site.baseurl}}/glossary#data-import) runs is supported
- Querying data via [datasets]({{site.baseurl}}/glossary#dataset) is not supported

If a custom [data store]({{site.baseurl}}/glossary#data-store) is set as the default for a [workspace]({{site.baseurl}}/glossary#workspace), data will be loaded into the data store as normal, but any [datasets]({{site.baseurl}}/glossary#dataset) will be empty.

---
