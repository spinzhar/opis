//настройки
var dataSpreadsheetsID = "SpreadsheetsID";
//var dataSpreadsheetsID = "SpreadsheetsID";
var rangeDataPfNames = "A3:A41";

//выборка массива обьектов возвратов по пенсии
function getArrVozvrPF(fondName,period,tip) {
var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getLastRow();
var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(1,1,LastRow,1).getValues().toString().split(",");
var rowIndex = col.indexOf(period)+2;
var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");  
var colorRowIndex = bgColors.indexOf("#38761d")+1;
var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex,1,colorRowIndex,11).getValues();
var fio = [];
   
  for (var i = 0; i < data.length;i++){
   var o ={};  
    if (data[i][10] == tip&& data[i][2] == fondName) {
      o.mo = data[i][0];
      o.dateVozvr = formatDate(data[i][1]);
      o.fond = data[i][2];
      o.inn = data[i][3];
      o.fio = data[i][4] + " "+data[i][5] + " " + data[i][6];
      o.summa = (data[i][7]).toFixed(2);
      o.dv = formatDate(data[i][8]);
      o.reason = data[i][9];
      fio.push(o);
    }
  }
  return JSON.stringify(fio);
}

//выборка массива обьектов возвратов по упсзн

function getArrVozvrUPSZN(fondName,month,tip) {
  var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getLastRow();
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(1,1,LastRow,1).getValues().toString().split(",");
  var rowIndex = col.indexOf(month)+2;
  var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");
  var colorrowIndex = bgColors.indexOf("#38761d")+1;
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(rowIndex,1,colorrowIndex,12).getValues();
  var fio = [];
  var allSumNoCredeted = 0; 
  for (var i = 0; i < data.length;i++){
   var o ={};  
    if (data[i][8] == tip&& data[i][2] == fondName) {
      allSumNoCredeted+=data[i][7];
      o.mo = data[i][0];
      o.dateVozvr = formatDate(data[i][1]);
      o.fond = data[i][2];
      o.inn = data[i][3];
      o.fio = data[i][4] + " "+data[i][5] + " " + data[i][6];
      o.summa = (data[i][7]);
      o.summaF = (data[i][7]).toFixed(2);
      o.tip = data[i][8];
      o.allSum = data[i][9];
      o.allSumF = (data[i][9]).toFixed(2);
      o.allSumInWorld= o.allSumF+" ("+FloatToSamplesInWordsUkr(o.allSum)+")";
      o.allCount = data[i][10];
      o.reason = data[i][11];
      fio.push(o);
    }
  }
  var allSumNoCredetedF = allSumNoCredeted.toFixed(2);
  var allSumNoCredetedInWorld = allSumNoCredetedF+" ("+FloatToSamplesInWordsUkr(allSumNoCredeted)+")"
  var allSumCredeted = fio[0].allSum-allSumNoCredeted;
  var allSumCredetedF = allSumCredeted.toFixed(2);
  var allSumCredetedInWorld = allSumCredetedF+" ("+FloatToSamplesInWordsUkr(allSumCredeted)+")";
  fio[0].allSumCredetedInWorld = allSumCredetedInWorld;
  fio[0].allSumNoCredetedInWorld = allSumNoCredetedInWorld;
  return JSON.stringify(fio);
  
}  
//по упсзн общая сумма возвратов toFixed(2)
function getRefundSumToFixed_UPSZN(fondName,month,tip) {
  var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getLastRow();
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(1,1,LastRow,1).getValues().toString().split(",");
  var rowIndex = col.indexOf(month)+2;
  var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");
  var colorrowIndex = bgColors.indexOf("#38761d")+1;
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(rowIndex,1,colorrowIndex,12).getValues();
  var sum =0;
  for (var i=0;i<data.length;i++){
    if(data[i][8]==tip&&data[i][2]==fondName&&data[i][11]!=="недофінансування") {
      sum+=data[i][7];
    };
  };
  return sum.toFixed(2);
};
//по упсзн общая сумма возвратов 
function getRefundSum_UPSZN(fondName,month,tip) {
  var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getLastRow();
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(1,1,LastRow,1).getValues().toString().split(",");
  var rowIndex = col.indexOf(month)+2;
  var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");
  var colorrowIndex = bgColors.indexOf("#38761d")+1;
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УТСЗН").getRange(rowIndex,1,colorrowIndex,12).getValues();
  var sum =0;
  for (var i=0;i<data.length;i++){
    if(data[i][8]==tip&&data[i][2]==fondName&&data[i][11]!=="недофінансування") {
      sum+=data[i][7];
    };
  };
  return sum;
};
//по упсзн общая сумма возвратов цифрами и словами
function getRefundSumInWorlds_UPSZN(fondName,month,tip) {
  var data = getRefundSumToFixed_UPSZN(fondName,month,tip)+" ("+FloatToSamplesInWordsUkr(getRefundSum_UPSZN(fondName,month,tip))+")";
  return data;
};
//выбрать общую сумму по пенсии toFixed(2)
function getAllSumToFixedPF(fondName,month,tip) {
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(rangeDataPfNames).getValues().toString().split(",");
  var row = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(1,2,1,72).getValues().toString().split(",");
  var rowIndex = col.indexOf(fondName)+3;
  var colIndex = row.indexOf(month)+3;
  if (tip=="28"){
    colIndex+=2;
  } else if(tip=="dop"){
    colIndex+=4;
  };
  var sum = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(rowIndex,colIndex,1,1).getValues()[0][0];
  return sum.toFixed(2);
};
//выбрать общую сумму по пенсии
function getAllSumPF(fondName,month,tip) {
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(rangeDataPfNames).getValues().toString().split(",");
  var row = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(1,2,1,72).getValues().toString().split(",");
  var rowIndex = col.indexOf(fondName)+3;
  var colIndex = row.indexOf(month)+3;
  if (tip=="28"){
    colIndex+=2;
  } else if(tip=="dop"){
    colIndex+=4;
  };
  var sum = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(rowIndex,colIndex,1,1).getValues()[0][0];
  return sum; 
};
// выбрать общую сумма словами
function getAllSumInWorldsPF(fondName,month,tip) {
  var data = getAllSumToFixedPF(fondName,month,tip)+" ("+FloatToSamplesInWordsUkr(getAllSumPF(fondName,month,tip))+")";
  return data;
};
// выбрать получателей всего по пенсии
function getAllRecipientsPF(fondName,period,tip) {
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(rangeDataPfNames).getValues().toString().split(",");
  var row = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(1,2,1,72).getValues().toString().split(",");
  var rowIndex = col.indexOf(fondName)+3;
  var colIndex = row.indexOf(period)+2;
  if (tip=="28"){
    colIndex+=2;
  } else if(tip=="dop"){
    colIndex+=4;
  };
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("data").getRange(rowIndex,colIndex,1,1).getValues()[0][0];
  return data; 
};
// выбрать количество не зачисленных получателей
function getNoCreditedRecipientsPF(fondName,month,tip) {
  var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getLastRow();
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(1,1,LastRow,1).getValues().toString().split(",");
  var rowIndex = col.indexOf(month)+2;
  var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");
  var colorrowIndex = bgColors.indexOf("#38761d")+1;
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex,1,colorrowIndex,11).getValues();
  var count =0
  for (var i=0;i<data.length;i++){
    if(data[i][10]==tip&&data[i][2]==fondName) {
      count+=1;
    };
  };
  return count;
};
//выбрать сумму не зачисленных средств toFixed(2)
function getNoCreditedSumToFixedPF(fondName,month,tip){
  var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getLastRow();
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(1,1,LastRow,1).getValues().toString().split(",");
  var rowIndex = col.indexOf(month)+2;
  var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");
  var colorrowIndex = bgColors.indexOf("#38761d")+1;
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex,1,colorrowIndex,11).getValues();
  var sum =0;
  for (var i=0;i<data.length;i++){
    if(data[i][10]==tip&&data[i][2]==fondName) {
      sum+=data[i][7];
    };
  };
  return sum.toFixed(2);
};
// выбрать сумма не зачисленных средств
function getNoCreditedSumPF(fondName,month,tip){
  var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getLastRow();
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(1,1,LastRow,1).getValues().toString().split(",");
  var rowIndex = col.indexOf(month)+2;
  var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");
  var colorrowIndex = bgColors.indexOf("#38761d")+1;
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex,1,colorrowIndex,11).getValues();
  var sum =0;
  for (var i=0;i<data.length;i++){
    if(data[i][10]==tip&&data[i][2]==fondName) {
      sum+=data[i][7];
    };
  };
  return sum;
};
// выбрать сумму не зачисленных средств словами
function getNoCreditedSumInWorldsPF(fondName,month,tip) {
  var sum = getNoCreditedSumToFixedPF(fondName,month,tip)+" ("+FloatToSamplesInWordsUkr(getNoCreditedSumPF(fondName,month,tip))+")";
  return sum;
};
// выбрать количество зачисленных получателей
function getCountCreditedRecipientsPF(fondName,month,tip) {
  var data = getAllRecipientsPF(fondName,month,tip) - getNoCreditedRecipientsPF(fondName,month,tip);
  return data;
};
// выбрать сумма зачисленных средств toFixed(2)
function getCreditedSumToFixedPF(fondName,month,tip) {
  var sum = getAllSumPF(fondName,month,tip) - getNoCreditedSumPF(fondName,month,tip);
  return sum.toFixed(2);
};
// выбрать сумма зачисленных средств
function getCreditedSumPF(fondName,month,tip) {
  var sum = getAllSumPF(fondName,month,tip) - getNoCreditedSumPF(fondName,month,tip);
  return sum;
};
// выбрать сумма зачисленных средств словами
function getCreditedSumInWorldsPF(fondName,month,tip) {
  if(getCreditedSumPF(fondName,month,tip)>=0){
    var data = getCreditedSumToFixedPF(fondName,month,tip)+" ("+FloatToSamplesInWordsUkr(getCreditedSumPF(fondName,month,tip))+")";
  }else data="";
  return data;
};
// выбрать сумма возвратов toFixed(2)
function getRefundSumToFixedPF(fondName,month,tip) {
  var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getLastRow();
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(1,1,LastRow,1).getValues().toString().split(",");
  var rowIndex = col.indexOf(month)+2;
  var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");
  var colorrowIndex = bgColors.indexOf("#38761d")+1;
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex,1,colorrowIndex,11).getValues();
  var sum =0;
  for (var i=0;i<data.length;i++){
    if(data[i][10]==tip&&data[i][2]==fondName&&data[i][9]!=="недофінансування") {
      sum+=data[i][7];
    };
  };
  return sum.toFixed(2);
};
// выбрать сумма возвратов
function getRefundSumPF(fondName,month,tip) {
  var LastRow = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getLastRow();
  var col = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(1,1,LastRow,1).getValues().toString().split(",");
  var rowIndex = col.indexOf(month)+2;
  var bgColors = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex+1,1,LastRow,1).getBackgrounds().toString().split(",");
  var colorrowIndex = bgColors.indexOf("#38761d")+1;
  var data = SpreadsheetApp.openById(dataSpreadsheetsID).getSheetByName("Возвраты УПФУ").getRange(rowIndex,1,colorrowIndex,11).getValues();
  var sum =0;
  for (var i=0;i<data.length;i++){
    if(data[i][10]==tip&&data[i][2]==fondName&&data[i][9]!=="недофінансування") {
      sum+=data[i][7];
    };
  };
  return sum;
};
//выбрать сумма возвратов цифрами и словами
function getRefundSumInWorldsPF(fondName,month,tip) {
  var data = getRefundSumToFixedPF(fondName,month,tip)+" ("+FloatToSamplesInWordsUkr(getRefundSumPF(fondName,month,tip))+")";
  return data;
};

