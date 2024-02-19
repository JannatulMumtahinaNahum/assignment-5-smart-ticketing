function setInnerText(elementId, value){
    document.getElementById(elementId).innerText = value;
}

function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
  }
  
  function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
  }

  
  