---
layout: default
title: Links
permalink: /api/links
parent: API
nav_order: 8
---

# {{page.title}}

The Matatika API uses link relations to communicate the capabilities of our resources.  Where you see a link with one of the following relations, you can expect our API to act accordingly provided nothing has changed in the meantime.
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
- `tag`
- `datasource`
- `pipeline`
- `job`
- `subscription`
- `notification`
- `apikey`

## Collection Relations
The following collection link relations accept a <span>GET</span>{:.label .label-GET} request and return the respective resource representation. Expect `200 OK` to indicate the resource was successfully returned.
- `profiles`
- `workspaces`
- `invitations`
- `members`
- `datasets`
- `channels`
- `comments`
- `tags`
- `datasources`
- `pipelines`
- `jobs`
- `subscriptions`
- `notifications`
- `news`
- `apikeys`

### Paging, Sizing and Sorting
Collection link relations accept paging, sizing and sorting query parameters, used to modify the dimensions of the response payload.

Query Parameter | Description | Syntax | Example
--------------- | ----------- | ------ | -------
`page` | The page of the collection | `page={page-number}` | `?page=1`
`size` | The number of elements to display per page | `size={number-of-elements}` | `?size=20`
`sort` | The property to sort the collection results by, in either ascending - `asc` - or descending - `desc` -  order | `sort={property-name},(asc|desc)` | `?sort=name,asc`

---

## `self`
Make a <span>GET</span>{:.label .label-GET} request to this link to return the current resource. Expect `200 OK` to indicate the resource was successfully returned.

## `search`
Make a <span>GET</span>{:.label .label-GET} request to this link to a return a filtered view of the current resource. Expect `200 OK` to indicate the resource was successfully returned.

### Filtering
A `search` link relation accepts the `q` query parameter, used to filter the content returned in the response payload. Filter definitions control the type of filtering applied.

#### Filter

Type | Description | Syntax | Example
---- | ----------- | ------ | -------
Free text | The free text to filter by | `{free-text}` | `?q=data%20insights`
Channel | The channel to filter by | `in:{channel-name}` | `?q=in:matatika-limited`
Tag | The tag to filter by | `tag:{tag-name}` | `?q=tag:jupyternotebook`

The Matatika API supports multiple filter definitions, including those of the same type:

```
?q=data%20insights in:matatika-limited tag:jupyternotebook`
```

```
?tag:ai tag:deeplearning tag:machinelearning
```

## `latest`
Make a <span>GET</span>{:.label .label-GET} request to this link to return the latest resource. Expect `200 OK` to indicate the resource was successfully returned.

## `make-default`
Make a <span>POST</span>{:.label .label-POST} request to this link to set a particular resource within a collection as default. Expect `200 OK` to indicate the resource was successfully set as default.

## `new`
Make a <span>POST</span>{:.label .label-POST} request to this link to initialise a new resource. Expect `200 OK` to indicate the resource was successfully initialised.

## `publish`
Make a <span>POST</span>{:.label .label-POST} request to this link to publish data into a resource. Expect `201 Created` or `200 OK` to indicate the resource was successfully published.

## `verify`
Make a <span>POST</span>{:.label .label-POST} request to this link to verify a resource. Expect `200 OK` to indicate the resource was successfully verified.

## `add`
Make a <span>PUT</span>{:.label .label-PUT} request to this link to add a new resource. Expect `200 OK` to indicate the resource was successfully added.

## `create`
Make a <span>PUT</span>{:.label .label-PUT} request to this link to create a new resource. Expect `201 Created` or `202 Accepted` to indicate the resource was successfully created.

## `update`
Make a <span>PUT</span>{:.label .label-PUT} request to this link to update a resource. Expect `200 OK` to indicate the resource was successfully updated.

## `withdraw` 
Make a <span>PUT</span>{:.label .label-PUT} request to this link to withdraw a resource. Expect `200 OK` to indicate the resource was successfully withdrawn.

## `edit`
Make a <span>PATCH</span>{:.label .label-PATCH} request to this link to edit a resource. Expect `200 OK` to indicate the resource was successfully edited.

## `delete`
Make a <span>DELETE</span>{:.label .label-DELETE} request to this link to delete a resource. Expect `204 No Content` to indicate the resource was successfully deleted.
