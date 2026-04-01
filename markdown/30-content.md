# What's in an Open edX course?

Short answer: pretty much anything. <!-- .element class="fragment" -->

<!-- Note -->
So let's talk about what you the learner can find typically find in an Open edX course, and what you the course author can *include* in one.

Open edX has a universal course description markup format called OLX ("Open Learning XML") that course authors can populate using a course authoring app (Open edX Studio).

OLX allows course authors to include a bunch of different formats in Open edX courses:


## Text/HTML/Markdown

<!-- Note -->
The simplest and most straightforward elements are those that contain simple prose, which course authors can write in a WYSIWIG editor (most commonly), in straight-up HTML, or via Markdown.


## Video

<!-- Note -->
Then there's video content, which can either be hosted within the platform itself, or on YouTube.

Whichever the hosting method, video can be stored with full transcripts.


## Assets 

<!-- Note -->
You can also include externally-managed assets, like PDF textbooks, slide decks, or Google Docs resources, plus the ability to include almost anything via external iframes.


## Review Problems

<!-- Note -->
Then, there's a whole array of things that Open edX calls "Problems", from simple multiple-choice quizzes or free-text input to chemical equations, maths problems, coding problems (in sandboxes), all the way to Open Response Assessments (ORAs), which are a means of collaboratively evaluating essay-style answers.


... and of course 

## LTI 
## SCORM

<!-- Note -->
And of course you also have the option of including content generated in *other* content authoring systems, via [Learning Tools Interoperability](https://en.wikipedia.org/wiki/Learning_Tools_Interoperability) (LTI) and [Sharable Content Object Reference Model](https://en.wikipedia.org/wiki/Sharable_Content_Object_Reference_Model) (SCORM).


## XBlocks

<!-- Note -->
I should mention that not all of this functionality needs to be provided by the Open edX core platform itself.

Instead, Open edX supports a plugin interface --- XBlocks --- with a [public API](https://docs.openedx.org/projects/xblock/en/latest/index.html), and anyone can write an extension to Open edX, in Python, implementing that API.
(We'll come back to XBlocks shortly.)

It should be noted that the XBlock API was originally not limited to Open edX.
That is also the reason why it (in contrast to the AGPL-licensed Open edX core) uses a permissive, non-copyleft Apache license.
One other consumer of the XBlock API was Google Course Builder, and Apache-licensed LMS from Google that was released in 2012 (but has long been defunct).