<script>

//************* settings *************//

var pfu = [
	{"name":"ФОДН ХХХХХХ"
  },
  {"name":"УПФУ в Гадяцькому р-нi"
  },
  {"name":"УПФУ в Глобинському р-нi"
  },
  {"name":"УПФУ в Глобинському р-нi(Градизьк)"
  },
  {"name":"УПФУ в Гребiнкiвському р-нi"
  },
  {"name":"УПФУ в Диканському р-нi"
  },
  {"name":"УПФУ в Зiнькiвському р-нi"
  },
  {"name":"УПФУ в Карлiвському р-нi"
  },
  {"name":"УПФУ в Київському р-нi м.Полтави"
  },
  {"name":"УПФУ в Кобеляцькому р-нi"
  },
  {"name":"УПФУ в Козельщинському р-нi"
  },
  {"name":"УПФУ в м.Комсомольську"
  },
  {"name":"УПФУ в Котелевському р-нi"
  },
  {"name":"УПФУ в м.Кременчуцi(Автозавод. р-н)"
  },
  {"name":"УПФУ в м.Кременчуцi(Крюків. р-н)"
  },
  {"name":"УПФУ в Кременчуцькому р-нi"
  },
  {"name":"УПФУ в Ленiнському р-нi м.Полтави"
  },
  {"name":"УПФУ в Лохвицькому р-нi"
  },
  {"name":"Лубенське об'єднане УПФУ"
  },
  {"name":"Миргородське об'єднане УПФУ"
  },
  {"name":"УПФУ в Н.Санжарському р-нi"
  },
  {"name":"УПФУ в Октябрському р-нi м.Полтави"
  },
  {"name":"УПФУ в Оржицькому р-нi"
  },
  {"name":"УПФУ в Пирятинському р-нi"
  },
  {"name":"УПФУ в Полтавському р-нi"
  },
  {"name":"УПФУ в Решетилiвському р-нi"
  },
  {"name":"УПФУ в Семенiвському р-нi"
  },
  {"name":"УПФУ в Хорольському р-нi"
  },
  {"name":"УПФУ в Чорнухинському р-нi"
  },
  {"name":"УПФУ в Чутiвському р-нi"
  },
  {"name":"УПФУ в Шишацькому р-нi"
  }]

