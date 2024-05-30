String.prototype.trunc = String.prototype.trunc ||
    function(n){
        return (this.length > n) ? this.substr(0,n-1)+'&hellip;' : this;
    };

jQuery(document).ready(function($) {
    var BENE = {};

    var promise = $.ajax({
        url: '/autocomplete_search/empty_translate',
        dataType: "json"
    });

    promise.done(function(data) {
        BENE.config = data;
    });

    BENE.Typeahead = {
        bestGuess: new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: '/autocomplete_search?keywords=%QUERY'
                ,wildcard: '%QUERY'
            }
        }),

        init: function() {
            $('#keywords').typeahead({
                    hint: true
                    ,highlight: true
                    ,minLength: 2
                },
                {
                    name: 'best-guess'
                    ,display: 'value'
                    ,source:  this.bestGuess
                    ,limit: 25
                    ,templates: {
                        //header: function() {
                        //
                        //},
                        //footer: function() {
                        //
                        //},
                        suggestion: function(e) {
                            return '<div>' + e.value.trunc(60) + ' <small>in ' + e.channel_i18n + '</small></div>';
                        },
                        notFound: function() {
                            return '<div class="tt-empty"><b>' + BENE.config[dataLayer[0]['Language']] + '</b></div>';
                        }
                    }
                })
                .bind('typeahead:select', function(ev, suggestion) {
                    window.location.href = suggestion.url;
                })
                .bind('typeahead:asyncrequest', function(ev, suggestion) {
                    // console.log('Request starting');
                    $('.tt-hint').addClass('tt-input-loading');
                })
                .bind('typeahead:asyncreceive', function(ev, suggestion) {
                    // console.log('Request finished');
                    $('.tt-hint').removeClass('tt-input-loading');
                });
        }
    };
    BENE.Typeahead.init();
});