//вспомагательная функция форматирования даты
  function formatDate(d) {
    if(d){  
      var dd = d.getDate();
      if (dd < 10) dd = '0' + dd;
      var mm = d.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;
      var yy = d.getFullYear() 
      return yy + '-' + mm + '-' + dd;
    } else return " ";
  };
//системные функции
function doGet(request) {
  var indexName = request.parameter.fond
  return HtmlService.createTemplateFromFile(indexName)
  .evaluate()
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
};
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
  .getContent();
};
// числа прописью
    var mapNumbers = {
        0 : [2, 1, "нуль"], 
        1 : [0, 2, "один", "одна"], 
        2 : [1, 2, "два", "дві"], 
        3 : [1, 1, "три"], 
        4 : [1, 1, "чотири"], 
        5 : [2, 1, "п'ять"], 
        6 : [2, 1, "шість"], 
        7 : [2, 1, "сім"], 
        8 : [2, 1, "вісім"], 
        9 : [2, 1, "дев'ять"], 
        10 : [2, 1, "десять"], 
        11 : [2, 1, "одинадцять"], 
        12 : [2, 1, "дванадцять"], 
        13 : [2, 1, "тринадцять"], 
        14 : [2, 1, "чотирнадцять"], 
        15 : [2, 1, "п'ятнадцять"], 
        16 : [2, 1, "шістнадцять"], 
        17 : [2, 1, "сімнадцять"], 
        18 : [2, 1, "вісімнадцять"], 
        19 : [2, 1, "дев'ятнадцять"],
        20 : [2, 1, "двадцять"],
        30 : [2, 1, "тридцять"],
        40 : [2, 1, "сорок"],
        50 : [2, 1, "п'ятдесят"],
        60 : [2, 1, "шістдесят"],
        70 : [2, 1, "сімдесят"],
        80 : [2, 1, "вісімдесят"],
        90 : [2, 1, "дев'яносто"],
        100 : [2, 1, "сто"],
        200 : [2, 1, "двісті"],
        300 : [2, 1, "триста"],
        400 : [2, 1, "чотириста"],
        500 : [2, 1, "п'ятсот"],
        600 : [2, 1, "шістсот"],
        700 : [2, 1, "сімсот"],
        800 : [2, 1, "вісімсот"],
        900 : [2, 1, "дев'ятсот"]
    };

    var mapOrders = [ 
        { _Gender : false, _arrStates : ["гривня", "гривні", "гривень"], _bAddZeroWord : true }, 
        { _Gender : false, _arrStates : ["тисяча", "тисячі", "тисяч"] }, 
        { _Gender : true, _arrStates : ["мільйон", "мільйона", "мільйонів"] }, 
        { _Gender : true, _arrStates : ["мільярд", "мільярда", "мільярдів"] }, 
        { _Gender : true, _arrStates : ["триліон", "триліона", "триліонів"] }
    ];

    var objKop = { _Gender : false, _arrStates : ["копійка", "копійки", "копійок"] };

    function Value(dVal, bGender) {
        var xVal = mapNumbers[dVal];
        if (xVal[1] == 1) {
            return xVal[2];
        } else {
            return xVal[2 + (bGender ? 0 : 1)];
        }
    }

    function From0To999(fValue, oObjDesc, fnAddNum, fnAddDesc)
    {
        var nCurrState = 2;
        if (Math.floor(fValue/100) > 0) {
            var fCurr = Math.floor(fValue/100)*100;
            fnAddNum(Value(fCurr, oObjDesc._Gender));
            nCurrState = mapNumbers[fCurr][0];
            fValue -= fCurr;
        }

        if (fValue < 20) {
            if (Math.floor(fValue) > 0 || (oObjDesc._bAddZeroWord)) {
                fnAddNum(Value(fValue, oObjDesc._Gender));
                nCurrState = mapNumbers[fValue][0];
            }
        } else {
            var fCurr = Math.floor(fValue/10)*10;
            fnAddNum(Value(fCurr, oObjDesc._Gender));
            nCurrState = mapNumbers[fCurr][0];
            fValue -= fCurr;
            
            if (Math.floor(fValue) > 0) {
                fnAddNum(Value(fValue, oObjDesc._Gender));
                nCurrState = mapNumbers[fValue][0];
            }
        }

        fnAddDesc(oObjDesc._arrStates[nCurrState]);
    }

    function FloatToSamplesInWordsUkr(fAmount)
    {
        var fInt = Math.floor(fAmount + 0.005);
        var fDec = Math.floor(((fAmount - fInt) * 100) + 0.5);

        var arrRet = [];
        var iOrder = 0;
        var arrSouthands = [];
        for (; fInt > 0.9999; fInt/=1000) {
            arrSouthands.push(Math.floor(fInt % 1000));
        }
        if (arrSouthands.length == 0) {
            arrSouthands.push(0);
        }

        function PushToRes(strVal) { 
            arrRet.push(strVal); 
        }
        for (var iSouth = arrSouthands.length-1; iSouth >= 0; --iSouth) {
            From0To999(arrSouthands[iSouth], mapOrders[iSouth], PushToRes, PushToRes);
        }

        if (arrRet.length > 0) {
            // Capitalize first letter
            arrRet[0] = arrRet[0].match(/^(.)/)[1].toLocaleUpperCase() + arrRet[0].match(/^.(.*)$/)[1];
        }

        arrRet.push((fDec < 10) ? ("0" + fDec) : ("" + fDec));
        From0To999(fDec, objKop, function() {}, PushToRes);

        return arrRet.join(" ");
    }

