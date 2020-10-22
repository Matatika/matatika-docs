---
layout: default
title: Datasources
permalink: /resources/datasources
parent: Resources
nav_order: 11
components: request-md-components/datasources
---

# {{page.title}}

Datasources simply define a source of data from a given repository. Matatika provides a number of pre-configured platform-wide datasources out-the-box, as well as the ability to create custom datasources through the API. From these, [Pipeline]() jobs can be run to inject data into a workspace.
{: .fs-5 }

---

## Datasource Object
{: .no_toc}

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The datasource ID
`name` | `String` | The datasource name
`description` | `String` | A description of the datasource
`repositoryUrl` | `String` | A URL to the datasource repository

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-all-datasources.md %}
{% include {{ page.components }}/view-all-datasources-by-a-workspace.md %}
{% include {{ page.components }}/initialise-a-datasource.md %}
{% include {{ page.components }}/create-a-datasource.md %}
