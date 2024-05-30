/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config )
{
	config.toolbar = 'MyToolbar';

	config.toolbar_MyToolbar =
	[

		{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord' ] },
		{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','Scayt' ] },
		{ name: 'insert', items : [ 'Table','HorizontalRule' ] },
                '/',
		{ name: 'styles', items : [ 'Styles','Format' ] },
		{ name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote' ] },
		{ name: 'links', items : [ 'Link','Unlink' ] },
		{ name: 'tools', items : [ 'Maximize','-','About' ] }
	];
};