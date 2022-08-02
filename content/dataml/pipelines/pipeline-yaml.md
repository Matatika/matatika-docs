---
title: Pipeline YAML
permalink: /dataml/pipelines/pipeline-yaml
nav_order: 1
parent: Pipelines
grand_parent: DataML
---

# {{page.title}}

---

Use the Matatika pipeline YAML to orchestrate data actions in your workspace as code.
{: .fs-5 }

Pipeline definitions are stored as YAML file format, you can read more about the YAML format and its syntax [here](https://yaml.org/){:target="_blank"}.
{: .fs-5 }

---

### Pipeline Layout

```yaml
version: pipelines/v0.1
data_components:
- <An array of data components>
actions:
- <An array of actions to be executed>
schedule: <A cron schedule>
```

### Pipeline Example

```yaml
version: pipelines/v0.1
data_components:
- notebook
- sendgrid
actions:
- notebook:run-convert
- sendgrid:send
schedule: 0 0 0 * * 0
```

### Dataset Key Information

Key               | Datatype | Information
----------------- | -------- | -----------
`version`         | `String` | The version idenitifies this artifact type. 
`data_components` | `String` | The meltano.yml data component name.
`actions`         | `String` | The Meltano tasks that will be run.
`schedule`        | `String` | The automated schedule for your pipeline, in a standard cron format with seconds.  '0 0 9-17 * * MON-FRI' on the hour nine-to-five weekdays.


---

Further Reading: 

- [API Pipelines]({{site.baseurl}}/api/resources/pipelines)
