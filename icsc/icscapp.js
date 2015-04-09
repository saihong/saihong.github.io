var utils = (function() {
    function loadModel(id, data) {
        $('#' + id).gk('model', data);
    }

    function refreshOpts(id, data) {
    	var $sel = $('#'+id),
    		sel = $sel[0] ;
    	sel.options.length = 0;
    	$.each(data, function(idx,obj){
    		sel.add(new Option(obj.text, obj.value)) ;
    	});
    	$sel.selectmenu('refresh') ;
    }

    return {
    	loadModel:loadModel,
    	refreshOpts:refreshOpts
    } ;
})();
