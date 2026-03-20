# Open edX <!-- .element class="hidden" -->

<!-- Note -->
And this is where Open edX comes in!

Open edX is a free and open learning platform that has existed for more than a decade, has a vibrant global community, and a massive user base.


## MIT, Harvard, Stanford, edX <!-- .element class="hidden" -->

![MIT seal](images/mit.svg)

<!-- Note -->
The origins of what today is Open edX lie at the [Massachusetts Institute of Technology (MIT)](https://mit.edu), in a program launched in late 2011 as [MITx](https://mitxonline.mit.edu/).


## Harvard <!-- .element class="hidden" -->

![Harvard University coat of arms](images/harvard.svg)

<!-- Note -->

MIT first teamed up with their friends across the river ([Harvard University](https://www.harvard.edu/)),


## Stanford <!-- .element class="hidden" -->

![Stanford University seal](images/stanford.svg)

<!-- Note -->

... and then their friends across the country ([Stanford University](https://www.stanford.edu)) ...


## edX <!-- .element class="hidden" -->

![edX logo](images/edX.svg)

<!-- Note -->

... to form a consortium named [edX](https://www.edx.org/), in a clear extension of the "MITx" theme.

And in 2013, that consortium released its entire software stack under a copyleft license to become...


## Open edX <!-- .element class="hidden" -->

<!-- Note -->
... Open edX proper.

Now when I say "released its entire software stack", that doesn't just mean the LMS itself but *everything* that is related to it.
This includes, most importantly, all the deployment automation --- which is crucially important for a complex platform such as this.


## Python <!-- .element class="hidden" -->

<!-- Note -->
And from the beginning, this stack was very heavily Python-centric.

The original Open edX was in essence a very classic, monolithic Django Model-View-Controller (MVC) web platform.
Deployment automation was covered with Ansible, making the platform Python-centric even from that angle.

Since then it has somewhat evolved to become a more modern stack that does a fair amount of heavy lifting with the  [Django REST Framework](https://www.django-rest-framework.org/) and JavaScript-heavy front ends.
Deployment has also shifted towards containerisation, with the platform now being managed as an array of [Kubernetes](https://kubernetes.io/) pods.

This whole evolution is a completely separate story that I could fill a whole talk with, so I won't get into that today, but as it turns out I **have** done a whole talk on that topic, at PyCon Italia, and if you're interested here's the YouTube link for that:


## PyCon Italia YouTube link <!-- .element class="hidden" -->

![Quit Simplifying!](images/quit-simplifying.svg)

<https://youtu.be/KlE-VyUYLts>


## AGPL

<!-- Note -->
However, there's another thing that I think is significant in comparison to the other LMS that I mentioned in the intro, that is, Moodle:

* Moodle is a *GNU General Public License version 3* ([GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)) codebase.
* Open edX is a *GNU Affero General Public License version 3* ([AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html)) codebase.

And this, I think, is fairly significant for a stack that naturally lends itself to hosting and for delivering a service:
as I'm sure you're aware, if you're merely *operating a platform* that runs GPL code, you can patch that code to your heart's content and never have to share your modifications with anyone.
That is because you are not *distributing* your software, and distribution is where the code-sharing obligations of the GPL come into play.

The AGPL, specifically its [section 13](https://www.gnu.org/licenses/agpl-3.0.html#section13), additionally obliges you to share modifications to your software with users "interacting with it remotely through a computer network".
So: you host Open edX, you must share any modifications you make.

... which of course, in reality, leads to *everybody* contributing upstream.