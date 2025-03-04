---
title: Datacomponents
description: Matatika Datacomponents resource reference documentation
permalink: /api/resources/datacomponents
parent: Resources
grand_parent: API
nav_order: 11
components: request-md-components/datacomponents
---

# {{page.title}}

Datacomponents hold configuration for [dataplugins](dataplugins), and are the building blocks for constructing [pipelines](pipelines). One dataplugin may be referenced by many datacomponents, each with a different set of `properties` for the dataplugin [`settings`](dataplugins#setting). One pipeline may reference multiple datacomponents.
{: .fs-5 }

---

## Objects
{: .no_toc}

### Datacomponent

Path | JSON Type | Format | Description
---- | ---- | ------ | -----------
`id` | `string` | Version 4 UUID | The datacomponent ID
`created` | `string` | ISO 8601 timestamp | When the datacomponent was created
`lastModified` | `string` | ISO 8601 timestamp | When the datacomponent was last modified
`name` | `string` | | The datacomponent name
`dataPlugin` | `string` | | Create / update with [dataplugin](dataplugins#dataplugin) `fullyQualifiedName`
`properties` | `object` | [`Properties`](#properties) | The datacomponent properties, defined by the [dataplugin](dataplugins) [`settings`](dataplugins#setting)

{% include snippets/api/datacomponents/view-a-datacomponent/response-body.md %}

### Properties

For each setting `s` in the [dataplugin](dataplugins) [`settings`](dataplugins#setting):

Path | Type | Description
---- | ---- | -----------
`s.name` | `s.kind` | Refer to `s.description`

---

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-all-datacomponents-in-a-workspace.md %}
{% include {{ page.components }}/view-a-datacomponent.md %}
{% include {{ page.components }}/initialise-a-new-datacomponent-in-a-workspace.md %}
{% include {{ page.components }}/create-or-update-a-datacomponent-in-a-workspace.md %}
{% include {{ page.components }}/update-a-datacomponent.md %}
{% include {{ page.components }}/delete-a-datacomponent.md %}
