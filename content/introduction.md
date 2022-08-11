---
title: Introduction
permalink: /introduction
nav_order: 1
---

# {{page.title}}

***Matatika is a private data collaboration platform***.

The *Matatika App* provides collaboration through private, invite only [workspaces](glossary#workspace) which you set up and share with internal teams or customers.

The *Matatika Platform* is managed by data scientists and analysts who need an out-of-the-box solution to:

- Import and store large amounts of data
- Process and produce real-time business intelligence
- Share or embed data in other apps through an API
- Collaborate on insights in a native mobile app

With the *Matatika Platform*, you provision a [Modern Data Stack](#modern-data-stack) within minutes and customise the platform with code according to your own [Data Ops](#data-ops) methodology. Since we've taken care of the platform and get you started instantly, you spend more time developing insights and less time dealing with infrastructure.

## Why Matatika?

As a data scientist or analyst, implementing a business intelligence solution or a customer-facing analytics portal, it is very likely you'll face some of the following challenges.

1. ***Time and Cost***

    A bespoke solution will generally require full-time engineers and maintenance, long after the initial project is over. The team will procure cloud resources (compute and databases), and build or buy analytics and visualisation platforms. Unfortunately, it is all too common that the project will take longer than you expect, cost more than you expect, and require constant maintenance and upgrades.

    *You need a subscription solution now!*

1. ***Scalability***

    Often a business intelligence/data project starts by collecting a small amount of data (e.g. in a spreadsheet). Over time, the project requirements grow, the business value grows, and the data grows. At some point, the initial solution will not be able to cope - in a worst-case scenario, your whole business would depend on those results.

    *You need a solution that scales with your business.*

1. ***Performance***

    Whether you have an aging legacy software solution or a previously modern, bespoke solution, your business and customers will inevitably demand information faster. You will spend an increasing amount of your data teams' time simply managing infrastructure.

    *You need a data solution - not a development and infrastructure team.*

1. ***Flexibility*** 

    A shiny, no-code platform can seem appealing compared to a bespoke solution. It's rapid, but ultimately has limited data sources or capabilities.

    *You need an open solution that is fully customisable and can be deployed partly or completely by your own team, if required.*

Matatika has assembled the best-of-breed, open-source components into a fully managed environment so you can [Sign Up]({{site.matatika.links.www}}/sign-up/) and deploy your solution in minutes, with full confidence that:

- the underlying [Data Store](glossary#data-store) scales to billions of rows
- the [multi-level aggregation](glossary#transforms) and caching architecture is capable of performing well for most business intelligence use-cases
- change is expected and all configuration to collect, process, and visualize data from [300+ data sources](glossary#data-source) is managed in code through a [Git Configuration Repository](glossary#configuration-repository)

Leveraging cloud-native and open-source technologies ensures our community is never constrained by storage, compute, or even us as the software vendor.

## Modern Data Stack

There are many opinions on the "Modern Data Stack" - frankly one size cannot fit both Google scale and a five-person startup. At Matatika, we have selected components that we believe provide you the best combination of ***Scalability***, ***Performance***, ***Flexibility*** and lowest total cost-of-ownership. Ultimately, our goal is to provide a modern data stack with No Limits.

### Extraction

[Meltano](https://meltano.com/){:target="_blank"} is primarily used to manage the data extraction in your Matatika [workspace](glossary#workspace). Matatika are active contributors to Meltano and will continue to invest in other technologies that advance our customers' ability to implement [Data Ops](#data-ops) extraction methodologies.

### Warehousing

[PostgreSQL](https://www.postgresql.org/){:target="_blank"} is the default data storage technology in your Matatika [workspace](glossary#workspace). Data technologies will continue to advance and therefore, we believe it is vital your stack be database agnostic. Currently, SQL with [ODBC](https://en.wikipedia.org/wiki/Open_Database_Connectivity){:target="_blank"}/[JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity){:target="_blank"} are the most widely adopted business intelligence data interfaces. The *Matatika Platform* supports any JDBC-compliant database or serverless data warehouses, such as Google BigQuery or AWS Athena.

### Transformation

[dbt](https://www.getdbt.com/){:target="_blank"} is the default transformation technology in your Matatika [workspace](glossary#workspace). SQL-based transformations in code and testing considerations by design, provide the fundamentals required to support [Data Ops](#data-ops) methodologies at the transformation layer. The *Matatika Platform* is able to execute any transformation technology in isolated containers.

### Orchestration

[Spring Cloud Dataflow](https://spring.io/projects/spring-cloud-dataflow){:target="_blank"} is the main orchestration technology in your Matatika [workspace](glossary#workspace). The *Matatika Platform* takes care of scheduling, log collection, and credential management with isolated containers for all workspace jobs.

### Catalog

Your datasets and models are published, indexed and searchable via the Matatika [API](api/resources/), [CLI](cli/), or [Configuration Repository](glossary#configuration-repository). The *Matatika Platform* provides a personalised feed of insights by scoring your datasets by usage.

### Analytics

[Jupyter Notebooks](https://jupyter.org/){:target="_blank"} and [visualisations](dataml/datasetml/charts) in [ChartJS](https://www.chartjs.org/){:target="_blank"} and [Google Charts](https://developers.google.com/chart){:target="_blank"} formats can be published to your [workspace](glossary#workspace). The Matatika dataset format gives you full control of the chart visualisation as code, supporting [Data Ops](#data-ops) through to the analytics layer of your stack.

![Modern Data Stack]({{site.baseurl}}/assets/img/ModernDataStack.png)

## Data Ops

Your Matatika [workspace](glossary#workspace) is a unique Business Intelligence as Code solution. All artifacts are managed in a [Git Configuration Repository](glossary#configuration-repository) with credentials securely stored inside the platform. We enable you to deliver a robust analytics solution without restricting you to any specific Data Ops methodology.

![Data Ops]({{site.baseurl}}/assets/img/DataOps.png)
