export class MenuToggle {

	toggleMenu() {

		const nav = document.querySelector('.nav');
		const button = document.querySelector('.button');
		const navList = document.querySelector('.nav__list');
		const navListItem = document.querySelectorAll('.nav__list-item');
		const navListItemLink = document.querySelectorAll('.nav__list-item-link');

		const toggle = () => {
			nav.classList.toggle('modalnav');
			button.classList.toggle('change');
			navList.classList.toggle('nav__list--modal');
			navListItem.forEach(item => item.classList.toggle('nav__list-item--modal'));
			navListItemLink.forEach(item => item.classList.toggle('nav__list-item-link--modal'));
		}

		button.addEventListener('click', toggle);
	}
}