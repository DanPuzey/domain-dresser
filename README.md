# Domain-dresser

Dresses requests to a naked domain by redirecting to the www. subdomain.

This was born out of a desire to be CHEAP in the cloud, which is usually
the best way to use the cloud. The lowest tier of Azure resources (in this
case, CDNs for static website hosting) often don't guarantee a fixed IP
address, and so you are required to point your domain at them by a CNAME
record in your DNS.

CNAME records on apex domains don't work - they break the whole domain -
and I wanted to keep the naked domain working in some fashion. So this
noddy little project was born.

The intention is that this can run on an Azure resource that _does_ have
a stable IP (even the lowest capacity App Service Plan will do that), and
so you can point _all_ your naked domains at the same instance, and it'll
redirect all requests back to the static site hosted at www.<domain>.

Containerised, so it runs via Web App for Containers with close to single-
click deploy, and no configuration required beyond wiring up domains.

Container published here:
  https://hub.docker.com/repository/docker/danpuzey/domain-dresser
