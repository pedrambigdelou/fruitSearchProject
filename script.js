const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	const searchTerm = str.toLowerCase(); // The string is converted to lower case

  // the input string is used to filter the fruits from the fruit list
  if (searchTerm.length > 0) {
    results = fruit.filter(item => item.toLowerCase().includes(searchTerm));
  }

	return results;
}

function searchHandler(e) {
  // this function is triggered upon typing and the typed
  // value is used to search and filter the fruit list
	const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

  // list items are created based on the input values
  if (results.length > 0) {
    results.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      // list items are highlighted and de-highlighted by moving the
      // mouse on the list.
      li.addEventListener('mouseover', () => {
				li.classList.add('highlight');
			});
			li.addEventListener('mouseout', () => {
				li.classList.remove('highlight');
			});
      suggestions.appendChild(li);
    });
  }

}

function useSuggestion(e) {
  // the value appearing in the search bar is the same as
  // the fruit name the user selects by clicking the name
  // from the suggested list
	if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    suggestions.innerHTML = '';
  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);