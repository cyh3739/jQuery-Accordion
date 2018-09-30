(function($) {
    $.fn.acc = function(op) {
        return this.each(function(){
            var _this = $(this);

            _this.find('[data-acc-title]').wrapAll('<div class="acc-wrap"></div>').each(function(){
               $(this).before('<div class="acc-title">'+$(this).data('acc-title')+'</div>');
            });

            var _op = {
                speed : 'fast',
                event : 'click',
                all_unfold : false
            }

            if(op != undefined){
                for(key in op){ 
                    _op[key] = op[key]; 
                    if(op[key] == 'hover'){ _op[key] = 'mouseover'; }
                }
            }

            _this.find('.acc-title').on(_op.event, function(){
                if(_op.event == 'click' || _op.event == 'dblclick'){
                        if(_op.all_unfold){ $(this).next('[data-acc-title]').stop().slideToggle(_op.speed, function(){ $(this).height(''); }); 
                        }else{
                            $(this).siblings('[data-acc-title]').stop().slideUp(_op.speed, function(){ $(this).height(''); });
                            $(this).next('[data-acc-title]').stop().slideToggle(_op.speed, function(){ $(this).height(''); });    
                        }
                }else if(_op.event == 'mouseover'){
                        $(this).siblings('[data-acc-title]').stop().slideUp(_op.speed, function(){ $(this).height(''); });
                        $(this).next('[data-acc-title]').stop().slideDown(_op.speed, function(){ $(this).height(''); });
                }
            });

        });
    };
})(jQuery);