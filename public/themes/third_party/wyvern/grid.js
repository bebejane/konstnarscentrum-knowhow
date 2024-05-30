(function($) {

    var onDisplay = function(cell)
    {
        var $textarea = cell.find('textarea');
        var col_id = cell.data('column-id');
        var name = $textarea.attr('name');

        //get the row ID from the name=""
        var row_id = name.match(/new_row_[0-9]{1,5}/g);
        row_id = row_id == undefined ? name.match(/row_id_[0-9]{1,5}/g) : row_id;
        row_id = row_id[0].replace('new_row_', '').replace('row_id_', '');

        // eval so we're working with arrays/objects, not a string values
        var toolbar = eval('(' + $textarea.data('toolbar') + ')');
        var config = eval('(' + $textarea.data('config') + ')');
        var field_id = $textarea.data('field-id');
        var id = field_id + '_' + row_id + '_' + cell.data('column-id')+'_' + Math.floor(Math.random()*10000);

        $textarea.attr('id', id);

        // Reset the ID with the Grid provided ID
        config.field_id = id;

        // Duplicate our settings. Settings saved to obj with the col_id as the property,
        // but Grid creates new IDs, so dupe the object so the plugin.js can find the data.
        wyvern_config[id] = wyvern_config['col_id_'+col_id];

        init_wyvern(config, toolbar);
    };

    var beforeSort = function(cell)
    {
        var $textarea = cell.find('textarea');
        var html = cell.find('iframe:first')[0].contentDocument.body.innerHTML;
        $textarea.html(html);
        CKEDITOR.instances[$textarea.attr('id')].destroy();
    };

    var afterSort = function(cell)
    {
        var $textarea = cell.find('textarea');
        cell.html('<div class="grid_cell" />');
        cell.find('.grid_cell').html($textarea);
        onDisplay(cell);
    };

    Grid.bind('wyvern', 'display', onDisplay);
    Grid.bind('wyvern', 'beforeSort', beforeSort);
    Grid.bind('wyvern', 'afterSort', afterSort);

})(jQuery);