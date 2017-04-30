angular.module('accountApp', [])
.controller('mainController', function ($scope, $http) {
  $scope.account = {
		 
  };
  $scope.salutation = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];
  $scope.title = ['นาย', 'นางสาว', 'นาง'];
  $scope.gender = ['Male', 'Female'];
  $scope.faculty = ['นิติศาสตร์ 99/3', 'พาณิชยศาสตร์และการบัญชี 99/4', 'รัฐศาสตร์ 99/10', 'เศรษฐศาสตร์ 99/8', 'สังคมสงเคราะห์ศาสตร์ 99/9', 'สังคมวิทยามนุษย์วิทยา 99/10', 'ศิลปศาสตร์ 99/5',
	  				'วารสารศาสตร์และสื่อสารมวลชน 99/10', 'วิทยาศาสตร์และเทคโนโลยี 99/2', 'วิศวกรรมศาสตร์ 99/6', 'สถาบันเทคโนโลยีนานาชาติสิรินธร 99/7', 'สถาปัตยกรรมศาสตร์และผังเมือง 99/10',
	  				'ศิลปกรรมศาสตร์ 99/10', 'แพทย์ศาสตร์ 99/10', 'สหเวชศาสตร์ 99/10', 'ทันตแพทยศาสตร์ 99/10', 'พยาบาลศาสตร์ 99/10', 'สาธารณสุขศาสตร์ 99/10', 'เภสัชศาสตร์ 99/10',
	  				'วิทยาการเรียนรู้และศึกษาศาสตร์ 99/10', 'วิทยาลัยพัฒนศาสตร์ ป๋วย อึ๊งภากรณ์ 99/10', 'วิทยาลัยนานาชาติ ปรีดี พนมยงค์ 99/10', 'วิทยาลัยแพทยศาสตร์นานาชาติจุฬาภรณ์ 99/10',
	  				'วิทยาลัยโลกคดีศึกษา 99/10', 'อื่นๆ 99/10', 'สถาบันภาษา 99/10', 'วิทยาลัยนวัตกรรม 99/10', 'วิทยาลัยสหวิทยาการ 99/10'];
  $scope.zone = ['หอพักเอเชี่ยนเกมโซน B (ทั้งผู้ชายและผู้หญิง)', 'หอพักเอเชี่ยนเกมส์โซน C Plus (ทั้งผู้ชายและผู้หญิง)', 'หอพักเอเชี่ยนเกมส์โซน C,E(ทั้งผู้ชายและผู้หญิง)', 'หอพักเคียงโดมปรับอากาศ ห้องน้ำในตัว (ผู้หญิงเท่านั้น)',
	  			 'หอพักเคียงโดมปรับอากาศ ห้องน้ำรวม (ผู้หญิงเท่านั้น)', 'หอพักเคียงโดมพัดลม ห้องน้ำในตัว (ผู้หญิงเท่านั้น)', 'หอพักเคียงโดมพัดลม ห้องน้ำรวม (ผู้หญิงเท่านั้น)', 'หอพักคู่โดมปรับอากาศ ห้องน้ำในตัว (ผู้ชายเท่านั้น)',
	  			 'หอพักคู่โดมปรับอากาศ ห้องน้ำรวม (ผู้ชายเท่านั้น)', 'หอพักคู่โดมพัดลม ห้องน้ำในตัว (ผู้ชายเท่านั้น)', 'หอพักคู่โดมพัดลม ห้องน้ำรวม (ผู้ชายเท่านั้น)', 'หอพักเอเชี่ยนเกมส์โซน C,E(ทั้งผู้ชายและผู้หญิง) (4 คน)',
	  			 'หอพักเคียงโดมปรับอากาศห้องน้ำในตัว (ผู้หญิงเท่านั้น)', 'หอพักมธ.ลำปาง โดม ๑ (ปรับอากาศ) พัก 4 คน (ผู้หญิงเท่านั้น)', 'หอพักมธ.ลำปาง โดม ๑ (พัดลม) พัก 4 คน (ผู้หญิงเท่านั้น)',
	  			 'หอพักมธ.ลำปาง โดม ๒ (ปรับอากาศ) พัก 4 คน (ผู้หญิงเท่านั้น)', 'หอพักมธ.ลำปาง โดม ๒ (พัดลม) พัก 4 คน (ผู้หญิงเท่านั้น)', 'หอพักมธ.ลำปาง โดม ๒ (ปรับอากาศ) พัก 4 คน (ผู้ชายเท่านั้น)',
	  			 'หอพักมธ.ลำปาง โดม ๒ (พัดลม) พัก 4 คน (ผู้ชายเท่านั้น)'];
  $scope.country = ['Thailand'];
  $scope.state = ['Bangkok'];
  
  //Get a account Detail
  $scope.getData = function (accountId) {	
	//alert(accountId);
    $http.get('../userinfo/' + accountId)
    .success((data) => {
    	console.log(data);
    	//alert("data : " + data);
    	data[0].Name = data[0].Name == null || data[0].Name =='null' ? '' : data[0].Name;
    	data[0].identification_number__c = data[0].identification_number__c == null || data[0].identification_number__c =='null' ? '' : data[0].identification_number__c;
    	data[0].passport_number__c = data[0].passport_number__c == null || data[0].passport_number__c =='null' ? '' : data[0].passport_number__c;
    	data[0].gender__c = data[0].gender__c == null || data[0].gender__c =='null' ? '' : data[0].gender__c;
    	data[0].title_th__c = data[0].title_th__c == null || data[0].title_th__c =='null' ? '' : data[0].title_th__c;
    	data[0].first_name_th__c = data[0].first_name_th__c == null || data[0].first_name_th__c =='null' ? '' : data[0].first_name_th__c;
    	data[0].last_name_th__c = data[0].last_name_th__c == null || data[0].last_name_th__c =='null' ? '' : data[0].last_name_th__c;
    	data[0].salutation = data[0].salutation == null || data[0].salutation =='null' ? '' : data[0].salutation;
    	data[0].firstname = data[0].firstname == null || data[0].firstname =='null' ? '' : data[0].firstname;
    	data[0].lastname = data[0].lastname == null || data[0].lastname =='null' ? '' : data[0].lastname;
    	data[0].personmobilephone = data[0].personmobilephone == null || data[0].personmobilephone =='null' ? '' : data[0].personmobilephone;
    	data[0].personemail = data[0].personemail == null || data[0].personemail =='null' ? '' : data[0].personemail;
    	data[0].congenital_disease__c = data[0].congenital_disease__c == null || data[0].congenital_disease__c =='null' ? '' : data[0].congenital_disease__c;
    	data[0].student_id__c = data[0].student_id__c == null || data[0].student_id__c =='null' ? '' : data[0].student_id__c;
    	data[0].faculty__c = data[0].faculty__c == null || data[0].faculty__c =='null' ? '' : data[0].faculty__c;
    	data[0].request_zone__c = data[0].request_zone__c == null || data[0].request_zone__c =='null' ? '' : data[0].request_zone__c;
    	data[0].billingstreet = data[0].billingstreet == null || data[0].billingstreet =='null' ? '' : data[0].billingstreet;
    	data[0].billingcity = data[0].billingcity == null || data[0].billingcity =='null' ? '' : data[0].billingcity;
    	data[0].billingstate = data[0].billingstate == null || data[0].billingstate =='null' ? '' : data[0].billingstate;
    	data[0].billingpostalcode = data[0].billingpostalcode == null || data[0].billingpostalcode =='null' ? '' : data[0].billingpostalcode;
    	data[0].billingcountry = data[0].billingcountry == null || data[0].billingcountry =='null' ? '' : data[0].billingcountry;
    	data[0].parent_name__c = data[0].parent_name__c == null || data[0].parent_name__c =='null' ? '' : data[0].parent_name__c;
    	data[0].parent_phone__c = data[0].parent_phone__c == null || data[0].parent_phone__c =='null' ? '' : data[0].parent_phone__c;
    	data[0].parent_income__c = data[0].parent_income__c == null || data[0].parent_income__c =='null' ? '' : data[0].parent_income__c;
    	data[0].parent_name_2__c = data[0].parent_name_2__c == null || data[0].parent_name_2__c =='null' ? '' : data[0].parent_name_2__c;
    	data[0].parent_phone_2__c = data[0].parent_phone_2__c == null || data[0].parent_phone_2__c =='null' ? '' : data[0].parent_phone_2__c;
    	data[0].disabled__c = data[0].disabled__c == null || data[0].disabled__c =='null' ? '' : data[0].disabled__c;
    	
    	data[0].birthdate__c = data[0].birthdate__c == null || data[0].birthdate__c =='null' ? '' : data[0].birthdate__c;
    	
    	if (data[0].birthdate__c) {
    		var str = data[0].birthdate__c;
    		var res = str.substring(0, 10);
		    var dd = res.substring(8,10);
		    var mm = res.substring(5,7);
		    var yyyy = res.substring(0,4);
		    
		    res = dd + "/" + mm + "/" + yyyy;
		    
		    data[0].birthdate__c = res;
		    
    	}
    	
    	$scope.account = data[0];
    	
    })
    .error((data) => {
      console.log('Error: ' + data);
    });
    
  };
  
  $scope.updateData = function (accountId) {
	var data = JSON.stringify($scope.account);
	alert(data);
	$http.post('../updateaccount/' + accountId, data)
	.success((data) => {
		console.log(data);
		alert("Updated");
	})
	.error((data) => {
		console.log('Error: ' + data);
	});
  };
  
  $scope.myfunction = function (data) {
      alert("---" + data);
  };
});