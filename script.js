let modal = document.getElementById("modalWin");
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];
let what_play = document.getElementById("what_play");
let outupBB = document.getElementById("outputBB");
let roles = document.getElementById("roles");
let nicknames = document.getElementById("nicknames");
let ranks = document.getElementById("ranks");
let SS = document.getElementById("SS");
let name = document.getElementById("name");
let fname = document.getElementById("fname");
let yold = document.getElementById("yold");
let vk = document.getElementById("vk");
let forum = document.getElementById("forum");
let guard = document.getElementById("guard");
let kvent = document.getElementById("kvent");
let otd = document.getElementById("otd");
let earlier = document.getElementById("earlier");
let comment = document.getElementById("comment")
btn.onclick = function () {
    modal.style.display = "block";
    outupBB.value += decodeURI("[box=#003f6d][background=#eaf0fe][coll1-3][center][img]https://i.imgur.com/67cTTQ0.png [/img][/center]%7C[color=#003f6d][size=140][center]SAN ANDREAS DEPARTMENT OF PUBLIC SAFETY\nHUMAN RESOURCES[/size]\n\n[size=160][b]REINSTATEMENT PROGRAM[/b][/size][/center][/color][/coll1-3]\n\n[block=#003f6d][color=#FFFFFF][center][size=110][b]ИНФОРМАЦИЯ О ПЕРСОНАЖАХ[/b][/size][/center][/color][/block][textareaa=#FFFFFF][anl=ЧТО ВЫ ПЛАНИРУЕТЕ ИГРАТЬ У НАС]"+what_play.value+"\n[/anl]\n[anl=ВАШИ ПРЕДЫДУЩИЕ РОЛИ]"+roles.value+"[/anl]\n[anl=ПРОШЛЫЕ ИГРОВЫЕ НИКНЕЙМЫ И СЕРВЕРА]"+nicknames.value+"[/anl]\n[anl=ПРОШЛЫЕ ЗВАНИЯ И СООБЩЕСТВА]"+ranks.value+"[/anl]\n[anl=ДОКАЗАТЕЛЬСТВА ВАШЕЙ ИГРЫ (ТОЛЬКО ХОРОШИЕ СС, ТЕЗИСНО ПО ПЕРСОНАЖАМ)]"+SS.value+"[/anl][/textareaa]\n\n[block=#003f6d][color=#FFFFFF][center][size=110][b]ИНФОРМАЦИЯ ОБ АППЛИКАНТЕ[/b][/size][/center][/color][/block][textareaa=#FFFFFF][coll3][anl=КАК ВАС ЗОВУТ?]"+name.value+"[/anl]|[anl=ВАШ НИКНЕЙМ В СООБЩЕСТВАХ (ЕСЛИ ЕСТЬ)]"+fname.value+"[/anl]|[anl=ВАШ ВОЗРАСТ]"+yold.value+"[/anl][/coll3]\n[coll][anl=ССЫЛКА НА VK]"+vk.value+"[/anl]|[anl=ССЫЛКА НА ФОРУМНЫЙ АККАУНТ (G-RP)]"+forum.value+"[/anl][/coll][/textareaa]\n\n[block=#003f6d][color=#FFFFFF][center][size=110][b]ПРОЧАЯ ИНФОРМАЦИЯ[/b][/size][/center][/color][/block][textareaa=#FFFFFF][anl=КАКАЯ ЗАЩИТА СТОИТ НА АККАУНТЕ]"+guard.value+"[/anl]\n[anl=СКРИНШОТ КВЕНТЫ ВАШЕГО ПЕРСОНАЖА]"+kvent.value+"[/anl]\n[anl=ВАШИ ПРЕДПОЧТЕНИЯ ПО ОТДЕЛУ]"+otd.value+"[/anl]\n[anl=ПОДАВАЛОСЬ ЛИ ПОДОБНОЕ ЗАЯВЛЕНИЕ РАНЕЕ?]"+earlier.value+"[/anl]\n[anl=ЛИЧНЫЙ КОММЕНТАРИЙ/ПРОСЬБА (НЕ ОБЯЗАТЕЛЬНО)]"+comment.value+"[/anl][/textareaa]\n[center][size=85][b]© 2020 San Andreas Highway Patrol. All Rights Reserved.[/b][/size][/center][/box][/background]");
    console.log(outupBB.value);
    console.log(what_play.value);
}