var upszn = [
  {"name":"УПСЗН Автозаводського р-ну"
  },
  {"name":"УПСЗН Великобагачанського р-ну"
  },
  {"name":"УПСЗН Гадячського р-ну"
  },
  {"name":"УПСЗН Глобинського р-ну"
  },
  {"name":"УПСЗН Глобинського р-ну(Градизьк)"
  },
  {"name":"УПСЗН Гребiнкiвського р-ну"
  },
  {"name":"УПСЗН Диканського р-ну"
  },
  {"name":"УПСЗН Зiнькiвського р-ну"
  },
  {"name":"УПСЗН Карлiвського р-ну"
  },
  {"name":"УПСЗН Київского р-ну м.Полтави"
  },
  {"name":"УПСЗН Кобеляцького р-ну"
  },
  {"name":"УПСЗН Козельщинського р-ну"
  },
  {"name":"УПСЗН в м.Комсомольску"
  },
  {"name":"УПСЗН Котелевського р-ну"
  },
  {"name":"УПСЗН Ленiнського р-ну м.Полтави"
  },
  {"name":"УПСЗН в м.Лубнах"
  },
  {"name":"УПСЗН Кременчуцького р-ну"
  },
  {"name":"УПСЗН Крюкiвського р-ну"
  },
  {"name":"УПСЗН Лохвицького р-ну"
  },
  {"name":"УПСЗН Лубенського р-ну"
  },
  {"name":"УПСЗН Машiвського р-ну"
  },
  {"name":"УПСЗН в м.Миргородi"
  },
  {"name":"УПСЗН Миргородського р-ну"
  },
  {"name":"УПСЗН Новосанжарського р-ну"
  },
  {"name":"УПСЗН Октябрського р-ну м.Полтави"
  },
  {"name":"УПСЗН Оржицького р-ну"
  },
  {"name":"УПСЗН Пирятинського р-ну"
  },
  {"name":"УПСЗН Полтавського р-ну"
  },
  {"name":"УПСЗН Решетилiвського р-ну"
  },
  {"name":"УПСЗН Семенiвського р-ну"
  },
  {"name":"УПСЗН Хорольського р-ну"
  },
  {"name":"УПСЗН Чернухинського р-ну"
  },
  {"name":"УПСЗН Чутiвського р-ну"
  },
  {"name":"УПСЗН Шишацького р-ну"
  }];
  var year = 2016;
  var perid = { 
    "name":["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    "valuePfu":["04-01-"+year+" по 25-01-"+year+"","04-02-"+year+" по 25-02-"+year+"", "04-03-"+year+" по 25-03-"+year+"","04-04-"+year+" по 25-04-"+year+"","04-05-"+year+" по 25-05-"+year+"","04-06-"+year+" по 25-06-"+year+"","04-07-"+year+" по 25-07-"+year+"", "04-08-"+year+" по 25-08-"+year+"", "04-09-"+year+" по 25-09-"+year+"","04-10-"+year+" по 25-10-"+year+"","04-11-"+year+" по 25-11-"+year+"", "04-12-"+year+" по 25-12-"+year+""],
    "valueUpszn":["02-01-"+year+" по 22-01-"+year+"","02-02-"+year+" по 22-02-"+year+"", "02-03-"+year+" по 22-03-"+year+"","02-04-"+year+" по 22-04-"+year+"","02-05-"+year+" по 22-05-"+year+"","02-06-"+year+" по 22-06-"+year+"","02-07-"+year+" по 22-07-"+year+"", "02-08-"+year+" по 22-08-"+year+"", "02-09-"+year+" по 22-09-"+year+"","02-10-"+year+" по 22-10-"+year+"","02-11-"+year+" по 22-11-"+year+"", "02-12-"+year+" по 22-12-"+year+""],
  };
  var tip = {
   "pfu":[1, 28, "dop"],
   "upszn":[3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,33]
  };
  var publishWebApplicationLink = "https://script.google.com/macros/s/AKfycbxaw4mU9oK7xsWkqetf1G0Zub3eX90RIKasWmlmDMq-CVsE9xO-/exec";
  var stampImageLink = "http://drive.google.com/uc?export=view&id=0BzMHa0kyN7fKWGU5Zl9NY0lCZXc";
  var logoImageLink = "http://drive.google.com/uc?export=view&id=0BzMHa0kyN7fKTVMtaVZVUEZsTHc";
  var bankName = "ПАТ КБ ПриватБанк";

  //************* function *************//

 // функция вставки данных на страницу ПФ
 function ShowResultsPF() {
  //инициализация переменных
   var fondName = $("#select_pfu").val();
   var period= $("#select_period").val();
   var tip = $("#select_tip").val();

	 if($("#select_pfu").val()=="0"){
		 alert("Выберіть фонд");
	 } else if ($("#select_period").val()=="0"){
		 alert("Выберіть період");
	 } else if ($("#select_tip").val()=="0"){
		 alert("Выберіть тип");
	 } else {

	 insertProgressBar();
     insertLogo();
     insertStamp();
     hideMenu();
     insertBankName();
     insertPeriod();
     insertFondName();
     insertFinances();
     insertAmountList();
     google.script.run.withSuccessHandler(insertList).getArrVozvrPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertAllSumPF).getAllSumToFixedPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertAllRecipientsPF).getAllRecipientsPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertAllSumInWorldsPF).getAllSumInWorldsPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertCountNoCreditedRecipientsPF).getNoCreditedRecipientsPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertNoCreditedSumPF).getNoCreditedSumToFixedPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertNoCreditedSumInWorlds).getNoCreditedSumInWorldsPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertCountCreditedRecipientsPF).getCountCreditedRecipientsPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertCreditedSumPF).getCreditedSumToFixedPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertCreditedSumInWorldsPF).getCreditedSumInWorldsPF(fondName, period,tip);
     google.script.run.withSuccessHandler(insertRefundSumInWorldsPF).getRefundSumInWorldsPF(fondName, period,tip); 
     google.script.run.withSuccessHandler(insertRefundsPF).getArrVozvrPF(fondName, period,tip);
     setTimeout(function(){$('.b-popup').remove()},10000);
	 $(".opis").css("margin","20px");
     $(".logo").css("margin","20px 20px 0 20px");
     $("#spisok th:nth-child(4)").css("width","30%");
     $("#spisok th:nth-child(8)").css("width","20%");
	 };
 };
