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
  //'use strict';
//alert(localStorage.rid);
  // Initialize the jQuery File Upload widget:
  $('#fileupload').fileupload({
    // Uncomment the following to send cross-domain cookies:
   // xhrFields: {rid:localStorage.rid},   
    //formData:{email:localStorage.email},
    
	disableImageResize: /Android(?!.*Chrome)|Opera/.test(
        window.navigator.userAgent
      ),
	  url: 'https://quantumcloud.ng/techcamp2024/api/imagesOptionsEdit/?email='+localStorage.email+'&dir='+localStorage.dir,
      maxFileSize: 10485760,
	  imageMaxWidth: 600,
      imageMaxHeight: 600,
	  previewCrop: true,
	  autoUpload:true,
	  //maxNumberOfFiles: 1,
	  messages: {
                maxNumberOfFiles: 'Only one image allowed!',
                acceptFileTypes: 'File type not allowed',
                maxFileSize: 'File is too large',
                minFileSize: 'File is too small'
            },
		
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
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
	  //maxNumberOfFiles: 1,
	  messages: {
                maxNumberOfFiles: 'Only one image allowed!'
               // acceptFileTypes: 'File type not allowed',
               // maxFileSize: 'File is too large',
                //minFileSize: 'File is too small'
            },	  
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
    });
    // Upload server status check for browsers with CORS support:
    if ($.support.cors) {
      $.ajax({
		formData:{email:localStorage.email},
        url:'https://quantumcloud.ng/techcamp2024/api/imagesOptionsEdit/?email='+localStorage.email+'&dir='+localStorage.dir,
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
  
  
  // Global variables
var status = new Array(), // Create a new array
    successAll = true; // Used to check for successful upload

// After you've initialized the jQuery File Upload widget:
jQuery('#fileupload') // Replace with your form id
    .bind('fileuploaddone', function (e, data) {
        // Append the file response data to the global array, in my case "status"   
        //status.push( jQuery.parseJSON(data.jqXHR.responseText) );
		//alert("ok");
		location.href= 'option-banner.html';
		
    })
    .bind('fileuploadstop', function (e) {
        for (var i = 0; i < status.length; i++) {
            var error = status[i].files[0].error;

            if(error) {
                jQuery('#error').show();
                jQuery('#error').append('<p><em>Error given: '+error+'</em></p>');

                successAll = false; // Change success value to false if error
            }
        }   

        // If successAll is true, meaning it wasn't reset because of an error,
        // display success message.
        if (successAll) {
            jQuery('#success').show();
        }   
        status = new Array();       
    });
});
