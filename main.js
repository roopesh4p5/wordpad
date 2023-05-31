

document.getElementById('btnbold').addEventListener('click', function () {
  document.execCommand('bold', false, null);
});

document.getElementById('btnitalic').addEventListener('click', function () {
  document.execCommand('italic', false, null);
});

document.getElementById('btnunderline').addEventListener('click', function () {
  document.execCommand('underline', false, null);
});

document.getElementById("btnleft").addEventListener('click', function () {
  document.execCommand('justifyLeft', false, null);
})

document.getElementById('btncenter').addEventListener('click', function () {
  document.execCommand('justifyCenter', false, null);
})

document.getElementById('btnright').addEventListener('click', function () {
  document.execCommand('justifyRight', false, null);
});



document.addEventListener('DOMContentLoaded', function () {
  const paragraph = document.getElementById('editor');
  let selectedText = '';

  document.getElementById('uppercase').addEventListener('click', function () {
    const transformedText = selectedText.toUpperCase();
    document.execCommand('insertText', false, transformedText);
  });

  document.getElementById('lowercase').addEventListener('click', function () {
    const transformedText = selectedText.toLowerCase();
    document.execCommand('insertText', false, transformedText);
  });

  capistalise = () => {
    const transformedText = selectedText.toUpperCase();
  }
  paragraph.addEventListener('mouseup', function () {
    selectedText = window.getSelection().toString();
  });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("prnt").addEventListener('click', function () {
  window.print();
})

//////////////////////////////////////////////////////////////////////

function changeFontSize() {
  var selectElement = document.getElementById('fontSizeSelect');
  var fontSize = selectElement.value;

  document.execCommand('fontSize', false, '3');
  var selectedText = window.getSelection();
  var parentElement = selectedText.anchorNode.parentElement;
  parentElement.style.fontSize = fontSize + 'px';
}


function capitalise() {
  let editor = document.getElementById('editor');
  let selectedText = getSelectedText(editor);

  if (selectedText !== '') {
    let capitalizedText = selectedText.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
    document.execCommand('insertText', false, capitalizedText);
  }
}

function getSelectedText(editor) {
  let selectedText = '';
  if (window.getSelection) {
    selectedText = window.getSelection().toString();
  } else if (document.selection && document.selection.type != 'Control') {
    selectedText = document.selection.createRange().text;
  }
  return selectedText;
}



const editorDiv = document.getElementById("editor");

if (sessionStorage.getItem("editorContent")) {
  editorDiv.innerHTML = sessionStorage.getItem("editorContent");
}

editorDiv.addEventListener("input", function () {
  sessionStorage.setItem("editorContent", editorDiv.innerHTML);
});


function changeSelectedTextColor() {
  var selection = window.getSelection();

  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var span = document.createElement("span");
    span.style.color = document.getElementById("color-input").value;
    range.surroundContents(span);
  }
}

document.getElementById("color-input").addEventListener("input", changeSelectedTextColor);