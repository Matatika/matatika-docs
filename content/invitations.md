---
layout: default
title: Invitations
permalink: /invitations
nav_order: 6
---

# {{page.title}}

<!-- ================ -->
## View all sent invitations
GET
{:.label .label-GET}

/api/invitations
{:.path .path-GET}

Returns all invitations sent by the user

<!-- ================ -->


<!-- ================ -->
## View all received invitations
GET
{:.label .label-GET}

/api/invitations?=email={user-email}
{:.path .path-GET}

Returns all invitations intended for the user

<!-- ================ -->