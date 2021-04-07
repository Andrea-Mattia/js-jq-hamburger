/**
 * Hamburger menu
 * Mostrare / nascondere il menu principale (ricordate che per vedere
 * l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet
 * mobile).
 */

// REFS
var bars = $('.fa-bars');
var menu = $('.hamburger-menu');
var closeMenu = $('.close');

// Dispaying the menu
bars.click( function() {
    menu.fadeIn();
});

// Closing the Menu
closeMenu.click( function() {
    menu.fadeOut();
});