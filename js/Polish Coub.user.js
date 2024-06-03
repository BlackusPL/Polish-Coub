// ==UserScript==
// @name           Polish Coub
// @name:pl        Polski Coub
// @namespace      http://blackuspl.github.io/DarknessAir
// @source         https://github.com/BlackusPL/Polish-Coub
// @updateURL      https://github.com/BlackusPL/Polish-Coub/raw/main/js/Polish%20Coub.meta.js
// @downloadURL    https://github.com/BlackusPL/Polish-Coub/raw/main/js/Polish%20Coub.user.js
// @version        0.57
// @description    Translate Coub to polish language
// @description:pl Tłumaczy Couba na polski język
// @author         BlackusPL
// @match          *://coub.com/*
// @exclude        *://coub.com/chat/*
// @exclude        *://coub.com/rules*
// @exclude        *://coub.com/dmca*
// @exclude        *://coub.com/privacy*
// @exclude        *://coub.com/tos*
// @exclude        *://coub.com/brand-assets*
// @icon           https://raw.githubusercontent.com/BlackusPL/Polish-Coub/main/favicon.svg
// @grant          GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  let observer;

var replacements, regex, key, textnodes, node, s;
// Jeśli to ktoś czyta to już mówie że wprowadze niestety google tłumacza do tego kodu bo nie mam sił tłumaczyć wszystkiego // 10.08.2022
// Witam kogoś kto to czyta, jednak zostawie to ale zmienie sposób działania tego bo wychodzi to spoza kontroli czasami // 10.05.2023
replacements = {

'Coub will keep living and evolving with the new team. Stay tuned' : 'Coub będzie żył i ewoluował wraz z nowym zespołem. Zostańcie z nami',
' is looking for feedback.' : ' szuka informacji zwrotnej.',
'Only other users can leave reactions to your coub' : 'Tylko inni użytkownicy mogą zostawiać reakcje na twoje couby',
'Be the first to share your thoughts!' : 'Bądź pierwszym, który podzieli się swoimi myślami!',
'View all' : 'Obejrz wszystkie',
'Home' : 'Strona główna',
'Hot' : 'Na czasie',
'Random Reactions' : 'Losowe Reakcje',
'Random' : 'Losowe',
'You may also like' : 'Może ci się też spodobać',
'Best coubs' : 'Najlepsze couby',
'Featured channels' : 'Wyróżnione kanały',
'Top of the Month' : 'Najlepsze w miesiącu',
'Feedback' : 'Opinie',
'SOURCE' : 'ŹRÓDŁO',
'Paste a video link' : 'Wklej link do filmu',
'Upload a video' : 'Prześlij film',
'Upload and trim your video. Max: 400 MB and 20 min. Coub supports most video formats.' : 'Prześlij i przytnij swój film. Max: 400 MB i 20 min. Coub wspiera większość formatów filmów.',
'Choose community to publish' : 'Wybierz społeczność by opublikować',
'Show more comments' : 'Pokaż więcej komentarzy',
'Show more...' : 'Pokaż więcej...',
'View More' : 'Zobacz Więcej',
'Show less' : 'Pokaż mniej',
'Show original' : 'Pokaż oryginał',
'Show translation' : 'Pokaż przetłumaczone',
'More stories' : 'Więcej story',
'Stories' : 'Story',
'Reply' : 'Odpowiedz',
'Daily' : 'Dzisiejsze',
'Weekly' : 'Tygodniowe',
'Monthly' : 'Miesięczne',
'Quarterly' : 'Kwartałowe',
'Six months' : '6 miesięczne',
'Yearly' : 'Roczne',
'Coub picks' : 'Wybrane przez Coub',
'Clear all' : 'Wyczyść wszystko',
'Best Of The Year' : 'Najlepsze W Tym Roku',
'Who to follow' : 'Kogo zaobserwować',
'My likes' : 'Moje ulubione',
'Most liked' : 'Najbardziej ulubione',
'Most viewed' : 'Najbardziej oglądane',
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
'Describe your coub' : 'Opisz swojego couba',
'Previous Week' : 'Poprzedni Tydzień',
'Next Week' : 'Następny Tydzień',
'Favourites' : 'Ulubione',
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
'Create' : 'Stwórz',
'Message' : 'Wiadomość',
'Most recent' : 'Najnowsze',
'Most popular' : 'Najbardziej popularne',
'Hidden gems' : 'Ukryte perełki',
"Coubers' choice" : 'Wybór Coubowiczów',
'Communities' : 'Społeczności',
'Dark Theme' : 'Ciemny Motyw',
'Language: ' : 'Język: ',
'Developers' : 'Deweloperzy',
'Help' : 'Pomoc',
'English' : 'Polski',
'Channels' : 'Kanały',
'Oldest' : 'Najstarsze',
'Views count' : 'Ilość wyświetleń',
'View replies' : 'Obejrzyj odpowiedzi',
'Recent' : 'Niedawne',
'All channels' : 'Wszystkie kanały',
'Audio recognition by ' : 'Rozpoznawanie dźwięku przez ',
'Next set of stories in' : 'Kolejny zestaw story za',
'Join our' : 'Dołącz do',
'Add' : 'Dodaj',
'Coubs' : 'Couby',
'Popular' : 'Popula​rne', // invisible character to prevent to translation conflict
'hours' : 'godziny',
'Next' : 'Dalej',
'More' : 'Więcej',
'Back' : 'Wróć',
'from' : 'z',
'Hide' : 'Ukryj',
'reply' : 'odpowiedź',
'Flag' : 'Zgłoś',
'Embed' : 'Osadzenie',
'Mail' : 'Poczta',
'Undervalued' : 'Niedocenione'};

