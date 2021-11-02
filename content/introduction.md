---
layout: default
title: Introduction
permalink: /introduction
nav_order: 1
---

# {{page.title}}


***Matatika is a private data collaboration platform***. Typical end users of the *Matatika App* are internal team members or customers who collaborate through private, invite only, [workspaces]({{site.baseurl}}/glossary#workspace).

The *Matatika Platform* is primarily managed by Data Scientists and Analysts who need an out of the box solution to:

- Import and store large amounts of data
- Process and produce real-time business intelligence
- Share or Embed data in other Apps through an API
- Collaborate on insights in a Mobile App


With the Matatika Platform, you provision a [Modern Data Stack](#modern-data-stack) within minutes and customise the platform with code according to your own [Data Ops](#data-ops) methodology. Since we've taken care of the platform and get you started instantly, you spend more time developing insights, and less time dealing with infrastructure.


## Why Matatika?

As a data scientist or analyst, implementing a business intelligence solution or a customer-facing analytics portal, it is very likely you'll face some of the following challenges.

1. ***Time and Cost.*** A bespoke solution will generally require full time engineers and maintenance, long after the initial project is over. The team will procure cloud resources (compute and databases), and build or buy analytics and visualisation platforms. Unfortunately, it is all too common that the project will take longer than you expect, cost more than you expect, and the maintenance and upgrades never stop. *You need a subscription solution now!*
2. ***Scalability.*** Often a business intelligence / data project starts by collecting a small amount of data. Perhaps in a spreadsheet. Over time, the requirements grow, the business value grows, and the data grows. At some point, the initial solution can't cope and in a worst case scenario your whole business depends on those results. *You need a solution that scales with your business.*
3. ***Performance.*** Whether you have an aging legacy software solution - or an, at one time modern, bespoke solution - your business and customers will inevitably demand that information faster. You spend an increasing amount of your data teams time simply managing infrastructure. *You need a data solution, not an development and infrastructure team.*
4. ***Flexibility.*** A shiny, no code platform seems appealing compared to a bespoke solution. It's rapid, but ultimately has limited data sources or capabilities. *You need an open solution that is fully customisable and can be deployed partly or completely by your own team if you need to.*

Matatika has assembled the best of breed, open source components into a fully managed environment so you can [Sign Up]({{site.www_url}}/try-buy) and deploy your solution in minutes, with full confidence that:

- the underlying [Data Store]({{site.baseurl}}/glossary#data-store) scales to billions of rows; 
- the [multi-level aggregation]({{site.baseurl}}/glossary#transforms) and caching architecture is capable of performing well for most business intelligence use cases; 
- change is expected and all configuration to collect, process, and visualize data from [300+ data sources]({{site.baseurl}}/glossary#data-source) is managed in code through a [Git Configuration Repository]({{site.baseurl}}/glossary#configuration-repository)

Leveraging cloud-native and open source technologies ensures our Community is never constrained by storage, compute, or even us as the software vendor.


## Modern Data Stack

There are many opinions on the "Modern Data Stack"; frankly one size cannot fit both Google scale and a five person startup. At Matatika, we have selected components that we believe provide you the best combination of ***Scalability***, ***Performance***, ***Flexibility*** and lowest total cost of ownership if you decide to host these yourself at any point in the future.

### Extraction

[Meltano](https://meltano.com/) is primarily used to manage the data extraction in your Matatika [workspace]({{site.baseurl}}/glossary#workspace). Matatika are active contributors to Meltano and will continue to invest in the technologies that advance our customers ability to implement [Data Ops](#data-ops) extraction methodologies.

### Warehousing

[PostgreSQL](https://www.postgresql.org/) is the default data storage technology in your in your Matatika [workspace]({{site.baseurl}}/glossary#workspace). Data technologies will to continue to advance and therefore we believe it is vital your stack be database agnostic. Currently SQL with ODBC / JDBC are the most widely adopted business intelligence data interfaces; the Matatika Platform supports any JDBC compliant database or serverless data warehouses such as Google BigQuery or AWS Athena.

### Transformation

[dbt](https://www.getdbt.com/) is the default transformation technology in your in your Matatika [workspace]({{site.baseurl}}/glossary#workspace). SQL based transformations in code and testing considerations by design, provides the fundamentals required to support [Data Ops](#data-ops) methodologies at the transformation layer. The Matatika Platform is able to execute any transformation technology in isolated containers.

### Orchestration

[Spring Cloud Dataflow](https://spring.io/projects/spring-cloud-dataflow) is the main orchestration technology in your Matatika [workspace]({{site.baseurl}}/glossary#workspace). The Matatika Platform takes care of scheduling, log collection, and credential management with isolated containers for all workspace jobs.

### Catalog

Your datasets and models are published, indexed and searchable via the Matatika [API]({{site.baseurl}}/api/resources), [CLI]({{site.baseurl}}/cli), or [Configuration Repository](#configuration-repository). The Matatika Platform provides a personalised feed of insights by scoring your datasets by usage.

### Analytics

[Jupyter Notebooks](https://jupyter.org/) and [visualisations](http://0.0.0.0:4000/docs/data-visualisation/) in [ChartJS](https://www.chartjs.org/) and [Google Charts](https://developers.google.com/chart) formats can be published to your [workspace]({{site.baseurl}}/glossary#workspace). The Matatika dataset format gives you full control of the chart visualisation as code, supporting [Data Ops](#data-ops) through to the analytics layer of your stack.


![Modern Data Stack]({{site.baseurl}}/assets/img/ModernDataStack.png)



## Data Ops

Your Matatika [workspace]({{site.baseurl}}/glossary#workspace) is a unique Business Intelligence as Code solution. All artifacts are managed in a [Git Configuration Repository](#configuration-repository) with credentials securely stored inside the platform. We enable you to deliver a robust analytics solution without restricting you to any specific Data Ops methodology.

![Data Ops]({{site.baseurl}}/assets/img/DataOps.png)


