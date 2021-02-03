---
layout: default
title: Pipelines
permalink: /resources/pipelines
parent: Resources
nav_order: 12
components: request-md-components/pipelines
---

# {{page.title}}

A pipeline is a workspace-specific configuration or definition for extracting, loading and transforming data from a given [datasource](datasources) - following the concept of [ELT](https://en.wikipedia.org/wiki/Extract,_load,_transform). Pipelines can be run as [jobs](jobs) to load data into a workspace.
{: .fs-5 }

---

#### Requests

- TOC
{: toc }

---

{% include {{page.components}}/view-all-pipelines-in-a-workspace.md %}
{% include {{page.components}}/view-a-pipeline.md %}
{% include {{page.components}}/initialise-a-pipeline-in-a-workspace.md %}
{% include {{page.components}}/create-or-update-a-pipeline-in-a-workspace.md %}
{% include {{page.components}}/delete-a-pipeline.md %}

#### See Also

- [View all running or completed jobs for a pipeline](jobs#view-all-running-or-completed-jobs-for-a-pipeline)
