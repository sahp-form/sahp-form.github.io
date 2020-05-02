let modal = document.getElementById("modalWin");
let btn = document.getElementById("btn");
let outupBB = document.getElementById("outputBB");
let case_num = document.getElementById("case_num");
let today_date = document.getElementById("today_date");
let location_shot = document.getElementById("location_shot");
let date = document.getElementById("date");
let justify = document.getElementById("justify");
let inc_time = document.getElementById("inc_time");
let susp_activity = document.getElementById("susp_activity");
let susp_adress = document.getElementById("susp_adress");
let susp_age = document.getElementById("susp_age");
let susp_gun = document.getElementById("susp_gun");
let susp_help = document.getElementById("susp_help");
let susp_name = document.getElementById("susp_name");
let susp_num = document.getElementById("susp_num");
let susp_race = document.getElementById("susp_race");
let susp_sex = document.getElementById("susp_sex");
let susp_surname = document.getElementById("susp_surname");
let off_activity = document.getElementById("off_activity");
let off_adress = document.getElementById("off_adress");
let off_age = document.getElementById("off_age");
let off_badge = document.getElementById("off_badge");
let off_division = document.getElementById("off_division");
let off_duty = document.getElementById("off_duty");
let off_gun = document.getElementById("off_gun");
let off_gun_impact = document.getElementById("off_gun_impact");
let off_injure = document.getElementById("off_injure");
let off_name = document.getElementById("off_name");
let off_num = document.getElementById("off_num");
let off_race = document.getElementById("off_race");
let off_sex = document.getElementById("off_sex");
let off_sign = document.getElementById("off_sign");
let off_surname = document.getElementById("off_surname");

btn.onclick = function () {
    modal.style.display = "block";
    outupBB.value += "[doc][doc_h]|DEPARTMENT OF PUBLIC SAFETY\nSAN ANDREAS HIGHWAY PATROL\n[b]CUOF REPORT[/b] "+case_num.value+"|[right][color=#FFFFFF]_[/color]\n[size=85][b]Filed in:[/b] "+today_date.value+"[/right][/size][/doc_h][borderb=#000][/borderb] \n[doc_b=ИНФОРМАЦИЯ ОБ ИНЦИДЕНТЕ][coll][a=Локация]"+location_shot.value+"[/a]|[a=Дата]"+date.value+"[/a][/coll]\n[coll][a=Обоснование применение силы]"+justify.value+"[/a]|[a=Время]"+inc_time.value+"[/a][/coll][/doc_b]\n[doc_b=ИНФОРМАЦИЯ О ПОДОЗРЕВАЕМОМ][coll4][a=Имя]"+susp_name.value+"[/a]|[a=Фамилия]"+susp_surname.value+"[/a]|[a=Пол]"+susp_sex.value+"[/a]|[a=Возраст]"+susp_age.value+"[/a][/coll4] \n[coll3][a=Адрес проживания]"+susp_adress.value+"[/a]|[a=Номер телефона]"+susp_num.value+"[/a]|[a=Расовая принадлежность]"+susp_race.value+"[/a][/coll3]\n[ab=Действия подозреваемого на момент инцидента]"+susp_activity.value+"[/ab]\n[a=Оружие]"+susp_gun.value+"[/a]\n[a=Оказана помощь]"+susp_help.value+"[/a][/doc_b]\n[doc_b=ИНФОРМАЦИЯ ОБ ОФИЦЕРЕ][coll4][a=Имя]"+off_name.value+"[/a]|[a=Фамилия]"+off_surname.value+"[/a]|[a=Пол]"+off_sex.value+"[/a]|[a=Возраст]"+off_age.value+"[/a][/coll4] \n[coll3][a=Адрес проживания]"+off_adress.value+"[/a]|[a=Номер телефона]"+off_num.value+"[/a]|[a=Расовая принадлежность]"+off_race.value+"[/a][/coll3]\n[coll4][a=Дивизион]"+off_division.value+"[/a]|[a=Маркировка]"+off_sign.value+"[/a]|[a=Номер значка]"+off_badge.value+"[/a]|[a=Статус на момент инцидента]"+off_duty.value+"[/a][/coll4]\n[ab=Действия офицера на момент инцидента]"+off_activity.value+"[/ab]\n[a=Оружие]"+off_gun.value+"[/a]\n[a=Опишите места воздействия оружия]"+off_gun_impact.value+"[/a]\n [a=Ранен?]"+off_injure.value+"[/a][/doc_b][/doc]";
}