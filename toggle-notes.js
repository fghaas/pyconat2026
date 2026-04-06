function toggleNotes() {
    toggle = Reveal.getConfig().showNotes;
    Reveal.configure({ showNotes: !toggle });
}

Reveal.on('ready', (event) => {
    reveal = Reveal.getRevealElement();
    reveal.addEventListener('dblclick', toggleNotes);
});
