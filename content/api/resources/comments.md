---
layout: default
title: Comments
permalink: /api/resources/comments
parent: Resources
grand_parent: API
nav_order: 7
components: request-md-components/comments
---

# {{page.title}}

Comments aid conversation and collaboration around workspace datasets. Comments can be made on datasets, or other comments to form threads.
{: .fs-5 }

---

## Objects
{: .no_toc}

### Comment

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The comment ID
`message` | `String` | | The comment message
`likeCount` | `Integer` | Unsigned | The number of likes the comment has received
`likedByProfiles` | `Array` of [`Member`](workspaces#member) | | The workspace members that have liked the comment
`created` | `String` | ISO 8601 timestamp | Timestamp denoting when the comment was created
`lastModified` | `String` | ISO 8601 timestamp | Timestamp denoting when the comment was last modified
`from` | [`Member`](members#member) | | The comment author
`commentCount` | `Integer` | Unsigned | The number of replies the comment has received
`datasetId` | `String` | Version 4 UUID | The ID of the dataset comment subject
`parentId` | `String` | Version 4 UUID | The ID of the parent comment

{% include snippets/api/comments/view-a-comment/response-body.md %}

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
