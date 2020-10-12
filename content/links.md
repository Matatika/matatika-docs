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

## Item Relations
The following item link relations accept a <span>GET</span>{:.label .label-GET} request and return the respective resource representation. Expect `200 OK` to indicate the resource was successfully returned.
- `profile`
- `workspace`
- `invitation`
- `member`
- `dataset`
- `channel`
- `comment`

## Collection Relations
The following collection link relations accept a <span>GET</span>{:.label .label-GET} request and return the respective resource representation. Expect `200 OK` to indicate the resource was successfully returned.

### Paging
Collection link relations accept paging parameters in a query to modify the response payload dimensions.

Parameter | Description | Query Parameter Syntax | Example
--- | --- | --- | ---
`page` | The page of the collection | `page={page-number}` | `?page=1`
`size` | The number of elements to display per page | `size={number-of-elements}` | `?size=20`

- `profiles`
- `workspaces`
- `invitations`
- `members`
- `datasets`
- `channels`
- `comments`

---

## `self`
Make a <span>GET</span>{:.label .label-GET} request to this link to return the current resource. Expect `200 OK` to indicate the resource was successfully returned.

## `search`
Make a <span>GET</span>{:.label .label-GET} request to this link to a return a filtered view of the current resource. Expect `200 OK` to indicate the resource was successfully returned.

### Filters
A `search` link relation accepts filtering parameters in a query to modify the response payload content.

Filter Type | Query Parameter Syntax | Description | Example
--- | --- | --- | ---
Free text | `{free-text}` | The free text to filter by | `?=data%20insights`
Channel | `in:{channel-name}` | The channel to filter by | `?=in:matatika-limited`
Tag | `tag:{tag-name}` | The tag to filter by | `?=tag:jupyternotebook`

The Matatika API supports multiple query filtering parameters of the same type. Different filtering parameters - as well as [paging parameters](#paging) - can be used together to form complex queries. 

## `make-default`
Make a <span>POST</span>{:.label .label-POST} request to this link to set a particular resource within a collection as default. Expect `200 OK` to indicate the resource was successfully set as default.

## `new`
Make a <span>POST</span>{:.label .label-POST} request to this link to initialise a new resource. Expect `200 OK` to indicate the resource was successfully initialised.

## `publish`
Make a <span>POST</span>{:.label .label-POST} request to this link to publish data into a resource. Expect `201 Created` or `200 OK` to indicate the resource was successfully published.

## `add`
Make a <span>PUT</span>{:.label .label-PUT} request to this link to add a new resource. Expect `200 OK` to indicate the resource was successfully added.

## `create`
Make a <span>PUT</span>{:.label .label-PUT} request to this link to create a new resource. Expect `201 Created` or `202 Accepted` to indicate the resource was successfully created.

## `update`
Make a <span>PUT</span>{:.label .label-PUT} request to this link to update a resource. Expect `200 OK` to indicate the resource was successfully updated.

## `edit`
Make a <span>PATCH</span>{:.label .label-PATCH} request to this link to edit a resource. Expect `200 OK` to indicate the resource was successfully edited.

## `cancel` 
Make a <span>DELETE</span>{:.label .label-DELETE} request to this link to cancel pending access to a resource. Expect `204 No Content` to indicate pending access to the resource was successfully cancelled.

## `delete`
Make a <span>DELETE</span>{:.label .label-DELETE} request to this link to delete a resource. Expect `204 No Content` to indicate the resource was successfully deleted.
