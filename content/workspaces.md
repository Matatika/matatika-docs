---
layout: default
title: Workspaces
permalink: /workspaces
nav_order: 4
---

# Workspaces
Workspaces allow users to operate within isolated instances of the Matatika service. This is useful for seperating profiles based on the data they require access to.

## **GET** View workspaces


## **POST** Initialise a workspace
> *Only profiles with the relevant permissions may initialise workspaces.*


## **PUT** Create or modify a workspace
> *Only profiles with the relevant permissions may create or modify workspaces.*

### Request
#### Body
{% include snippets/workspaces/create-a-workspace/request-fields.md %}
{% include snippets/workspaces/create-a-workspace/request-body.md %}
#### CURL Example
{% include snippets/workspaces/create-a-workspace/curl-request.md %}
#### HTTP Example
{% include snippets/workspaces/create-a-workspace/http-request.md %}

### Response
#### Body
{% include snippets/workspaces/create-a-workspace/response-fields.md %}
{% include snippets/workspaces/create-a-workspace/response-body.md %}
#### Links
{% include snippets/workspaces/create-a-workspace/links.md %}


## **DELETE** Delete a workspace
> *Only profiles with the relevant permissions may delete workspaces.*


## **PATCH** Set a default workspace
A workspace can be set as default, which defines the environment the Matatika app will initially load for a given profile. The default workspace setting persists only for the profile that sets it.