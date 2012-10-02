CodeView = Backbone.View.extend({
    events : {
        'click' : 'enterEditMode'
    },
    
    initialize : function() {
        _.bindAll(this);
        this.model.on('change', this.render);
    },

    render : function() {
        var codeText = this.model.getCodeText(),
            language = Prism.languages[this.model.get('language')],
            highlightedText = Prism.highlight(codeText, language);

        this.$el.html('<pre><code>\n' + highlightedText + '\n\n</code></pre>');
    },
    
    enterEditMode : function() {
        if (this.inEditMode) {
            return;
        }

        var editor = this.createEditor();
        this.$el.html(editor);
        editor.focus();
        
        this.inEditMode = true;
    }, 

    exitEditMode : function() {
        var newCode = this.$('textarea')
                          .val()
                          .replace(/^\n/, '');

        this.inEditMode = false;
        this.model.setCode(newCode);
    },

    createEditor : function() {
        return $(this.make('textarea', {}, '\n' + this.model.getCodeText()))
                .css({
                    width : this.$el.width() + 'px',
                    height: this.$el.height() + 'px'
                }).blur(this.exitEditMode);
    }
});