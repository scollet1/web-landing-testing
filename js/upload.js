var form = document.getElementById('file-form');
var fileSelect = document.getElementById('file-select');
var uploadButton = document.getElementById('upload-button');
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

form.onsubmit = function(event) {
  event.preventDefault();
  console.log("Test Enter function(event)");
  // Update button text using innerHTML;
  uploadButton.innerHTML = 'Uploading...';

  // Get the selected files from the input;
  var files = fileSelect.files;
  // Create a new FormData object;
  var formData = new FormData();

  // Check the file type.
  file = files[0];

  /*
  **if (!file.type.match('*.jgrv')) {
  **  alert('Not a valid file type, please use the .jgrv extension');
  **}
  **else {
  **  formData.append('file-select', file, file.name);
  **}
  */

  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
  /**************************************************
  ** TODO : Validate file input for .jgrav extension;
  ** TODO : ;
  **************************************************/

  // Set up the request.
  var xhr = new XMLHttpRequest();
  // Open the connection.
  xhr.open('POST', /*https://scollet1.github.io/web-landing-testing/*/"handler.php", true); /* ARGUMENTS : HTTP Method=POST, URL Handler=handler.php, Asynchronous request?=true */
  // Set up a handler for when the request finishes.
<<<<<<< HEAD
  xhr.setRequestHeader('Accept', 'text/php');
=======
  //xhr.setRequestHeader("Accept", "*/jgrav");
  xhr.setRequestHeader("Allow", "POST");
>>>>>>> 3b2fbdaaf1c923a08d9d661201cc79f88516ffb2

  xhr.onload = function() {
    if (xhr.status === 200) {
      // File(s) uploaded.
      uploadButton.innerHTML = 'Upload';
    } else {
      alert('An error occurred!');
    }
  };
  // Send the Data.
  xhr.send(formData);
}
