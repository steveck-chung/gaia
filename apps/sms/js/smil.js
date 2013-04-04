/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

var SMIL = {
  generate: function SMIL_generate(slides) {
    var attachments = [];
    var header = '<head><layout>' +
                 '<root-layout width="320px" height="480px"/>' +
                 '<region id="Image" left="0px" top="0px"' +
                 ' width="320px" height="320px" fit="meet"/>' +
                 '<region id="Text" left="0px" top="320px"' +
                 ' width="320px" height="160px" fit="meet"/>' +
                 '</layout></head>';
    var parts = slides.map(function(slide, slideIndex) {
      var id;
      var blobType;
      // default duration to 5 seconds per slide
      var duration = 5000;
      // each slide can have a peice of media and/or text
      var media = '';
      var text = '';
      if (slide.blob) {
        blobType = slide.blob.type.split('/')[0];
        if (blobType === 'image') {
          blobType = 'img';
        }
        id = slide.name;
        media = '<' + blobType + ' src="' + id + '">';
        attachments.push({
          id: '<' + id + '>',
          location: id,
          content: slide.blob
        });
      }
      if (slide.text) {
        // Set text region.
        id = 'text_' + slideIndex;
        text = '<text src="' + id + '.txt" region="Text"/>';
        attachments.push({
          id: '<' + id + '>',
          location: id + '.txt',
          content: new Blob([slide.text], {type: 'text/plain'})
        });
      }
      return '<par dur="' + duration + 'ms">' + media + text + '</par>';
    });
    return {
      smil: '<smil>' + header + '<body>' + parts.join('') + '</body></smil>',
      attachments: attachments
    };
  }
};