// функция вставки данных на страницу УПСЗН 
function ShowResultsUPSZN() {
  //инициализация переменных
   var fondName = $("#select_upszn").val();
   var period= $("#select_period").val();
   var tip = $("#select_tip").val();
   
   if ($("#select_upszn").val()=="0"){
		 alert("Выберіть фонд");
	 } else if ($("#select_period").val()=="0"){
		 alert("Выберіть період");
	 } else if ($("#select_tip").val()=="0"){
		 alert("Выберіть тип");
	 } else {
		 google.script.run.withSuccessHandler(insertRefundSumInWorldsUPSZN).getRefundSumInWorlds_UPSZN(fondName, period,tip);
		 google.script.run.withSuccessHandler(insertListUPSZN).getArrVozvrUPSZN(fondName, period,tip);
		 insertProgressBar();
		 insertLogo();
		 insertStamp();
		 hideMenu();
		 insertBankName();
		 insertPeriod();
		 insertFondName();
		 insertFinances();
		 insertAmountList();
		 setTimeout(function(){$('.b-popup').remove()},10000);
		 $(".opis").css("margin","20px");
		 $(".logo").css("margin","20px 20px 0 20px");
		 $("#spisok th:nth-child(4)").css("width","30%");
		 $("#spisok th:nth-child(8)").css("width","20%");
	 };
 };

///вспомагательные функции
//форматирование даты
function formatDate(d) {
    if(d){  
      var dd = d.getDate();
      if (dd < 10) dd = '0' + dd;
      var mm = d.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;
      var yy = d.getFullYear() 
      return dd + '.' + mm + '.' + yy;
    } else return " ";
  };
//добавить опции в селекты
function addOptionsToSelect(idselect, arrOptionsValue, arrOptionsText){
 for (var i = 0;i < arrOptionsValue.length;i++) {
                $(idselect).append( $('<option value="'+arrOptionsValue[i]+'">'+ arrOptionsText[i]+'</option>'));          
                };
};
//вставить печать
function insertStamp() {
	$( "<img src='"+stampImageLink+"'>" ).appendTo(".stamp");
};
//вставить логотип
function insertLogo() {
	$("<img src='"+logoImageLink+"'>" ).insertBefore(".menu").addClass("logo");
};
//вставить ProgressBar
function insertProgressBar() {
	$('<div class="b-popup"><div class="meter animate"><span><span>Завантаження...</span></span><div>').insertBefore(".menu")
};
//спрятать меню
function hideMenu() {
	$(".menu" ).click(function() {
		$( this ).css( "display", "none" );
	});
};
//вставить название банка
function insertBankName() {
	$(".bankName").html(bankName);
};
//вставить колличество списков
function insertAmountList() {
	$(".amountList").html("1");
};

