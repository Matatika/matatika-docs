---
layout: default
title: Running Your Pipeline Locally
permalink: /getting-started/running-your-pipeline-locally
parent: Getting Started
nav_order: 8
---

# {{page.title}}

- Time required: *15 minutes*

---

## Prerequisites

You must have:
- Access to your workspace and it's github repository.
- The ability to run pipelines within your workspace.

---

## Introduction

Pipelines in Matatika workspaces are run using Meltano. One of the many benefits of the way the Matatika workspaces are set up is that you can clone your workspace git repository and using Meltano locally, you can run and test your pipeline.

In this example we will use the Meltano extractor tap-spreadsheets-anywhere.

---

## Set Up

Before we can get your pipeline running locally we need a few things set up:
- You will need python 3 installed on your system. (Currently Meltano requires <3.9).
- You need a local installation of Meltano version 1.77.0, we reccommend using a virtual enviroment.
- You will need to have created a pipeline with the extractor tap-spreadsheets-anywhere. See [Creating a pipeline in your workspace](creating-a-pipeline-in-your-workspace)
- You need to have run a verify job on that pipeline within your workspace, and access to the output logs of that job.
- You need a local clone of your Matatika workspace git repo.

Using the output logs of the verify job you ran on your pipeline, copy all of the enviroment settings into a .env file at the top level of your workspace git repo.

Your `.env` file will look something like the following:

```bash
# Database connection details
PG_ADDRESS=address.com
PG_DATABASE=your_database
PG_USERNAME=your_username
PG_PASSWORD=your_password
PG_PORT=your_port
PG_SCHEMA=your_schema
# Tap settings
TAP_SPREADSHEETS_ANYWHERE_TABLES=link_to_csv_file
```

Things to note:

The lines in the `.env` file that start with a "#" are comments, just used here to help group related settings.

Some taps and loaders require a lot of extra enviroment variables to function correctly, make sure you copy them all into your `.env` file. Example are any enviroment variables relating to your tap's name, and settings starting with "DBT".

Activate your virtual enviroment if you are using one for Meltano, then run the command: `meltano install`

After all this set up your local workspace repo should look like this one: [Github Example Link](https://github.com/Matatika/matatika-examples/tree/master/example_local_pipeline_workspace)

---

## Running Your Pipeline Locally

Now you can run your pipeline:

- `meltano elt tap-name target-name`