function translate() {
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
}
//document.querySelector('a[href="/hot"]').childNodes[1].textContent = '\nPopularne\n';
}
translate();
  replacements = {
'Only other users can leave reactions to your coub' : 'Tylko inni użytkownicy mogą zostawić reakcje do twojego couba',
'Copy link' : 'Kopiuj link',
'Add new channel' : 'Dodaj nowy kanał',
'Create Coub' : 'Stwórz Couba',
'Open on Coub' : 'Otwórz na Coubie',
'Create Story' : 'Stwórz Story',
'Create recoub' : 'Stwórz recouba',
'Followers' : 'Obserwują',
'Followed' : 'Zaobserwowane',
'Unfollow' : 'Przestań obserwować',
'Follow' : 'Zaobserwuj',
'Comments' : 'Komentarze',
'Community' : 'Społeczność',
'Hashtags' : 'Hasztagi',
'Sources' : 'Źródła',
//'Subscribe': '',
//'Unsubscribe' : '',
' day' : ' dzień',
' days' : ' dni',
'Edit cover' : 'Edytuj tło',
'Created by' : 'Stworzone przez',
'Bookmarked' : 'Zapisane',
'Bookmark' : 'Zapisz',
'Delete coub' : 'Usuń couba',
'Edit info' : 'Edytuj informacje',
'Undo like' : 'Usuń polubienie',
'Undo repost' : 'Usuń reposta',
'Repost' : 'Repostuj',
'Likes' : 'Lubiane',
'Dislike' : 'Nielubię',
'Like' : 'Lubię',
'Flag' : 'Zgłoś',
'Download' : 'Pobierz',
'reposted by' : 'podane dalej przez',
'More...' : 'Więcej...',
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
'Notifications' : 'Powiadomienia',
'Promoted' : 'Wypromowane',
'Fullscreen' : 'Pełny ekran',
'Mosaic view' : 'Widok mozaiki',
'List view' : 'Widok listy',
'Settings' : 'Ustawienia',
'Logout' : 'Wyloguj',
'Share' : 'Udostępnij',
'views' : 'wyświetleń',
' by ' : ' przez ',
'community' : 'społeczności',
'Featured' : 'Wyróżnione',
'Pinned' : 'Prz​ypięty',
'Pin' : 'Przypnij'
  };

const $q = (_) => document.querySelector(_);
try {
  $q('#q').placeholder = 'Wyszukaj Couba';
  document.getElementsByClassName('list list--selectable -centered-text')[0].insertAdjacentHTML('afterbegin' , '<li class="list__item list__item-beta" data-code="pl">EnglIsh</li>');
  //$q('coub__pinned-badge').data-prompt='Przypięty Coub';
} catch (error) {
  console.error(`Can't find "Search Coub" placeholder or Language Selector`)
};

observer = new MutationObserver(() => {
  translate();
  try {$q('[placeholder="Post your comment here..."]').placeholder = 'Zamieść swój komentarz tutaj...'} catch (error) {};
});


observer.observe(document.body, {
  threshold: 0.5,
  childList: true,
  subtree: true,
});
// document.onscroll = translate;
/* setInterval(function() {
if (document.querySelector('div.load-indicator.-big.-center.-blue').getAttribute('style') == 'display: block;') {
  translate();
}
}, 1000); */
//    document.querySelector('div.load-indicator.-big.-center.-blue[style="display: none;"]').addEventListener('change', function () {
//    if (document.querySelector('div.load-indicator.-big.-center.-blue').getAttribute('style') == 'display: none;') console.log('true')});
try {
GM_addStyle(`
.footer__copyright div:after {
content: " Translated by BlackusPL";
}
`);
} catch (error) {};
console.log("%c[Polish Coub] %cSuccesfully Loaded","color: rgb(58, 113, 193)","color: white")
}());