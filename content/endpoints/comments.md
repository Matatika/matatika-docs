---
layout: default
title: Comments
permalink: /endpoints/comments
parent: Endpoints
nav_order: 6
components: request-md-components/comments
---

# {{page.title}}

Comments aid conversation and collaberation around workspace datasets. Comments can be made on datasets, or other comments to form threads.
{: .fs-5 }

---

## Comment Object
{: .no_toc}

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The comment ID
`message` | `String` | The comment messaged
`likeCount` | `Integer` | The number of likes the comment has received
`likedByProfiles` | `Array` | A collection of [Member objects](workspaces#member-object) that have liked the comment
`created` | `String` | Timestamp denoting when the comment was created
`lastModified` | `String` | Timestamp denoting when the comment was last modified
`from` | `JSON Object` | The comment author object
`from.id` | `String` | The comment author member ID
`frame.name` | `String` | The comment author member name
`commentCount` | `Integer` | The number of replies the comment has received
`datasetId` | `String` | The ID of the dataset comment subject

### Example Resource

GET
{:.label .label-GET}

/api/comments/{dataset-id}
{:.path .path-GET}

```
snippet placeholder
```

---

#### Requests

- TOC
{: toc }

---