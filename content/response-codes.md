---
layout: default
title: Response Codes
permalink: /response-codes
---

# {{page.title}}

Status Code | Text | Description
----------- | ---- | -----------
200 | *OK* | The request was accepted and data was returned.
201 | *Created* | The request was accepted and new data was added.
202 | *Accepted* | The request was accepted and will be processed. New data will be added once processing is complete.
400 | *Bad Request* | The request body contained malformed content of type `application/hal+json`.
401 | *Unauthorized* | The request does not have a valid API token.
403 | *Forbidden* | The request has a valid API token, but is not permitted.
404 | *Not Found* | The request URI is invalid.
405 | *Method Not Allowed* | The request HTTP method is not supported by the endpoint.
503 | *Service Unavailable* | The API has encountered an error. Try again later.
