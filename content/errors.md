---
layout: default
title: Errors
permalink: /errors
nav_order: 7
---

# {{page.title}}

The Matatika API supports error handling of multiple failing fields, and will return a standard templated error response across different scenarios.
{: .fs-5 }

---

## API error
### Schema

Path | Type | Description
---- | ---- | -----------
`timestamp` | `String` | Timestamp denoting when the error was encountered
`status` | `Integer` | The error response code
`error` | `String` | The error response text
`errors` | `Array` | [Validation error object](#validation-error) collection
`message` | `String` | The error description
`path` | `String` | The request path that resulted in the thrown error(s)

---

## Validation error
### Schema

Path | Type | Description
---- | ---- | -----------
`codes` |  |
`arguments` |  |

