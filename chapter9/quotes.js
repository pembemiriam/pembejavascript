var text = "'I don't Know,' he said, 'why he wasn't present.'";

console.log(text.replace(/(^|\s)'|'(\s|$)/g, '$1"$2'));


