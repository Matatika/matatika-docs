---
layout: default
title: Invitations
permalink: /endpoints/invitations
parent: Endpoints
nav_order: 3
---

# {{page.title}}
{: .no_toc }

#### Table of Contents
{: .no_toc }

- TOC
{: toc }

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