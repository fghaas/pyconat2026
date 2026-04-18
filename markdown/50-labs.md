# Cloud Labs

<!-- Note -->

Open edX is very well suited for teaching pretty much any kind of information technology, by incorporating interactive labs.

The way we do that is with OpenStack, where we provide arbitrarily complex lab farms to learners.


## Interaction with OpenStack <!-- .element class="hidden" -->

![Interaction with OpenStack (via Celery and Heat)](images/celery-heat-openstack.svg)

<!-- Note -->

Here, we are defining an arbitrarily complex self-contained environment by way of an OpenStack Heat template.

We can define virtual networks, servers, volumes, routers,... you name it.

We then use asynchronous task processing via Celery to spin up such a stack, and have the learner connect to it right from within their browser using Apache Guacamole.


## Get Interactive!

(DjangoCon US 2021)

![Get interactive! Putting a shell or a desktop in your Django app](images/get-interactive.svg)

<https://youtu.be/kbrHW--ZLUc>

<!-- Note -->
How that works in detail is something that my colleagues and I have covered in several conference talks; <https://youtu.be/kbrHW--ZLUc> (from DjangoCon US in 2021) is one of them.
