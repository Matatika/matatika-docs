---
layout: default
title: Comments
permalink: /resources/comments
parent: Resources
nav_order: 7
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
`message` | `String` | The comment message
`likeCount` | `Integer` | The number of likes the comment has received
`likedByProfiles` | `Array` | A collection of [Member objects](workspaces#member-object) that have liked the comment
`created` | `String` | Timestamp denoting when the comment was created
`lastModified` | `String` | Timestamp denoting when the comment was last modified
`from` | [`Member object`](members#member-object) | The comment author
`commentCount` | `Integer` | The number of replies the comment has received
`datasetId` | `String` | The ID of the dataset comment subject

### Example Resource

GET
{:.label .label-GET}

/api/comments/{comment-id}
{:.path .path-GET}

{% include snippets/comments/view-a-comment/response-body.md %}

---

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-all-comments-on-a-dataset.md %}
{% include {{ page.components }}/view-a-comment.md %}
{% include {{ page.components }}/view-the-edit-history-of-a-comment.md %}
{% include {{ page.components }}/view-all-replies-to-a-comment.md %}
{% include {{ page.components }}/initialise-a-comment-on-a-dataset.md %}
{% include {{ page.components }}/initialise-a-reply-to-a-comment.md %}
{% include {{ page.components }}/create-a-comment.md %}
{% include {{ page.components }}/update-a-comment.md %}
{% include {{ page.components }}/record-a-like-of-a-comment.md %}
{% include {{ page.components }}/remove-a-like-from-a-comment.md %}
{% include {{ page.components }}/delete-a-comment.md %}
