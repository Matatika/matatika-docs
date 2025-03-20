---
title: Key pair authentication
description: How to secure your Snowflake access for services
permalink: /snowflake-developer-guides/key-pair-authentication/
parent: Snowflake Developer Guides
has_children: false
nav_order: 1

---

# {{page.title}}

Mandatory use of two factor authentication (2FA) is one of the simplest ways to ensure your Snowflake account is only accessible by the intended individuals.  No attack
can proceed or gain access without the second factor being presented by a person.

What about services, where no human is present?

It was once common to have service accounts and passwords that were carefully managed.  This may be sufficient to protect a service in many cases.  However, a password is all too easily 
compromised - the use of key-pair authentication offers a significantly more secure approach for 'unattended' service use cases such as data ingestion.

Now that Snowflake has announced basic authentication (with only a password) will be phased out, there's no better time to setup this more secure approach.  In this guide, we'll show you
how to set up key-pair authentication in a few easy steps, complete with code snippets you can copy and paste directly into your SQL client or Snowflake worksheeet.


Full details are available with the [Snowflake Key-pair authentication documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth)


## Step 1.  Generate a private key

Open a new terminal and run the following to create an encrypted private key.

```
openssl genrsa 2048 | openssl pkcs8 -topk8 -v2 des3 -inform PEM -out rsa_key.p8
```


## Step 2.  Generate a public key

We now generate a public key from the private key.  This public key will authenticate access only when this same private key is present.


```
openssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub
```


## Step 3.  Securely store your keys and passwords

It is vital you handle the private key `rsa_key.p8` as you would a password and do not share this with anyone or commit it to source control such as git.

We suggest you store the `rsa_key.p8` (private key) and `rsa_key.pub` (public key) in a password vault such as 1Password along with the encryption password.


## Step 4.  Set the public key to a Snowflake user

```
ALTER USER example_user SET RSA_PUBLIC_KEY='MIIBIjANBgkqh...';
```

- Only owners of a user, or users with the SECURITYADMIN role or higher can alter a user. For more information, see [Overview of Access Control](https://docs.snowflake.com/en/user-guide/security-access-control-overview) and [GRANT OWNERSHIP](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership)

- Exclude the public key delimiters in the SQL statement.


## Step 5.  Verify the user’s public key fingerprint

Although optional, this step helps ensure your request to update the user has not been tampered with in transit.


### 1. Execute the following command to retrieve the user’s public key fingerprint:

```
DESC USER example_user;
SELECT SUBSTR((SELECT "value" FROM TABLE(RESULT_SCAN(LAST_QUERY_ID()))
  WHERE "property" = 'RSA_PUBLIC_KEY_FP'), LEN('SHA256:') + 1);  
```

Output:
```
Azk1Pq...
```
Copy the output.


### 2. Create a digest of the key (to compare to the above fingerprint)

```
openssl rsa -pubin -in rsa_key.pub -outform DER | openssl dgst -sha256 -binary | openssl enc -base64
```

Output:
```
writing RSA key
Azk1Pq...
```
Compare both outputs. If both outputs match, the user is correctly configured their public key.





## Interested in Security?

Restricting access to your Snowflake account and removing reliance on passwords, is an essential part of reducing your vulnerability to attacks such as phishing, brute force, and credential stuffing - but there are many other things you should also be doing.

We take security seriously and would love to chat about key-pair authentication and other methods of improving the overall security posture of your data processing.  Why not [get in touch](/get-in-touch/)?




{: .fs-5 }
