/*===========================================================显示和隐藏*/
function myClick1(){
	var text1=document.getElementById("xian");
	text1.style.display="block";
	var myGo=document.getElementById("go").style.background="#e1e1e1";
	var myGo=document.getElementById("fe").style.background="#e9e9e9";
	var text2=document.getElementById("chang");
	text2.style.display="none";
	var text22=document.getElementById("foot2");
	text22.style.display="none";
}
function myClick2(){
	var text1=document.getElementById("xian");
	text1.style.display="none";
	var myGo=document.getElementById("fe").style.background="#e1e1e1";
	var myGo=document.getElementById("go").style.background="#e9e9e9";
	var text2=document.getElementById("chang");
	text2.style.display="block";
	var text11=document.getElementById("foot1");
	text11.style.display="none";
}
/*================================================================联动*/								
/** 
 * payment=首付比例
 * deadline=贷款期限
 * rate=贷款年利率
 * discount=折扣
 * compute()=计算结果
 * 
 */
function linkage(){																								
	var list_rate=document.getElementById("rate").value;									
	var list_discount=document.getElementById("discount").value;							
	var list_disconut2=list_rate*list_disconut*100;													
	document.getElementById("discount2").value=list_disconut2.toFixed(2);									
}
/*==========================================================购车贷款计算*/
function compute1(){
	var text11=document.getElementById("foot1");
	text11.style.display="block";
	var list_luoChe=document.getElementById("luoChe").value;
	var list_payment=document.getElementById("payment").value;
	var list_deadline=document.getElementById("deadline").value;
	var list_rate=document.getElementById("rate").value;
	var list_discount=document.getElementById("discount").value;
	var list_sum=(list_luoChe*10000*list_payment+list_luoChe*list_payment*list_rate*list_discount*10000);
	var list_monthly=(list_sum/list_deadline);
	var list_interests=(list_luoChe*list_payment*list_rate*list_discount*10000);
	document.getElementById("sum").value=parseInt(list_sum);
	document.getElementById("monthly").value=parseInt(list_monthly);
	document.getElementById("interests").value=parseInt(list_interests);
}
/*================================================================购车税费计算*/
/**
 * paiLiang=车辆排量
 * purchaseTax=新车购置税
 * shangPai=上牌费用450
 * useTax=车船使用税
 * qianXiang=交强险费用，6座以下950，6座以上1100
 * 
 */
function compute2(){
	var text22=document.getElementById("foot2");
	text22.style.display="block";
	var list_luoChe2=document.getElementById("luoChe2").value;
	var list_paiLiang=document.getElementById("paiLiang").value;
	var list_purchaseTax=list_luoChe2*10000*0.1;
	document.getElementById("purchaseTax").value=parseInt(list_purchaseTax);
	document.getElementById("shangPai").value=450;
	document.getElementById("useTax").value=list_paiLiang;
	if(document.getElementById("ck1").checked==true){
		list_qianXiang=document.getElementById("qianXiang").value=950;
		document.getElementById("total").value=parseInt(list_purchaseTax)+parseInt(list_paiLiang)+450+parseInt(list_qianXiang);
	}else{
		list_qianXiang=document.getElementById("qianXiang").value=1100;
		document.getElementById("total").value=parseInt(list_purchaseTax)+parseInt(list_paiLiang)+450+parseInt(list_qianXiang);
	}
}