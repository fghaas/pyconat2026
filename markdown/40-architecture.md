# System Architecture <!-- .element class="hidden" -->

![Cluster overview](images/cluster.svg)

<!-- Note -->
This is what you need to run an Open edX platform:

* A database backend running MySQL and MongoDB
* A server-side Django app exposing most of its functionality via the Django REST Framework (DRF)
* A set of static microfrontends (MFEs) that are largely based on react.js
* A front-end load balancer (Caddy) that also handles HTTPS termination and ACME certificate management
* A Kubernetes cluster to orchestrate it all


## Tutor <!-- .element class="hidden" -->

<!-- Note -->
The recommended and community-supported method to deploy Open edX is a container orchestrator named **Tutor**.

Tutor can manage both single-node configurations with local Docker (or, at least in principle, Podman), or it can talk to a Kubernetes cluster and manage a production cluster that way.

In Kubernetes orchestration mode (with the `tutor k8s` command), it generates Kubernetes manifests with Kustomization, rather than using Helm charts.
(This is A Good Thing™.)

Tutor — which also includes the automation of container image customisations — can be driven from a CI pipeline quite nicely.
It also plays well with local container registries in case there is a need for deploying Open edX in an air-gapped fashion on an internal network.

There have been various proposals for other means of deploying containerised Open edX from several actors in the Open edX community.
In my own humble opinion, they are all *different* from Tutor, though not *better.*


## Tutor plugins

<!-- Note -->
Just like Open edX with its XBlocks, Tutor is modular and extensible through third-party *plugins*.

This way, Open edX site operators can use Tutor to automate things like backups, external storage integration, and many others.

Like Open edX, Tutor is AGPL licensed, and this also extends to Tutor plugins.
In other words, Tutor plugin development generally benefits the whole Open edX community, not only the plugin developers.
