/*
 * jQuery File Upload Demo
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global $ */

$(function() {
  'use strict';
//alert(localStorage.rid);
  // Initialize the jQuery File Upload widget:
  
  	
  $('#fileupload').fileupload({
    // Uncomment the following to send cross-domain cookies:
   // xhrFields: {rid:localStorage.rid},   
    formData:{email:localStorage.email},
    url: 'https://crowdvote.quantumcloud.ng/api/imagesPropEdit/?email='+localStorage.email+'&uid='+localStorage.uid+'&dir='+localStorage.dir,
	disableImageResize: /Android(?!.*Chrome)|Opera/.test(
        window.navigator.userAgent
      ),
      maxFileSize: 10485760,
	  imageMaxWidth: 600,
      imageMaxHeight: 600,
	  previewCrop: true,
	  autoUpload:true,
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png|pdf)$/i
  });

  // Enable iframe cross-domain access via redirect option:
  $('#fileupload').fileupload(
    'option',
    'redirect',
    window.location.href.replace(/\/[^/]*$/, '/cors/result.html?%s')
  );

  if (window.location.hostname === 'blueimp.github.io') {
    // Demo settings:
    $('#fileupload').fileupload('option', {
      url: '//jquery-file-upload.appspot.com/',
      // Enable image resizing, except for Android and Opera,
      // which actually support image resizing, but fail to
      // send Blob objects via XHR requests:
      disableImageResize: /Android(?!.*Chrome)|Opera/.test(
        window.navigator.userAgent
      ),
      maxFileSize: 10485760,
	  imageMaxWidth: 600,
      imageMaxHeight: 600,
	  previewCrop: true,
	  autoUpload:true,
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png|pdf)$/i
    });
    // Upload server status check for browsers with CORS support:
    if ($.support.cors) {
      $.ajax({
		formData:{rid:localStorage.rid},
        url: 'https://crowdvote.quantumcloud.ng/api/imagesPropEdit/?email='+localStorage.email+'&uid='+localStorage.uid+'&dir='+localStorage.dir,
        type: 'HEAD'
      }).fail(function() {
        $('<div class="alert alert-danger"/>')
          .text('Upload server currently unavailable - ' + new Date())
          .appendTo('#fileupload');
      });
    }
  } else {
    // Load existing files:
    $('#fileupload').addClass('fileupload-processing');
    $.ajax({
      // Uncomment the following to send cross-domain cookies:
      //xhrFields: {withCredentials: true},
	  formData:{email:localStorage.email},
      url: $('#fileupload').fileupload('option', 'url'),
      dataType: 'json',
      context: $('#fileupload')[0]
    })
      .always(function() {
        $(this).removeClass('fileupload-processing');
      })
      .done(function(result) {
        $(this)
          .fileupload('option', 'done')
          // eslint-disable-next-line new-cap
          .call(this, $.Event('done'), { result: result });
		  	
      });
  }
});

