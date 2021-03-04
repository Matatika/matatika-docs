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

## Objects
{: .no_toc}

### Datasource

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The datasource ID
`name` | `String` | | The datasource name
`description` | `String` | | A description of the datasource
`repositoryUrl` | `String` | URL | The datasource repository URL
`settings` | `Array` of [`Setting`](#setting) objects | | The datasource settings

{% include snippets/api/datasources/view-a-datasource-available-to-a-workspace/response-body.md %}

### Setting

Path | Type | Format | Description
---- | ---- | ------ | -----------
`name` | `String` | | The setting name
`value` | `String` | | The setting default value
`label` | `String` | | The setting label
`protected` | `Boolean` | | The setting protection status
`kind` | `String` | [Setting Kind](#setting-kind) | The setting kind
`description` | `String` | | A description of the setting
`placeholder` | `String` | | The setting placeholder text
`envAliases` | `Array` of `String` objects | | Environment variable aliases for the setting
`documentation` | `String` | URL | The setting documentation URL
`oauth` | [`OAuth`](#oauth) object | | The setting OAuth configuration
`env` | `String` | | 

### OAuth

Path | Type | Format | Description
---- | ---- | ------- | -----------
`provider` | `String` | | The OAuth provider

## Formats
{: .no_toc}

### Setting Kind
{: .d-inline-block }

`String`
{: .float-right .mt-5 }

Value | Description
----- | -----------
`STRING` | String setting
`INTEGER` | Integer setting
`PASSWORD` | Password setting 
`HIDDEN` | Hidden setting
`BOOLEAN` | Boolean setting
`DATE_ISO8601` | ISO 8601 date setting
`EMAIL` | Email setting
`OAUTH` | OAuth setting
`FILE` | File setting
`ARRAY` | Array setting

---

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-all-datasources.md %}
{% include {{ page.components }}/view-all-datasources-available-to-a-workspace.md %}
{% include {{ page.components }}/view-a-datasource-available-to-a-workspace.md %}
{% include {{ page.components }}/initialise-a-new-datasource.md %}
{% include {{ page.components }}/create-a-datasource.md %}
{% include {{ page.components }}/update-a-datasource.md %}
{% include {{ page.components }}/delete-a-datasource.md %}
