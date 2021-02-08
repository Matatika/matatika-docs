---
layout: default
title: Jobs
permalink: /resources/jobs
parent: Resources
nav_order: 13
components: request-md-components/jobs
---

# {{page.title}}

A job is an executing instance of a [pipeline](pipelines) that carries out the [ELT](https://en.wikipedia.org/wiki/Extract,_load,_transform) process for the configured [datasource](datasources). Jobs can be run manually or on a defined schedule, to inject data into a workspace either instantly or periodically. Only a single job can be run at a time for a given pipeline. 

---

## Example Resource
{: .no_toc }

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

{% include snippets/api/jobs/view-a-job/response-body.md %}

---

## Objects
{: .no_toc}

### Job

Path | Type | Description | Behaviour
---- | ---- | ----------- | -----
`id` | `String` | The job ID | Always supplied
`exitCode` | `Integer` | The job exit code | Always supplied
`taskName` | `String` | The job name | `null` unless the associated request was made with the `enable-task-details` header with a value of `true`
`exitMessage` | `String` | The job exit message | `null` unless the associated request was made with the `enable-task-details` header with a value of `true`
`arguments` | `Array` of `String` | The job arguments | `null` unless the associated request was made with the `enable-task-details` header with a value of `true`
`startTime` | `String` | Timestamp denoting when the job run started | `null` unless the associated request was made with the `enable-task-details` header with a value of `true`
`endTime` | `String` | Timestamp denoting when the job run ended | `null` unless the associated request was made with the `enable-task-details` header with a value of `true`
`errorMessage` | `String` | The job error message | `null` unless the associated request was made with the `enable-task-details` header with a value of `true`

---

#### Requests

- TOC
{: toc }

---

{% include {{page.components}}/view-all-running-or-completed-jobs-for-a-workspace.md %}
{% include {{page.components}}/view-all-running-or-completed-jobs-for-a-pipeline.md %}
{% include {{page.components}}/view-a-job.md %}
{% include {{page.components}}/view-the-logs-of-a-job.md %}
{% include {{page.components}}/start-a-job-from-a-pipeline.md %}
{% include {{page.components}}/stop-a-job.md %}
