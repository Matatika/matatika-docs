---
layout: default
title: Datasources
permalink: /resources/datasources
parent: Resources
nav_order: 11
components: request-md-components/datasources
---

# {{page.title}}

Datasources simply define a source of data from a given repository. Matatika provides a number of pre-configured platform-wide datasources out-the-box, as well as the ability to create custom datasources through the API. From these, [Pipeline](pipelines) jobs can be run to inject data into a workspace.
{: .fs-5 }

---

## Example Resource
{: .no_toc}

GET
{:.label .label-GET}

/api/datasource/{datasource-id}
{:.path .path-GET}

{% include snippets/api/datasources/view-a-datasource-by-a-workspace/response-body.md %}

## Objects
{: .no_toc}

### Datasource

Path | Type | Description
---- | ---- | -----------
`id` | `String` (parsed UUID) | The datasource ID
`name` | `String` | The datasource name
`description` | `String` | A description of the datasource
`repositoryUrl` | `String` (parsed URL) | The datasource repository URL
`settings` | `Array` of [`Setting`](#setting) objects | The datasource settings

### Setting

Path | Type | Description | Behaviour
---- | ---- | ----------- | -----------
`name` | `String` | The setting name
`value` | `String` | The setting default value
`label` | `String` | The setting label
`protected` | `Boolean` | The setting protection status
`kind` | [`Kind`](#kind) `String` | The setting kind | `Kind.STRING` if not specified
`description` | `String` | A description of the setting
`placeholder` | `String` | The setting placeholder text
`envAliases` | `Array` of `String` objects | Environment variable aliases for the setting
`documentation` | `String` (parsed URL) | The setting documentation URL
`oauth` | [`OAuth`](#oauth) object | The setting OAuth configuration
`env` | `String` |

#### Kind
- `"STRING"`
- `"INTEGER"`
- `"STRING"`
- `"PASSWORD"`
- `"HIDDEN"`
- `"BOOLEAN"`
- `"DATE_ISO8601"`
- `"EMAIL"`
- `"OAUTH"`
- `"FILE"`
- `"ARRAY"`

### OAuth

Path | Type | Description
---- | ---- | -----------
`provider` | `String` | The OAuth provider

---

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-all-datasources.md %}
{% include {{ page.components }}/view-all-datasources-by-a-workspace.md %}
{% include {{ page.components }}/view-a-datasource-by-a-workspace.md %}
{% include {{ page.components }}/initialise-a-datasource.md %}
{% include {{ page.components }}/create-a-datasource.md %}
