---
title: Running Pipelines with a Custom Image
permalink: /how-to-guides/manage-workspaces/running-pipelines-with-a-custom-image
parent: Manage Workspaces
grand_parent: How-To Guides
nav_order: 4
---

# {{page.title}}

*Time required: **10 minutes***

---

## Prerequisites

You must have already:

- Signed up for a Matatika account
- Deployed the Matatika platform in your own cloud

---

## Introduction

A custom pipelines image allows customisation of the pipeline runtime environment for a workspace. By default (no custom image set), pipelines will run using the default base image - this usually involves cloning the repository, installing plugins and executing `meltano run` within the container. You might want to use a custom pipelines image to, for example, delegate these runtime setup tasks to a container image build, which can significantly speed up pipeline execution times - or perhaps something else completely custom!

## Configure the catalog container registry

Set `MATATIKA_DATAFLOW_DOCKERREGISTRY` in the catalog deployment environment to point at a container registry where your custom image exists:

```sh
# private registry
MATATIKA_DATAFLOW_DOCKERREGISTRY=matatika.azurecr.io

# Docker Hub
MATATIKA_DATAFLOW_DOCKERREGISTRY=docker.io
```

## Configure a `Dockerfile` for your workspace

The key requirement for a custom pipelines images is the workspace must be configured as the image working directory.

```
RUN mkdir workspace
WORKDIR /workspace

COPY . .
```

### Examples

Pre-installed plugins

```
FROM matatika.azurecr.io/matatika/matatika-catalog-shelltask:latest-dev

RUN mkdir workspace
WORKDIR /workspace

COPY . .

RUN meltano install

# cleanup pip temporary files to reduce image size
RUN rm -rf ~/.cache
```

> From [`example-github-analytics`](https://github.com/Matatika/example-github-analytics/blob/2b0966d9f2fd5b6563d013edde65b8b5a98fe7bc/Dockerfile)

### Build and push your workspace pipelines image

```
docker build -t <registry host>/<image name> .
docker push <registry host>/<image name>
```

where `<image name>` should match `pipelines_image` from your `workspace.yml`:

```yml
pipelines_image: <image name>
```

> See `example-github-analytics` [`workspace.yml`](https://github.com/Matatika/example-github-analytics/blob/2b0966d9f2fd5b6563d013edde65b8b5a98fe7bc/workspace.yml#L3) and [`azure-pipelines.yml`](https://github.com/Matatika/example-github-analytics/blob/2b0966d9f2fd5b6563d013edde65b8b5a98fe7bc/azure-pipelines.yml#L11-L15) for a working example

---
