function copyText(text) {
  var node = document.createElement('textarea')
  var selection = document.getSelection()

  node.textContent = text
  document.body.appendChild(node)

  selection.removeAllRanges()
  node.select()
  document.execCommand('copy')

  selection.removeAllRanges()
  document.body.removeChild(node)
}
const postitElements = document.querySelectorAll('#jam-content .jam-postit-element')
const values = Array.from(postitElements).map(el => el.dataset.value))
copyText(values.join("\n"))
