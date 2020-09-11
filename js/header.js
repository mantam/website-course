var headerTemplate = `
	<div class="header">
		{{#hasMenu}}
		<i class="fas fa-bars" style="float:left" onclick="openMenu()"></i>
		{{/hasMenu}}
		<div id="search-box" style="float:right">
			<input id="search-text" type="text" class="search" list="players" oninput="searchInput()"/>
			<datalist id="players">
				{{#players}}
				<option value="{{.}}" />
				{{/players}}
			</datalist>
			<i id="search-icon" class="fas fa-search" style="position:absolute; top: 3px; right: 0px;" onclick="expandSearch()"></i>
		</div>
		<span class="logo"><img src="{{{logoUrl}}}" height="70"></span>
		{{#hasMenu}}
		<div class="menu" id="menu">
			<i class="fas fa-times" onclick="closeMenu()"></i>
			{{#menuItems}}
			<a href="{{{url}}}">{{name}}</a>
			{{/menuItems}}
		</div>
		{{/hasMenu}}
	</div>
`;
var playerNames = players.map(p => p.name);
function searchInput() {
	var inputValue = document.getElementById("search-text").value;
	var index = playerNames.indexOf(inputValue)
	if (index > -1) {
		var player = playerNames[index].toLowerCase().replace(" ", "-");
		var url = `item-detail.html?item=${player}`;
		location.href = url;
	}
}
function openMenu() {
	document.getElementById("search-text").value = "";
	document.getElementById("search-text").style.width = "45px";
	document.getElementById("menu").style.display = "block";
}
function closeMenu() {
	document.getElementById("menu").style.display = "none";
}
function expandSearch() {
	closeMenu();
	var width = document.getElementById("search-text").style.width;
	if (width == "" || width == "45px") {
		document.getElementById("search-text").style.width = "300px";
		document.getElementById("search-text").focus();
	} else {
		document.getElementById("search-text").value = "";
		document.getElementById("search-text").style.width = "45px";
		document.getElementById("search-text").blur();
	}
}
function loadMenu(logoUrl, links, menuTag = "menu-header") {
	var menuData = {
		logoUrl: logoUrl,
		hasMenu: links && links.length > 0,
		menuItems: links,
		players: playerNames,
	}

	var menuHtml = Mustache.render(headerTemplate, menuData);
    document.getElementById(menuTag).innerHTML = menuHtml; 
}

function getUrlParamValue(paramName) {
	var params = location.search.split("&")
	for (var i = 0; i < params.length; i++) {
		index = params[i].indexOf(paramName + "=");
		if (index >= 0) {
			return params[i].substr(index + paramName.length + 1);
		}
	}
	return "";
}
