// ==UserScript==
// @name         Polish Coub
// @namespace    http://blackuspl.github.io/DarknessAir
// @version      0.54.1
// @description  Make Coub in polish language
// @author       BlackusPL
// @match        https://coub.com/*
// @exclude      https://coub.com/chat/*
// @icon         https://coub.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
function translate() {
var replacements, regex, key, textnodes, node, s;
// Jeśli to ktoś czyta to już mówie że wprowadze niestety google tłumacza do tego kodu bo nie mam sił tłumaczyć wszystkiego
replacements = {

'Coub will keep living and evolving with the new team. Stay tuned' : 'Coub będzie żył i ewoluował wraz z nowym zespołem. Zostańcie z nami',
' is looking for feedback.' : ' szuka informacji zwrotnej.',
'Be the first to share your thoughts!' : 'Bądź pierwszym, który podzieli się swoimi myślami!',
'Add new channel' : 'Dodaj nowy kanał',
'Mosaic view' : 'Widok mozaiki',
'List view' : 'Widok listy',
'View all' : 'Obejrz wszystkie',
'Home' : 'Strona główna',
'Hot' : 'Na czasie',
'Random Reactions' : 'Losowe Reakcje',
'Random' : 'Losowe',
'Feedback' : 'Opinie',
'SOURCE' : 'ŹRÓDŁO',
'Paste a video link' : 'Wklej link do filmu',
'Upload a video' : 'Prześlij film',
'Upload and trim your video. Max: 400 MB and 20 min. Coub supports most video formats.' : 'Prześlij i przytnij swój film. Max: 400 MB i 20 min. Coub wspiera większość formatów filmów.',
'Choose community to publish' : 'Wybierz społeczność by opublikować',
'Show more comments' : 'Pokaż więcej komentarzy',
'Show more...' : 'Pokaż więcej...',
'Show less' : 'Pokaż mniej',
'Show original' : 'Pokaż oryginał',
'Show translation' : 'Pokaż przetłumaczone',
'More stories' : 'Więcej story',
'Stories' : 'Story',
' day' : ' dzień',
' days' : ' dni',
'Reply' : 'Odpowiedz',
'Daily' : 'Dzisiejsze',
'Weekly' : 'Tygodniowe',
'Monthly' : 'Miesięczne',
'Quarterly' : 'Kwartałowe',
'Six months' : '6 miesięczne',
'Coub picks' : 'Wybrane przez Coub',
'Clear all' : 'Wyczyść wszystko',
'Best Of The Year' : 'Najlepsze W Tym Roku',
'Who to follow' : 'Kogo zaobserwować',
'Featured channels' : 'Rekomendowane kanały',
'My likes' : 'Moje ulubione',
'Most liked' : 'Najbardziej ulubione',
'Most viewed' : 'Najbardziej oglądane',
'Likes' : 'Lubiane',
'Dislike' : 'Nielubię',
'Download' : 'Pobierz',
'Song' : 'Piosenka',
'Add Music' : 'Dodaj Muzykę',
'Sound' : 'Dźwięk',
'Undo' : 'Cofnij',
'Redo' : 'Ponów',
'Back Loop' : 'Odwrócona Pętla',
'Loop' : 'Pętla',
'Splices' : 'Splataj',
'Shadow Frame' : 'Rama cienia',
'Bookmarks' : 'Zakładki',
'Feed' : 'Historie',
'Following' : 'Obserwuje',
'Followers' : 'Obserwują',
'Followed' : 'Zaobserwowane',
'Follow' : 'Zaobserwuj',
'Describe your coub' : 'Opisz swojego couba',
'Previous Week' : 'Poprzedni Tydzień',
'Next Week' : 'Następny Tydzień',
'Favourites' : 'Ulubione',
'Comments' : 'Komentarze',
'others' : 'innych',
'Find friends on Coub' : 'Znajdź znajomych na Coubie',
'Connect your social networks to find' : 'Połącz swoje konta społecznościowe aby znaleźć',
'your friends channels on Coub.' : 'kanały znajomych na Coub.',
'From Facebook' : 'Z Facebooka',
'From Twitter' : 'Z Twittera',
'From Gmail' : 'Z Gmaila',
'Fresh' : 'Nowe',
'Rising' : 'Rosnące',
'Reposts' : 'Reposty',
'Recommended by' : 'Rekomendowane przez',
'Recent Search' : 'Niedawno Wyszukiwane',
'Edit cover' : 'Edytuj tło',
'Created by' : 'Stworzone przez',
'Create' : 'Stwórz',
'Create Coub' : 'Stwórz Couba',
'Create Story' : 'Stwórz Story',
'Message' : 'Wiadomość',
'Most recent' : 'Najnowsze',
'Most popular' : 'Najbardziej popularne',
'Hidden gems' : 'Ukryte perełki',
"Coubers' choice" : 'Wybór Coubowiczów',
'Communities' : 'Społeczności',
'reposted by' : 'podane dalej przez',
'Jan' : 'Sty',
'Feb' : 'Lut',
'Apr' : 'Kwi',
'May' : 'Maj',
'Jun' : 'Cze',
'Jul' : 'Lip',
'Aug' : 'Sie',
'Sep' : 'Wrz',
'Oct' : 'Paź',
'Nov' : 'Lis',
'Dec' : 'Gru',
'Promoted' : 'Wypromowane',
'Settings' : 'Ustawienia',
'Share' : 'Udostępnij',
'Dark Theme' : 'Czarny Motyw',
'Language: ' : 'Język: ',
'Developers' : 'Deweloperzy',
'Help' : 'Pomoc',
'English' : 'Polski',
'Channels' : 'Kanały',
'Oldest' : 'Najstarsze',
'Views count' : 'Ilość wyświetleń',
'Recent' : 'Niedawne',
'All channels' : 'Wszystkie kanały',
'Audio recognition by ' : 'Rozpoznawanie dźwięku przez ',
'Join our' : 'Dołącz do',
'community' : 'społeczności',
'Add' : 'Dodaj',
'views' : 'wyświetleń',
' by ' : ' przez ',
'Coubs' : 'Couby',
'Popular' : 'Popularne',
'Logout' : 'Wyloguj',
'Next' : 'Dalej',
'Back' : 'Wróć',
  ///////////////////////////////////////////////////////
  '':''};

regex = {};
for (key in replacements) {
  regex[key] = new RegExp(key, 'g');
}

textnodes = document.evaluate( "//body//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i = 0; i < textnodes.snapshotLength; i++) {
  node = textnodes.snapshotItem(i);
  s = node.data;
  for (key in replacements) {
      s = s.replace(regex[key], replacements[key]);
  }
  node.data = s;
}}
translate();

try {
  document.getElementById('q').placeholder = 'Wyszukaj Couba';
  document.getElementsByClassName('list list--selectable -centered-text')[0].insertAdjacentHTML('afterbegin' , '<li class="list__item list__item-beta" data-code="pl">English</li>');
} catch (error) {
  console.error(`Can't find "Search Coub" placeholder or Language Selector`)
};
// document.querySelector('[placeholder="Post your comment here..."]').placeholder = 'Zamieść swój komentarz tutaj...';
document.onscroll = function() {translate()};
// document.onscroll = function() {console.log('scroll działa')};
/* setInterval(function() {
if (document.querySelector('div.load-indicator.-big.-center.-blue').getAttribute('style') == 'display: block;') {
  translate();
}
}, 1000); */
//    document.querySelector('div.load-indicator.-big.-center.-blue[style="display: none;"]').addEventListener('change', function () {
//    if (document.querySelector('div.load-indicator.-big.-center.-blue').getAttribute('style') == 'display: none;') console.log('true')});
console.log("%c[Polish Coub] %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: white")
}());