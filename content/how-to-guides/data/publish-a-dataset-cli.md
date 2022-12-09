---
title: Publish a Dataset (CLI)
permalink: /how-to-guides/data/publish-a-dataset-cli
parent: Data
grand_parent: Tutorials
nav_order: 4
---

# {{page.title}}

- Time required: _5 minutes_

---

## Prerequisites

You must have already:

- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.matatika.links.app}}) or API

---

## Introduction

Matatika provides an easy-to-use client library for interfacing with the API via a Python script, Jupyter Notebook, or the command line. This example will cover the use of the client library as a command line utility.

To install from PyPi, simply run:

```bash
pip install matatika
```

---

## Dataset File Preparation

As a command line utility, the client library can publish datasets from a YAML file. This YAML file could be managed in a source control repository, such as GIT, and automated in a DevOps or DataOps pipeline. To keep things simple, we will be publishing from the command line with the same dataset as in [Publishing Your First Dataset Using the Matatika API]({{site.baseurl}}/how-to-guides/data/publish-a-dataset-cli).

The dataset file needs to adhere to the following YAML format:

```yaml
version: datasets/v0.2
title: Planet Orbits in Our Solar System
questions: How many Earth-years does it take for Jupiter to orbit the sun?
description: |-
  #Planet Orbits
  Sun orbit data for all planets within our solar system.
  *Yes, Pluto is included!*
metadata: |-
  {
    "name": "planet",
    "label": "Bar chart global link to dataset", 
    "related_table": {
      "columns": [
        {"name": "name", "label": "Planet Name", "description": "Planet Name"}
      ], 
      "aggregates": [
        {"name": "orbitduration", "label": "Orbit Duration (Earth Years)", "description": "Orbit Duration (Earth Years)"}
      ]
    }
  }
rawData: |-
  [
    {"planet.name": "Mercury", "planet.orbitdistance": 0.3336, "planet.orbitduration": 0.25},
    {"planet.name": "Venus", "planet.orbitdistance": 0.63, "planet.orbitduration": 0.5833},
    {"planet.name": "Earth", "planet.orbitdistance": 0.8708, "planet.orbitduration": 1},
    {"planet.name": "Mars", "planet.orbitdistance": 1.3242, "planet.orbitduration": 1.9167},
    {"planet.name": "Jupiter", "planet.orbitdistance": 4.5287, "planet.orbitduration": 11.8333},
    {"planet.name": "Saturn", "planet.orbitdistance": 8.2997, "planet.orbitduration": 29.5},
    {"planet.name": "Uranus", "planet.orbitdistance": 16.703, "planet.orbitduration": 84.0833},
    {"planet.name": "Neptune", "planet.orbitdistance": 26.1883, "planet.orbitduration": 164.9167},
    {"planet.name": "Pluto", "planet.orbitdistance": 33.8475, "planet.orbitduration": 248.0833}
  ]
visualisation: '{"chartjs-chart": {"chartType": "bar"}}'
```

Here, the `datasets` key can assume a value of multiple datasets. In this example, the `planet-orbits` entry forms a partial [Dataset]({{site.baseurl}}/api/resources/datasets#dataset) schema, with the key used as the `alias` and the value containing other relevant schema entries.

You can read more about the YAML format and its syntax [here](https://yaml.org/).

---

## Configuration

Once installed, the first thing we need to do is create a new context. Grab an [API token]({{site.app_keys_url}}) from the Matatika app and run:

```bash
matatika context create $CONTEXT_NAME -a $AUTH_TOKEN
matatika context use $CONTEXT_NAME
matatika context default
```

```
CONTEXT NAME    example-context-1                                               
AUTH TOKEN      eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InMyR2RKS01LUXFwalh…
ENDPOINT URL    https://catalog.matatika.com/api                                
WORKSPACE ID    None
```

This will create the context `$CONTEXT_NAME` with an `AUTH TOKEN` value of `$AUTH_TOKEN`, set it as the default context, and then print out the default context as a formatted table. You will notice that the `ENDPOINT URL` is populated with the production Matatika API URL by default. If required, this can be changed using the `-e` option when either creating a new context or updating the default context.

Once a default context has been set, verify everything is working by running the `profile` command. If successfully, this will state the profile ID and name of the authenticated user:

```bash
matatika profile
```

```
ID      auth0|a1b2c3d4e5f6g7h8i9j10k11
NAME    example@matatika.com
```

Next, we need to select a workspace which we will publish our dataset into. Invoke the `list` command with the `workspaces` sub-command to print out a list of workspaces the authenticated user is a member of:

```bash
matatika list workspaces
```

```
WORKSPACE ID                            NAME
ce21a13b-6d6b-42a6-bab7-4df1ae2b0fca    Example Workspace 1
84e8f833-4b7a-48dd-a85e-733e702ea4eb    Example Workspace 2
24ec305c-af62-44e3-9312-e97da942fc1c    Example Workspace 3

Total workspaces: 3
```

From here, copy the corresponding ID of the workspace you wish to publish your dataset into. Update the default context with the `-w` option to set a `WORKSPACE ID` value:

```bash
# use Example Workspace 1
matatika context update -w ce21a13b-6d6b-42a6-bab7-4df1ae2b0fca
matatika context default
```

```
CONTEXT NAME    example-context-1                                               
AUTH TOKEN      eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InMyR2RKS01LUXFwalh…
ENDPOINT URL    https://catalog.matatika.com/api                                
WORKSPACE ID    ce21a13b-6d6b-42a6-bab7-4df1ae2b0fca
```

## Publishing a Dataset

All that's left to do now is actually publish the dataset file we assembled before. With the `publish` command, specify the path to the file as an argument:

```bash
matatika publish dataset.yaml
```

All done! If everything was set up correctly, the utility should response with a success message and a list of the published datasets:

```
Successfully published 1 dataset(s)

DATASET ID                              ALIAS            TITLE                                STATUS
de5b4645-bf63-4090-a43d-e872fd0a010e    planet-orbits    Planet Orbits in Our Solar System    NEW
```
