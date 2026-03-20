// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

    controls: false,

    progress: true,
    history: true,
    center: true,
    showNotes: false,

    transition: 'fade',


    totalTime: 40 * 60,


    menu: {

        themes: [
	    {
		name: 'Black',
		theme: 'reveal.js/dist/theme/black.css'
	    },
	    {
		name: 'White',
		theme: 'reveal.js/dist/theme/white.css'
	    }
	],
        themesPath: 'reveal.js/dist/theme',

        transitions: false,
        openButton: false,
        openSlideNumber: true,
        markers: true
    },



    multiplex: {
        secret: multiplex_config['secret'],
        id: multiplex_config['socketId'],
        url: "https://multiplex.up.railway.app"
    },


    markdown: {
	smartypants: true,
    },

    dependencies: [
       { src: 'https://multiplex.up.railway.app/socket.io/socket.io.js', async: true },
       { src: 'https://multiplex.up.railway.app/client.js', async: true }
    ],

    plugins: [
	RevealMarkdown,
	RevealNotes,
	RevealHighlight,
        RevealZoom,
        RevealMenu
    ]
});
