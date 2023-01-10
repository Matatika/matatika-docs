---
title: Default Datastore
permalink: /datastores/default-datastore
nav_order: 1
parent: Datastores
---

# {{page.title}}

---

Every Matatika workspace is created with a default postgres datastore called Warehouse. 

This Warehouse datastore is both `MANAGED` and `DEFAULT` by default.

## `MANAGED`

The only `MANAGED` datastore in your workspace will be your default Warehouse datastore. `MANAGED` means the datastore is not editable and not deletable.

We provide this datastore so you can get to running and testing pipelines right away, as well as to store state and bookmarks from your pipelines for later runs.

## `DEFAULT`

Again your Warehouse default datastore will originally by `DEFAULT`. This means that the workspace uses this datastore by default in pipelines, and it is used as the source of data in the app for datasets.

You can still use datastores that are not your `DEFAULT` in pipelines, see the `Using datastores in pipelines` link below.

You can create new datastores and set these as `DEFAULT` if required, or just use specific datastores in your pipelines. 

We support postgres and snowflake as datastores that are able to power your workspace.

---

## Links

- [Postgres Datastore](./postgres)
- [Snowflake Datastore](./snowflake)
- [Using datastores in pipelines - Creating Custom Pipelines]({{site.baseurl}}/how-to-guides/automate-actions/create-a-custom-pipeline)