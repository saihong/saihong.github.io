<%@ page contentType="text/html;charset=UTF-8"%>

<%! public static final String _AppId = "wdjjTQMISA03"; %>

<%@ page import="com.icsc.dpms.dd.msg.ddjcMsg" %>
<%@ include file="../../jsp/dzjjMenuHeader.jsp" %>
<%@ include file="../../html/pass/res/jsp/pass-assets.jsp" %>
<%@ include file="../../html/pass/res/jsp/bdd-assets.jsp" %>
<%@ include file="../../html/pass/res/jsp/bdg-assets.jsp" %>
<link rel="stylesheet" href="../../html/wd/feedback.css">
<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async='async'></script>
<script src="../../html/demo/js/bdg-client.js"></script>
  <script>
    var OneSignal = OneSignal || [];
    OneSignal.push(["init", {
      appId: "cb51e0be-5e0e-4ec2-adf6-bbb3b7531c78",
      subdomainName: 'infoChamp',   
      notifyButton: {
          enable: true /* Set to false to hide */
      }
    }]);
    
  </script>

<script>
var LOCAL_IP="app.icsc.com.tw";
// var LOCAL_IP="10.0.120.26:8082";

(function loginPASS(){
	$.get("http://testpass.icsc.com.tw/erp/ds/jsp/dsjjSignOn.jsp?userId=I20496&password=35617",function(resp){
		console.log("login result:"+resp);
//		alert("result:"+resp);
	}) ;
})();


</script>
<%
   ddjcMsg dd=new ddjcMsg(_dsCom, "wd");
%>
 <a href="#" id="subscribe-link" style="display: none;">Subscribe to Notifications</a>
  <script>
    function subscribe() {
      OneSignal.push(["registerForPushNotifications"]);
      event.preventDefault();      
    }
     
    OneSignal.push(function() {
      document.getElementById("subscribe-link").addEventListener('click', subscribe);
      document.getElementById("subscribe-link").style.display = '';
    });
  </script>

	<table class="table" style="width:150%">
        <thead>
        <tr>
        	<th width="30%"><label class="control-label"><%=dd.get("wdjjTQMISA03.queryMsg")%></label></th>
        	<th width="30%">
  				<input type="text" class="form-control" id="geNo_qry">
        	</th>
          	<th width="40%">
          	<button class="btn btn-default" id="searchData"><%=dd.get("wdjjCOMMON.query")%></button>
          	</th>
        </tr>
        </thead>
    </table>
    <table  class="table table-bordered table-condensed" style="width:100%">
    	<tr>
    		<td class="info text-center">L3</td>
    		<td class="info text-center">l2</td>
    		<td class="info text-center">L1</td>
    		<td class="info text-center">CL</td>
    		<td class="info text-center">U1</td>
    		<td class="info text-center">U2</td>
    		<td class="info text-center">U3</td>
    		<td class="info text-center">IDF1</td>
    		<td class="info text-center">IDF3</td>
    		<td class="info text-center">IDF5</td>
    		<td class="info text-center">IDF6</td>
    		<td class="info text-center">IDF8</td>
    	</tr>
    	<tr class="text-center"">
    		<td><input type='text' id='L3_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='L2_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='L1_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='CL_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='U1_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='U2_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='U3_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='IDF1_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='IDF3_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='IDF5_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='IDF6_T2CC_v1' disabled size='5' class="text-right"></td>
    		<td><input type='text' id='IDF8_T2CC_v1' disabled size='5' class="text-right"></td>
    	</tr>
    </table>
<div id='chart'>
    <div id='wdLimitChart'>
		<table class="table table-responsive"> 
			<tr style="height: 300px;">
 				<td style="width: 1250px;">
     				<div id="limitChart"></div>
   				</td>
			</tr>
		</table>
	</div>
	<div id='wdNormalChart'>
		<table class="table table-responsive"> 
			<tr style="height: 300px;">
 				<td style="width: 1250px;">
     				<div id="normalChart"></div>
   				</td>
			</tr>
		</table>
	</div>
	<div id='wdLimitData'>
		<table class="table table-responsive">
			<tr style="height: 300px;">
 				<td style="width: 1200px;">
     				<div id="limitData"></div>
   				</td>
			</tr>
		</table>
	</div>
	<div class="notify-alarm">
		<input class="btn btn-default" type="button" value="Capture" id="btnCapture">
	</div>
</div>

<div id="feedback">
	<div id="feedback-form" style='display:none;' class="col-xs-4 col-md-4 panel panel-default">
		<form method="POST" action="/feedback" class="form panel-body" role="form">
			<div class="form-group">
				<input class="form-control" name="email" autofocus placeholder="工號" />
			</div>
			<div class="form-group">
				<select class="form-control" id="normalDescript">
					<option value="">常用說明...</option>
					<option value="資料超出管制線，請馬上處理">資料超出管制線，請馬上處理</option>
					<option value="請注意，資料有超出管制線趨勢">請注意，資料有超出管制線趨勢</option>
				</select>
			</div>
			<div class="form-group">
				<textarea class="form-control" name="body" id="notifybody" required placeholder="通報說明..." rows="3"></textarea>
			</div>
			<button class="btn btn-primary pull-right" type="submit">送出</button>
		</form>
	</div>
	<div id="feedback-tab">即時通報</div>
