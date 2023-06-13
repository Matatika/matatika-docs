---
title: DatastoreML
permalink: /dataml/datastoreml/
nav_order: 4
parent: DataML
---

# {{page.title}}

---

Reference documentation for interfaces to services that store data.
{: .fs-5 }

Datastores define a destination for data loaded into a [workspace]({{site.baseurl}}/api/resources/workspaces) by [pipelines]({{site.baseurl}}/api/resources/pipelines). The default datastore for a workspace is called Warehouse and it is its own PostgreSQL database hosted by Matatika, but this can be changed at any time to another datastore with your own credentials (see our supported [dataplugins]({{site.baseurl}}/api/resources/dataplugins) of type `LOADER`).
{: .fs-5 }

Datastore definitions are stored as YAML file format - you can read more about the YAML format and its syntax [here](https://yaml.org/){:target="_blank"}.
{: .fs-5 }

---

### Example: `datastores/Snowflake.yml`

```yaml
version: datastores/v0.1
data_plugin: loaders/target-snowflake--matatika
```

### Key Information

Key               | Datatype | Information
----------------- | -------- | -----------
`version`         | `String` | The version identifies this artifact type.
`data_plugin`     | `String` | The fully-qualified name of a dataplugin supported for JDBC configuration

---

Further Reading: 

- [API datastores]({{site.baseurl}}/api/resources/datastores)
