---
title: Managing Environment Configuration
permalink: /how-to-guides/manage-workspaces/managing-environment-configuration
parent: Manage Workspaces
grand_parent: How-To Guides
nav_order: 2

---

# {{page.title}}

*Time required: **10 minutes***

---

## Prerequisites
You must have already:

- Signed up for a Matatika account

---

##  Introduction
Workspaces are backed by [environments](https://docs.meltano.com/concepts/environments) - a Meltano concept allowing configuration to be separated into different namespaces. In a workspace, the configuration pipelines run with can be controlled by its active environment. The following environment are provided when a workspace is created:

- `dev` (default active environment)
- `staging`
- `prod`

---

## Configuration in `meltano.yml`
Consider the following example with `tap-auth0`:

```yml
version: 1
default_environment: dev
project_id: 8c07f654-6908-4b51-acef-8de3d37aecac
environments:
- name: dev
  config:
    plugins:
      extractors:
      - name: tap-auth0
        config:
          client_id: 39Pu9tTomnTv594VAFYnmRvkEpSlI7a6
- name: staging
  config:
    plugins:
      extractors:
      - name: tap-auth0
        config:
          client_id: 4Zd5QXqHKNoKq4ySx8CP1UBm5eIUgh7t
- name: prod
  config:
    plugins:
      extractors:
      - name: tap-auth0
        config:
          client_id: u4kcVHKUD9lkbUbXA3eXCt88scStaqHM
          domain: matatika.eu.auth0.com
plugins:
  extractors:
  - name: tap-auth0
    config:
      domain: matatika-staging.eu.auth0.com
```

When the workspace active environment is set to `dev`:
- `client_id` of `39Pu9tTomnTv594VAFYnmRvkEpSlI7a6` (from `dev` environment)
- `domain` of `matatika-staging.eu.auth0.com` (from base `tap-auth0` definition)

When the workspace active environment is set to `staging`:
- `client_id` of `4Zd5QXqHKNoKq4ySx8CP1UBm5eIUgh7t` (from `staging` environment)
- `domain` of `matatika-staging.eu.auth0.com` (from base `tap-auth0` definition)

When the workspace active environment is set to `prod`:
- `client_id` of `u4kcVHKUD9lkbUbXA3eXCt88scStaqHM` (from `prod` environment)
- `domain` of `matatika.eu.auth0.com` (from `prod` environment)

---

## Environments for DataOps
Using environments and multiple workspaces, it is possible to implement a development-to-production DataOps workflow for a project:

1. Create a workspace for development (e.g. `(dev) My Workspace`)
1. Create another workspace for pre-production (e.g. `(staging) My Workspace`)
1. Set the pre-production workspace active environment to `staging`
1. Create another workspace for production (e.g. `My Workspace`)
1. Set the production workspace active environment to `prod`
1. Make changes and test in the development workspace
1. When ready, merge changes from the development workspace into the pre-production workspace (i.e. `git merge`)
1. When ready, merge changes from the pre-production workspace into the production workspace
