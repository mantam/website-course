var footerTemplate = `
	<div class="footer">
		{{#homeLink}}
		<a href="{{{homeLink}}}"><i class="fas fa-house-user"></i></a>
		{{/homeLink}}
		This is only an example website.
	</div>
`;

function loadFooter(homeLink, menuTag = "menu-footer") {
	var footerData = {
		homeLink: homeLink,
	};
	var menuHtml = Mustache.render(footerTemplate, footerData);
    document.getElementById(menuTag).innerHTML = menuHtml; 
}