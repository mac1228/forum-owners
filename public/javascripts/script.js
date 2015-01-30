$('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});

function handleFiles(files) {
    var lastFile = files.length-1;
    var file = files[lastFile];
    var imageType = /image.*/;
    
    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    if(preview.hasChildNodes()){  
		preview.replaceChild(img, preview.childNodes[0]);
    } else {
    	preview.appendChild(img); // Assuming that "preview" is a the div output where the content will be displayed.
    }
    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
}
