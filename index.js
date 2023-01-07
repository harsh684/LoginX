
var jpdbBaseURL="http://api.login2explore.com:5577";
var jpdbIRL="/api/irl";
var jpdbIML="/api/iml";
var DBName="STUDENT";
var RelationName="Exmp-Rel";
var connToken="90938138|-31949272999026708|90955114";
$('#RollNo').focus();

function resetForm() {
$("#RollNo").val("");
$("#fullName").val("");
$("#clas").val("");
$("#birthDate").val("");
$("#Address").val("");
$("#EnrollDate").val("");
$("#RollNo").prop("disabled",false);
$("#save").prop("disabled",true);
$("#change").prop("disabled",true);
$("#reset").prop("disabled",true);
$("#RollNo").focus();
}

function saveData() {
var jsonStrObj = validateData();
if (jsonStrObj === "") {
return " ";
}
var putReqStr = createPUTRequest(connToken,jsonStrObj,DBName , RelationName);
jQuery.ajaxSetup({async: false});
var resJsonObj = executeCommandAtGivenBaseUrl(putReqStr,jpdbIRL,jpdbIML);
jQuery.ajaxSetup({async: true});
resetForm();
$('#RollNo').focus();
}
function saveRecNo2LS(jsonObj){
	var lvData = JSON.parese(jsonObj.data);
	localStorage.setItem('recno',lvData.rec_no);
}
function getIdAsJsonObj(){
	var RollNo=$('#RollNo').val();
	var jsonStr={
		RollNo: RollNo
	};
return JSON.stringify(jsonStr);
}
function getEmp(){
	var IdJsonObj=getIdAsJsonObj();
	var getRequest=createGET_BY_KEYRequest(connToken,DBName,RelationName,IdJsonObj);
	jQuery.ajaxSetup({async: false});
	var resJsonObj=executeCommandAtGivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL);
	jQuery.ajaxSetup({async: true});
	if(resJsonObj.status===400){
		$("#save").prop("disabled",false);
		$("#reset").prop("disabled",false);
		$("#RollNo").focus();
	}else if(resJsonObj.status===200){
	
		$("#RollNo").prop("disabled",true);
		fillData(resJsonObj);
		
		$("#change").prop("disabled",false);
		$("#reset").prop("disabled",false);
		$("#RollNo").focus();
	}
}
function changeData(){
	$("#change").prop("disabled",true);
	jsonChg=validateData();
	var updateRequest=createUPDATERecordRequest(connToken, jsonChg, DBName, RelationName,localStorage.getItem('recno'));
	jQuery.ajaxSetup({async: false});
        var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest,jpdbBaseURL,jpdbIML);
        jQuery.ajaxSetup({async: true});
	console.log(resJsonObj);
	resetForm();
	$("#RollNo").focus();
}


function fillData(jsonObj){
	saveRecNo2LS(jsonObj);
	var record=JSON.parse(jsonObj.data).record;
	$("#RollNo").val(record.RollNo);
	$("#fullName").val(record.FullName);
	$("#clas").val(record.class);
	$("#birthDate").val(record.BirthDate);
	$("#Address").val(record.Address);
        $("#EnrollDate").val(record.EnrollmentDate);
}

function validateData(){
var RollNo, fullName,clas, birthDate, Address, EnrollDate;
RollNo=$("#RollNo").val("");
fullName=$("#fullName").val("");
clas=$("#clas").val("");
birthDate=$("#birthDate").val("");
Address=$("#Address").val("");
EnrollDate=$("#EnrollDate").val("");
if(RollNo === ''){
	alert('RollNo missing');
	$("#RollNo").focus();
	return "";
}
if(fullName === ''){
	alert('fullName missing');
	$("#fullName").focus();
	return "";
}
if(clas === ''){
	alert('class missing');
	$("#clas").focus();
	return "";
}
if(birthDate === ''){
	alert('Birth Date missing');
	$("#birthDate").focus();
	return "";
}
if( Address === ''){
	alert(' Address missing');
	$("# Address").focus();
	return "";
}
if(EnrollDate === ''){
	alert('Enrollment Date missing');
	$("#EnrollDate").focus();
	return "";
}


var jsonStrObj={
	RollNo: RollNo,
	name: fullName,
	clas: clas,
	birthDate: birthDate,
	address: Address,
	enrollDate: EnrollDate
};
return JSON.stringify(jsonStrObj);
}
