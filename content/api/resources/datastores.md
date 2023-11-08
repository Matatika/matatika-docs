---
title: Datastores
description: Matatika Datastores resource reference documentation
permalink: /api/resources/datastores
parent: Resources
grand_parent: API
nav_order: 12
components: request-md-components/datastores
---

# {{page.title}}

Datastores define a destination for data loaded into a [workspace](workspaces) by [pipelines](pipelines). The default datastore for a workspace is its own PostgreSQL database hosted by Matatika, but this can be changed at any time to another datastore with your own credentials (see our supported [dataplugins](dataplugins) of type `LOADER`).
{: .fs-5 }

---

## Objects
{: .no_toc}

### Datastore

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The datastore ID
`created` | `String` | ISO 8601 timestamp | The instant at which the datastore was created
`lastModified` | `String` | ISO 8601 timestamp | The instant at which the datastore was last modified
`name` | `String` | | The datastore name
`dataPlugin` | `String` | | Create / update with [dataplugin](dataplugins#dataplugin) `fullyQualifiedName`
`workspace` | `String` | Version 4 UUID | The datastore [workspace](workspaces#workspace) `id`
`jdbcUrl` | `String` | [JDBC URL](https://docs.oracle.com/javase/tutorial/jdbc/basics/connecting.html){:target="_blank"} | The datastore JDBC URL
`properties` | [`Properties`](#properties) | | The datastore properties

### Properties

For each setting `s` in the [dataplugin](dataplugins) [`settings`](dataplugins#setting):

Path | Type | Description
---- | ---- | -----------
`s.name` | `s.kind` | Refer to `s.description`

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-all-datastores-in-a-workspace.md %}
{% include {{ page.components }}/view-a-datastore.md %}
{% include {{ page.components }}/set-a-datastore-as-the-workspace-default.md %}
{% include {{ page.components }}/initialise-a-new-datastore-in-a-workspace.md %}
{% include {{ page.components }}/create-or-update-a-datastore-in-a-workspace.md %}
{% include {{ page.components }}/delete-a-datastore.md %}
