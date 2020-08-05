---
layout: default
title: Links
permalink: /links
nav_order: 8
---

# {{page.title}}

The Matatika API uses link relations to communicate the capabilites of our resources.  Where you see a link with one of the following relations, you can expect our API to act accordingly provided nothing has changed in the meantime.
{: .fs-5 }

---

## `self`
Make a <span>GET</span>{:.label .label-GET} request to this link to return the current resource. Expect `200 OK` to indicate the resource was successfully returned.

## `new`
Make a <span>POST</span>{:.label .label-POST} request to this link to initialise a new resource. Expect `200 OK` to indicate the resource was successfully initialised.

## `create`
Make a <span>PUT</span>{:.label .label-PUT} request to this link to create a new resource. Expect `201 Created` to indicate the resource was successfully created.

## `update`
Make a <span>PUT</span>{:.label .label-PUT} request to this link to update a resource. Expect `200 OK` to indicate the resource was successfully updated.

## `edit`
Make a <span>PATCH</span>{:.label .label-PATCH} request to this link to edit a resource. Expect `200 OK` to indicate the resource was successfully edited.

## `delete`
Make a <span>DELETE</span>{:.label .label-DELETE} request to this link to delete a resource. Expect `204 No Content` to indicate the resource was successfully deleted.
