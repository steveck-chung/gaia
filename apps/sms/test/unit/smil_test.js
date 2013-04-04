/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

requireApp('sms/js/smil.js');

suite('SMIL', function() {
  suite('SMIL.generate', function() {
    test('Text only message', function() {
      var smilTest = [{
        text: 'This is a test of the SMIL generate method'
      }];
      var output = SMIL.generate(smilTest);

      // only one attachment
      assert.equal(output.attachments.length, 1);

      // only one <par> tag in the smil output
      assert.equal(output.smil.split('<par').length, 2);

      // check that the content of the text blob is what we said it should be
      var textReader = new FileReader();
      textReader.onload = function(event) {
        assert.equal(event.target.result, smilTest[0].text);
      };
      textReader.readAsText(output.attachments[0].content);

    });

    test('Message with image and text', function() {
      var req = new XMLHttpRequest();
      req.open('GET' , '/test/unit/media/kitten-450.jpg', true);
      req.responseType = 'blob';

      req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
          withImage(req.response);
        } else {
          assert.ok(false);
        }
      };

      function withImage( image ) {
        var smilTest = [{
          text: 'Testing a caption',
          name: 'kitten-450.jpg',
          blob: image
        }];
        var output = SMIL.generate(smilTest);

        // two attachments (text and image)
        assert.equal(output.attachments.length, 2);

        // only one <par> tag
        assert.equal(output.smil.split('<par').length, 2);
        // the img is before the text
        assert.ok(ouput.smil.matches(/<img.*<text/));
      };
    });
  });
});
