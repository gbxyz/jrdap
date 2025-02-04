# jrdap

`jrdap` is a command-line [RDAP](https://about.rdap.org) client written in
JavaScript. It has **no dependencies** other than node.js.

# Installation

The easiest way to install `jrdap` is run this command:

```
curl -s https://raw.githubusercontent.com/gbxyz/jrdap/main/install.js | sudo node
```

Alternatively, just copy [`jrdap`](jrdap) somewhere into your path, or once you
have downloaded or cloned the repository, run `make install` to install it into
`/usr/local/bin`.

# Usage instructions

```
Usage: jrdap [OPTIONS] OBJECT

jrdap is a command-line interface to the Registration Data Access Protocol (RDAP).

Options:

  --help       Display this help.
  --type=TYPE  (OPTIONAL) specify object type.
  --registrar  Follow referral to registrar's RDAP service (if any).
  --json       Output raw JSON.

TYPE may be one of the following:

  * domain
  * ip-network
  * autnum
  * entity
  * tld
  * url

If not specified, the type will be guessed from OBJECT.

Example usage:

  jrdap rdap.org

  jrdap 192.0.2.1

  jrdap 2001:DB8::1

  jrdap AS1701

  jrdap --type=tld org

  jrdap https://rdap.org/domain/rdap.org

```

# License

See [`LICENSE`](LICENSE).
