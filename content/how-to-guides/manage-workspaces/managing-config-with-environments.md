---
title: Managing Config with Environments
permalink: /how-to-guides/manage-workspaces/managing-config-with-environments
parent: Manage Workspaces
grand_parent: How-To Guides
nav_order: 2

---

# {{page.title}}

*Time required: **5 minutes***

---

## Prerequisites
You must have already:

- Signed up for a Matatika account

---

## Introduction
Workspaces are backed by [environments](https://docs.meltano.com/concepts/environments){:target="_blank"} - a Meltano concept controlled configuration to be separated into different namespaces. In a workspace, the project component configuration that is loaded is dictated by its default environment. The following environments are provided when a workspace is created:

- `dev` (default)
- `staging`
- `prod`

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

When the workspace default environment is set to `dev`:
- `client_id` of `39Pu9tTomnTv594VAFYnmRvkEpSlI7a6` (from `dev` environment)
- `domain` of `matatika-staging.eu.auth0.com` (from base `tap-auth0` definition)

When the workspace default environment is set to `staging`:
- `client_id` of `4Zd5QXqHKNoKq4ySx8CP1UBm5eIUgh7t` (from `staging` environment)
- `domain` of `matatika-staging.eu.auth0.com` (from base `tap-auth0` definition)

When the workspace default environment is set to `prod`:
- `client_id` of `u4kcVHKUD9lkbUbXA3eXCt88scStaqHM` (from `prod` environment)
- `domain` of `matatika.eu.auth0.com` (from `prod` environment)

## Switching environments
The default environment can be switched in the UI from the workspace settings, or updated in the repository `workspace.yml` directly. 

Updating the default environment will load the corresponding environment configuration for components from the `meltano.yml`. As a result, the runtime configuration of pipelines referencing these components will change - the pipline 'Environment' tab can be used to verify this.

---
