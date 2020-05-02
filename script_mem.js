let modal = document.getElementById("modalWin");
let btn = document.getElementById("btn");
let rank = document.getElementById("rank");
let shev = document.getElementById("shev");
let nums = document.getElementById("nums");
let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let sname = document.getElementById("sname");
let surname = document.getElementById("surname");
let date_start = document.getElementById("date_start");
let otdel = document.getElementById("otdel");
let link = document.getElementById("link");
let otd_rank = document.getElementById("otd_rank");
let gun = document.getElementById("gun");
let born = document.getElementById("born");
let date_b = document.getElementById("date_b");
let sex = document.getElementById("sex");
let race = document.getElementById("race");
let family = document.getElementById("family");
let adress = document.getElementById("adress");
let num = document.getElementById("num");
let outupBB = document.getElementById("outputBB");
btn.onclick = function () {
    modal.style.display = "block";
    outupBB.value +=decodeURI("[box=#003f6d][background=#eaf0fe][coll3][left][img]https://i.imgur.com/q1a6Mz3.png[/img][/left]|[center][size=130]\n[i]"+rank.value+"[/i]\n[i]"+nums.value+"[/i][/size][/center]|[right][img]"+shev.value+"[/img][/right][/coll3]\n[block=#003f6d][color=#FFFFFF][center][size=110][b]ОСНОВНАЯ ИНФОРМАЦИЯ[/b][/size][/center][/color][/block][textareaa=#FFFFFF][coll1-3][imgborder]"+avatar.value+"[/imgborder]|[left][coll][an=(Имя)]"+name.value+"[/an]|[an=(Второе имя)]"+sname.value+"[/an][/coll]\n[an=(Фамилия)]"+surname.value+"[/an]\n[an=(Дата начала работы)]"+date_start.value+"[/an][/left][/coll1-3]\n[block=#003f6d][color=#FFFFFF][center][size=110][b]ОТДЕЛЫ И ДОЛЖНОСТИ[/b][/size][/center][/color][/block][textarea][coll3][left][b]Patrol Division[/b][/left]|[center][url="+link.value+"]Personal Patrol File[/url][/center]|[right][b]"+otd_rank.value+"[/b][/right][/coll3][/textarea]\n[an=(Личное оружие)]"+gun.value+"[/an][/textareaa]\n\n[block=#003f6d][color=#FFFFFF][center][size=110][b]ПЕРСОНАЛЬНЫЕ ДАННЫЕ[/b][/size][/center][/color][/block][textarea][an=(Место рождения)]"+born.value+"[/an]\n[coll3][an=(Дата рождения)]"+date_b.value+"[/an]|[an=(Полных лет)]"+yold.value+"[/an]|[an=(Пол)]"+sex.value+"[/an][/coll3]\n[coll2-3][an=(Расовая принадлежность)]"+race.value+"[/an]|[an=(Семейное положение)]"+family.value+"[/an][/coll2-3][/textarea]\n\n[block=#003f6d][color=#FFFFFF][center][size=110][b]КОНТАКТНЫЕ ДАННЫЕ[/b][/size][/center][/color][/block][textarea][an=(Адрес проживания)]"+adress.value+"[/an]\n[an=(Рабочий номер телефона)]"+num.value+"[/an][/textarea][hr][/hr][coll][left][i]Личное дело сотрудника Дорожного Патруля[/i][/left]|[right][i]Стандарт от 23 апреля 2020г.[/i][/right][/coll][/background][/box]");
}