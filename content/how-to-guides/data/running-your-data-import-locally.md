---
title: Running Your Data Import Locally
permalink: /how-to-guides/data/running-your-data-import-locally
parent: Data
grand_parent: Tutorials
nav_order: 6
---

# {{page.title}}

- Time required: *15 minutes*

---

## Prerequisites
You must have:

- Own or have administrative access to a workspace
- Git installed
- Python >=3.7 installed
- Meltano installed (virtual environment recommended)

---

## Introduction
Data import pipelines in Matatika workspaces are run using [Meltano](https://meltano.com/){:target="_blank"}. Each Matatika workspace is backed by a repository containing a Meltano project hosted on GitHub, which can easily be cloned locally in order to run data import pipelines external to the Matatika platform.

---

## Setup
1. Within the [Matatika app]({{site.matatika.links.app}}){:target="_blank"}, switch to the workspace that contains the data import pipeline you wish to run locally
1. Navigate to the workspace 'Settings' page and copy the repository URL
1. Clone the workspace to your local system
    ```
    git clone https://github.com/MatatikaBytes/example-workspace
    ```
1. Change into the cloned directory and create a new `.env` file
1. Head back to the Matatika app and navigate to the workspace `Lab` then `Pipelines` page, and expand the data import pipeline you wish to run locally
1. Select the 'Environment' tab and click the `.env` text field to copy the environment configuration 
1. Paste the copied environment configuration into the `.env` file you created earlier
    ```
    TAP_EXAMPLE_CLIENT_ID=clientid
    TAP_EXAMPLE_CLIENT_SECRET=clientsecret
    TAP_EXAMPLE_START_DATE=2022-01-01T00:00
    TARGET_EXAMPLE_HOST=example.host.com
    TARGET_EXAMPLE_PORT=1234
    TARGET_EXAMPLE_DB=db
    TARGET_EXAMPLE_SCHEMA=schema
    TARGET_EXAMPLE_USERNAME=username
    TARGET_EXAMPLE_PASSWORD=password
    ```

Your local workspace repository should now be set up similar to this one: [Github Example Link](https://github.com/Matatika/matatika-examples/tree/master/example_local_data_import_workspace){:target="_blank"}

## Running Locally
(activate your virtual environment if you are using one for Meltano)

1. Install the [extractor](https://meltano.com/docs/plugins.html#extractors){:target="_blank"}
    ```
    meltano install extractor tap-example
    ```
1. Install the [loader](https://meltano.com/docs/plugins.html#loaders){:target="_blank"}
    ```
    meltano install loader target-example
    ```
1. Run your data import pipeline
    ```
    meltano run tap-example target-example
    ```
