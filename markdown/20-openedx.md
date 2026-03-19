# Open edX

<!-- Note -->
And this is where Open edX comes in!

Open edX is a free and open learning platform that has existed for more than a decade, has a vibrant global community, and a massive user base.

## MIT, Harvard, Stanford, edX

<!-- Note -->
The origins of what today is Open edX lie at the [Massachusetts Institute of Technology (MIT)](https://mit.edu), in a program launched in late 2011 as [MITx](https://mitxonline.mit.edu/).

MIT then quickly teamed up with their friends across the river ([Harvard University](https://www.harvard.edu/)), and then their friends across the country ([Stanford University](https://www.stanford.edu)) to form a consortium named [edX](https://www.edx.org/), in a clear extension of the "MITx" theme.

And in 2013, that consortium released its entire software stack under a copyleft license to become...

## Open edX

<!-- Note -->
... Open edX proper.

## Python

<!-- Note -->
And from the beginning, this stack was very heavily Python-centric.

The original Open edX was in essence a very classic, monolithic Django Model-View-Controller (MVC) web platform.
Since then it has somewhat evolved to become a more modern stack that does a fair amount of heavy lifting with the Django Rest Framework and JavaScript-heavy front ends.

This whole evolution is a completely separate story that I could fill a whole separate talk with, so I won't get into that today, but as it turns out I **have** done a whole talk on that topic, at PyCon Italia, and if you're interested here's the YouTube link for that:

## PyCon Italia YouTube link

![Quit Simplifying!](images/quit-simplifying.svg)

## AGPL

<!-- Note -->
However, there's another thing that I think is significant in comparison to the other LMS that I mentioned in the intro, that is, Moodle:

* Moodle is a GPL3 codebase.
* Open edX is an AGPLv3 codebase.

And this, I think, is fairly significant for a stack that naturally lends itself to hosting and for delivering a service:
as I'm sure you're aware, if you're merely *operating a platform* that runs GPL code, you can patch that code to your heart's content and never have to share your modifications with anyone.
That is because you are not *distributing* your software, and distribution is where the code-sharing obligations of the GPL come into play.

With the AGPLv3, if you *"convey"* your software to others in any manner at all, you are obliged to share your modifications.
So: you host Open edX, you "convey" the software's functionality to others, you must share any modifications you make.

... which of course, in reality, leads to *everybody* contributing upstream.