//вставить период
function insertPeriod() {

if ($("#select_period").val()){
	$(".period").html($("#select_period").val())
 };
};
//вставить название фонда
function insertFondName() {

if ($("#select_pfu").val()){
	$(".fondName").html($("#select_pfu").val())
};

if ($("#select_upszn").val()){
	$(".fondName").html($("#select_upszn").val())
 }; 
};
//вставить название органа который финансирует и тип
function insertFinances() {

 if ($("select").is("#select_pfu")){
 var tipp = $("#select_tip").val();
 $(".finances").html("Пенсійний фонд" + " тип "+tipp);
}

 if ($("select").is("#select_upszn")){
	 var tip = $("#select_tip").val();

	 if (tip==9||tip==14){
		 $(".finances").html("Пенсійний фонд"+ " тип "+tip);
	 } else if (tip==5){
		 $(".finances").html("Місцевий бюджет"+ " тип "+tip);
	 } else if (tip==7||tip==12||tip==21||tip==24||tip==27) {
		 $(".finances").html("Чорнобильский фонд"+ " тип "+tip);
	 } else if (tip==3||tip==8||tip==13||tip==15||tip==18||tip==30||tip==33) {
		 $(".finances").html("Субвенції"+ " тип "+tip);
	 } else if (tip==10||tip==20||tip==23) {
		 $(".finances").html("Держбюджет"+ " тип "+tip);
	 } else if (tip==11) {
		 $(".finances").html("Місцевий бюджет"+ " тип "+tip);
	 } else if (tip==28) {
		 $(".finances").html("Обласний бюджет"+ " тип "+tip);
	 } else {
		 $(".finances").html("Субвенції"+ " тип "+tip);
	 };
 };
};
//вставить данные в список возвратов ПФ
function insertList(a) {
	var a = JSON.parse(a);
	for (var i = 0; i <a.length; i++ ) {
	var payDay = formatDate(new Date(a[i].dv));
	$('#spisok > tbody:last').append('<tr><td>'+payDay+'</td><td>'+(i+1)+'</td><td>'+a[i].inn+'</td><td>'+a[i].fio+'</td><td>'+a[i].summa+'</td><td></td><td>'+a[i].inn+'</td><td>'+a[i].reason+'</td></tr>');
};
$('#spisok > tbody > tr:nth(1)').remove();
};
//вставить данные в список возвратов упсзн
function insertListUPSZN(a) {
	var a = JSON.parse(a);
	for (var i = 0; i <a.length; i++ ) {
		var dateVozvr = formatDate(new Date(a[i].dv));
		$('#spisok > tbody:last').append('<tr><td>--</td><td>'+(i+1)+'</td><td>'+a[i].inn+'</td><td>'+a[i].fio+'</td><td>'+a[i].summaF+'</td><td></td><td>'+a[i].inn+'</td><td>'+a[i].reason+'</td></tr>');
	};
	$('#spisok > tbody > tr:nth(1)').remove();
	$('.AllRecipients').html(a[0].allCount);
	$(".AllSum").html(a[0].allSumF);
	$(".CountNoCreditedRecipients").html(a.length);
	$(".AllSumInWorlds").html(a[0].allSumInWorld);
	$(".CountCreditedRecipients").html(a[0].allCount - a.length);
	var allSumNoCredeted = 0;
	for (var i = 0; i <a.length; i++ ){
		allSumNoCredeted+=a[i].summa
	};
	$(".NoCreditedSum").html(allSumNoCredeted.toFixed(2));
	$(".CreditedSum").html((a[0].allSum)-allSumNoCredeted);
	$(".CreditedSumInWorlds").html(a[0].allSumCredetedInWorld);
	$(".NoCreditedSumInWorlds").html(a[0].allSumNoCredetedInWorld);
	var string ="";
	for (var i = 0; i < a.length; i++ ) {
		var mo = a[i].mo;

		if (mo<10){
			mo = "0"+ mo;
		};
		var payDay = formatDate(new Date(a[i].dateVozvr));
		if (a[i].reason!="недофінансування"){
			string+="№ " + mo + " від " + payDay + "p.<br>";
		};
	};
	$('.refunds').html(string)
};
////вставить общую сумму возвратов средств цифрами и словами упсзн
function insertRefundSumInWorldsUPSZN(a) {
	$(".RefundSumInWorlds").html(a);
};
//вставить общую сумму по пенсии
function insertAllSumPF(a) {
	$(".AllSum").html(a);
};
//вставить получателей по пенсии
function insertAllRecipientsPF(a) {
	$(".AllRecipients").html(a);
};
//вставить общую сумма словами
function insertAllSumInWorldsPF(a) {
	$(".AllSumInWorlds").html(a);
};
//вставить колличество не зачисленных получателей
function insertCountNoCreditedRecipientsPF(a) {
	$(".CountNoCreditedRecipients").html(a);
};
//вставить сумму не зачисленных средств
function insertNoCreditedSumPF(a) {
	$(".NoCreditedSum").html(a);
}
//вставить сумму не зачисленных средств цифрами и словами
function insertNoCreditedSumInWorlds(a) {
	$(".NoCreditedSumInWorlds").html(a);
};
//вставить колличество зачисленных получателей
function insertCountCreditedRecipientsPF(a) {
	$(".CountCreditedRecipients").html(a);
};
//вставить сумму зачисленных средств
function insertCreditedSumPF(a) {
	$(".CreditedSum").html(a);
};
//вставить сумму зачисленных средств цифрами и словами
function insertCreditedSumInWorldsPF(a) {
	$(".CreditedSumInWorlds").html(a);
};
//вставить сумму возвратов словами
function insertRefundSumInWorldsPF(a) {
	$(".RefundSumInWorlds").html(a);
};
//вставить данные по возвратам
function insertRefundsPF(a) {
	var a = JSON.parse(a);
	var string ="";
	for (var i = 0; i < a.length; i++ ) {
		var mo = a[i].mo;
		if (mo<10){
			mo = "0"+ mo;
		};
		var payDay = formatDate(new Date(a[i].dateVozvr));
		if (a[i].reason!="недофінансування"){
			string+="№ " + mo + " від " + payDay + "p.<br>";
		};
	};
	$('.refunds').html(string)
};
</script>