</div>

	<script language="Javascript" src="../../html/dmc/html2canvas.js"></script>
	<script language="Javascript" src="../../html/de/dejtag5.jss"></script>
	<script src="/erp/html/wd/wd-utils.js"></script>
	<script>


	var limitChart, normalChart, limitData;
	var conditionArray = [];
	
	var tabObj=new TabTable('<%=dd.get("wdjjTQMISA03.limitChart")%>',wdLimitChart);
	tabObj.add('<%=dd.get("wdjjTQMISA03.normalChart")%>',wdNormalChart,showNormalChart);
	tabObj.add('<%=dd.get("wdjjTQMISA03.limitData")%>',wdLimitData,showLimitData);
	tabObj.setWidth(80);
	tabObj.setHeight(60);
	tabObj.setTabWidth(20);
	tabObj.draw();
	
	//切換常態分配，如果不存在，註冊
	function showNormalChart(){
    	
		if( $('#L3_T2CC_v1').val()==''){
			alert("請先查詢");
			return false;
		}
		
		if(!normalChart){
			var geNo = $('#geNo_qry').val();
			conditionArray = makeConditions('TBWDT2CT',geNo);
			
	 		normalChart = bdgClient.register({
	 			elementId: 'normalChart',
	 			chartType: bdgClient.TYPE.NORMAL,
	 		    chartId: 'CSCTSNorLine',
	 		    chartOptions: {
	 		      size: {
	 		        width: 1250,
	 		        height: 300
	 		      },
	 		      title:{text: ''}
	 		    },
	 		   conditions:conditionArray,
	 		   toolbar:{
	   			  show: true,
	   			  dataFilter: true,
	   			  statistics: true,
	   	          chartConfig: true,
	   	          chartDownload: true,
	   	          chartColor: true
	   	       	},
	   	     	control: {
					lsl: parseFloat($('#L1_T2CC_v1').val()),
					usl: parseFloat($('#U1_T2CC_v1').val()),
					precision: 0
				}
	 		 });
			
		}		
		
    }
    
	//切換管制資料，如果不存在，註冊
	function showLimitData(){

		if(!limitData){
			//註冊BDD元件
			var geNo = $('#geNo_qry').val();
			conditionArray = makeConditions('TBWDT2CT',geNo);
		 	limitData = bddClient.register({
		 		elementId: 'limitData',
		 		comId: 'CSCTSData',
		 		height: 400,
		 		conditions:conditionArray
		 	});
		}		
		
	}
	
	
	
	//初始，去找出Select選項，以及註冊第一張圖
	$( document ).ready(function() {
		$('#normalDescript').on('change',function(){
			$('#notifybody').val( $(this).val() ) ;
		});
		
		//註冊BDD元件，下拉選單		
 		bddClient.register({
  			elementId: 'geNo_qry',
  			comId: 'CSCT2CTGESelect',
  			type: bddClient.TYPE.FLOAT,
  			autoClose: true,
  			height: 300
		});
		
		conditionArray = makeConditions('TBWDT2CT','');
				
		//註冊BDG元件
		limitChart = bdgClient.register({
	 		elementId: 'limitChart',
	 	    chartId: 'CSCTSLine',
	 	    chartOptions: {
	 	      size: {
//	 	        width: 1300,
	 	        height: 300
	 	      },
	 	     title:{text: ''},
	 	     data: {
	 	    	labels: true
		     },
	 	    },
	 	    conditions:conditionArray,
	 	   	toolbar:{
	   			  show: true,
	   			  dataFilter: true,
	   			  statistics: true,
	   	          chartConfig: true,
	   	          chartDownload: true,
	   	          chartColor: true
	   	       	}
	 	});
		
		//按查詢按鈕，帶回管制值資料
		$('#searchData').click(function(event) {
			var param = {"geNo_qry":$('#geNo_qry').val()};
			var geNo;
			 _wd.util.post('wd/wdjjTQMISA03/queryByGENo',param).success(function (data) {
	 			//塞管制值setData(data);
	 			setData(data);
	 			geNo = $('#geNo_qry').val();
	 			
	 			conditionArray = makeConditions('TBWDT2CT',geNo);
	 			if(data.v1){
				
	 				//重畫第一張圖
	 				limitChart.draw(conditionArray,setLimitLine());
	 				//重畫第二張圖
	 				if(normalChart) normalChart.draw(conditionArray,'',setNorLimitLine());
	 				//重讀資料
	 				if(limitData) {
						limitData.setConditions(conditionArray);
						limitData.query([]);
					}
	 			}
	 			
	 	    });	
		}); // end of click function
	});
     
