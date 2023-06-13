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

Use the Matatika datastore YAML to define a destination for data in your workspace as code.
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