$('#btnCapture').click(function(){
    	html2canvas(document.body, {
    		  onrendered: function(canvas) {
    			  uploadPic(canvas) ; 
    		  }
    		});    	
    	alert('Capture');
    });
    
    function uploadPic(myCanvas) {
        // Generate the image data
        var pic = myCanvas.toDataURL("image/png");
        pic = pic.replace(/^data:image\/(png|jpg);base64,/, "")

        // Sending the image data to Server
        $.ajax({
            type: 'POST',
            url: '/erp/dmc/picUploader',
            data: { "imgcode" : pic } , 
            success: function (msg) {
            	$('#output').html('<img src="images/upload/screenCapture1.png"/>') ;
            }
        });
    }

	
	function setData(data){
		_wd.util.setParamData(data);
		_wd.util.setVOData(data,'v1');
	}
	
	function makeConditions(tableName, geNo){

		var conditionArray = [],
		jsondata={condition:[]};
		jsondata['condition'].push(
		{
			clause:{
				left:{
					type: _pass.OPERAND_TYPE.FIELD,
					value:{
						schemaId:'db',
						tableId:tableName,
						columnId: 'GE_NO_T2CT'
					}
				},
				operator: _pass.OPERATOR.EQUAL_TO,
				right:{
					type: _pass.OPERAND_TYPE.STRING,
	               	value: geNo
				}
			}
		});
		
		conditionArray.push(jsondata);	
		return conditionArray;
		
	}
	
	//動態傳入管制線
	function setLimitLine(){
		
		var L3 = $('#L3_T2CC_v1').val();
		var L2 = $('#L2_T2CC_v1').val();
		var L1 = $('#L1_T2CC_v1').val();
		var CL = $('#CL_T2CC_v1').val();
		var U1 = $('#U1_T2CC_v1').val();
		var U2 = $('#U2_T2CC_v1').val();
		var U3 = $('#U3_T2CC_v1').val();
		
		var chartOptions = {grid:{y:{lines:[
			               		             {value:L3, class: 'red dash',text:'L3'},
			            		             {value:L2, class: 'orange dash',text:'L2'},
			            		             {value:L1, class: 'green short-dash',text:'L1'},
			            		             {value:CL, class: 'black',text:'CL'},
			            		             {value:U1, class: 'green short-dash',text:'U1'},
			            		             {value:U2, class: 'orange dash',text:'U2'},
			            		             {value:U3, class: 'red dash',text:'U3'},
			            					]						
			            	}}};
		
		return chartOptions;
	}

	function setNorLimitLine(){
		
		var L1 = $('#L1_T2CC_v1').val();
		var U1 = $('#U1_T2CC_v1').val();
		
		var otherOption = {
			control: {
				lsl: parseFloat(L1),
				usl: parseFloat(U1),
				precision: 0
			}		
		};
		
		return otherOption;
	}
<% 
String geNo_qry = request.getParameter("q") ;
if (geNo_qry!=null) { %>
	setTimeout(function(){
		$('#geNo_qry').val("<%=geNo_qry%>") ;
		$('#searchData').trigger("click") ;		
	},1000);
<% } %>
	
	(function registerCallback() {
			function downloadFiles(fileName) {
				$.get("http://"+LOCAL_IP+"/dmc/dmccFileGrabber?fileName="+fileName,function(resp){
					console.log('after download:'+resp) ;
				}) ;
			};
			$(document).on("afterGenerateChart", function(evt, fileName){
//				fileName="CSCTSLine-1467988485178.png" ;
				$.ajax({
				    type: 'POST', 
				    url: 'http://'+LOCAL_IP+'/dmc/PushMessage',
				    data: { 
				      title: $("#notifybody").val()||"管制圖資料有異常",
				      imgUrl:"http://"+LOCAL_IP+"/dmc/public/bdg/"+fileName,
				      link:"http://"+LOCAL_IP+"/dmc/public/bdg/"+fileName.replace(/\.png/,'.html')
				    },
				    success: function(data) {alert('success');
				    	$("#feedback-form").toggle("slide");
				    	downloadFiles(fileName);
				    },
				    error: function(data) {alert('error');
				    	$("#feedback-form").toggle("slide");
				    	downloadFiles(fileName);
				    	debugger;
				        //alert('fail:'+data);
				    }
				});
				window.open("http://testpass.icsc.com.tw/erp/public/bdg/"+fileName) ;
			} ) ;			  
		})() ;

// feedback
$(function() {
	$("#feedback-tab").click(function() {
		$("#feedback-form").toggle("slide");
	});

	$("#feedback-form form").on('submit', function(event) {
		$(".fa.fa-file-image-o.fa-lg").trigger("click") ;

		var $form = $(this);
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function() {
				$("#feedback-form").toggle("slide").find("textarea").val('');
			}
		});
		event.preventDefault();
	});
});


	</script>

<%@ include file="../../jsp/dzjjMenuFooter.jsp" %>
