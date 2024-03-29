/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(b,d){
    function e(g){
        return!b(g).parents().andSelf().filter(function(){
            return b.curCSS(this,"visibility")==="hidden"||b.expr.filters.hidden(this)
            }).length
        }b.ui=b.ui||{};if(!b.ui.version){
        b.extend(b.ui,{
            version:"1.8.11",
            keyCode:{
                ALT:18,
                BACKSPACE:8,
                CAPS_LOCK:20,
                COMMA:188,
                COMMAND:91,
                COMMAND_LEFT:91,
                COMMAND_RIGHT:93,
                CONTROL:17,
                DELETE:46,
                DOWN:40,
                END:35,
                ENTER:13,
                ESCAPE:27,
                HOME:36,
                INSERT:45,
                LEFT:37,
                MENU:93,
                NUMPAD_ADD:107,
                NUMPAD_DECIMAL:110,
                NUMPAD_DIVIDE:111,
                NUMPAD_ENTER:108,
                NUMPAD_MULTIPLY:106,
                NUMPAD_SUBTRACT:109,
                PAGE_DOWN:34,
                PAGE_UP:33,
                PERIOD:190,
                RIGHT:39,
                SHIFT:16,
                SPACE:32,
                TAB:9,
                UP:38,
                WINDOWS:91
            }
            });b.fn.extend({
            _focus:b.fn.focus,
            focus:function(g,f){
                return typeof g==="number"?this.each(function(){
                    var a=this;setTimeout(function(){
                        b(a).focus();f&&f.call(a)
                        },g)
                    }):this._focus.apply(this,arguments)
                },
            scrollParent:function(){
                var g;g=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){
                    return/(relative|absolute|fixed)/.test(b.curCSS(this,
                        "position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))
                    }).eq(0):this.parents().filter(function(){
                    return/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))
                    }).eq(0);return/fixed/.test(this.css("position"))||!g.length?b(document):g
                },
            zIndex:function(g){
                if(g!==d)return this.css("zIndex",g);if(this.length){
                    g=b(this[0]);for(var f;g.length&&g[0]!==document;){
                        f=g.css("position");
                        if(f==="absolute"||f==="relative"||f==="fixed"){
                            f=parseInt(g.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f
                                }g=g.parent()
                        }
                    }return 0
                },
            disableSelection:function(){
                return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){
                    g.preventDefault()
                    })
                },
            enableSelection:function(){
                return this.unbind(".ui-disableSelection")
                }
            });b.each(["Width","Height"],function(g,f){
            function a(j,n,p,l){
                b.each(c,function(){
                    n-=parseFloat(b.curCSS(j,"padding"+this,true))||0;if(p)n-=parseFloat(b.curCSS(j,
                        "border"+this+"Width",true))||0;if(l)n-=parseFloat(b.curCSS(j,"margin"+this,true))||0
                        });return n
                }var c=f==="Width"?["Left","Right"]:["Top","Bottom"],h=f.toLowerCase(),i={
                innerWidth:b.fn.innerWidth,
                innerHeight:b.fn.innerHeight,
                outerWidth:b.fn.outerWidth,
                outerHeight:b.fn.outerHeight
                };b.fn["inner"+f]=function(j){
                if(j===d)return i["inner"+f].call(this);return this.each(function(){
                    b(this).css(h,a(this,j)+"px")
                    })
                };b.fn["outer"+f]=function(j,n){
                if(typeof j!=="number")return i["outer"+f].call(this,j);return this.each(function(){
                    b(this).css(h,
                        a(this,j,true,n)+"px")
                    })
                }
            });b.extend(b.expr[":"],{
            data:function(g,f,a){
                return!!b.data(g,a[3])
                },
            focusable:function(g){
                var f=g.nodeName.toLowerCase(),a=b.attr(g,"tabindex");if("area"===f){
                    f=g.parentNode;a=f.name;if(!g.href||!a||f.nodeName.toLowerCase()!=="map")return false;g=b("img[usemap=#"+a+"]")[0];return!!g&&e(g)
                    }return(/input|select|textarea|button|object/.test(f)?!g.disabled:"a"==f?g.href||!isNaN(a):!isNaN(a))&&e(g)
                },
            tabbable:function(g){
                var f=b.attr(g,"tabindex");return(isNaN(f)||f>=0)&&b(g).is(":focusable")
                }
            });
        b(function(){
            var g=document.body,f=g.appendChild(f=document.createElement("div"));b.extend(f.style,{
                minHeight:"100px",
                height:"auto",
                padding:0,
                borderWidth:0
            });b.support.minHeight=f.offsetHeight===100;b.support.selectstart="onselectstart"in f;g.removeChild(f).style.display="none"
            });b.extend(b.ui,{
            plugin:{
                add:function(g,f,a){
                    g=b.ui[g].prototype;for(var c in a){
                        g.plugins[c]=g.plugins[c]||[];g.plugins[c].push([f,a[c]])
                        }
                    },
                call:function(g,f,a){
                    if((f=g.plugins[f])&&g.element[0].parentNode)for(var c=0;c<f.length;c++)g.options[f[c][0]]&&
                        f[c][1].apply(g.element,a)
                        }
                },
            contains:function(g,f){
                return document.compareDocumentPosition?g.compareDocumentPosition(f)&16:g!==f&&g.contains(f)
                },
            hasScroll:function(g,f){
                if(b(g).css("overflow")==="hidden")return false;f=f&&f==="left"?"scrollLeft":"scrollTop";var a=false;if(g[f]>0)return true;g[f]=1;a=g[f]>0;g[f]=0;return a
                },
            isOverAxis:function(g,f,a){
                return g>f&&g<f+a
                },
            isOver:function(g,f,a,c,h,i){
                return b.ui.isOverAxis(g,a,h)&&b.ui.isOverAxis(f,c,i)
                }
            })
        }
    })(jQuery);
(function(b,d){
    if(b.cleanData){
        var e=b.cleanData;b.cleanData=function(f){
            for(var a=0,c;(c=f[a])!=null;a++)b(c).triggerHandler("remove");e(f)
            }
        }else{
        var g=b.fn.remove;b.fn.remove=function(f,a){
            return this.each(function(){
                if(!a)if(!f||b.filter(f,[this]).length)b("*",this).add([this]).each(function(){
                    b(this).triggerHandler("remove")
                    });return g.call(b(this),f,a)
                })
            }
        }b.widget=function(f,a,c){
        var h=f.split(".")[0],i;f=f.split(".")[1];i=h+"-"+f;if(!c){
            c=a;a=b.Widget
            }b.expr[":"][i]=function(j){
            return!!b.data(j,
                f)
            };b[h]=b[h]||{};b[h][f]=function(j,n){
            arguments.length&&this._createWidget(j,n)
            };a=new a;a.options=b.extend(true,{},a.options);b[h][f].prototype=b.extend(true,a,{
            namespace:h,
            widgetName:f,
            widgetEventPrefix:b[h][f].prototype.widgetEventPrefix||f,
            widgetBaseClass:i
        },c);b.widget.bridge(f,b[h][f])
        };b.widget.bridge=function(f,a){
        b.fn[f]=function(c){
            var h=typeof c==="string",i=Array.prototype.slice.call(arguments,1),j=this;c=!h&&i.length?b.extend.apply(null,[true,c].concat(i)):c;if(h&&c.charAt(0)==="_")return j;
            h?this.each(function(){
                var n=b.data(this,f),p=n&&b.isFunction(n[c])?n[c].apply(n,i):n;if(p!==n&&p!==d){
                    j=p;return false
                    }
                }):this.each(function(){
                var n=b.data(this,f);n?n.option(c||{})._init():b.data(this,f,new a(c,this))
                });return j
            }
        };b.Widget=function(f,a){
        arguments.length&&this._createWidget(f,a)
        };b.Widget.prototype={
        widgetName:"widget",
        widgetEventPrefix:"",
        options:{
            disabled:false
        },
        _createWidget:function(f,a){
            b.data(a,this.widgetName,this);this.element=b(a);this.options=b.extend(true,{},this.options,
                this._getCreateOptions(),f);var c=this;this.element.bind("remove."+this.widgetName,function(){
                c.destroy()
                });this._create();this._trigger("create");this._init()
            },
        _getCreateOptions:function(){
            return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]
            },
        _create:function(){},
        _init:function(){},
        destroy:function(){
            this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")
            },
        widget:function(){
            return this.element
            },
        option:function(f,a){
            var c=f;if(arguments.length===0)return b.extend({},this.options);if(typeof f==="string"){
                if(a===d)return this.options[f];c={};c[f]=a
                }this._setOptions(c);return this
            },
        _setOptions:function(f){
            var a=this;b.each(f,function(c,h){
                a._setOption(c,h)
                });return this
            },
        _setOption:function(f,a){
            this.options[f]=a;if(f==="disabled")this.widget()[a?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",a);return this
            },
        enable:function(){
            return this._setOption("disabled",false)
            },
        disable:function(){
            return this._setOption("disabled",true)
            },
        _trigger:function(f,a,c){
            var h=this.options[f];a=b.Event(a);a.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();c=c||{};if(a.originalEvent){
                f=b.event.props.length;for(var i;f;){
                    i=b.event.props[--f];a[i]=a.originalEvent[i]
                    }
                }this.element.trigger(a,c);return!(b.isFunction(h)&&h.call(this.element[0],a,c)===false||a.isDefaultPrevented())
            }
        }
    })(jQuery);
(function(b){
    b.widget("ui.mouse",{
        options:{
            cancel:":input,option",
            distance:1,
            delay:0
        },
        _mouseInit:function(){
            var d=this;this.element.bind("mousedown."+this.widgetName,function(e){
                return d._mouseDown(e)
                }).bind("click."+this.widgetName,function(e){
                if(true===b.data(e.target,d.widgetName+".preventClickEvent")){
                    b.removeData(e.target,d.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false
                    }
                });this.started=false
            },
        _mouseDestroy:function(){
            this.element.unbind("."+this.widgetName)
            },
        _mouseDown:function(d){
            d.originalEvent=
            d.originalEvent||{};if(!d.originalEvent.mouseHandled){
                this._mouseStarted&&this._mouseUp(d);this._mouseDownEvent=d;var e=this,g=d.which==1,f=typeof this.options.cancel=="string"?b(d.target).parents().add(d.target).filter(this.options.cancel).length:false;if(!g||f||!this._mouseCapture(d))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){
                    e.mouseDelayMet=true
                    },this.options.delay);if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){
                    this._mouseStarted=
                    this._mouseStart(d)!==false;if(!this._mouseStarted){
                        d.preventDefault();return true
                        }
                    }true===b.data(d.target,this.widgetName+".preventClickEvent")&&b.removeData(d.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(a){
                    return e._mouseMove(a)
                    };this._mouseUpDelegate=function(a){
                    return e._mouseUp(a)
                    };b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);d.preventDefault();return d.originalEvent.mouseHandled=
                true
                }
            },
        _mouseMove:function(d){
            if(b.browser.msie&&!(document.documentMode>=9)&&!d.button)return this._mouseUp(d);if(this._mouseStarted){
                this._mouseDrag(d);return d.preventDefault()
                }if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,d)!==false)?this._mouseDrag(d):this._mouseUp(d);return!this._mouseStarted
            },
        _mouseUp:function(d){
            b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
            if(this._mouseStarted){
                this._mouseStarted=false;d.target==this._mouseDownEvent.target&&b.data(d.target,this.widgetName+".preventClickEvent",true);this._mouseStop(d)
                }return false
            },
        _mouseDistanceMet:function(d){
            return Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance
            },
        _mouseDelayMet:function(){
            return this.mouseDelayMet
            },
        _mouseStart:function(){},
        _mouseDrag:function(){},
        _mouseStop:function(){},
        _mouseCapture:function(){
            return true
            }
        })
    })(jQuery);
(function(b){
    b.widget("ui.draggable",b.ui.mouse,{
        widgetEventPrefix:"drag",
        options:{
            addClasses:true,
            appendTo:"parent",
            axis:false,
            connectToSortable:false,
            containment:false,
            cursor:"auto",
            cursorAt:false,
            grid:false,
            handle:false,
            helper:"original",
            iframeFix:false,
            opacity:false,
            refreshPositions:false,
            revert:false,
            revertDuration:500,
            scope:"default",
            scroll:true,
            scrollSensitivity:20,
            scrollSpeed:20,
            snap:false,
            snapMode:"both",
            snapTolerance:20,
            stack:false,
            zIndex:false
        },
        _create:function(){
            if(this.options.helper==
                "original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()
            },
        destroy:function(){
            if(this.element.data("draggable")){
                this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this
                }
            },
        _mouseCapture:function(d){
            var e=
            this.options;if(this.helper||e.disabled||b(d.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(d);if(!this.handle)return false;return true
            },
        _mouseStart:function(d){
            var e=this.options;this.helper=this._createHelper(d);this._cacheHelperProportions();if(b.ui.ddmanager)b.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={
                top:this.offset.top-
                this.margins.top,
                left:this.offset.left-this.margins.left
                };b.extend(this.offset,{
                click:{
                    left:d.pageX-this.offset.left,
                    top:d.pageY-this.offset.top
                    },
                parent:this._getParentOffset(),
                relative:this._getRelativeOffset()
                });this.originalPosition=this.position=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt);e.containment&&this._setContainment();if(this._trigger("start",d)===false){
                this._clear();return false
                }this._cacheHelperProportions();
            b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,d);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(d,true);return true
            },
        _mouseDrag:function(d,e){
            this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!e){
                e=this._uiHash();if(this._trigger("drag",d,e)===false){
                    this._mouseUp({});return false
                    }this.position=e.position
                }if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
                this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";b.ui.ddmanager&&b.ui.ddmanager.drag(this,d);return false
            },
        _mouseStop:function(d){
            var e=false;if(b.ui.ddmanager&&!this.options.dropBehaviour)e=b.ui.ddmanager.drop(this,d);if(this.dropped){
                e=this.dropped;this.dropped=false
                }if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!e||this.options.revert=="valid"&&e||this.options.revert===true||b.isFunction(this.options.revert)&&
                this.options.revert.call(this.element,e)){
                var g=this;b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){
                    g._trigger("stop",d)!==false&&g._clear()
                    })
                }else this._trigger("stop",d)!==false&&this._clear();return false
            },
        cancel:function(){
            this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this
            },
        _getHandle:function(d){
            var e=!this.options.handle||!b(this.options.handle,this.element).length?true:false;b(this.options.handle,this.element).find("*").andSelf().each(function(){
                if(this==
                    d.target)e=true
                    });return e
            },
        _createHelper:function(d){
            var e=this.options;d=b.isFunction(e.helper)?b(e.helper.apply(this.element[0],[d])):e.helper=="clone"?this.element.clone():this.element;d.parents("body").length||d.appendTo(e.appendTo=="parent"?this.element[0].parentNode:e.appendTo);d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d
            },
        _adjustOffsetFromHelper:function(d){
            if(typeof d=="string")d=d.split(" ");if(b.isArray(d))d={
                left:+d[0],
                top:+d[1]||
                0
                };if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top
                },
        _getParentOffset:function(){
            this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],
                this.offsetParent[0])){
                d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()
                }if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)d={
                top:0,
                left:0
            };return{
                top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
                left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
                }
            },
        _getRelativeOffset:function(){
            if(this.cssPosition=="relative"){
                var d=this.element.position();return{
                    top:d.top-
                    (parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
                    left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
                    }
                }else return{
                top:0,
                left:0
            }
            },
        _cacheMargins:function(){
            this.margins={
                left:parseInt(this.element.css("marginLeft"),10)||0,
                top:parseInt(this.element.css("marginTop"),10)||0,
                right:parseInt(this.element.css("marginRight"),10)||0,
                bottom:parseInt(this.element.css("marginBottom"),10)||0
                }
            },
        _cacheHelperProportions:function(){
            this.helperProportions={
                width:this.helper.outerWidth(),
                height:this.helper.outerHeight()
                }
            },
        _setContainment:function(){
            var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[(d.containment=="document"?0:b(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(d.containment=="document"?0:b(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(d.containment=="document"?0:b(window).scrollLeft())+b(d.containment=="document"?
                document:window).width()-this.helperProportions.width-this.margins.left,(d.containment=="document"?0:b(window).scrollTop())+(b(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)&&d.containment.constructor!=Array){
                var e=b(d.containment)[0];if(e){
                    d=b(d.containment).offset();var g=b(e).css("overflow")!="hidden";this.containment=[d.left+(parseInt(b(e).css("borderLeftWidth"),
                        10)||0)+(parseInt(b(e).css("paddingLeft"),10)||0),d.top+(parseInt(b(e).css("borderTopWidth"),10)||0)+(parseInt(b(e).css("paddingTop"),10)||0),d.left+(g?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(b(e).css("borderLeftWidth"),10)||0)-(parseInt(b(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,d.top+(g?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(b(e).css("borderTopWidth"),10)||0)-(parseInt(b(e).css("paddingBottom"),
                        10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]
                    }
                }else if(d.containment.constructor==Array)this.containment=d.containment
                },
        _convertPositionTo:function(d,e){
            if(!e)e=this.position;d=d=="absolute"?1:-1;var g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(g[0].tagName);return{
                top:e.top+this.offset.relative.top*d+this.offset.parent.top*d-(b.browser.safari&&
                    b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:g.scrollTop())*d),
                left:e.left+this.offset.relative.left*d+this.offset.parent.left*d-(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:g.scrollLeft())*d)
                }
            },
        _generatePosition:function(d){
            var e=this.options,g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],
                this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(g[0].tagName),a=d.pageX,c=d.pageY;if(this.originalPosition){
                if(this.containment){
                    if(d.pageX-this.offset.click.left<this.containment[0])a=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])c=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])a=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])c=
                        this.containment[3]+this.offset.click.top
                        }if(e.grid){
                    c=this.originalPageY+Math.round((c-this.originalPageY)/e.grid[1])*e.grid[1];c=this.containment?!(c-this.offset.click.top<this.containment[1]||c-this.offset.click.top>this.containment[3])?c:!(c-this.offset.click.top<this.containment[1])?c-e.grid[1]:c+e.grid[1]:c;a=this.originalPageX+Math.round((a-this.originalPageX)/e.grid[0])*e.grid[0];a=this.containment?!(a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2])?
                    a:!(a-this.offset.click.left<this.containment[0])?a-e.grid[0]:a+e.grid[0]:a
                    }
                }return{
                top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:g.scrollTop()),
                left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
                    f?0:g.scrollLeft())
                }
            },
        _clear:function(){
            this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false
            },
        _trigger:function(d,e,g){
            g=g||this._uiHash();b.ui.plugin.call(this,d,[e,g]);if(d=="drag")this.positionAbs=this._convertPositionTo("absolute");return b.Widget.prototype._trigger.call(this,d,e,g)
            },
        plugins:{},
        _uiHash:function(){
            return{
                helper:this.helper,
                position:this.position,
                originalPosition:this.originalPosition,
                offset:this.positionAbs
                }
            }
        });b.extend(b.ui.draggable,{
        version:"1.8.11"
    });b.ui.plugin.add("draggable","connectToSortable",{
        start:function(d,e){
            var g=b(this).data("draggable"),f=g.options,a=b.extend({},e,{
                item:g.element
                });g.sortables=[];b(f.connectToSortable).each(function(){
                var c=b.data(this,"sortable");if(c&&!c.options.disabled){
                    g.sortables.push({
                        instance:c,
                        shouldRevert:c.options.revert
                        });c.refreshPositions();c._trigger("activate",d,a)
                    }
                })
            },
        stop:function(d,e){
            var g=b(this).data("draggable"),f=b.extend({},
                e,{
                    item:g.element
                    });b.each(g.sortables,function(){
                if(this.instance.isOver){
                    this.instance.isOver=0;g.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;g.options.helper=="original"&&this.instance.currentItem.css({
                        top:"auto",
                        left:"auto"
                    })
                    }else{
                    this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",d,f)
                    }
                })
            },
        drag:function(d,e){
            var g=
            b(this).data("draggable"),f=this;b.each(g.sortables,function(){
                this.instance.positionAbs=g.positionAbs;this.instance.helperProportions=g.helperProportions;this.instance.offset.click=g.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){
                    if(!this.instance.isOver){
                        this.instance.isOver=1;this.instance.currentItem=b(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){
                            return e.helper[0]
                            };
                        d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=g.offset.click.top;this.instance.offset.click.left=g.offset.click.left;this.instance.offset.parent.left-=g.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=g.offset.parent.top-this.instance.offset.parent.top;g._trigger("toSortable",d);g.dropped=this.instance.element;g.currentItem=g.element;this.instance.fromOutside=g
                        }this.instance.currentItem&&
                    this.instance._mouseDrag(d)
                    }else if(this.instance.isOver){
                    this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();g._trigger("fromSortable",d);g.dropped=false
                    }
                })
            }
        });b.ui.plugin.add("draggable","cursor",

        {
        start:function(){
            var d=b("body"),e=b(this).data("draggable").options;if(d.css("cursor"))e._cursor=d.css("cursor");d.css("cursor",e.cursor)
            },
        stop:function(){
            var d=b(this).data("draggable").options;d._cursor&&b("body").css("cursor",d._cursor)
            }
        });b.ui.plugin.add("draggable","iframeFix",{
        start:function(){
            var d=b(this).data("draggable").options;b(d.iframeFix===true?"iframe":d.iframeFix).each(function(){
                b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width:this.offsetWidth+
                    "px",
                    height:this.offsetHeight+"px",
                    position:"absolute",
                    opacity:"0.001",
                    zIndex:1E3
                }).css(b(this).offset()).appendTo("body")
                })
            },
        stop:function(){
            b("div.ui-draggable-iframeFix").each(function(){
                this.parentNode.removeChild(this)
                })
            }
        });b.ui.plugin.add("draggable","opacity",{
        start:function(d,e){
            d=b(e.helper);e=b(this).data("draggable").options;if(d.css("opacity"))e._opacity=d.css("opacity");d.css("opacity",e.opacity)
            },
        stop:function(d,e){
            d=b(this).data("draggable").options;d._opacity&&b(e.helper).css("opacity",
                d._opacity)
            }
        });b.ui.plugin.add("draggable","scroll",{
        start:function(){
            var d=b(this).data("draggable");if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML")d.overflowOffset=d.scrollParent.offset()
                },
        drag:function(d){
            var e=b(this).data("draggable"),g=e.options,f=false;if(e.scrollParent[0]!=document&&e.scrollParent[0].tagName!="HTML"){
                if(!g.axis||g.axis!="x")if(e.overflowOffset.top+e.scrollParent[0].offsetHeight-d.pageY<g.scrollSensitivity)e.scrollParent[0].scrollTop=f=e.scrollParent[0].scrollTop+
                    g.scrollSpeed;else if(d.pageY-e.overflowOffset.top<g.scrollSensitivity)e.scrollParent[0].scrollTop=f=e.scrollParent[0].scrollTop-g.scrollSpeed;if(!g.axis||g.axis!="y")if(e.overflowOffset.left+e.scrollParent[0].offsetWidth-d.pageX<g.scrollSensitivity)e.scrollParent[0].scrollLeft=f=e.scrollParent[0].scrollLeft+g.scrollSpeed;else if(d.pageX-e.overflowOffset.left<g.scrollSensitivity)e.scrollParent[0].scrollLeft=f=e.scrollParent[0].scrollLeft-g.scrollSpeed
                    }else{
                if(!g.axis||g.axis!="x")if(d.pageY-b(document).scrollTop()<
                    g.scrollSensitivity)f=b(document).scrollTop(b(document).scrollTop()-g.scrollSpeed);else if(b(window).height()-(d.pageY-b(document).scrollTop())<g.scrollSensitivity)f=b(document).scrollTop(b(document).scrollTop()+g.scrollSpeed);if(!g.axis||g.axis!="y")if(d.pageX-b(document).scrollLeft()<g.scrollSensitivity)f=b(document).scrollLeft(b(document).scrollLeft()-g.scrollSpeed);else if(b(window).width()-(d.pageX-b(document).scrollLeft())<g.scrollSensitivity)f=b(document).scrollLeft(b(document).scrollLeft()+
                    g.scrollSpeed)
                }f!==false&&b.ui.ddmanager&&!g.dropBehaviour&&b.ui.ddmanager.prepareOffsets(e,d)
            }
        });b.ui.plugin.add("draggable","snap",{
        start:function(){
            var d=b(this).data("draggable"),e=d.options;d.snapElements=[];b(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){
                var g=b(this),f=g.offset();this!=d.element[0]&&d.snapElements.push({
                    item:this,
                    width:g.outerWidth(),
                    height:g.outerHeight(),
                    top:f.top,
                    left:f.left
                    })
                })
            },
        drag:function(d,e){
            for(var g=b(this).data("draggable"),
                f=g.options,a=f.snapTolerance,c=e.offset.left,h=c+g.helperProportions.width,i=e.offset.top,j=i+g.helperProportions.height,n=g.snapElements.length-1;n>=0;n--){
                var p=g.snapElements[n].left,l=p+g.snapElements[n].width,k=g.snapElements[n].top,m=k+g.snapElements[n].height;if(p-a<c&&c<l+a&&k-a<i&&i<m+a||p-a<c&&c<l+a&&k-a<j&&j<m+a||p-a<h&&h<l+a&&k-a<i&&i<m+a||p-a<h&&h<l+a&&k-a<j&&j<m+a){
                    if(f.snapMode!="inner"){
                        var o=Math.abs(k-j)<=a,q=Math.abs(m-i)<=a,s=Math.abs(p-h)<=a,r=Math.abs(l-c)<=a;if(o)e.position.top=
                            g._convertPositionTo("relative",{
                                top:k-g.helperProportions.height,
                                left:0
                            }).top-g.margins.top;if(q)e.position.top=g._convertPositionTo("relative",{
                            top:m,
                            left:0
                        }).top-g.margins.top;if(s)e.position.left=g._convertPositionTo("relative",{
                            top:0,
                            left:p-g.helperProportions.width
                            }).left-g.margins.left;if(r)e.position.left=g._convertPositionTo("relative",{
                            top:0,
                            left:l
                        }).left-g.margins.left
                        }var u=o||q||s||r;if(f.snapMode!="outer"){
                        o=Math.abs(k-i)<=a;q=Math.abs(m-j)<=a;s=Math.abs(p-c)<=a;r=Math.abs(l-h)<=a;if(o)e.position.top=
                            g._convertPositionTo("relative",{
                                top:k,
                                left:0
                            }).top-g.margins.top;if(q)e.position.top=g._convertPositionTo("relative",{
                            top:m-g.helperProportions.height,
                            left:0
                        }).top-g.margins.top;if(s)e.position.left=g._convertPositionTo("relative",{
                            top:0,
                            left:p
                        }).left-g.margins.left;if(r)e.position.left=g._convertPositionTo("relative",{
                            top:0,
                            left:l-g.helperProportions.width
                            }).left-g.margins.left
                        }if(!g.snapElements[n].snapping&&(o||q||s||r||u))g.options.snap.snap&&g.options.snap.snap.call(g.element,d,b.extend(g._uiHash(),

                        {
                        snapItem:g.snapElements[n].item
                        }));g.snapElements[n].snapping=o||q||s||r||u
                    }else{
                    g.snapElements[n].snapping&&g.options.snap.release&&g.options.snap.release.call(g.element,d,b.extend(g._uiHash(),{
                        snapItem:g.snapElements[n].item
                        }));g.snapElements[n].snapping=false
                    }
                }
            }
        });b.ui.plugin.add("draggable","stack",{
        start:function(){
            var d=b(this).data("draggable").options;d=b.makeArray(b(d.stack)).sort(function(g,f){
                return(parseInt(b(g).css("zIndex"),10)||0)-(parseInt(b(f).css("zIndex"),10)||0)
                });if(d.length){
                var e=
                parseInt(d[0].style.zIndex)||0;b(d).each(function(g){
                    this.style.zIndex=e+g
                    });this[0].style.zIndex=e+d.length
                }
            }
        });b.ui.plugin.add("draggable","zIndex",{
        start:function(d,e){
            d=b(e.helper);e=b(this).data("draggable").options;if(d.css("zIndex"))e._zIndex=d.css("zIndex");d.css("zIndex",e.zIndex)
            },
        stop:function(d,e){
            d=b(this).data("draggable").options;d._zIndex&&b(e.helper).css("zIndex",d._zIndex)
            }
        })
    })(jQuery);
(function(b){
    b.widget("ui.droppable",{
        widgetEventPrefix:"drop",
        options:{
            accept:"*",
            activeClass:false,
            addClasses:true,
            greedy:false,
            hoverClass:false,
            scope:"default",
            tolerance:"intersect"
        },
        _create:function(){
            var d=this.options,e=d.accept;this.isover=0;this.isout=1;this.accept=b.isFunction(e)?e:function(g){
                return g.is(e)
                };this.proportions={
                width:this.element[0].offsetWidth,
                height:this.element[0].offsetHeight
                };b.ui.ddmanager.droppables[d.scope]=b.ui.ddmanager.droppables[d.scope]||[];b.ui.ddmanager.droppables[d.scope].push(this);
            d.addClasses&&this.element.addClass("ui-droppable")
            },
        destroy:function(){
            for(var d=b.ui.ddmanager.droppables[this.options.scope],e=0;e<d.length;e++)d[e]==this&&d.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this
            },
        _setOption:function(d,e){
            if(d=="accept")this.accept=b.isFunction(e)?e:function(g){
                return g.is(e)
                };b.Widget.prototype._setOption.apply(this,arguments)
            },
        _activate:function(d){
            var e=b.ui.ddmanager.current;this.options.activeClass&&
            this.element.addClass(this.options.activeClass);e&&this._trigger("activate",d,this.ui(e))
            },
        _deactivate:function(d){
            var e=b.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);e&&this._trigger("deactivate",d,this.ui(e))
            },
        _over:function(d){
            var e=b.ui.ddmanager.current;if(!(!e||(e.currentItem||e.element)[0]==this.element[0]))if(this.accept.call(this.element[0],e.currentItem||e.element)){
                this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
                this._trigger("over",d,this.ui(e))
                }
            },
        _out:function(d){
            var e=b.ui.ddmanager.current;if(!(!e||(e.currentItem||e.element)[0]==this.element[0]))if(this.accept.call(this.element[0],e.currentItem||e.element)){
                this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",d,this.ui(e))
                }
            },
        _drop:function(d,e){
            var g=e||b.ui.ddmanager.current;if(!g||(g.currentItem||g.element)[0]==this.element[0])return false;var f=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){
                var a=
                b.data(this,"droppable");if(a.options.greedy&&!a.options.disabled&&a.options.scope==g.options.scope&&a.accept.call(a.element[0],g.currentItem||g.element)&&b.ui.intersect(g,b.extend(a,{
                    offset:a.element.offset()
                    }),a.options.tolerance)){
                    f=true;return false
                    }
                });if(f)return false;if(this.accept.call(this.element[0],g.currentItem||g.element)){
                this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
                    d,this.ui(g));return this.element
                }return false
            },
        ui:function(d){
            return{
                draggable:d.currentItem||d.element,
                helper:d.helper,
                position:d.position,
                offset:d.positionAbs
                }
            }
        });b.extend(b.ui.droppable,{
        version:"1.8.11"
    });b.ui.intersect=function(d,e,g){
        if(!e.offset)return false;var f=(d.positionAbs||d.position.absolute).left,a=f+d.helperProportions.width,c=(d.positionAbs||d.position.absolute).top,h=c+d.helperProportions.height,i=e.offset.left,j=i+e.proportions.width,n=e.offset.top,p=n+e.proportions.height;
        switch(g){
            case "fit":return i<=f&&a<=j&&n<=c&&h<=p;case "intersect":return i<f+d.helperProportions.width/2&&a-d.helperProportions.width/2<j&&n<c+d.helperProportions.height/2&&h-d.helperProportions.height/2<p;case "pointer":return b.ui.isOver((d.positionAbs||d.position.absolute).top+(d.clickOffset||d.offset.click).top,(d.positionAbs||d.position.absolute).left+(d.clickOffset||d.offset.click).left,n,i,e.proportions.height,e.proportions.width);case "touch":return(c>=n&&c<=p||h>=n&&h<=p||c<n&&h>p)&&(f>=
                i&&f<=j||a>=i&&a<=j||f<i&&a>j);default:return false
                }
        };b.ui.ddmanager={
        current:null,
        droppables:{
            "default":[]
        },
        prepareOffsets:function(d,e){
            var g=b.ui.ddmanager.droppables[d.options.scope]||[],f=e?e.type:null,a=(d.currentItem||d.element).find(":data(droppable)").andSelf(),c=0;a:for(;c<g.length;c++)if(!(g[c].options.disabled||d&&!g[c].accept.call(g[c].element[0],d.currentItem||d.element))){
                for(var h=0;h<a.length;h++)if(a[h]==g[c].element[0]){
                    g[c].proportions.height=0;continue a
                }g[c].visible=g[c].element.css("display")!=
                "none";if(g[c].visible){
                    f=="mousedown"&&g[c]._activate.call(g[c],e);g[c].offset=g[c].element.offset();g[c].proportions={
                        width:g[c].element[0].offsetWidth,
                        height:g[c].element[0].offsetHeight
                        }
                    }
                }
            },
        drop:function(d,e){
            var g=false;b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){
                if(this.options){
                    if(!this.options.disabled&&this.visible&&b.ui.intersect(d,this,this.options.tolerance))g=g||this._drop.call(this,e);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||
                        d.element)){
                        this.isout=1;this.isover=0;this._deactivate.call(this,e)
                        }
                    }
                });return g
            },
        drag:function(d,e){
            d.options.refreshPositions&&b.ui.ddmanager.prepareOffsets(d,e);b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){
                if(!(this.options.disabled||this.greedyChild||!this.visible)){
                    var g=b.ui.intersect(d,this,this.options.tolerance);if(g=!g&&this.isover==1?"isout":g&&this.isover==0?"isover":null){
                        var f;if(this.options.greedy){
                            var a=this.element.parents(":data(droppable):eq(0)");if(a.length){
                                f=
                                b.data(a[0],"droppable");f.greedyChild=g=="isover"?1:0
                                }
                            }if(f&&g=="isover"){
                            f.isover=0;f.isout=1;f._out.call(f,e)
                            }this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,e);if(f&&g=="isout"){
                            f.isout=0;f.isover=1;f._over.call(f,e)
                            }
                        }
                    }
                })
            }
        }
    })(jQuery);
(function(b){
    b.widget("ui.resizable",b.ui.mouse,{
        widgetEventPrefix:"resize",
        options:{
            alsoResize:false,
            animate:false,
            animateDuration:"slow",
            animateEasing:"swing",
            aspectRatio:false,
            autoHide:false,
            containment:false,
            ghost:false,
            grid:false,
            handles:"e,s,se",
            helper:false,
            maxHeight:null,
            maxWidth:null,
            minHeight:10,
            minWidth:10,
            zIndex:1E3
        },
        _create:function(){
            var g=this,f=this.options;this.element.addClass("ui-resizable");b.extend(this,{
                _aspectRatio:!!f.aspectRatio,
                aspectRatio:f.aspectRatio,
                originalElement:this.element,
                _proportionallyResizeElements:[],
                _helper:f.helper||f.ghost||f.animate?f.helper||"ui-resizable-helper":null
                });if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){
                /relative/.test(this.element.css("position"))&&b.browser.opera&&this.element.css({
                    position:"relative",
                    top:"auto",
                    left:"auto"
                });this.element.wrap(b('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position:this.element.css("position"),
                    width:this.element.outerWidth(),
                    height:this.element.outerHeight(),
                    top:this.element.css("top"),
                    left:this.element.css("left")
                    }));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({
                    marginLeft:this.originalElement.css("marginLeft"),
                    marginTop:this.originalElement.css("marginTop"),
                    marginRight:this.originalElement.css("marginRight"),
                    marginBottom:this.originalElement.css("marginBottom")
                    });this.originalElement.css({
                    marginLeft:0,
                    marginTop:0,
                    marginRight:0,
                    marginBottom:0
                });this.originalResizeStyle=
                this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({
                    position:"static",
                    zoom:1,
                    display:"block"
                }));this.originalElement.css({
                    margin:this.originalElement.css("margin")
                    });this._proportionallyResize()
                }this.handles=f.handles||(!b(".ui-resizable-handle",this.element).length?"e,s,se":{
                n:".ui-resizable-n",
                e:".ui-resizable-e",
                s:".ui-resizable-s",
                w:".ui-resizable-w",
                se:".ui-resizable-se",
                sw:".ui-resizable-sw",
                ne:".ui-resizable-ne",
                nw:".ui-resizable-nw"
            });if(this.handles.constructor==String){
                if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var a=this.handles.split(",");this.handles={};for(var c=0;c<a.length;c++){
                    var h=b.trim(a[c]),i=b('<div class="ui-resizable-handle '+("ui-resizable-"+h)+'"></div>');/sw|se|ne|nw/.test(h)&&i.css({
                        zIndex:++f.zIndex
                        });"se"==h&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[h]=".ui-resizable-"+h;this.element.append(i)
                    }
                }this._renderAxis=function(j){
                j=j||this.element;for(var n in this.handles){
                    if(this.handles[n].constructor==
                        String)this.handles[n]=b(this.handles[n],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){
                        var p=b(this.handles[n],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(n)?p.outerHeight():p.outerWidth();p=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");j.css(p,l);this._proportionallyResize()
                        }b(this.handles[n])
                    }
                };this._renderAxis(this.element);this._handles=b(".ui-resizable-handle",this.element).disableSelection();
            this._handles.mouseover(function(){
                if(!g.resizing){
                    if(this.className)var j=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);g.axis=j&&j[1]?j[1]:"se"
                    }
                });if(f.autoHide){
                this._handles.hide();b(this.element).addClass("ui-resizable-autohide").hover(function(){
                    b(this).removeClass("ui-resizable-autohide");g._handles.show()
                    },function(){
                    if(!g.resizing){
                        b(this).addClass("ui-resizable-autohide");g._handles.hide()
                        }
                    })
                }this._mouseInit()
            },
        destroy:function(){
            this._mouseDestroy();var g=function(a){
                b(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
            if(this.elementIsWrapper){
                g(this.element);var f=this.element;f.after(this.originalElement.css({
                    position:f.css("position"),
                    width:f.outerWidth(),
                    height:f.outerHeight(),
                    top:f.css("top"),
                    left:f.css("left")
                    })).remove()
                }this.originalElement.css("resize",this.originalResizeStyle);g(this.originalElement);return this
            },
        _mouseCapture:function(g){
            var f=false;for(var a in this.handles)if(b(this.handles[a])[0]==g.target)f=true;return!this.options.disabled&&f
            },
        _mouseStart:function(g){
            var f=this.options,a=this.element.position(),
            c=this.element;this.resizing=true;this.documentScroll={
                top:b(document).scrollTop(),
                left:b(document).scrollLeft()
                };if(c.is(".ui-draggable")||/absolute/.test(c.css("position")))c.css({
                position:"absolute",
                top:a.top,
                left:a.left
                });b.browser.opera&&/relative/.test(c.css("position"))&&c.css({
                position:"relative",
                top:"auto",
                left:"auto"
            });this._renderProxy();a=d(this.helper.css("left"));var h=d(this.helper.css("top"));if(f.containment){
                a+=b(f.containment).scrollLeft()||0;h+=b(f.containment).scrollTop()||0
                }this.offset=
            this.helper.offset();this.position={
                left:a,
                top:h
            };this.size=this._helper?{
                width:c.outerWidth(),
                height:c.outerHeight()
                }:{
                width:c.width(),
                height:c.height()
                };this.originalSize=this._helper?{
                width:c.outerWidth(),
                height:c.outerHeight()
                }:{
                width:c.width(),
                height:c.height()
                };this.originalPosition={
                left:a,
                top:h
            };this.sizeDiff={
                width:c.outerWidth()-c.width(),
                height:c.outerHeight()-c.height()
                };this.originalMousePosition={
                left:g.pageX,
                top:g.pageY
                };this.aspectRatio=typeof f.aspectRatio=="number"?f.aspectRatio:
            this.originalSize.width/this.originalSize.height||1;f=b(".ui-resizable-"+this.axis).css("cursor");b("body").css("cursor",f=="auto"?this.axis+"-resize":f);c.addClass("ui-resizable-resizing");this._propagate("start",g);return true
            },
        _mouseDrag:function(g){
            var f=this.helper,a=this.originalMousePosition,c=this._change[this.axis];if(!c)return false;a=c.apply(this,[g,g.pageX-a.left||0,g.pageY-a.top||0]);if(this._aspectRatio||g.shiftKey)a=this._updateRatio(a,g);a=this._respectSize(a,g);this._propagate("resize",
                g);f.css({
                top:this.position.top+"px",
                left:this.position.left+"px",
                width:this.size.width+"px",
                height:this.size.height+"px"
                });!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(a);this._trigger("resize",g,this.ui());return false
            },
        _mouseStop:function(g){
            this.resizing=false;var f=this.options,a=this;if(this._helper){
                var c=this._proportionallyResizeElements,h=c.length&&/textarea/i.test(c[0].nodeName);c=h&&b.ui.hasScroll(c[0],"left")?0:a.sizeDiff.height;
                h=h?0:a.sizeDiff.width;h={
                    width:a.helper.width()-h,
                    height:a.helper.height()-c
                    };c=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var i=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;f.animate||this.element.css(b.extend(h,{
                    top:i,
                    left:c
                }));a.helper.height(a.size.height);a.helper.width(a.size.width);this._helper&&!f.animate&&this._proportionallyResize()
                }b("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop",g);this._helper&&this.helper.remove();return false
            },
        _updateCache:function(g){
            this.offset=this.helper.offset();if(e(g.left))this.position.left=g.left;if(e(g.top))this.position.top=g.top;if(e(g.height))this.size.height=g.height;if(e(g.width))this.size.width=g.width
                },
        _updateRatio:function(g){
            var f=this.position,a=this.size,c=this.axis;if(g.height)g.width=a.height*this.aspectRatio;else if(g.width)g.height=a.width/this.aspectRatio;if(c=="sw"){
                g.left=f.left+(a.width-g.width);g.top=
                null
                }if(c=="nw"){
                g.top=f.top+(a.height-g.height);g.left=f.left+(a.width-g.width)
                }return g
            },
        _respectSize:function(g){
            var f=this.options,a=this.axis,c=e(g.width)&&f.maxWidth&&f.maxWidth<g.width,h=e(g.height)&&f.maxHeight&&f.maxHeight<g.height,i=e(g.width)&&f.minWidth&&f.minWidth>g.width,j=e(g.height)&&f.minHeight&&f.minHeight>g.height;if(i)g.width=f.minWidth;if(j)g.height=f.minHeight;if(c)g.width=f.maxWidth;if(h)g.height=f.maxHeight;var n=this.originalPosition.left+this.originalSize.width,p=this.position.top+
            this.size.height,l=/sw|nw|w/.test(a);a=/nw|ne|n/.test(a);if(i&&l)g.left=n-f.minWidth;if(c&&l)g.left=n-f.maxWidth;if(j&&a)g.top=p-f.minHeight;if(h&&a)g.top=p-f.maxHeight;if((f=!g.width&&!g.height)&&!g.left&&g.top)g.top=null;else if(f&&!g.top&&g.left)g.left=null;return g
            },
        _proportionallyResize:function(){
            if(this._proportionallyResizeElements.length)for(var g=this.helper||this.element,f=0;f<this._proportionallyResizeElements.length;f++){
                var a=this._proportionallyResizeElements[f];if(!this.borderDif){
                    var c=
                    [a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],h=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];this.borderDif=b.map(c,function(i,j){
                        i=parseInt(i,10)||0;j=parseInt(h[j],10)||0;return i+j
                        })
                    }b.browser.msie&&(b(g).is(":hidden")||b(g).parents(":hidden").length)||a.css({
                    height:g.height()-this.borderDif[0]-this.borderDif[2]||0,
                    width:g.width()-this.borderDif[1]-this.borderDif[3]||0
                    })
                }
            },
        _renderProxy:function(){
            var g=
            this.options;this.elementOffset=this.element.offset();if(this._helper){
                this.helper=this.helper||b('<div style="overflow:hidden;"></div>');var f=b.browser.msie&&b.browser.version<7,a=f?1:0;f=f?2:-1;this.helper.addClass(this._helper).css({
                    width:this.element.outerWidth()+f,
                    height:this.element.outerHeight()+f,
                    position:"absolute",
                    left:this.elementOffset.left-a+"px",
                    top:this.elementOffset.top-a+"px",
                    zIndex:++g.zIndex
                    });this.helper.appendTo("body").disableSelection()
                }else this.helper=this.element
            },
        _change:{
            e:function(g,
                f){
            return{
            width:this.originalSize.width+f
            }
            },
            w:function(g,f){
            return{
            left:this.originalPosition.left+f,
            width:this.originalSize.width-f
            }
            },
            n:function(g,f,a){
            return{
            top:this.originalPosition.top+a,
            height:this.originalSize.height-a
            }
            },
            s:function(g,f,a){
            return{
            height:this.originalSize.height+a
            }
            },
            se:function(g,f,a){
            return b.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,a]))
            },
            sw:function(g,f,a){
            return b.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,
                a]))
            },
            ne:function(g,f,a){
            return b.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,a]))
            },
            nw:function(g,f,a){
            return b.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,a]))
            }
            },
        _propagate:function(g,f){
            b.ui.plugin.call(this,g,[f,this.ui()]);g!="resize"&&this._trigger(g,f,this.ui())
            },
        plugins:{},
        ui:function(){
            return{
            originalElement:this.originalElement,
            element:this.element,
            helper:this.helper,
            position:this.position,
            size:this.size,
            originalSize:this.originalSize,
            originalPosition:this.originalPosition
            }
            }
            });b.extend(b.ui.resizable,{
            version:"1.8.11"
            });b.ui.plugin.add("resizable","alsoResize",{
            start:function(){
            var g=b(this).data("resizable").options,f=function(a){
            b(a).each(function(){
                var c=b(this);c.data("resizable-alsoresize",{
                    width:parseInt(c.width(),10),
        height:parseInt(c.height(),10),
        left:parseInt(c.css("left"),10),
        top:parseInt(c.css("top"),10),
        position:c.css("position")
                    })
                })
            };if(typeof g.alsoResize=="object"&&!g.alsoResize.parentNode)if(g.alsoResize.length){
            g.alsoResize=
            g.alsoResize[0];f(g.alsoResize)
            }else b.each(g.alsoResize,function(a){
        f(a)
        });else f(g.alsoResize)
        },
    resize:function(g,f){
        var a=b(this).data("resizable");g=a.options;var c=a.originalSize,h=a.originalPosition,i={
        height:a.size.height-c.height||0,
        width:a.size.width-c.width||0,
        top:a.position.top-h.top||0,
        left:a.position.left-h.left||0
        },j=function(n,p){
        b(n).each(function(){
            var l=b(this),k=b(this).data("resizable-alsoresize"),m={},o=p&&p.length?p:l.parents(f.originalElement[0]).length?["width","height"]:["width",
            "height","top","left"];b.each(o,function(q,s){
                if((q=(k[s]||0)+(i[s]||0))&&q>=0)m[s]=q||null
                });if(b.browser.opera&&/relative/.test(l.css("position"))){
            a._revertToRelativePosition=true;l.css({
                position:"absolute",
        top:"auto",
        left:"auto"
                })
            }l.css(m)
            })
        };typeof g.alsoResize=="object"&&!g.alsoResize.nodeType?b.each(g.alsoResize,function(n,p){
            j(n,p)
            }):j(g.alsoResize)
        },
        stop:function(){
        var g=b(this).data("resizable"),f=g.options,a=function(c){
        b(c).each(function(){
            var h=b(this);h.css({
                position:h.data("resizable-alsoresize").position
                })
            })
        };
        if(g._revertToRelativePosition){
        g._revertToRelativePosition=false;typeof f.alsoResize=="object"&&!f.alsoResize.nodeType?b.each(f.alsoResize,function(c){
            a(c)
            }):a(f.alsoResize)
        }b(this).removeData("resizable-alsoresize")
        }
        });b.ui.plugin.add("resizable","animate",{
        stop:function(g){
        var f=b(this).data("resizable"),a=f.options,c=f._proportionallyResizeElements,h=c.length&&/textarea/i.test(c[0].nodeName),i=h&&b.ui.hasScroll(c[0],"left")?0:f.sizeDiff.height;h={
        width:f.size.width-(h?0:f.sizeDiff.width),
        height:f.size.height-
        i
        };i=parseInt(f.element.css("left"),10)+(f.position.left-f.originalPosition.left)||null;var j=parseInt(f.element.css("top"),10)+(f.position.top-f.originalPosition.top)||null;f.element.animate(b.extend(h,j&&i?{
            top:j,
        left:i
            }:{}),{
        duration:a.animateDuration,
        easing:a.animateEasing,
        step:function(){
            var n={
            width:parseInt(f.element.css("width"),10),
        height:parseInt(f.element.css("height"),10),
        top:parseInt(f.element.css("top"),10),
        left:parseInt(f.element.css("left"),10)
            };c&&c.length&&b(c[0]).css({
                width:n.width,
                height:n.height
                });f._updateCache(n);f._propagate("resize",g)
            }
            })
        }
        });b.ui.plugin.add("resizable","containment",{
        start:function(){
        var g=b(this).data("resizable"),f=g.element,a=g.options.containment;if(f=a instanceof b?a.get(0):/parent/.test(a)?f.parent().get(0):a){
        g.containerElement=b(f);if(/document/.test(a)||a==document){
        g.containerOffset={
        left:0,
        top:0
        };g.containerPosition={
        left:0,
        top:0
        };g.parentData={
        element:b(document),
        left:0,
        top:0,
        width:b(document).width(),
        height:b(document).height()||document.body.parentNode.scrollHeight
        }
        }else{
        var c=
        b(f),h=[];b(["Top","Right","Left","Bottom"]).each(function(n,p){
            h[n]=d(c.css("padding"+p))
            });g.containerOffset=c.offset();g.containerPosition=c.position();g.containerSize={
            height:c.innerHeight()-h[3],
            width:c.innerWidth()-h[1]
            };a=g.containerOffset;var i=g.containerSize.height,j=g.containerSize.width;j=b.ui.hasScroll(f,"left")?f.scrollWidth:j;i=b.ui.hasScroll(f)?f.scrollHeight:i;g.parentData={
            element:f,
            left:a.left,
            top:a.top,
            width:j,
            height:i
        }
        }
    }
    },
    resize:function(g){
        var f=b(this).data("resizable"),a=f.options,
        c=f.containerOffset,h=f.position;g=f._aspectRatio||g.shiftKey;var i={
            top:0,
            left:0
        },j=f.containerElement;if(j[0]!=document&&/static/.test(j.css("position")))i=c;if(h.left<(f._helper?c.left:0)){
            f.size.width+=f._helper?f.position.left-c.left:f.position.left-i.left;if(g)f.size.height=f.size.width/a.aspectRatio;f.position.left=a.helper?c.left:0
            }if(h.top<(f._helper?c.top:0)){
            f.size.height+=f._helper?f.position.top-c.top:f.position.top;if(g)f.size.width=f.size.height*a.aspectRatio;f.position.top=f._helper?
            c.top:0
            }f.offset.left=f.parentData.left+f.position.left;f.offset.top=f.parentData.top+f.position.top;a=Math.abs((f._helper?f.offset.left-i.left:f.offset.left-i.left)+f.sizeDiff.width);c=Math.abs((f._helper?f.offset.top-i.top:f.offset.top-c.top)+f.sizeDiff.height);h=f.containerElement.get(0)==f.element.parent().get(0);i=/relative|absolute/.test(f.containerElement.css("position"));if(h&&i)a-=f.parentData.left;if(a+f.size.width>=f.parentData.width){
            f.size.width=f.parentData.width-a;if(g)f.size.height=
                f.size.width/f.aspectRatio
                }if(c+f.size.height>=f.parentData.height){
            f.size.height=f.parentData.height-c;if(g)f.size.width=f.size.height*f.aspectRatio
                }
        },
    stop:function(){
        var g=b(this).data("resizable"),f=g.options,a=g.containerOffset,c=g.containerPosition,h=g.containerElement,i=b(g.helper),j=i.offset(),n=i.outerWidth()-g.sizeDiff.width;i=i.outerHeight()-g.sizeDiff.height;g._helper&&!f.animate&&/relative/.test(h.css("position"))&&b(this).css({
            left:j.left-c.left-a.left,
            width:n,
            height:i
        });g._helper&&!f.animate&&
        /static/.test(h.css("position"))&&b(this).css({
            left:j.left-c.left-a.left,
            width:n,
            height:i
        })
        }
    });b.ui.plugin.add("resizable","ghost",{
        start:function(){
            var g=b(this).data("resizable"),f=g.options,a=g.size;g.ghost=g.originalElement.clone();g.ghost.css({
                opacity:0.25,
                display:"block",
                position:"relative",
                height:a.height,
                width:a.width,
                margin:0,
                left:0,
                top:0
            }).addClass("ui-resizable-ghost").addClass(typeof f.ghost=="string"?f.ghost:"");g.ghost.appendTo(g.helper)
            },
        resize:function(){
            var g=b(this).data("resizable");
            g.ghost&&g.ghost.css({
                position:"relative",
                height:g.size.height,
                width:g.size.width
                })
            },
        stop:function(){
            var g=b(this).data("resizable");g.ghost&&g.helper&&g.helper.get(0).removeChild(g.ghost.get(0))
            }
        });b.ui.plugin.add("resizable","grid",{
        resize:function(){
            var g=b(this).data("resizable"),f=g.options,a=g.size,c=g.originalSize,h=g.originalPosition,i=g.axis;f.grid=typeof f.grid=="number"?[f.grid,f.grid]:f.grid;var j=Math.round((a.width-c.width)/(f.grid[0]||1))*(f.grid[0]||1);f=Math.round((a.height-c.height)/
                (f.grid[1]||1))*(f.grid[1]||1);if(/^(se|s|e)$/.test(i)){
                g.size.width=c.width+j;g.size.height=c.height+f
                }else if(/^(ne)$/.test(i)){
                g.size.width=c.width+j;g.size.height=c.height+f;g.position.top=h.top-f
                }else{
                if(/^(sw)$/.test(i)){
                    g.size.width=c.width+j;g.size.height=c.height+f
                    }else{
                    g.size.width=c.width+j;g.size.height=c.height+f;g.position.top=h.top-f
                    }g.position.left=h.left-j
                }
            }
        });var d=function(g){
        return parseInt(g,10)||0
        },e=function(g){
        return!isNaN(parseInt(g,10))
        }
    })(jQuery);
(function(b){
    b.widget("ui.selectable",b.ui.mouse,{
        options:{
            appendTo:"body",
            autoRefresh:true,
            distance:0,
            filter:"*",
            tolerance:"touch"
        },
        _create:function(){
            var d=this;this.element.addClass("ui-selectable");this.dragged=false;var e;this.refresh=function(){
                e=b(d.options.filter,d.element[0]);e.each(function(){
                    var g=b(this),f=g.offset();b.data(this,"selectable-item",{
                        element:this,
                        $element:g,
                        left:f.left,
                        top:f.top,
                        right:f.left+g.outerWidth(),
                        bottom:f.top+g.outerHeight(),
                        startselected:false,
                        selected:g.hasClass("ui-selected"),
                        selecting:g.hasClass("ui-selecting"),
                        unselecting:g.hasClass("ui-unselecting")
                        })
                    })
                };this.refresh();this.selectees=e.addClass("ui-selectee");this._mouseInit();this.helper=b("<div class='ui-selectable-helper'></div>")
            },
        destroy:function(){
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this
            },
        _mouseStart:function(d){
            var e=this;this.opos=[d.pageX,
            d.pageY];if(!this.options.disabled){
                var g=this.options;this.selectees=b(g.filter,this.element[0]);this._trigger("start",d);b(g.appendTo).append(this.helper);this.helper.css({
                    left:d.clientX,
                    top:d.clientY,
                    width:0,
                    height:0
                });g.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){
                    var f=b.data(this,"selectable-item");f.startselected=true;if(!d.metaKey){
                        f.$element.removeClass("ui-selected");f.selected=false;f.$element.addClass("ui-unselecting");f.unselecting=true;e._trigger("unselecting",
                            d,{
                                unselecting:f.element
                                })
                        }
                    });b(d.target).parents().andSelf().each(function(){
                    var f=b.data(this,"selectable-item");if(f){
                        var a=!d.metaKey||!f.$element.hasClass("ui-selected");f.$element.removeClass(a?"ui-unselecting":"ui-selected").addClass(a?"ui-selecting":"ui-unselecting");f.unselecting=!a;f.selecting=a;(f.selected=a)?e._trigger("selecting",d,{
                            selecting:f.element
                            }):e._trigger("unselecting",d,{
                            unselecting:f.element
                            });return false
                        }
                    })
                }
            },
        _mouseDrag:function(d){
            var e=this;this.dragged=true;if(!this.options.disabled){
                var g=
                this.options,f=this.opos[0],a=this.opos[1],c=d.pageX,h=d.pageY;if(f>c){
                    var i=c;c=f;f=i
                    }if(a>h){
                    i=h;h=a;a=i
                    }this.helper.css({
                    left:f,
                    top:a,
                    width:c-f,
                    height:h-a
                    });this.selectees.each(function(){
                    var j=b.data(this,"selectable-item");if(!(!j||j.element==e.element[0])){
                        var n=false;if(g.tolerance=="touch")n=!(j.left>c||j.right<f||j.top>h||j.bottom<a);else if(g.tolerance=="fit")n=j.left>f&&j.right<c&&j.top>a&&j.bottom<h;if(n){
                            if(j.selected){
                                j.$element.removeClass("ui-selected");j.selected=false
                                }if(j.unselecting){
                                j.$element.removeClass("ui-unselecting");
                                j.unselecting=false
                                }if(!j.selecting){
                                j.$element.addClass("ui-selecting");j.selecting=true;e._trigger("selecting",d,{
                                    selecting:j.element
                                    })
                                }
                            }else{
                            if(j.selecting)if(d.metaKey&&j.startselected){
                                j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true
                                }else{
                                j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){
                                    j.$element.addClass("ui-unselecting");j.unselecting=true
                                    }e._trigger("unselecting",d,{
                                    unselecting:j.element
                                    })
                                }if(j.selected)if(!d.metaKey&&
                                !j.startselected){
                                j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;e._trigger("unselecting",d,{
                                    unselecting:j.element
                                    })
                                }
                            }
                        }
                    });return false
                }
            },
        _mouseStop:function(d){
            var e=this;this.dragged=false;b(".ui-unselecting",this.element[0]).each(function(){
                var g=b.data(this,"selectable-item");g.$element.removeClass("ui-unselecting");g.unselecting=false;g.startselected=false;e._trigger("unselected",d,{
                    unselected:g.element
                    })
                });b(".ui-selecting",this.element[0]).each(function(){
                var g=
                b.data(this,"selectable-item");g.$element.removeClass("ui-selecting").addClass("ui-selected");g.selecting=false;g.selected=true;g.startselected=true;e._trigger("selected",d,{
                    selected:g.element
                    })
                });this._trigger("stop",d);this.helper.remove();return false
            }
        });b.extend(b.ui.selectable,{
        version:"1.8.11"
    })
    })(jQuery);
(function(b){
    b.widget("ui.sortable",b.ui.mouse,{
        widgetEventPrefix:"sort",
        options:{
            appendTo:"parent",
            axis:false,
            connectWith:false,
            containment:false,
            cursor:"auto",
            cursorAt:false,
            dropOnEmpty:true,
            forcePlaceholderSize:false,
            forceHelperSize:false,
            grid:false,
            handle:false,
            helper:"original",
            items:"> *",
            opacity:false,
            placeholder:false,
            revert:false,
            scroll:true,
            scrollSensitivity:20,
            scrollSpeed:20,
            scope:"default",
            tolerance:"intersect",
            zIndex:1E3
        },
        _create:function(){
            this.containerCache={};this.element.addClass("ui-sortable");
            this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()
            },
        destroy:function(){
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var d=this.items.length-1;d>=0;d--)this.items[d].item.removeData("sortable-item");return this
            },
        _setOption:function(d,e){
            if(d==="disabled"){
                this.options[d]=
                e;this.widget()[e?"addClass":"removeClass"]("ui-sortable-disabled")
                }else b.Widget.prototype._setOption.apply(this,arguments)
                },
        _mouseCapture:function(d,e){
            if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(d);var g=null,f=this;b(d.target).parents().each(function(){
                if(b.data(this,"sortable-item")==f){
                    g=b(this);return false
                    }
                });if(b.data(d.target,"sortable-item")==f)g=b(d.target);if(!g)return false;if(this.options.handle&&!e){
                var a=false;
                b(this.options.handle,g).find("*").andSelf().each(function(){
                    if(this==d.target)a=true
                        });if(!a)return false
                    }this.currentItem=g;this._removeCurrentsFromItems();return true
            },
        _mouseStart:function(d,e,g){
            e=this.options;var f=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(d);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={
                top:this.offset.top-this.margins.top,
                left:this.offset.left-
                this.margins.left
                };this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");b.extend(this.offset,{
                click:{
                    left:d.pageX-this.offset.left,
                    top:d.pageY-this.offset.top
                    },
                parent:this._getParentOffset(),
                relative:this._getRelativeOffset()
                });this.originalPosition=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt);this.domPosition={
                prev:this.currentItem.prev()[0],
                parent:this.currentItem.parent()[0]
                };
            this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();e.containment&&this._setContainment();if(e.cursor){
                if(b("body").css("cursor"))this._storedCursor=b("body").css("cursor");b("body").css("cursor",e.cursor)
                }if(e.opacity){
                if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",e.opacity)
                }if(e.zIndex){
                if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",e.zIndex)
                }if(this.scrollParent[0]!=
                document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",d,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!g)for(g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",d,f._uiHash(this));if(b.ui.ddmanager)b.ui.ddmanager.current=this;b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,d);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(d);
            return true
            },
        _mouseDrag:function(d){
            this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){
                var e=this.options,g=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){
                    if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-d.pageY<e.scrollSensitivity)this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop+e.scrollSpeed;else if(d.pageY-this.overflowOffset.top<
                        e.scrollSensitivity)this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop-e.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-d.pageX<e.scrollSensitivity)this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft+e.scrollSpeed;else if(d.pageX-this.overflowOffset.left<e.scrollSensitivity)this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft-e.scrollSpeed
                        }else{
                    if(d.pageY-b(document).scrollTop()<e.scrollSensitivity)g=b(document).scrollTop(b(document).scrollTop()-
                        e.scrollSpeed);else if(b(window).height()-(d.pageY-b(document).scrollTop())<e.scrollSensitivity)g=b(document).scrollTop(b(document).scrollTop()+e.scrollSpeed);if(d.pageX-b(document).scrollLeft()<e.scrollSensitivity)g=b(document).scrollLeft(b(document).scrollLeft()-e.scrollSpeed);else if(b(window).width()-(d.pageX-b(document).scrollLeft())<e.scrollSensitivity)g=b(document).scrollLeft(b(document).scrollLeft()+e.scrollSpeed)
                        }g!==false&&b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,
                    d)
                }this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(e=this.items.length-1;e>=0;e--){
                g=this.items[e];var f=g.item[0],a=this._intersectsWithPointer(g);if(a)if(f!=this.currentItem[0]&&this.placeholder[a==1?"next":"prev"]()[0]!=f&&!b.ui.contains(this.placeholder[0],f)&&(this.options.type=="semi-dynamic"?!b.ui.contains(this.element[0],
                    f):true)){
                    this.direction=a==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(g))this._rearrange(d,g);else break;this._trigger("change",d,this._uiHash());break
                }
                }this._contactContainers(d);b.ui.ddmanager&&b.ui.ddmanager.drag(this,d);this._trigger("sort",d,this._uiHash());this.lastPositionAbs=this.positionAbs;return false
            },
        _mouseStop:function(d,e){
            if(d){
                b.ui.ddmanager&&!this.options.dropBehaviour&&b.ui.ddmanager.drop(this,d);if(this.options.revert){
                    var g=this;e=g.placeholder.offset();
                    g.reverting=true;b(this.helper).animate({
                        left:e.left-this.offset.parent.left-g.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),
                        top:e.top-this.offset.parent.top-g.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)
                        },parseInt(this.options.revert,10)||500,function(){
                        g._clear(d)
                        })
                    }else this._clear(d,e);return false
                }
            },
        cancel:function(){
            var d=this;if(this.dragging){
                this._mouseUp({
                    target:null
                });this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
                this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--){
                    this.containers[e]._trigger("deactivate",null,d._uiHash(this));if(this.containers[e].containerCache.over){
                        this.containers[e]._trigger("out",null,d._uiHash(this));this.containers[e].containerCache.over=0
                        }
                    }
                }if(this.placeholder){
                this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();b.extend(this,{
                    helper:null,
                    dragging:false,
                    reverting:false,
                    _noFinalSort:null
                });this.domPosition.prev?b(this.domPosition.prev).after(this.currentItem):b(this.domPosition.parent).prepend(this.currentItem)
                }return this
            },
        serialize:function(d){
            var e=this._getItemsAsjQuery(d&&d.connected),g=[];d=d||{};b(e).each(function(){
                var f=(b(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[-=_](.+)/);if(f)g.push((d.key||f[1]+"[]")+"="+(d.key&&d.expression?f[1]:f[2]))
                    });!g.length&&d.key&&g.push(d.key+"=");return g.join("&")
            },
        toArray:function(d){
            var e=this._getItemsAsjQuery(d&&d.connected),g=[];d=d||{};e.each(function(){
                g.push(b(d.item||this).attr(d.attribute||"id")||"")
                });return g
            },
        _intersectsWith:function(d){
            var e=this.positionAbs.left,g=e+this.helperProportions.width,f=this.positionAbs.top,a=f+this.helperProportions.height,c=d.left,h=c+d.width,i=d.top,j=i+d.height,n=this.offset.click.top,p=this.offset.click.left;n=f+n>i&&f+n<j&&e+p>c&&e+p<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
            this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>d[this.floating?"width":"height"]?n:c<e+this.helperProportions.width/2&&g-this.helperProportions.width/2<h&&i<f+this.helperProportions.height/2&&a-this.helperProportions.height/2<j
            },
        _intersectsWithPointer:function(d){
            var e=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height);d=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width);e=e&&d;d=this._getDragVerticalDirection();
            var g=this._getDragHorizontalDirection();if(!e)return false;return this.floating?g&&g=="right"||d=="down"?2:1:d&&(d=="down"?2:1)
            },
        _intersectsWithSides:function(d){
            var e=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top+d.height/2,d.height);d=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left+d.width/2,d.width);var g=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:g&&(g=="down"&&e||g=="up"&&!e)
            },
        _getDragVerticalDirection:function(){
            var d=this.positionAbs.top-this.lastPositionAbs.top;return d!=0&&(d>0?"down":"up")
            },
        _getDragHorizontalDirection:function(){
            var d=this.positionAbs.left-this.lastPositionAbs.left;return d!=0&&(d>0?"right":"left")
            },
        refresh:function(d){
            this._refreshItems(d);this.refreshPositions();return this
            },
        _connectWith:function(){
            var d=this.options;return d.connectWith.constructor==String?[d.connectWith]:d.connectWith
            },
        _getItemsAsjQuery:function(d){
            var e=[],g=[],f=this._connectWith();
            if(f&&d)for(d=f.length-1;d>=0;d--)for(var a=b(f[d]),c=a.length-1;c>=0;c--){
                var h=b.data(a[c],"sortable");if(h&&h!=this&&!h.options.disabled)g.push([b.isFunction(h.options.items)?h.options.items.call(h.element):b(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])
                    }g.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{
                options:this.options,
                item:this.currentItem
                }):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
                this]);for(d=g.length-1;d>=0;d--)g[d][0].each(function(){
                e.push(this)
                });return b(e)
            },
        _removeCurrentsFromItems:function(){
            for(var d=this.currentItem.find(":data(sortable-item)"),e=0;e<this.items.length;e++)for(var g=0;g<d.length;g++)d[g]==this.items[e].item[0]&&this.items.splice(e,1)
                },
        _refreshItems:function(d){
            this.items=[];this.containers=[this];var e=this.items,g=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],d,{
                item:this.currentItem
                }):b(this.options.items,this.element),
            this]],f=this._connectWith();if(f)for(var a=f.length-1;a>=0;a--)for(var c=b(f[a]),h=c.length-1;h>=0;h--){
                var i=b.data(c[h],"sortable");if(i&&i!=this&&!i.options.disabled){
                    g.push([b.isFunction(i.options.items)?i.options.items.call(i.element[0],d,{
                        item:this.currentItem
                        }):b(i.options.items,i.element),i]);this.containers.push(i)
                    }
                }for(a=g.length-1;a>=0;a--){
                d=g[a][1];f=g[a][0];h=0;for(c=f.length;h<c;h++){
                    i=b(f[h]);i.data("sortable-item",d);e.push({
                        item:i,
                        instance:d,
                        width:0,
                        height:0,
                        left:0,
                        top:0
                    })
                    }
                }
            },
        refreshPositions:function(d){
            if(this.offsetParent&&
                this.helper)this.offset.parent=this._getParentOffset();for(var e=this.items.length-1;e>=0;e--){
                var g=this.items[e],f=this.options.toleranceElement?b(this.options.toleranceElement,g.item):g.item;if(!d){
                    g.width=f.outerWidth();g.height=f.outerHeight()
                    }f=f.offset();g.left=f.left;g.top=f.top
                }if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(e=this.containers.length-1;e>=0;e--){
                f=this.containers[e].element.offset();this.containers[e].containerCache.left=
                f.left;this.containers[e].containerCache.top=f.top;this.containers[e].containerCache.width=this.containers[e].element.outerWidth();this.containers[e].containerCache.height=this.containers[e].element.outerHeight()
                }return this
            },
        _createPlaceholder:function(d){
            var e=d||this,g=e.options;if(!g.placeholder||g.placeholder.constructor==String){
                var f=g.placeholder;g.placeholder={
                    element:function(){
                        var a=b(document.createElement(e.currentItem[0].nodeName)).addClass(f||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        if(!f)a.style.visibility="hidden";return a
                        },
                    update:function(a,c){
                        if(!(f&&!g.forcePlaceholderSize)){
                            c.height()||c.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10));c.width()||c.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))
                            }
                        }
                    }
                }e.placeholder=b(g.placeholder.element.call(e.element,e.currentItem));e.currentItem.after(e.placeholder);
            g.placeholder.update(e,e.placeholder)
            },
        _contactContainers:function(d){
            for(var e=null,g=null,f=this.containers.length-1;f>=0;f--)if(!b.ui.contains(this.currentItem[0],this.containers[f].element[0]))if(this._intersectsWith(this.containers[f].containerCache)){
                if(!(e&&b.ui.contains(this.containers[f].element[0],e.element[0]))){
                    e=this.containers[f];g=f
                    }
                }else if(this.containers[f].containerCache.over){
                this.containers[f]._trigger("out",d,this._uiHash(this));this.containers[f].containerCache.over=0
                }if(e)if(this.containers.length===
                1){
                this.containers[g]._trigger("over",d,this._uiHash(this));this.containers[g].containerCache.over=1
                }else if(this.currentContainer!=this.containers[g]){
                e=1E4;f=null;for(var a=this.positionAbs[this.containers[g].floating?"left":"top"],c=this.items.length-1;c>=0;c--)if(b.ui.contains(this.containers[g].element[0],this.items[c].item[0])){
                    var h=this.items[c][this.containers[g].floating?"left":"top"];if(Math.abs(h-a)<e){
                        e=Math.abs(h-a);f=this.items[c]
                        }
                    }if(f||this.options.dropOnEmpty){
                    this.currentContainer=
                    this.containers[g];f?this._rearrange(d,f,null,true):this._rearrange(d,null,this.containers[g].element,true);this._trigger("change",d,this._uiHash());this.containers[g]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[g]._trigger("over",d,this._uiHash(this));this.containers[g].containerCache.over=1
                    }
                }
            },
        _createHelper:function(d){
            var e=this.options;d=b.isFunction(e.helper)?b(e.helper.apply(this.element[0],[d,this.currentItem])):
            e.helper=="clone"?this.currentItem.clone():this.currentItem;d.parents("body").length||b(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]);if(d[0]==this.currentItem[0])this._storedCSS={
                width:this.currentItem[0].style.width,
                height:this.currentItem[0].style.height,
                position:this.currentItem.css("position"),
                top:this.currentItem.css("top"),
                left:this.currentItem.css("left")
                };if(d[0].style.width==""||e.forceHelperSize)d.width(this.currentItem.width());if(d[0].style.height==
                ""||e.forceHelperSize)d.height(this.currentItem.height());return d
            },
        _adjustOffsetFromHelper:function(d){
            if(typeof d=="string")d=d.split(" ");if(b.isArray(d))d={
                left:+d[0],
                top:+d[1]||0
                };if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top
                },
        _getParentOffset:function(){
            this.offsetParent=
            this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0])){
                d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()
                }if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)d={
                top:0,
                left:0
            };return{
                top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
                left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
                    10)||0)
                }
            },
        _getRelativeOffset:function(){
            if(this.cssPosition=="relative"){
                var d=this.currentItem.position();return{
                    top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
                    left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
                    }
                }else return{
                top:0,
                left:0
            }
            },
        _cacheMargins:function(){
            this.margins={
                left:parseInt(this.currentItem.css("marginLeft"),10)||0,
                top:parseInt(this.currentItem.css("marginTop"),10)||0
                }
            },
        _cacheHelperProportions:function(){
            this.helperProportions=

            {
                width:this.helper.outerWidth(),
                height:this.helper.outerHeight()
                }
            },
        _setContainment:function(){
            var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(d.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b(d.containment=="document"?document:window).height()||
                document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)){
                var e=b(d.containment)[0];d=b(d.containment).offset();var g=b(e).css("overflow")!="hidden";this.containment=[d.left+(parseInt(b(e).css("borderLeftWidth"),10)||0)+(parseInt(b(e).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(b(e).css("borderTopWidth"),10)||0)+(parseInt(b(e).css("paddingTop"),10)||0)-this.margins.top,d.left+(g?Math.max(e.scrollWidth,
                    e.offsetWidth):e.offsetWidth)-(parseInt(b(e).css("borderLeftWidth"),10)||0)-(parseInt(b(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(g?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(b(e).css("borderTopWidth"),10)||0)-(parseInt(b(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
                }
            },
        _convertPositionTo:function(d,e){
            if(!e)e=this.position;d=d=="absolute"?1:-1;var g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=
                document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(g[0].tagName);return{
                top:e.top+this.offset.relative.top*d+this.offset.parent.top*d-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:g.scrollTop())*d),
                left:e.left+this.offset.relative.left*d+this.offset.parent.left*d-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
                    f?0:g.scrollLeft())*d)
                }
            },
        _generatePosition:function(d){
            var e=this.options,g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(g[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();var a=d.pageX,c=d.pageY;if(this.originalPosition){
                if(this.containment){
                    if(d.pageX-
                        this.offset.click.left<this.containment[0])a=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])c=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])a=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])c=this.containment[3]+this.offset.click.top
                        }if(e.grid){
                    c=this.originalPageY+Math.round((c-this.originalPageY)/e.grid[1])*e.grid[1];c=this.containment?!(c-this.offset.click.top<
                        this.containment[1]||c-this.offset.click.top>this.containment[3])?c:!(c-this.offset.click.top<this.containment[1])?c-e.grid[1]:c+e.grid[1]:c;a=this.originalPageX+Math.round((a-this.originalPageX)/e.grid[0])*e.grid[0];a=this.containment?!(a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2])?a:!(a-this.offset.click.left<this.containment[0])?a-e.grid[0]:a+e.grid[0]:a
                    }
                }return{
                top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&
                    this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:g.scrollTop()),
                left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:g.scrollLeft())
                }
            },
        _rearrange:function(d,e,g,f){
            g?g[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?e.item[0]:e.item[0].nextSibling);this.counter=
            this.counter?++this.counter:1;var a=this,c=this.counter;window.setTimeout(function(){
                c==a.counter&&a.refreshPositions(!f)
                },0)
            },
        _clear:function(d,e){
            this.reverting=false;var g=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){
                for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                }else this.currentItem.show();
            this.fromOutside&&!e&&g.push(function(a){
                this._trigger("receive",a,this._uiHash(this.fromOutside))
                });if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e)g.push(function(a){
                this._trigger("update",a,this._uiHash())
                });if(!b.ui.contains(this.element[0],this.currentItem[0])){
                e||g.push(function(a){
                    this._trigger("remove",a,this._uiHash())
                    });for(f=this.containers.length-1;f>=0;f--)if(b.ui.contains(this.containers[f].element[0],
                    this.currentItem[0])&&!e){
                    g.push(function(a){
                        return function(c){
                            a._trigger("receive",c,this._uiHash(this))
                            }
                        }.call(this,this.containers[f]));g.push(function(a){
                        return function(c){
                            a._trigger("update",c,this._uiHash(this))
                            }
                        }.call(this,this.containers[f]))
                    }
                }for(f=this.containers.length-1;f>=0;f--){
                e||g.push(function(a){
                    return function(c){
                        a._trigger("deactivate",c,this._uiHash(this))
                        }
                    }.call(this,this.containers[f]));if(this.containers[f].containerCache.over){
                    g.push(function(a){
                        return function(c){
                            a._trigger("out",
                                c,this._uiHash(this))
                            }
                        }.call(this,this.containers[f]));this.containers[f].containerCache.over=0
                    }
                }this._storedCursor&&b("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){
                if(!e){
                    this._trigger("beforeStop",d,this._uiHash());for(f=0;f<g.length;f++)g[f].call(this,d);this._trigger("stop",d,this._uiHash())
                    }return false
                }e||
            this._trigger("beforeStop",d,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!e){
                for(f=0;f<g.length;f++)g[f].call(this,d);this._trigger("stop",d,this._uiHash())
                }this.fromOutside=false;return true
            },
        _trigger:function(){
            b.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()
            },
        _uiHash:function(d){
            var e=d||this;return{
                helper:e.helper,
                placeholder:e.placeholder||b([]),
                position:e.position,
                originalPosition:e.originalPosition,
                offset:e.positionAbs,
                item:e.currentItem,
                sender:d?d.element:null
                }
            }
        });b.extend(b.ui.sortable,{
        version:"1.8.11"
    })
    })(jQuery);
jQuery.effects||function(b,d){
    function e(l){
        var k;if(l&&l.constructor==Array&&l.length==3)return l;if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(l))return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)];if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(l))return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55];if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(l))return[parseInt(k[1],
            16),parseInt(k[2],16),parseInt(k[3],16)];if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(l))return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(l))return j.transparent;return j[b.trim(l).toLowerCase()]
        }function g(l,k){
        var m;do{
            m=b.curCSS(l,k);if(m!=""&&m!="transparent"||b.nodeName(l,"body"))break;k="backgroundColor"
            }while(l=l.parentNode);return e(m)
        }function f(){
        var l=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
        k={},m,o;if(l&&l.length&&l[0]&&l[l[0]])for(var q=l.length;q--;){
            m=l[q];if(typeof l[m]=="string"){
                o=m.replace(/\-(\w)/g,function(s,r){
                    return r.toUpperCase()
                    });k[o]=l[m]
                }
            }else for(m in l)if(typeof l[m]==="string")k[m]=l[m];return k
        }function a(l){
        var k,m;for(k in l){
            m=l[k];if(m==null||b.isFunction(m)||k in p||/scrollbar/.test(k)||!/color/i.test(k)&&isNaN(parseFloat(m)))delete l[k]
        }return l
        }function c(l,k){
        var m={
            _:0
        },o;for(o in k)if(l[o]!=k[o])m[o]=k[o];return m
        }function h(l,k,m,o){
        if(typeof l=="object"){
            o=
            k;m=null;k=l;l=k.effect
            }if(b.isFunction(k)){
            o=k;m=null;k={}
            }if(typeof k=="number"||b.fx.speeds[k]){
            o=m;m=k;k={}
            }if(b.isFunction(m)){
            o=m;m=null
            }k=k||{};m=m||k.duration;m=b.fx.off?0:typeof m=="number"?m:m in b.fx.speeds?b.fx.speeds[m]:b.fx.speeds._default;o=o||k.complete;return[l,k,m,o]
        }function i(l){
        if(!l||typeof l==="number"||b.fx.speeds[l])return true;if(typeof l==="string"&&!b.effects[l])return true;return false
        }b.effects={};b.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
        "borderTopColor","borderColor","color","outlineColor"],function(l,k){
            b.fx.step[k]=function(m){
                if(!m.colorInit){
                    m.start=g(m.elem,k);m.end=e(m.end);m.colorInit=true
                    }m.elem.style[k]="rgb("+Math.max(Math.min(parseInt(m.pos*(m.end[0]-m.start[0])+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[1]-m.start[1])+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[2]-m.start[2])+m.start[2],10),255),0)+")"
                }
            });var j={
        aqua:[0,255,255],
        azure:[240,255,255],
        beige:[245,245,220],
        black:[0,
        0,0],
        blue:[0,0,255],
        brown:[165,42,42],
        cyan:[0,255,255],
        darkblue:[0,0,139],
        darkcyan:[0,139,139],
        darkgrey:[169,169,169],
        darkgreen:[0,100,0],
        darkkhaki:[189,183,107],
        darkmagenta:[139,0,139],
        darkolivegreen:[85,107,47],
        darkorange:[255,140,0],
        darkorchid:[153,50,204],
        darkred:[139,0,0],
        darksalmon:[233,150,122],
        darkviolet:[148,0,211],
        fuchsia:[255,0,255],
        gold:[255,215,0],
        green:[0,128,0],
        indigo:[75,0,130],
        khaki:[240,230,140],
        lightblue:[173,216,230],
        lightcyan:[224,255,255],
        lightgreen:[144,238,144],
        lightgrey:[211,
        211,211],
        lightpink:[255,182,193],
        lightyellow:[255,255,224],
        lime:[0,255,0],
        magenta:[255,0,255],
        maroon:[128,0,0],
        navy:[0,0,128],
        olive:[128,128,0],
        orange:[255,165,0],
        pink:[255,192,203],
        purple:[128,0,128],
        violet:[128,0,128],
        red:[255,0,0],
        silver:[192,192,192],
        white:[255,255,255],
        yellow:[255,255,0],
        transparent:[255,255,255]
        },n=["add","remove","toggle"],p={
        border:1,
        borderBottom:1,
        borderColor:1,
        borderLeft:1,
        borderRight:1,
        borderTop:1,
        borderWidth:1,
        margin:1,
        padding:1
    };b.effects.animateClass=function(l,k,m,
        o){
        if(b.isFunction(m)){
            o=m;m=null
            }return this.queue("fx",function(){
            var q=b(this),s=q.attr("style")||" ",r=a(f.call(this)),u,v=q.attr("className");b.each(n,function(w,y){
                l[y]&&q[y+"Class"](l[y])
                });u=a(f.call(this));q.attr("className",v);q.animate(c(r,u),k,m,function(){
                b.each(n,function(w,y){
                    l[y]&&q[y+"Class"](l[y])
                    });if(typeof q.attr("style")=="object"){
                    q.attr("style").cssText="";q.attr("style").cssText=s
                    }else q.attr("style",s);o&&o.apply(this,arguments)
                });r=b.queue(this);u=r.splice(r.length-1,1)[0];
            r.splice(1,0,u);b.dequeue(this)
            })
        };b.fn.extend({
        _addClass:b.fn.addClass,
        addClass:function(l,k,m,o){
            return k?b.effects.animateClass.apply(this,[{
                add:l
            },k,m,o]):this._addClass(l)
            },
        _removeClass:b.fn.removeClass,
        removeClass:function(l,k,m,o){
            return k?b.effects.animateClass.apply(this,[{
                remove:l
            },k,m,o]):this._removeClass(l)
            },
        _toggleClass:b.fn.toggleClass,
        toggleClass:function(l,k,m,o,q){
            return typeof k=="boolean"||k===d?m?b.effects.animateClass.apply(this,[k?{
                add:l
            }:{
                remove:l
            },m,o,q]):this._toggleClass(l,
                k):b.effects.animateClass.apply(this,[{
                toggle:l
            },k,m,o])
            },
        switchClass:function(l,k,m,o,q){
            return b.effects.animateClass.apply(this,[{
                add:k,
                remove:l
            },m,o,q])
            }
        });b.extend(b.effects,{
        version:"1.8.11",
        save:function(l,k){
            for(var m=0;m<k.length;m++)k[m]!==null&&l.data("ec.storage."+k[m],l[0].style[k[m]])
                },
        restore:function(l,k){
            for(var m=0;m<k.length;m++)k[m]!==null&&l.css(k[m],l.data("ec.storage."+k[m]))
                },
        setMode:function(l,k){
            if(k=="toggle")k=l.is(":hidden")?"show":"hide";return k
            },
        getBaseline:function(l,
            k){
            var m;switch(l[0]){
                case "top":m=0;break;case "middle":m=0.5;break;case "bottom":m=1;break;default:m=l[0]/k.height
                    }switch(l[1]){
                case "left":l=0;break;case "center":l=0.5;break;case "right":l=1;break;default:l=l[1]/k.width
                    }return{
                x:l,
                y:m
            }
            },
        createWrapper:function(l){
            if(l.parent().is(".ui-effects-wrapper"))return l.parent();var k={
                width:l.outerWidth(true),
                height:l.outerHeight(true),
                "float":l.css("float")
                },m=b("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize:"100%",
                background:"transparent",
                border:"none",
                margin:0,
                padding:0
            });l.wrap(m);m=l.parent();if(l.css("position")=="static"){
                m.css({
                    position:"relative"
                });l.css({
                    position:"relative"
                })
                }else{
                b.extend(k,{
                    position:l.css("position"),
                    zIndex:l.css("z-index")
                    });b.each(["top","left","bottom","right"],function(o,q){
                    k[q]=l.css(q);if(isNaN(parseInt(k[q],10)))k[q]="auto"
                        });l.css({
                    position:"relative",
                    top:0,
                    left:0,
                    right:"auto",
                    bottom:"auto"
                })
                }return m.css(k).show()
            },
        removeWrapper:function(l){
            if(l.parent().is(".ui-effects-wrapper"))return l.parent().replaceWith(l);
            return l
            },
        setTransition:function(l,k,m,o){
            o=o||{};b.each(k,function(q,s){
                unit=l.cssUnit(s);if(unit[0]>0)o[s]=unit[0]*m+unit[1]
                    });return o
            }
        });b.fn.extend({
        effect:function(l){
            var k=h.apply(this,arguments),m={
                options:k[1],
                duration:k[2],
                callback:k[3]
                };k=m.options.mode;var o=b.effects[l];if(b.fx.off||!o)return k?this[k](m.duration,m.callback):this.each(function(){
                m.callback&&m.callback.call(this)
                });return o.call(this,m)
            },
        _show:b.fn.show,
        show:function(l){
            if(i(l))return this._show.apply(this,arguments);
            else{
                var k=h.apply(this,arguments);k[1].mode="show";return this.effect.apply(this,k)
                }
            },
        _hide:b.fn.hide,
        hide:function(l){
            if(i(l))return this._hide.apply(this,arguments);else{
                var k=h.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)
                }
            },
        __toggle:b.fn.toggle,
        toggle:function(l){
            if(i(l)||typeof l==="boolean"||b.isFunction(l))return this.__toggle.apply(this,arguments);else{
                var k=h.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)
                }
            },
        cssUnit:function(l){
            var k=this.css(l),
            m=[];b.each(["em","px","%","pt"],function(o,q){
                if(k.indexOf(q)>0)m=[parseFloat(k),q]
                    });return m
            }
        });b.easing.jswing=b.easing.swing;b.extend(b.easing,{
        def:"easeOutQuad",
        swing:function(l,k,m,o,q){
            return b.easing[b.easing.def](l,k,m,o,q)
            },
        easeInQuad:function(l,k,m,o,q){
            return o*(k/=q)*k+m
            },
        easeOutQuad:function(l,k,m,o,q){
            return-o*(k/=q)*(k-2)+m
            },
        easeInOutQuad:function(l,k,m,o,q){
            if((k/=q/2)<1)return o/2*k*k+m;return-o/2*(--k*(k-2)-1)+m
            },
        easeInCubic:function(l,k,m,o,q){
            return o*(k/=q)*k*k+m
            },
        easeOutCubic:function(l,
            k,m,o,q){
            return o*((k=k/q-1)*k*k+1)+m
            },
        easeInOutCubic:function(l,k,m,o,q){
            if((k/=q/2)<1)return o/2*k*k*k+m;return o/2*((k-=2)*k*k+2)+m
            },
        easeInQuart:function(l,k,m,o,q){
            return o*(k/=q)*k*k*k+m
            },
        easeOutQuart:function(l,k,m,o,q){
            return-o*((k=k/q-1)*k*k*k-1)+m
            },
        easeInOutQuart:function(l,k,m,o,q){
            if((k/=q/2)<1)return o/2*k*k*k*k+m;return-o/2*((k-=2)*k*k*k-2)+m
            },
        easeInQuint:function(l,k,m,o,q){
            return o*(k/=q)*k*k*k*k+m
            },
        easeOutQuint:function(l,k,m,o,q){
            return o*((k=k/q-1)*k*k*k*k+1)+m
            },
        easeInOutQuint:function(l,
            k,m,o,q){
            if((k/=q/2)<1)return o/2*k*k*k*k*k+m;return o/2*((k-=2)*k*k*k*k+2)+m
            },
        easeInSine:function(l,k,m,o,q){
            return-o*Math.cos(k/q*(Math.PI/2))+o+m
            },
        easeOutSine:function(l,k,m,o,q){
            return o*Math.sin(k/q*(Math.PI/2))+m
            },
        easeInOutSine:function(l,k,m,o,q){
            return-o/2*(Math.cos(Math.PI*k/q)-1)+m
            },
        easeInExpo:function(l,k,m,o,q){
            return k==0?m:o*Math.pow(2,10*(k/q-1))+m
            },
        easeOutExpo:function(l,k,m,o,q){
            return k==q?m+o:o*(-Math.pow(2,-10*k/q)+1)+m
            },
        easeInOutExpo:function(l,k,m,o,q){
            if(k==0)return m;if(k==
                q)return m+o;if((k/=q/2)<1)return o/2*Math.pow(2,10*(k-1))+m;return o/2*(-Math.pow(2,-10*--k)+2)+m
            },
        easeInCirc:function(l,k,m,o,q){
            return-o*(Math.sqrt(1-(k/=q)*k)-1)+m
            },
        easeOutCirc:function(l,k,m,o,q){
            return o*Math.sqrt(1-(k=k/q-1)*k)+m
            },
        easeInOutCirc:function(l,k,m,o,q){
            if((k/=q/2)<1)return-o/2*(Math.sqrt(1-k*k)-1)+m;return o/2*(Math.sqrt(1-(k-=2)*k)+1)+m
            },
        easeInElastic:function(l,k,m,o,q){
            l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=q)==1)return m+o;s||(s=q*0.3);if(r<Math.abs(o)){
                r=o;l=s/4
                }else l=
                s/(2*Math.PI)*Math.asin(o/r);return-(r*Math.pow(2,10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s))+m
            },
        easeOutElastic:function(l,k,m,o,q){
            l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=q)==1)return m+o;s||(s=q*0.3);if(r<Math.abs(o)){
                r=o;l=s/4
                }else l=s/(2*Math.PI)*Math.asin(o/r);return r*Math.pow(2,-10*k)*Math.sin((k*q-l)*2*Math.PI/s)+o+m
            },
        easeInOutElastic:function(l,k,m,o,q){
            l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=q/2)==2)return m+o;s||(s=q*0.3*1.5);if(r<Math.abs(o)){
                r=o;l=s/4
                }else l=s/(2*Math.PI)*Math.asin(o/
                r);if(k<1)return-0.5*r*Math.pow(2,10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s)+m;return r*Math.pow(2,-10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s)*0.5+o+m
            },
        easeInBack:function(l,k,m,o,q,s){
            if(s==d)s=1.70158;return o*(k/=q)*k*((s+1)*k-s)+m
            },
        easeOutBack:function(l,k,m,o,q,s){
            if(s==d)s=1.70158;return o*((k=k/q-1)*k*((s+1)*k+s)+1)+m
            },
        easeInOutBack:function(l,k,m,o,q,s){
            if(s==d)s=1.70158;if((k/=q/2)<1)return o/2*k*k*(((s*=1.525)+1)*k-s)+m;return o/2*((k-=2)*k*(((s*=1.525)+1)*k+s)+2)+m
            },
        easeInBounce:function(l,
            k,m,o,q){
            return o-b.easing.easeOutBounce(l,q-k,0,o,q)+m
            },
        easeOutBounce:function(l,k,m,o,q){
            return(k/=q)<1/2.75?o*7.5625*k*k+m:k<2/2.75?o*(7.5625*(k-=1.5/2.75)*k+0.75)+m:k<2.5/2.75?o*(7.5625*(k-=2.25/2.75)*k+0.9375)+m:o*(7.5625*(k-=2.625/2.75)*k+0.984375)+m
            },
        easeInOutBounce:function(l,k,m,o,q){
            if(k<q/2)return b.easing.easeInBounce(l,k*2,0,o,q)*0.5+m;return b.easing.easeOutBounce(l,k*2-q,0,o,q)*0.5+o*0.5+m
            }
        })
    }(jQuery);
(function(b){
    b.effects.blind=function(d){
        return this.queue(function(){
            var e=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"vertical";b.effects.save(e,g);e.show();var c=b.effects.createWrapper(e).css({
                overflow:"hidden"
            }),h=a=="vertical"?"height":"width";a=a=="vertical"?c.height():c.width();f=="show"&&c.css(h,0);var i={};i[h]=f=="show"?a:0;c.animate(i,d.duration,d.options.easing,function(){
                f=="hide"&&e.hide();b.effects.restore(e,
                    g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()
                })
            })
        }
    })(jQuery);
(function(b){
    b.effects.bounce=function(d){
        return this.queue(function(){
            var e=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(e,d.options.mode||"effect"),a=d.options.direction||"up",c=d.options.distance||20,h=d.options.times||5,i=d.duration||250;/show|hide/.test(f)&&g.push("opacity");b.effects.save(e,g);e.show();b.effects.createWrapper(e);var j=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";c=d.options.distance||(j=="top"?e.outerHeight({
                margin:true
            })/3:e.outerWidth({
                margin:true
            })/
            3);if(f=="show")e.css("opacity",0).css(j,a=="pos"?-c:c);if(f=="hide")c/=h*2;f!="hide"&&h--;if(f=="show"){
                var n={
                    opacity:1
                };n[j]=(a=="pos"?"+=":"-=")+c;e.animate(n,i/2,d.options.easing);c/=2;h--
            }for(n=0;n<h;n++){
                var p={},l={};p[j]=(a=="pos"?"-=":"+=")+c;l[j]=(a=="pos"?"+=":"-=")+c;e.animate(p,i/2,d.options.easing).animate(l,i/2,d.options.easing);c=f=="hide"?c*2:c/2
                }if(f=="hide"){
                n={
                    opacity:0
                };n[j]=(a=="pos"?"-=":"+=")+c;e.animate(n,i/2,d.options.easing,function(){
                    e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);
                    d.callback&&d.callback.apply(this,arguments)
                    })
                }else{
                p={};l={};p[j]=(a=="pos"?"-=":"+=")+c;l[j]=(a=="pos"?"+=":"-=")+c;e.animate(p,i/2,d.options.easing).animate(l,i/2,d.options.easing,function(){
                    b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments)
                    })
                }e.queue("fx",function(){
                e.dequeue()
                });e.dequeue()
            })
        }
    })(jQuery);
(function(b){
    b.effects.clip=function(d){
        return this.queue(function(){
            var e=b(this),g=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"vertical";b.effects.save(e,g);e.show();var c=b.effects.createWrapper(e).css({
                overflow:"hidden"
            });c=e[0].tagName=="IMG"?c:e;var h={
                size:a=="vertical"?"height":"width",
                position:a=="vertical"?"top":"left"
                };a=a=="vertical"?c.height():c.width();if(f=="show"){
                c.css(h.size,0);c.css(h.position,
                    a/2)
                }var i={};i[h.size]=f=="show"?a:0;i[h.position]=f=="show"?0:a/2;c.animate(i,{
                queue:false,
                duration:d.duration,
                easing:d.options.easing,
                complete:function(){
                    f=="hide"&&e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()
                    }
                })
            })
        }
    })(jQuery);
(function(b){
    b.effects.drop=function(d){
        return this.queue(function(){
            var e=b(this),g=["position","top","bottom","left","right","opacity"],f=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"left";b.effects.save(e,g);e.show();b.effects.createWrapper(e);var c=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";var h=d.options.distance||(c=="top"?e.outerHeight({
                margin:true
            })/2:e.outerWidth({
                margin:true
            })/2);if(f=="show")e.css("opacity",0).css(c,a=="pos"?-h:h);var i={
                opacity:f==
                "show"?1:0
                };i[c]=(f=="show"?a=="pos"?"+=":"-=":a=="pos"?"-=":"+=")+h;e.animate(i,{
                queue:false,
                duration:d.duration,
                easing:d.options.easing,
                complete:function(){
                    f=="hide"&&e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()
                    }
                })
            })
        }
    })(jQuery);
(function(b){
    b.effects.explode=function(d){
        return this.queue(function(){
            var e=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3,g=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3;d.options.mode=d.options.mode=="toggle"?b(this).is(":visible")?"hide":"show":d.options.mode;var f=b(this).show().css("visibility","hidden"),a=f.offset();a.top-=parseInt(f.css("marginTop"),10)||0;a.left-=parseInt(f.css("marginLeft"),10)||0;for(var c=f.outerWidth(true),h=f.outerHeight(true),i=0;i<e;i++)for(var j=
                0;j<g;j++)f.clone().appendTo("body").wrap("<div></div>").css({
                position:"absolute",
                visibility:"visible",
                left:-j*(c/g),
                top:-i*(h/e)
                }).parent().addClass("ui-effects-explode").css({
                position:"absolute",
                overflow:"hidden",
                width:c/g,
                height:h/e,
                left:a.left+j*(c/g)+(d.options.mode=="show"?(j-Math.floor(g/2))*(c/g):0),
                top:a.top+i*(h/e)+(d.options.mode=="show"?(i-Math.floor(e/2))*(h/e):0),
                opacity:d.options.mode=="show"?0:1
                }).animate({
                left:a.left+j*(c/g)+(d.options.mode=="show"?0:(j-Math.floor(g/2))*(c/g)),
                top:a.top+
                i*(h/e)+(d.options.mode=="show"?0:(i-Math.floor(e/2))*(h/e)),
                opacity:d.options.mode=="show"?1:0
                },d.duration||500);setTimeout(function(){
                d.options.mode=="show"?f.css({
                    visibility:"visible"
                }):f.css({
                    visibility:"visible"
                }).hide();d.callback&&d.callback.apply(f[0]);f.dequeue();b("div.ui-effects-explode").remove()
                },d.duration||500)
            })
        }
    })(jQuery);
(function(b){
    b.effects.fade=function(d){
        return this.queue(function(){
            var e=b(this),g=b.effects.setMode(e,d.options.mode||"hide");e.animate({
                opacity:g
            },{
                queue:false,
                duration:d.duration,
                easing:d.options.easing,
                complete:function(){
                    d.callback&&d.callback.apply(this,arguments);e.dequeue()
                    }
                })
            })
        }
    })(jQuery);
(function(b){
    b.effects.fold=function(d){
        return this.queue(function(){
            var e=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.size||15,c=!!d.options.horizFirst,h=d.duration?d.duration/2:b.fx.speeds._default/2;b.effects.save(e,g);e.show();var i=b.effects.createWrapper(e).css({
                overflow:"hidden"
            }),j=f=="show"!=c,n=j?["width","height"]:["height","width"];j=j?[i.width(),i.height()]:[i.height(),i.width()];var p=/([0-9]+)%/.exec(a);if(p)a=parseInt(p[1],
                10)/100*j[f=="hide"?0:1];if(f=="show")i.css(c?{
                height:0,
                width:a
            }:{
                height:a,
                width:0
            });c={};p={};c[n[0]]=f=="show"?j[0]:a;p[n[1]]=f=="show"?j[1]:0;i.animate(c,h,d.options.easing).animate(p,h,d.options.easing,function(){
                f=="hide"&&e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()
                })
            })
        }
    })(jQuery);
(function(b){
    b.effects.highlight=function(d){
        return this.queue(function(){
            var e=b(this),g=["backgroundImage","backgroundColor","opacity"],f=b.effects.setMode(e,d.options.mode||"show"),a={
                backgroundColor:e.css("backgroundColor")
                };if(f=="hide")a.opacity=0;b.effects.save(e,g);e.show().css({
                backgroundImage:"none",
                backgroundColor:d.options.color||"#ffff99"
                }).animate(a,{
                queue:false,
                duration:d.duration,
                easing:d.options.easing,
                complete:function(){
                    f=="hide"&&e.hide();b.effects.restore(e,g);f=="show"&&!b.support.opacity&&
                    this.style.removeAttribute("filter");d.callback&&d.callback.apply(this,arguments);e.dequeue()
                    }
                })
            })
        }
    })(jQuery);
(function(b){
    b.effects.pulsate=function(d){
        return this.queue(function(){
            var e=b(this),g=b.effects.setMode(e,d.options.mode||"show");times=(d.options.times||5)*2-1;duration=d.duration?d.duration/2:b.fx.speeds._default/2;isVisible=e.is(":visible");animateTo=0;if(!isVisible){
                e.css("opacity",0).show();animateTo=1
                }if(g=="hide"&&isVisible||g=="show"&&!isVisible)times--;for(g=0;g<times;g++){
                e.animate({
                    opacity:animateTo
                },duration,d.options.easing);animateTo=(animateTo+1)%2
                }e.animate({
                opacity:animateTo
            },duration,
            d.options.easing,function(){
                animateTo==0&&e.hide();d.callback&&d.callback.apply(this,arguments)
                });e.queue("fx",function(){
                e.dequeue()
                }).dequeue()
            })
        }
    })(jQuery);
(function(b){
    b.effects.puff=function(d){
        return this.queue(function(){
            var e=b(this),g=b.effects.setMode(e,d.options.mode||"hide"),f=parseInt(d.options.percent,10)||150,a=f/100,c={
                height:e.height(),
                width:e.width()
                };b.extend(d.options,{
                fade:true,
                mode:g,
                percent:g=="hide"?f:100,
                from:g=="hide"?c:{
                    height:c.height*a,
                    width:c.width*a
                    }
                });e.effect("scale",d.options,d.duration,d.callback);e.dequeue()
            })
        };b.effects.scale=function(d){
        return this.queue(function(){
            var e=b(this),g=b.extend(true,{},d.options),f=b.effects.setMode(e,
                d.options.mode||"effect"),a=parseInt(d.options.percent,10)||(parseInt(d.options.percent,10)==0?0:f=="hide"?0:100),c=d.options.direction||"both",h=d.options.origin;if(f!="effect"){
                g.origin=h||["middle","center"];g.restore=true
                }h={
                height:e.height(),
                width:e.width()
                };e.from=d.options.from||(f=="show"?{
                height:0,
                width:0
            }:h);a={
                y:c!="horizontal"?a/100:1,
                x:c!="vertical"?a/100:1
                };e.to={
                height:h.height*a.y,
                width:h.width*a.x
                };if(d.options.fade){
                if(f=="show"){
                    e.from.opacity=0;e.to.opacity=1
                    }if(f=="hide"){
                    e.from.opacity=
                    1;e.to.opacity=0
                    }
                }g.from=e.from;g.to=e.to;g.mode=f;e.effect("size",g,d.duration,d.callback);e.dequeue()
            })
        };b.effects.size=function(d){
        return this.queue(function(){
            var e=b(this),g=["position","top","bottom","left","right","width","height","overflow","opacity"],f=["position","top","bottom","left","right","overflow","opacity"],a=["width","height","overflow"],c=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
            j=b.effects.setMode(e,d.options.mode||"effect"),n=d.options.restore||false,p=d.options.scale||"both",l=d.options.origin,k={
                height:e.height(),
                width:e.width()
                };e.from=d.options.from||k;e.to=d.options.to||k;if(l){
                l=b.effects.getBaseline(l,k);e.from.top=(k.height-e.from.height)*l.y;e.from.left=(k.width-e.from.width)*l.x;e.to.top=(k.height-e.to.height)*l.y;e.to.left=(k.width-e.to.width)*l.x
                }var m={
                from:{
                    y:e.from.height/k.height,
                    x:e.from.width/k.width
                    },
                to:{
                    y:e.to.height/k.height,
                    x:e.to.width/k.width
                    }
                };
            if(p=="box"||p=="both"){
                if(m.from.y!=m.to.y){
                    g=g.concat(h);e.from=b.effects.setTransition(e,h,m.from.y,e.from);e.to=b.effects.setTransition(e,h,m.to.y,e.to)
                    }if(m.from.x!=m.to.x){
                    g=g.concat(i);e.from=b.effects.setTransition(e,i,m.from.x,e.from);e.to=b.effects.setTransition(e,i,m.to.x,e.to)
                    }
                }if(p=="content"||p=="both")if(m.from.y!=m.to.y){
                g=g.concat(c);e.from=b.effects.setTransition(e,c,m.from.y,e.from);e.to=b.effects.setTransition(e,c,m.to.y,e.to)
                }b.effects.save(e,n?g:f);e.show();b.effects.createWrapper(e);
            e.css("overflow","hidden").css(e.from);if(p=="content"||p=="both"){
                h=h.concat(["marginTop","marginBottom"]).concat(c);i=i.concat(["marginLeft","marginRight"]);a=g.concat(h).concat(i);e.find("*[width]").each(function(){
                    child=b(this);n&&b.effects.save(child,a);var o={
                        height:child.height(),
                        width:child.width()
                        };child.from={
                        height:o.height*m.from.y,
                        width:o.width*m.from.x
                        };child.to={
                        height:o.height*m.to.y,
                        width:o.width*m.to.x
                        };if(m.from.y!=m.to.y){
                        child.from=b.effects.setTransition(child,h,m.from.y,child.from);
                        child.to=b.effects.setTransition(child,h,m.to.y,child.to)
                        }if(m.from.x!=m.to.x){
                        child.from=b.effects.setTransition(child,i,m.from.x,child.from);child.to=b.effects.setTransition(child,i,m.to.x,child.to)
                        }child.css(child.from);child.animate(child.to,d.duration,d.options.easing,function(){
                        n&&b.effects.restore(child,a)
                        })
                    })
                }e.animate(e.to,{
                queue:false,
                duration:d.duration,
                easing:d.options.easing,
                complete:function(){
                    e.to.opacity===0&&e.css("opacity",e.from.opacity);j=="hide"&&e.hide();b.effects.restore(e,
                        n?g:f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()
                    }
                })
            })
        }
    })(jQuery);
(function(b){
    b.effects.shake=function(d){
        return this.queue(function(){
            var e=b(this),g=["position","top","bottom","left","right"];b.effects.setMode(e,d.options.mode||"effect");var f=d.options.direction||"left",a=d.options.distance||20,c=d.options.times||3,h=d.duration||d.options.duration||140;b.effects.save(e,g);e.show();b.effects.createWrapper(e);var i=f=="up"||f=="down"?"top":"left",j=f=="up"||f=="left"?"pos":"neg";f={};var n={},p={};f[i]=(j=="pos"?"-=":"+=")+a;n[i]=(j=="pos"?"+=":"-=")+a*2;p[i]=
            (j=="pos"?"-=":"+=")+a*2;e.animate(f,h,d.options.easing);for(a=1;a<c;a++)e.animate(n,h,d.options.easing).animate(p,h,d.options.easing);e.animate(n,h,d.options.easing).animate(f,h/2,d.options.easing,function(){
                b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments)
                });e.queue("fx",function(){
                e.dequeue()
                });e.dequeue()
            })
        }
    })(jQuery);
(function(b){
    b.effects.slide=function(d){
        return this.queue(function(){
            var e=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(e,d.options.mode||"show"),a=d.options.direction||"left";b.effects.save(e,g);e.show();b.effects.createWrapper(e).css({
                overflow:"hidden"
            });var c=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";var h=d.options.distance||(c=="top"?e.outerHeight({
                margin:true
            }):e.outerWidth({
                margin:true
            }));if(f=="show")e.css(c,a=="pos"?isNaN(h)?"-"+h:-h:h);
            var i={};i[c]=(f=="show"?a=="pos"?"+=":"-=":a=="pos"?"-=":"+=")+h;e.animate(i,{
                queue:false,
                duration:d.duration,
                easing:d.options.easing,
                complete:function(){
                    f=="hide"&&e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()
                    }
                })
            })
        }
    })(jQuery);
(function(b){
    b.effects.transfer=function(d){
        return this.queue(function(){
            var e=b(this),g=b(d.options.to),f=g.offset();g={
                top:f.top,
                left:f.left,
                height:g.innerHeight(),
                width:g.innerWidth()
                };f=e.offset();var a=b('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.options.className).css({
                top:f.top,
                left:f.left,
                height:e.innerHeight(),
                width:e.innerWidth(),
                position:"absolute"
            }).animate(g,d.duration,d.options.easing,function(){
                a.remove();d.callback&&d.callback.apply(e[0],arguments);
                e.dequeue()
                })
            })
        }
    })(jQuery);
(function(b){
    b.widget("ui.accordion",{
        options:{
            active:0,
            animated:"slide",
            autoHeight:true,
            clearStyle:false,
            collapsible:false,
            event:"click",
            fillSpace:false,
            header:"> li > :first-child,> :not(li):even",
            icons:{
                header:"ui-icon-triangle-1-e",
                headerSelected:"ui-icon-triangle-1-s"
            },
            navigation:false,
            navigationFilter:function(){
                return this.href.toLowerCase()===location.href.toLowerCase()
                }
            },
        _create:function(){
            var d=this,e=d.options;d.running=0;d.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");d.headers=
            d.element.find(e.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){
                e.disabled||b(this).addClass("ui-state-hover")
                }).bind("mouseleave.accordion",function(){
                e.disabled||b(this).removeClass("ui-state-hover")
                }).bind("focus.accordion",function(){
                e.disabled||b(this).addClass("ui-state-focus")
                }).bind("blur.accordion",function(){
                e.disabled||b(this).removeClass("ui-state-focus")
                });d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if(e.navigation){
                var g=d.element.find("a").filter(e.navigationFilter).eq(0);if(g.length){
                    var f=g.closest(".ui-accordion-header");d.active=f.length?f:g.closest(".ui-accordion-content").prev()
                    }
                }d.active=d._findActive(d.active||e.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");d.active.next().addClass("ui-accordion-content-active");d._createIcons();d.resize();d.element.attr("role","tablist");d.headers.attr("role","tab").bind("keydown.accordion",
                function(a){
                    return d._keydown(a)
                    }).next().attr("role","tabpanel");d.headers.not(d.active||"").attr({
                "aria-expanded":"false",
                "aria-selected":"false",
                tabIndex:-1
            }).next().hide();d.active.length?d.active.attr({
                "aria-expanded":"true",
                "aria-selected":"true",
                tabIndex:0
            }):d.headers.eq(0).attr("tabIndex",0);b.browser.safari||d.headers.find("a").attr("tabIndex",-1);e.event&&d.headers.bind(e.event.split(" ").join(".accordion ")+".accordion",function(a){
                d._clickHandler.call(d,a,this);a.preventDefault()
                })
            },
        _createIcons:function(){
            var d=
            this.options;if(d.icons){
                b("<span></span>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);this.element.addClass("ui-accordion-icons")
                }
            },
        _destroyIcons:function(){
            this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")
            },
        destroy:function(){
            var d=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
            this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var e=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(d.autoHeight||d.fillHeight)e.css("height","");return b.Widget.prototype.destroy.call(this)
            },
        _setOption:function(d,e){
            b.Widget.prototype._setOption.apply(this,arguments);d=="active"&&this.activate(e);if(d=="icons"){
                this._destroyIcons();
                e&&this._createIcons()
                }if(d=="disabled")this.headers.add(this.headers.next())[e?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")
                },
        _keydown:function(d){
            if(!(this.options.disabled||d.altKey||d.ctrlKey)){
                var e=b.ui.keyCode,g=this.headers.length,f=this.headers.index(d.target),a=false;switch(d.keyCode){
                    case e.RIGHT:case e.DOWN:a=this.headers[(f+1)%g];break;case e.LEFT:case e.UP:a=this.headers[(f-1+g)%g];break;case e.SPACE:case e.ENTER:this._clickHandler({
                        target:d.target
                        },d.target);
                    d.preventDefault()
                        }if(a){
                    b(d.target).attr("tabIndex",-1);b(a).attr("tabIndex",0);a.focus();return false
                    }return true
                }
            },
        resize:function(){
            var d=this.options,e;if(d.fillSpace){
                if(b.browser.msie){
                    var g=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")
                    }e=this.element.parent().height();b.browser.msie&&this.element.parent().css("overflow",g);this.headers.each(function(){
                    e-=b(this).outerHeight(true)
                    });this.headers.next().each(function(){
                    b(this).height(Math.max(0,e-b(this).innerHeight()+
                        b(this).height()))
                    }).css("overflow","auto")
                }else if(d.autoHeight){
                e=0;this.headers.next().each(function(){
                    e=Math.max(e,b(this).height("").height())
                    }).height(e)
                }return this
            },
        activate:function(d){
            this.options.active=d;d=this._findActive(d)[0];this._clickHandler({
                target:d
            },d);return this
            },
        _findActive:function(d){
            return d?typeof d==="number"?this.headers.filter(":eq("+d+")"):this.headers.not(this.headers.not(d)):d===false?b([]):this.headers.filter(":eq(0)")
            },
        _clickHandler:function(d,e){
            var g=this.options;
            if(!g.disabled)if(d.target){
                d=b(d.currentTarget||e);e=d[0]===this.active[0];g.active=g.collapsible&&e?false:this.headers.index(d);if(!(this.running||!g.collapsible&&e)){
                    var f=this.active;i=d.next();c=this.active.next();h={
                        options:g,
                        newHeader:e&&g.collapsible?b([]):d,
                        oldHeader:this.active,
                        newContent:e&&g.collapsible?b([]):i,
                        oldContent:c
                    };var a=this.headers.index(this.active[0])>this.headers.index(d[0]);this.active=e?b([]):d;this._toggle(i,c,h,e,a);f.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(g.icons.headerSelected).addClass(g.icons.header);
                    if(!e){
                        d.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(g.icons.header).addClass(g.icons.headerSelected);d.next().addClass("ui-accordion-content-active")
                        }
                    }
                }else if(g.collapsible){
                this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(g.icons.headerSelected).addClass(g.icons.header);this.active.next().addClass("ui-accordion-content-active");var c=this.active.next(),
                h={
                    options:g,
                    newHeader:b([]),
                    oldHeader:g.active,
                    newContent:b([]),
                    oldContent:c
                },i=this.active=b([]);this._toggle(i,c,h)
                }
            },
        _toggle:function(d,e,g,f,a){
            var c=this,h=c.options;c.toShow=d;c.toHide=e;c.data=g;var i=function(){
                if(c)return c._completed.apply(c,arguments)
                    };c._trigger("changestart",null,c.data);c.running=e.size()===0?d.size():e.size();if(h.animated){
                g={};g=h.collapsible&&f?{
                    toShow:b([]),
                    toHide:e,
                    complete:i,
                    down:a,
                    autoHeight:h.autoHeight||h.fillSpace
                    }:{
                    toShow:d,
                    toHide:e,
                    complete:i,
                    down:a,
                    autoHeight:h.autoHeight||
                    h.fillSpace
                    };if(!h.proxied)h.proxied=h.animated;if(!h.proxiedDuration)h.proxiedDuration=h.duration;h.animated=b.isFunction(h.proxied)?h.proxied(g):h.proxied;h.duration=b.isFunction(h.proxiedDuration)?h.proxiedDuration(g):h.proxiedDuration;f=b.ui.accordion.animations;var j=h.duration,n=h.animated;if(n&&!f[n]&&!b.easing[n])n="slide";f[n]||(f[n]=function(p){
                    this.slide(p,{
                        easing:n,
                        duration:j||700
                        })
                    });f[n](g)
                }else{
                if(h.collapsible&&f)d.toggle();else{
                    e.hide();d.show()
                    }i(true)
                }e.prev().attr({
                "aria-expanded":"false",
                "aria-selected":"false",
                tabIndex:-1
            }).blur();d.prev().attr({
                "aria-expanded":"true",
                "aria-selected":"true",
                tabIndex:0
            }).focus()
            },
        _completed:function(d){
            this.running=d?0:--this.running;if(!this.running){
                this.options.clearStyle&&this.toShow.add(this.toHide).css({
                    height:"",
                    overflow:""
                });this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)
                }
            }
        });b.extend(b.ui.accordion,{
        version:"1.8.11",
        animations:{
            slide:function(d,e){
                d=b.extend({
                    easing:"swing",
                    duration:300
                },d,e);if(d.toHide.size())if(d.toShow.size()){
                    var g=d.toShow.css("overflow"),f=0,a={},c={},h;e=d.toShow;h=e[0].style.width;e.width(parseInt(e.parent().width(),10)-parseInt(e.css("paddingLeft"),10)-parseInt(e.css("paddingRight"),10)-(parseInt(e.css("borderLeftWidth"),10)||0)-(parseInt(e.css("borderRightWidth"),10)||0));b.each(["height","paddingTop","paddingBottom"],function(i,j){
                        c[j]="hide";i=(""+b.css(d.toShow[0],j)).match(/^([\d+-.]+)(.*)$/);
                        a[j]={
                            value:i[1],
                            unit:i[2]||"px"
                            }
                        });d.toShow.css({
                        height:0,
                        overflow:"hidden"
                    }).show();d.toHide.filter(":hidden").each(d.complete).end().filter(":visible").animate(c,{
                        step:function(i,j){
                            if(j.prop=="height")f=j.end-j.start===0?0:(j.now-j.start)/(j.end-j.start);d.toShow[0].style[j.prop]=f*a[j.prop].value+a[j.prop].unit
                            },
                        duration:d.duration,
                        easing:d.easing,
                        complete:function(){
                            d.autoHeight||d.toShow.css("height","");d.toShow.css({
                                width:h,
                                overflow:g
                            });d.complete()
                            }
                        })
                    }else d.toHide.animate({
                    height:"hide",
                    paddingTop:"hide",
                    paddingBottom:"hide"
                },d);else d.toShow.animate({
                    height:"show",
                    paddingTop:"show",
                    paddingBottom:"show"
                },d)
                },
            bounceslide:function(d){
                this.slide(d,{
                    easing:d.down?"easeOutBounce":"swing",
                    duration:d.down?1E3:200
                    })
                }
            }
        })
    })(jQuery);
(function(b){
    var d=0;b.widget("ui.autocomplete",{
        options:{
            appendTo:"body",
            autoFocus:false,
            delay:300,
            minLength:1,
            position:{
                my:"left top",
                at:"left bottom",
                collision:"none"
            },
            source:null
        },
        pending:0,
        _create:function(){
            var e=this,g=this.element[0].ownerDocument,f;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({
                role:"textbox",
                "aria-autocomplete":"list",
                "aria-haspopup":"true"
            }).bind("keydown.autocomplete",function(a){
                if(!(e.options.disabled||e.element.attr("readonly"))){
                    f=
                    false;var c=b.ui.keyCode;switch(a.keyCode){
                        case c.PAGE_UP:e._move("previousPage",a);break;case c.PAGE_DOWN:e._move("nextPage",a);break;case c.UP:e._move("previous",a);a.preventDefault();break;case c.DOWN:e._move("next",a);a.preventDefault();break;case c.ENTER:case c.NUMPAD_ENTER:if(e.menu.active){
                            f=true;a.preventDefault()
                            }case c.TAB:if(!e.menu.active)return;e.menu.select(a);break;case c.ESCAPE:e.element.val(e.term);e.close(a);break;default:clearTimeout(e.searching);e.searching=setTimeout(function(){
                            if(e.term!=
                                e.element.val()){
                                e.selectedItem=null;e.search(null,a)
                                }
                            },e.options.delay);break
                        }
                    }
                }).bind("keypress.autocomplete",function(a){
                if(f){
                    f=false;a.preventDefault()
                    }
                }).bind("focus.autocomplete",function(){
                if(!e.options.disabled){
                    e.selectedItem=null;e.previous=e.element.val()
                    }
                }).bind("blur.autocomplete",function(a){
                if(!e.options.disabled){
                    clearTimeout(e.searching);e.closing=setTimeout(function(){
                        e.close(a);e._change(a)
                        },150)
                    }
                });this._initSource();this.response=function(){
                return e._response.apply(e,arguments)
                };
            this.menu=b("<ul></ul>").addClass("ui-autocomplete").appendTo(b(this.options.appendTo||"body",g)[0]).mousedown(function(a){
                var c=e.menu.element[0];b(a.target).closest(".ui-menu-item").length||setTimeout(function(){
                    b(document).one("mousedown",function(h){
                        h.target!==e.element[0]&&h.target!==c&&!b.ui.contains(c,h.target)&&e.close()
                        })
                    },1);setTimeout(function(){
                    clearTimeout(e.closing)
                    },13)
                }).menu({
                focus:function(a,c){
                    c=c.item.data("item.autocomplete");false!==e._trigger("focus",a,{
                        item:c
                    })&&/^key/.test(a.originalEvent.type)&&
                    e.element.val(c.value)
                    },
                selected:function(a,c){
                    var h=c.item.data("item.autocomplete"),i=e.previous;if(e.element[0]!==g.activeElement){
                        e.element.focus();e.previous=i;setTimeout(function(){
                            e.previous=i;e.selectedItem=h
                            },1)
                        }false!==e._trigger("select",a,{
                        item:h
                    })&&e.element.val(h.value);e.term=e.element.val();e.close(a);e.selectedItem=h
                    },
                blur:function(){
                    e.menu.element.is(":visible")&&e.element.val()!==e.term&&e.element.val(e.term)
                    }
                }).zIndex(this.element.zIndex()+1).css({
                top:0,
                left:0
            }).hide().data("menu");
            b.fn.bgiframe&&this.menu.element.bgiframe()
            },
        destroy:function(){
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();b.Widget.prototype.destroy.call(this)
            },
        _setOption:function(e,g){
            b.Widget.prototype._setOption.apply(this,arguments);e==="source"&&this._initSource();if(e==="appendTo")this.menu.element.appendTo(b(g||"body",this.element[0].ownerDocument)[0]);e==="disabled"&&
            g&&this.xhr&&this.xhr.abort()
            },
        _initSource:function(){
            var e=this,g,f;if(b.isArray(this.options.source)){
                g=this.options.source;this.source=function(a,c){
                    c(b.ui.autocomplete.filter(g,a.term))
                    }
                }else if(typeof this.options.source==="string"){
                f=this.options.source;this.source=function(a,c){
                    e.xhr&&e.xhr.abort();e.xhr=b.ajax({
                        url:f,
                        data:a,
                        dataType:"json",
                        autocompleteRequest:++d,
                        success:function(h){
                            this.autocompleteRequest===d&&c(h)
                            },
                        error:function(){
                            this.autocompleteRequest===d&&c([])
                            }
                        })
                    }
                }else this.source=
                this.options.source
                },
        search:function(e,g){
            e=e!=null?e:this.element.val();this.term=this.element.val();if(e.length<this.options.minLength)return this.close(g);clearTimeout(this.closing);if(this._trigger("search",g)!==false)return this._search(e)
                },
        _search:function(e){
            this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({
                term:e
            },this.response)
            },
        _response:function(e){
            if(!this.options.disabled&&e&&e.length){
                e=this._normalize(e);this._suggest(e);this._trigger("open")
                }else this.close();
            this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")
            },
        close:function(e){
            clearTimeout(this.closing);if(this.menu.element.is(":visible")){
                this.menu.element.hide();this.menu.deactivate();this._trigger("close",e)
                }
            },
        _change:function(e){
            this.previous!==this.element.val()&&this._trigger("change",e,{
                item:this.selectedItem
                })
            },
        _normalize:function(e){
            if(e.length&&e[0].label&&e[0].value)return e;return b.map(e,function(g){
                if(typeof g==="string")return{
                    label:g,
                    value:g
                };return b.extend({
                    label:g.label||
                    g.value,
                    value:g.value||g.label
                    },g)
                })
            },
        _suggest:function(e){
            var g=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(g,e);this.menu.deactivate();this.menu.refresh();g.show();this._resizeMenu();g.position(b.extend({
                of:this.element
                },this.options.position));this.options.autoFocus&&this.menu.next(new b.Event("mouseover"))
            },
        _resizeMenu:function(){
            var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth(),this.element.outerWidth()))
            },
        _renderMenu:function(e,g){
            var f=this;
            b.each(g,function(a,c){
                f._renderItem(e,c)
                })
            },
        _renderItem:function(e,g){
            return b("<li></li>").data("item.autocomplete",g).append(b("<a></a>").text(g.label)).appendTo(e)
            },
        _move:function(e,g){
            if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(e)||this.menu.last()&&/^next/.test(e)){
                this.element.val(this.term);this.menu.deactivate()
                }else this.menu[e](g);else this.search(null,g)
                },
        widget:function(){
            return this.menu.element
            }
        });b.extend(b.ui.autocomplete,{
        escapeRegex:function(e){
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
                "\\$&")
            },
        filter:function(e,g){
            var f=new RegExp(b.ui.autocomplete.escapeRegex(g),"i");return b.grep(e,function(a){
                return f.test(a.label||a.value||a)
                })
            }
        })
    })(jQuery);
(function(b){
    b.widget("ui.menu",{
        _create:function(){
            var d=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role:"listbox",
                "aria-activedescendant":"ui-active-menuitem"
            }).click(function(e){
                if(b(e.target).closest(".ui-menu-item a").length){
                    e.preventDefault();d.select(e)
                    }
                });this.refresh()
            },
        refresh:function(){
            var d=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
                -1).mouseenter(function(e){
                d.activate(e,b(this).parent())
                }).mouseleave(function(){
                d.deactivate()
                })
            },
        activate:function(d,e){
            this.deactivate();if(this.hasScroll()){
                var g=e.offset().top-this.element.offset().top,f=this.element.attr("scrollTop"),a=this.element.height();if(g<0)this.element.attr("scrollTop",f+g);else g>=a&&this.element.attr("scrollTop",f+g-a+e.height())
                    }this.active=e.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",d,{
                item:e
            })
            },
        deactivate:function(){
            if(this.active){
                this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null
                }
            },
        next:function(d){
            this.move("next",".ui-menu-item:first",d)
            },
        previous:function(d){
            this.move("prev",".ui-menu-item:last",d)
            },
        first:function(){
            return this.active&&!this.active.prevAll(".ui-menu-item").length
            },
        last:function(){
            return this.active&&!this.active.nextAll(".ui-menu-item").length
            },
        move:function(d,e,g){
            if(this.active){
                d=this.active[d+"All"](".ui-menu-item").eq(0);
                d.length?this.activate(g,d):this.activate(g,this.element.children(e))
                }else this.activate(g,this.element.children(e))
                },
        nextPage:function(d){
            if(this.hasScroll())if(!this.active||this.last())this.activate(d,this.element.children(".ui-menu-item:first"));else{
                var e=this.active.offset().top,g=this.element.height(),f=this.element.children(".ui-menu-item").filter(function(){
                    var a=b(this).offset().top-e-g+b(this).height();return a<10&&a>-10
                    });f.length||(f=this.element.children(".ui-menu-item:last"));this.activate(d,
                    f)
                }else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))
                },
        previousPage:function(d){
            if(this.hasScroll())if(!this.active||this.first())this.activate(d,this.element.children(".ui-menu-item:last"));else{
                var e=this.active.offset().top,g=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){
                    var f=b(this).offset().top-e+g-b(this).height();return f<10&&f>-10
                    });result.length||(result=this.element.children(".ui-menu-item:first"));
                this.activate(d,result)
                }else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))
                },
        hasScroll:function(){
            return this.element.height()<this.element.attr("scrollHeight")
            },
        select:function(d){
            this._trigger("selected",d,{
                item:this.active
                })
            }
        })
    })(jQuery);
(function(b){
    var d,e=function(f){
        b(":ui-button",f.target.form).each(function(){
            var a=b(this).data("button");setTimeout(function(){
                a.refresh()
                },1)
            })
        },g=function(f){
        var a=f.name,c=f.form,h=b([]);if(a)h=c?b(c).find("[name='"+a+"']"):b("[name='"+a+"']",f.ownerDocument).filter(function(){
            return!this.form
            });return h
        };b.widget("ui.button",{
        options:{
            disabled:null,
            text:true,
            label:null,
            icons:{
                primary:null,
                secondary:null
            }
            },
        _create:function(){
            this.element.closest("form").unbind("reset.button").bind("reset.button",
                e);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var f=this,a=this.options,c=this.type==="checkbox"||this.type==="radio",h="ui-state-hover"+(!c?" ui-state-active":"");if(a.label===null)a.label=this.buttonElement.html();if(this.element.is(":disabled"))a.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
                function(){
                    if(!a.disabled){
                        b(this).addClass("ui-state-hover");this===d&&b(this).addClass("ui-state-active")
                        }
                    }).bind("mouseleave.button",function(){
                a.disabled||b(this).removeClass(h)
                }).bind("focus.button",function(){
                b(this).addClass("ui-state-focus")
                }).bind("blur.button",function(){
                b(this).removeClass("ui-state-focus")
                });c&&this.element.bind("change.button",function(){
                f.refresh()
                });if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){
                if(a.disabled)return false;b(this).toggleClass("ui-state-active");
                f.buttonElement.attr("aria-pressed",f.element[0].checked)
                });else if(this.type==="radio")this.buttonElement.bind("click.button",function(){
                if(a.disabled)return false;b(this).addClass("ui-state-active");f.buttonElement.attr("aria-pressed",true);var i=f.element[0];g(i).not(i).map(function(){
                    return b(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed",false)
                });else{
                this.buttonElement.bind("mousedown.button",function(){
                    if(a.disabled)return false;b(this).addClass("ui-state-active");
                    d=this;b(document).one("mouseup",function(){
                        d=null
                        })
                    }).bind("mouseup.button",function(){
                    if(a.disabled)return false;b(this).removeClass("ui-state-active")
                    }).bind("keydown.button",function(i){
                    if(a.disabled)return false;if(i.keyCode==b.ui.keyCode.SPACE||i.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")
                        }).bind("keyup.button",function(){
                    b(this).removeClass("ui-state-active")
                    });this.buttonElement.is("a")&&this.buttonElement.keyup(function(i){
                    i.keyCode===b.ui.keyCode.SPACE&&b(this).click()
                    })
                }this._setOption("disabled",
                a.disabled)
            },
        _determineButtonType:function(){
            this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){
                var f=this.element.parents().filter(":last"),a="label[for="+this.element.attr("id")+"]";this.buttonElement=f.find(a);if(!this.buttonElement.length){
                    f=f.length?f.siblings():this.element.siblings();this.buttonElement=f.filter(a);if(!this.buttonElement.length)this.buttonElement=f.find(a)
                        }this.element.addClass("ui-helper-hidden-accessible");
                (f=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",f)
                }else this.buttonElement=this.element
                },
        widget:function(){
            return this.buttonElement
            },
        destroy:function(){
            this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle||this.buttonElement.removeAttr("title");b.Widget.prototype.destroy.call(this)
            },
        _setOption:function(f,a){
            b.Widget.prototype._setOption.apply(this,arguments);if(f==="disabled")a?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()
            },
        refresh:function(){
            var f=this.element.is(":disabled");f!==this.options.disabled&&this._setOption("disabled",f);if(this.type==="radio")g(this.element[0]).each(function(){
                b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
                    true):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)
                });else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)
                },
        _resetButton:function(){
            if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{
                var f=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                a=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(f.empty()).text(),c=this.options.icons,h=c.primary&&c.secondary,i=[];if(c.primary||c.secondary){
                    if(this.options.text)i.push("ui-button-text-icon"+(h?"s":c.primary?"-primary":"-secondary"));c.primary&&f.prepend("<span class='ui-button-icon-primary ui-icon "+c.primary+"'></span>");c.secondary&&f.append("<span class='ui-button-icon-secondary ui-icon "+c.secondary+"'></span>");if(!this.options.text){
                        i.push(h?"ui-button-icons-only":
                            "ui-button-icon-only");this.hasTitle||f.attr("title",a)
                        }
                    }else i.push("ui-button-text-only");f.addClass(i.join(" "))
                }
            }
        });b.widget("ui.buttonset",{
        options:{
            items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create:function(){
            this.element.addClass("ui-buttonset")
            },
        _init:function(){
            this.refresh()
            },
        _setOption:function(f,a){
            f==="disabled"&&this.buttons.button("option",f,a);b.Widget.prototype._setOption.apply(this,arguments)
            },
        refresh:function(){
            this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){
                return b(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()
            },
        destroy:function(){
            this.element.removeClass("ui-buttonset");this.buttons.map(function(){
                return b(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");b.Widget.prototype.destroy.call(this)
            }
        })
    })(jQuery);
(function(b,d){
    function e(){
        this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
        "ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={
            closeText:"Done",
            prevText:"Prev",
            nextText:"Next",
            currentText:"Today",
            monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],
            monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            dayNamesMin:["Su",
            "Mo","Tu","We","Th","Fr","Sa"],
            weekHeader:"Wk",
            dateFormat:"mm/dd/yy",
            firstDay:0,
            isRTL:false,
            showMonthAfterYear:false,
            yearSuffix:""
        };this._defaults={
            showOn:"focus",
            showAnim:"fadeIn",
            showOptions:{},
            defaultDate:null,
            appendText:"",
            buttonText:"...",
            buttonImage:"",
            buttonImageOnly:false,
            hideIfNoPrevNext:false,
            navigationAsDateFormat:false,
            gotoCurrent:false,
            changeMonth:false,
            changeYear:false,
            yearRange:"c-10:c+10",
            showOtherMonths:false,
            selectOtherMonths:false,
            showWeek:false,
            calculateWeek:this.iso8601Week,
            shortYearCutoff:"+10",
            minDate:null,
            maxDate:null,
            duration:"fast",
            beforeShowDay:null,
            beforeShow:null,
            onSelect:null,
            onChangeMonthYear:null,
            onClose:null,
            numberOfMonths:1,
            showCurrentAtPos:0,
            stepMonths:1,
            stepBigMonths:12,
            altField:"",
            altFormat:"",
            constrainInput:true,
            showButtonPanel:false,
            autoSize:false
        };b.extend(this._defaults,this.regional[""]);this.dpDiv=b('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
        }function g(a,c){
        b.extend(a,c);for(var h in c)if(c[h]==
            null||c[h]==d)a[h]=c[h];return a
        }b.extend(b.ui,{
        datepicker:{
            version:"1.8.11"
        }
        });var f=(new Date).getTime();b.extend(e.prototype,{
        markerClassName:"hasDatepicker",
        log:function(){
            this.debug&&console.log.apply("",arguments)
            },
        _widgetDatepicker:function(){
            return this.dpDiv
            },
        setDefaults:function(a){
            g(this._defaults,a||{});return this
            },
        _attachDatepicker:function(a,c){
            var h=null;for(var i in this._defaults){
                var j=a.getAttribute("date:"+i);if(j){
                    h=h||{};try{
                        h[i]=eval(j)
                        }catch(n){
                        h[i]=j
                        }
                    }
                }i=a.nodeName.toLowerCase();
            j=i=="div"||i=="span";if(!a.id){
                this.uuid+=1;a.id="dp"+this.uuid
                }var p=this._newInst(b(a),j);p.settings=b.extend({},c||{},h||{});if(i=="input")this._connectDatepicker(a,p);else j&&this._inlineDatepicker(a,p)
                },
        _newInst:function(a,c){
            return{
                id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),
                input:a,
                selectedDay:0,
                selectedMonth:0,
                selectedYear:0,
                drawMonth:0,
                drawYear:0,
                inline:c,
                dpDiv:!c?this.dpDiv:b('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
                }
            },
        _connectDatepicker:function(a,c){
            var h=b(a);c.append=b([]);c.trigger=b([]);if(!h.hasClass(this.markerClassName)){
                this._attachments(h,c);h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(i,j,n){
                    c.settings[j]=n
                    }).bind("getData.datepicker",function(i,j){
                    return this._get(c,j)
                    });this._autoSize(c);b.data(a,"datepicker",c)
                }
            },
        _attachments:function(a,c){
            var h=this._get(c,"appendText"),i=this._get(c,"isRTL");c.append&&
            c.append.remove();if(h){
                c.append=b('<span class="'+this._appendClass+'">'+h+"</span>");a[i?"before":"after"](c.append)
                }a.unbind("focus",this._showDatepicker);c.trigger&&c.trigger.remove();h=this._get(c,"showOn");if(h=="focus"||h=="both")a.focus(this._showDatepicker);if(h=="button"||h=="both"){
                h=this._get(c,"buttonText");var j=this._get(c,"buttonImage");c.trigger=b(this._get(c,"buttonImageOnly")?b("<img/>").addClass(this._triggerClass).attr({
                    src:j,
                    alt:h,
                    title:h
                }):b('<button type="button"></button>').addClass(this._triggerClass).html(j==
                    ""?h:b("<img/>").attr({
                        src:j,
                        alt:h,
                        title:h
                    })));a[i?"before":"after"](c.trigger);c.trigger.click(function(){
                    b.datepicker._datepickerShowing&&b.datepicker._lastInput==a[0]?b.datepicker._hideDatepicker():b.datepicker._showDatepicker(a[0]);return false
                    })
                }
            },
        _autoSize:function(a){
            if(this._get(a,"autoSize")&&!a.inline){
                var c=new Date(2009,11,20),h=this._get(a,"dateFormat");if(h.match(/[DM]/)){
                    var i=function(j){
                        for(var n=0,p=0,l=0;l<j.length;l++)if(j[l].length>n){
                            n=j[l].length;p=l
                            }return p
                        };c.setMonth(i(this._get(a,
                        h.match(/MM/)?"monthNames":"monthNamesShort")));c.setDate(i(this._get(a,h.match(/DD/)?"dayNames":"dayNamesShort"))+20-c.getDay())
                    }a.input.attr("size",this._formatDate(a,c).length)
                }
            },
        _inlineDatepicker:function(a,c){
            var h=b(a);if(!h.hasClass(this.markerClassName)){
                h.addClass(this.markerClassName).append(c.dpDiv).bind("setData.datepicker",function(i,j,n){
                    c.settings[j]=n
                    }).bind("getData.datepicker",function(i,j){
                    return this._get(c,j)
                    });b.data(a,"datepicker",c);this._setDate(c,this._getDefaultDate(c),
                    true);this._updateDatepicker(c);this._updateAlternate(c);c.dpDiv.show()
                }
            },
        _dialogDatepicker:function(a,c,h,i,j){
            a=this._dialogInst;if(!a){
                this.uuid+=1;this._dialogInput=b('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);b("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};b.data(this._dialogInput[0],"datepicker",a)
                }g(a.settings,i||{});
            c=c&&c.constructor==Date?this._formatDate(a,c):c;this._dialogInput.val(c);this._pos=j?j.length?j:[j.pageX,j.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=h;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);b.blockUI&&b.blockUI(this.dpDiv);b.data(this._dialogInput[0],"datepicker",a);return this
            },
        _destroyDatepicker:function(a){
            var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){
                var i=a.nodeName.toLowerCase();b.removeData(a,"datepicker");if(i=="input"){
                    h.append.remove();h.trigger.remove();c.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
                        this._doKeyUp)
                    }else if(i=="div"||i=="span")c.removeClass(this.markerClassName).empty()
                    }
            },
        _enableDatepicker:function(a){
            var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){
                var i=a.nodeName.toLowerCase();if(i=="input"){
                    a.disabled=false;h.trigger.filter("button").each(function(){
                        this.disabled=false
                        }).end().filter("img").css({
                        opacity:"1.0",
                        cursor:""
                    })
                    }else if(i=="div"||i=="span")c.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=b.map(this._disabledInputs,
                    function(j){
                        return j==a?null:j
                        })
                }
            },
        _disableDatepicker:function(a){
            var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){
                var i=a.nodeName.toLowerCase();if(i=="input"){
                    a.disabled=true;h.trigger.filter("button").each(function(){
                        this.disabled=true
                        }).end().filter("img").css({
                        opacity:"0.5",
                        cursor:"default"
                    })
                    }else if(i=="div"||i=="span")c.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=b.map(this._disabledInputs,function(j){
                    return j==a?null:
                    j
                    });this._disabledInputs[this._disabledInputs.length]=a
                }
            },
        _isDisabledDatepicker:function(a){
            if(!a)return false;for(var c=0;c<this._disabledInputs.length;c++)if(this._disabledInputs[c]==a)return true;return false
            },
        _getInst:function(a){
            try{
                return b.data(a,"datepicker")
                }catch(c){
                throw"Missing instance data for this datepicker";
            }
            },
        _optionDatepicker:function(a,c,h){
            var i=this._getInst(a);if(arguments.length==2&&typeof c=="string")return c=="defaults"?b.extend({},b.datepicker._defaults):i?c=="all"?b.extend({},
                i.settings):this._get(i,c):null;var j=c||{};if(typeof c=="string"){
                j={};j[c]=h
                }if(i){
                this._curInst==i&&this._hideDatepicker();var n=this._getDateDatepicker(a,true),p=this._getMinMaxDate(i,"min"),l=this._getMinMaxDate(i,"max");g(i.settings,j);if(p!==null&&j.dateFormat!==d&&j.minDate===d)i.settings.minDate=this._formatDate(i,p);if(l!==null&&j.dateFormat!==d&&j.maxDate===d)i.settings.maxDate=this._formatDate(i,l);this._attachments(b(a),i);this._autoSize(i);this._setDateDatepicker(a,n);this._updateDatepicker(i)
                }
            },
        _changeDatepicker:function(a,c,h){
            this._optionDatepicker(a,c,h)
            },
        _refreshDatepicker:function(a){
            (a=this._getInst(a))&&this._updateDatepicker(a)
            },
        _setDateDatepicker:function(a,c){
            if(a=this._getInst(a)){
                this._setDate(a,c);this._updateDatepicker(a);this._updateAlternate(a)
                }
            },
        _getDateDatepicker:function(a,c){
            (a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,c);return a?this._getDate(a):null
            },
        _doKeyDown:function(a){
            var c=b.datepicker._getInst(a.target),h=true,i=c.dpDiv.is(".ui-datepicker-rtl");
            c._keyEvent=true;if(b.datepicker._datepickerShowing)switch(a.keyCode){
                case 9:b.datepicker._hideDatepicker();h=false;break;case 13:h=b("td."+b.datepicker._dayOverClass+":not(."+b.datepicker._currentClass+")",c.dpDiv);h[0]?b.datepicker._selectDay(a.target,c.selectedMonth,c.selectedYear,h[0]):b.datepicker._hideDatepicker();return false;case 27:b.datepicker._hideDatepicker();break;case 33:b.datepicker._adjustDate(a.target,a.ctrlKey?-b.datepicker._get(c,"stepBigMonths"):-b.datepicker._get(c,"stepMonths"),
                    "M");break;case 34:b.datepicker._adjustDate(a.target,a.ctrlKey?+b.datepicker._get(c,"stepBigMonths"):+b.datepicker._get(c,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)b.datepicker._clearDate(a.target);h=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)b.datepicker._gotoToday(a.target);h=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,i?+1:-1,"D");h=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)b.datepicker._adjustDate(a.target,a.ctrlKey?
                    -b.datepicker._get(c,"stepBigMonths"):-b.datepicker._get(c,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,-7,"D");h=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,i?-1:+1,"D");h=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)b.datepicker._adjustDate(a.target,a.ctrlKey?+b.datepicker._get(c,"stepBigMonths"):+b.datepicker._get(c,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,
                    +7,"D");h=a.ctrlKey||a.metaKey;break;default:h=false
                    }else if(a.keyCode==36&&a.ctrlKey)b.datepicker._showDatepicker(this);else h=false;if(h){
                a.preventDefault();a.stopPropagation()
                }
            },
        _doKeyPress:function(a){
            var c=b.datepicker._getInst(a.target);if(b.datepicker._get(c,"constrainInput")){
                c=b.datepicker._possibleChars(b.datepicker._get(c,"dateFormat"));var h=String.fromCharCode(a.charCode==d?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||h<" "||!c||c.indexOf(h)>-1
                }
            },
        _doKeyUp:function(a){
            a=b.datepicker._getInst(a.target);
            if(a.input.val()!=a.lastVal)try{
                if(b.datepicker.parseDate(b.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,b.datepicker._getFormatConfig(a))){
                    b.datepicker._setDateFromField(a);b.datepicker._updateAlternate(a);b.datepicker._updateDatepicker(a)
                    }
                }catch(c){
                b.datepicker.log(c)
                }return true
            },
        _showDatepicker:function(a){
            a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=b("input",a.parentNode)[0];if(!(b.datepicker._isDisabledDatepicker(a)||b.datepicker._lastInput==a)){
                var c=b.datepicker._getInst(a);
                b.datepicker._curInst&&b.datepicker._curInst!=c&&b.datepicker._curInst.dpDiv.stop(true,true);var h=b.datepicker._get(c,"beforeShow");g(c.settings,h?h.apply(a,[a,c]):{});c.lastVal=null;b.datepicker._lastInput=a;b.datepicker._setDateFromField(c);if(b.datepicker._inDialog)a.value="";if(!b.datepicker._pos){
                    b.datepicker._pos=b.datepicker._findPos(a);b.datepicker._pos[1]+=a.offsetHeight
                    }var i=false;b(a).parents().each(function(){
                    i|=b(this).css("position")=="fixed";return!i
                    });if(i&&b.browser.opera){
                    b.datepicker._pos[0]-=
                    document.documentElement.scrollLeft;b.datepicker._pos[1]-=document.documentElement.scrollTop
                    }h={
                    left:b.datepicker._pos[0],
                    top:b.datepicker._pos[1]
                    };b.datepicker._pos=null;c.dpDiv.empty();c.dpDiv.css({
                    position:"absolute",
                    display:"block",
                    top:"-1000px"
                });b.datepicker._updateDatepicker(c);h=b.datepicker._checkOffset(c,h,i);c.dpDiv.css({
                    position:b.datepicker._inDialog&&b.blockUI?"static":i?"fixed":"absolute",
                    display:"none",
                    left:h.left+"px",
                    top:h.top+"px"
                    });if(!c.inline){
                    h=b.datepicker._get(c,"showAnim");
                    var j=b.datepicker._get(c,"duration"),n=function(){
                        b.datepicker._datepickerShowing=true;var p=c.dpDiv.find("iframe.ui-datepicker-cover");if(p.length){
                            var l=b.datepicker._getBorders(c.dpDiv);p.css({
                                left:-l[0],
                                top:-l[1],
                                width:c.dpDiv.outerWidth(),
                                height:c.dpDiv.outerHeight()
                                })
                            }
                        };c.dpDiv.zIndex(b(a).zIndex()+1);b.effects&&b.effects[h]?c.dpDiv.show(h,b.datepicker._get(c,"showOptions"),j,n):c.dpDiv[h||"show"](h?j:null,n);if(!h||!j)n();c.input.is(":visible")&&!c.input.is(":disabled")&&c.input.focus();b.datepicker._curInst=
                    c
                    }
                }
            },
        _updateDatepicker:function(a){
            var c=this,h=b.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var i=a.dpDiv.find("iframe.ui-datepicker-cover");i.length&&i.css({
                left:-h[0],
                top:-h[1],
                width:a.dpDiv.outerWidth(),
                height:a.dpDiv.outerHeight()
                });a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){
                b(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&b(this).removeClass("ui-datepicker-prev-hover");
                this.className.indexOf("ui-datepicker-next")!=-1&&b(this).removeClass("ui-datepicker-next-hover")
                }).bind("mouseover",function(){
                if(!c._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){
                    b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");b(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&b(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&b(this).addClass("ui-datepicker-next-hover")
                    }
                }).end().find("."+
                this._dayOverClass+" a").trigger("mouseover").end();h=this._getNumberOfMonths(a);i=h[1];i>1?a.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",17*i+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(h[0]!=1||h[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==b.datepicker._curInst&&b.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&
            a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){
                var j=a.yearshtml;setTimeout(function(){
                    j===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);j=a.yearshtml=null
                    },0)
                }
            },
        _getBorders:function(a){
            var c=function(h){
                return{
                    thin:1,
                    medium:2,
                    thick:3
                }[h]||h
                };return[parseFloat(c(a.css("border-left-width"))),parseFloat(c(a.css("border-top-width")))]
            },
        _checkOffset:function(a,c,h){
            var i=a.dpDiv.outerWidth(),j=a.dpDiv.outerHeight(),n=a.input?a.input.outerWidth():
            0,p=a.input?a.input.outerHeight():0,l=document.documentElement.clientWidth+b(document).scrollLeft(),k=document.documentElement.clientHeight+b(document).scrollTop();c.left-=this._get(a,"isRTL")?i-n:0;c.left-=h&&c.left==a.input.offset().left?b(document).scrollLeft():0;c.top-=h&&c.top==a.input.offset().top+p?b(document).scrollTop():0;c.left-=Math.min(c.left,c.left+i>l&&l>i?Math.abs(c.left+i-l):0);c.top-=Math.min(c.top,c.top+j>k&&k>j?Math.abs(j+p):0);return c
            },
        _findPos:function(a){
            for(var c=this._get(this._getInst(a),
                "isRTL");a&&(a.type=="hidden"||a.nodeType!=1||b.expr.filters.hidden(a));)a=a[c?"previousSibling":"nextSibling"];a=b(a).offset();return[a.left,a.top]
            },
        _hideDatepicker:function(a){
            var c=this._curInst;if(!(!c||a&&c!=b.data(a,"datepicker")))if(this._datepickerShowing){
                a=this._get(c,"showAnim");var h=this._get(c,"duration"),i=function(){
                    b.datepicker._tidyDialog(c);this._curInst=null
                    };b.effects&&b.effects[a]?c.dpDiv.hide(a,b.datepicker._get(c,"showOptions"),h,i):c.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?
                "fadeOut":"hide"](a?h:null,i);a||i();if(a=this._get(c,"onClose"))a.apply(c.input?c.input[0]:null,[c.input?c.input.val():"",c]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){
                    this._dialogInput.css({
                        position:"absolute",
                        left:"0",
                        top:"-100px"
                    });if(b.blockUI){
                        b.unblockUI();b("body").append(this.dpDiv)
                        }
                    }this._inDialog=false
                }
            },
        _tidyDialog:function(a){
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
        _checkExternalClick:function(a){
            if(b.datepicker._curInst){
                a=
                b(a.target);a[0].id!=b.datepicker._mainDivId&&a.parents("#"+b.datepicker._mainDivId).length==0&&!a.hasClass(b.datepicker.markerClassName)&&!a.hasClass(b.datepicker._triggerClass)&&b.datepicker._datepickerShowing&&!(b.datepicker._inDialog&&b.blockUI)&&b.datepicker._hideDatepicker()
                }
            },
        _adjustDate:function(a,c,h){
            a=b(a);var i=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){
                this._adjustInstDate(i,c+(h=="M"?this._get(i,"showCurrentAtPos"):0),h);this._updateDatepicker(i)
                }
            },
        _gotoToday:function(a){
            a=
            b(a);var c=this._getInst(a[0]);if(this._get(c,"gotoCurrent")&&c.currentDay){
                c.selectedDay=c.currentDay;c.drawMonth=c.selectedMonth=c.currentMonth;c.drawYear=c.selectedYear=c.currentYear
                }else{
                var h=new Date;c.selectedDay=h.getDate();c.drawMonth=c.selectedMonth=h.getMonth();c.drawYear=c.selectedYear=h.getFullYear()
                }this._notifyChange(c);this._adjustDate(a)
            },
        _selectMonthYear:function(a,c,h){
            a=b(a);var i=this._getInst(a[0]);i._selectingMonthYear=false;i["selected"+(h=="M"?"Month":"Year")]=i["draw"+(h==
                "M"?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10);this._notifyChange(i);this._adjustDate(a)
            },
        _clickMonthYear:function(a){
            var c=this._getInst(b(a)[0]);c.input&&c._selectingMonthYear&&setTimeout(function(){
                c.input.focus()
                },0);c._selectingMonthYear=!c._selectingMonthYear
            },
        _selectDay:function(a,c,h,i){
            var j=b(a);if(!(b(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(j[0]))){
                j=this._getInst(j[0]);j.selectedDay=j.currentDay=b("a",i).html();j.selectedMonth=j.currentMonth=
                c;j.selectedYear=j.currentYear=h;this._selectDate(a,this._formatDate(j,j.currentDay,j.currentMonth,j.currentYear))
                }
            },
        _clearDate:function(a){
            a=b(a);this._getInst(a[0]);this._selectDate(a,"")
            },
        _selectDate:function(a,c){
            a=this._getInst(b(a)[0]);c=c!=null?c:this._formatDate(a);a.input&&a.input.val(c);this._updateAlternate(a);var h=this._get(a,"onSelect");if(h)h.apply(a.input?a.input[0]:null,[c,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{
                this._hideDatepicker();
                this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null
                }
            },
        _updateAlternate:function(a){
            var c=this._get(a,"altField");if(c){
                var h=this._get(a,"altFormat")||this._get(a,"dateFormat"),i=this._getDate(a),j=this.formatDate(h,i,this._getFormatConfig(a));b(c).each(function(){
                    b(this).val(j)
                    })
                }
            },
        noWeekends:function(a){
            a=a.getDay();return[a>0&&a<6,""]
            },
        iso8601Week:function(a){
            a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var c=a.getTime();a.setMonth(0);
            a.setDate(1);return Math.floor(Math.round((c-a)/864E5)/7)+1
            },
        parseDate:function(a,c,h){
            if(a==null||c==null)throw"Invalid arguments";c=typeof c=="object"?c.toString():c+"";if(c=="")return null;var i=(h?h.shortYearCutoff:null)||this._defaults.shortYearCutoff;i=typeof i!="string"?i:(new Date).getFullYear()%100+parseInt(i,10);for(var j=(h?h.dayNamesShort:null)||this._defaults.dayNamesShort,n=(h?h.dayNames:null)||this._defaults.dayNames,p=(h?h.monthNamesShort:null)||this._defaults.monthNamesShort,l=(h?
                h.monthNames:null)||this._defaults.monthNames,k=h=-1,m=-1,o=-1,q=false,s=function(x){
                (x=y+1<a.length&&a.charAt(y+1)==x)&&y++;return x
                },r=function(x){
                var C=s(x);x=new RegExp("^\\d{1,"+(x=="@"?14:x=="!"?20:x=="y"&&C?4:x=="o"?3:2)+"}");x=c.substring(w).match(x);if(!x)throw"Missing number at position "+w;w+=x[0].length;return parseInt(x[0],10)
                },u=function(x,C,J){
                x=s(x)?J:C;for(C=0;C<x.length;C++)if(c.substr(w,x[C].length).toLowerCase()==x[C].toLowerCase()){
                    w+=x[C].length;return C+1
                    }throw"Unknown name at position "+
                w;
            },v=function(){
                if(c.charAt(w)!=a.charAt(y))throw"Unexpected literal at position "+w;w++
            },w=0,y=0;y<a.length;y++)if(q)if(a.charAt(y)=="'"&&!s("'"))q=false;else v();else switch(a.charAt(y)){
                case "d":m=r("d");break;case "D":u("D",j,n);break;case "o":o=r("o");break;case "m":k=r("m");break;case "M":k=u("M",p,l);break;case "y":h=r("y");break;case "@":var B=new Date(r("@"));h=B.getFullYear();k=B.getMonth()+1;m=B.getDate();break;case "!":B=new Date((r("!")-this._ticksTo1970)/1E4);h=B.getFullYear();k=B.getMonth()+
                    1;m=B.getDate();break;case "'":if(s("'"))v();else q=true;break;default:v()
                    }if(h==-1)h=(new Date).getFullYear();else if(h<100)h+=(new Date).getFullYear()-(new Date).getFullYear()%100+(h<=i?0:-100);if(o>-1){
                k=1;m=o;do{
                    i=this._getDaysInMonth(h,k-1);if(m<=i)break;k++;m-=i
                    }while(1)
            }B=this._daylightSavingAdjust(new Date(h,k-1,m));if(B.getFullYear()!=h||B.getMonth()+1!=k||B.getDate()!=m)throw"Invalid date";return B
            },
        ATOM:"yy-mm-dd",
        COOKIE:"D, dd M yy",
        ISO_8601:"yy-mm-dd",
        RFC_822:"D, d M y",
        RFC_850:"DD, dd-M-y",
        RFC_1036:"D, d M y",
        RFC_1123:"D, d M yy",
        RFC_2822:"D, d M yy",
        RSS:"D, d M y",
        TICKS:"!",
        TIMESTAMP:"@",
        W3C:"yy-mm-dd",
        _ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,
        formatDate:function(a,c,h){
            if(!c)return"";var i=(h?h.dayNamesShort:null)||this._defaults.dayNamesShort,j=(h?h.dayNames:null)||this._defaults.dayNames,n=(h?h.monthNamesShort:null)||this._defaults.monthNamesShort;h=(h?h.monthNames:null)||this._defaults.monthNames;var p=function(s){
                (s=q+1<a.length&&
                    a.charAt(q+1)==s)&&q++;return s
                },l=function(s,r,u){
                r=""+r;if(p(s))for(;r.length<u;)r="0"+r;return r
                },k=function(s,r,u,v){
                return p(s)?v[r]:u[r]
                },m="",o=false;if(c)for(var q=0;q<a.length;q++)if(o)if(a.charAt(q)=="'"&&!p("'"))o=false;else m+=a.charAt(q);else switch(a.charAt(q)){
                case "d":m+=l("d",c.getDate(),2);break;case "D":m+=k("D",c.getDay(),i,j);break;case "o":m+=l("o",(c.getTime()-(new Date(c.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":m+=l("m",c.getMonth()+1,2);break;case "M":m+=k("M",
                    c.getMonth(),n,h);break;case "y":m+=p("y")?c.getFullYear():(c.getYear()%100<10?"0":"")+c.getYear()%100;break;case "@":m+=c.getTime();break;case "!":m+=c.getTime()*1E4+this._ticksTo1970;break;case "'":if(p("'"))m+="'";else o=true;break;default:m+=a.charAt(q)
                    }return m
            },
        _possibleChars:function(a){
            for(var c="",h=false,i=function(n){
                (n=j+1<a.length&&a.charAt(j+1)==n)&&j++;return n
                },j=0;j<a.length;j++)if(h)if(a.charAt(j)=="'"&&!i("'"))h=false;else c+=a.charAt(j);else switch(a.charAt(j)){
                case "d":case "m":case "y":case "@":c+=
                    "0123456789";break;case "D":case "M":return null;case "'":if(i("'"))c+="'";else h=true;break;default:c+=a.charAt(j)
                    }return c
            },
        _get:function(a,c){
            return a.settings[c]!==d?a.settings[c]:this._defaults[c]
            },
        _setDateFromField:function(a,c){
            if(a.input.val()!=a.lastVal){
                var h=this._get(a,"dateFormat"),i=a.lastVal=a.input?a.input.val():null,j,n;j=n=this._getDefaultDate(a);var p=this._getFormatConfig(a);try{
                    j=this.parseDate(h,i,p)||n
                    }catch(l){
                    this.log(l);i=c?"":i
                    }a.selectedDay=j.getDate();a.drawMonth=a.selectedMonth=
                j.getMonth();a.drawYear=a.selectedYear=j.getFullYear();a.currentDay=i?j.getDate():0;a.currentMonth=i?j.getMonth():0;a.currentYear=i?j.getFullYear():0;this._adjustInstDate(a)
                }
            },
        _getDefaultDate:function(a){
            return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
            },
        _determineDate:function(a,c,h){
            var i=function(n){
                var p=new Date;p.setDate(p.getDate()+n);return p
                },j=function(n){
                try{
                    return b.datepicker.parseDate(b.datepicker._get(a,"dateFormat"),n,b.datepicker._getFormatConfig(a))
                    }catch(p){}var l=
                (n.toLowerCase().match(/^c/)?b.datepicker._getDate(a):null)||new Date,k=l.getFullYear(),m=l.getMonth();l=l.getDate();for(var o=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,q=o.exec(n);q;){
                    switch(q[2]||"d"){
                        case "d":case "D":l+=parseInt(q[1],10);break;case "w":case "W":l+=parseInt(q[1],10)*7;break;case "m":case "M":m+=parseInt(q[1],10);l=Math.min(l,b.datepicker._getDaysInMonth(k,m));break;case "y":case "Y":k+=parseInt(q[1],10);l=Math.min(l,b.datepicker._getDaysInMonth(k,m));break
                            }q=o.exec(n)
                    }return new Date(k,
                    m,l)
                };if(c=(c=c==null||c===""?h:typeof c=="string"?j(c):typeof c=="number"?isNaN(c)?h:i(c):new Date(c.getTime()))&&c.toString()=="Invalid Date"?h:c){
                c.setHours(0);c.setMinutes(0);c.setSeconds(0);c.setMilliseconds(0)
                }return this._daylightSavingAdjust(c)
            },
        _daylightSavingAdjust:function(a){
            if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a
            },
        _setDate:function(a,c,h){
            var i=!c,j=a.selectedMonth,n=a.selectedYear;c=this._restrictMinMax(a,this._determineDate(a,c,new Date));a.selectedDay=
            a.currentDay=c.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=c.getMonth();a.drawYear=a.selectedYear=a.currentYear=c.getFullYear();if((j!=a.selectedMonth||n!=a.selectedYear)&&!h)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(i?"":this._formatDate(a))
                },
        _getDate:function(a){
            return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))
            },
        _generateHTML:function(a){
            var c=new Date;c=this._daylightSavingAdjust(new Date(c.getFullYear(),
                c.getMonth(),c.getDate()));var h=this._get(a,"isRTL"),i=this._get(a,"showButtonPanel"),j=this._get(a,"hideIfNoPrevNext"),n=this._get(a,"navigationAsDateFormat"),p=this._getNumberOfMonths(a),l=this._get(a,"showCurrentAtPos"),k=this._get(a,"stepMonths"),m=p[0]!=1||p[1]!=1,o=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),q=this._getMinMaxDate(a,"min"),s=this._getMinMaxDate(a,"max");l=a.drawMonth-l;var r=a.drawYear;if(l<0){
                l+=12;r--
            }if(s){
                var u=
                this._daylightSavingAdjust(new Date(s.getFullYear(),s.getMonth()-p[0]*p[1]+1,s.getDate()));for(u=q&&u<q?q:u;this._daylightSavingAdjust(new Date(r,l,1))>u;){
                    l--;if(l<0){
                        l=11;r--
                    }
                    }
                }a.drawMonth=l;a.drawYear=r;u=this._get(a,"prevText");u=!n?u:this.formatDate(u,this._daylightSavingAdjust(new Date(r,l-k,1)),this._getFormatConfig(a));u=this._canAdjustMonth(a,-1,r,l)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+f+".datepicker._adjustDate('#"+a.id+"', -"+k+", 'M');\" title=\""+u+'"><span class="ui-icon ui-icon-circle-triangle-'+
            (h?"e":"w")+'">'+u+"</span></a>":j?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+u+'"><span class="ui-icon ui-icon-circle-triangle-'+(h?"e":"w")+'">'+u+"</span></a>";var v=this._get(a,"nextText");v=!n?v:this.formatDate(v,this._daylightSavingAdjust(new Date(r,l+k,1)),this._getFormatConfig(a));j=this._canAdjustMonth(a,+1,r,l)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+f+".datepicker._adjustDate('#"+a.id+"', +"+k+", 'M');\" title=\""+v+'"><span class="ui-icon ui-icon-circle-triangle-'+
            (h?"w":"e")+'">'+v+"</span></a>":j?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+v+'"><span class="ui-icon ui-icon-circle-triangle-'+(h?"w":"e")+'">'+v+"</span></a>";k=this._get(a,"currentText");v=this._get(a,"gotoCurrent")&&a.currentDay?o:c;k=!n?k:this.formatDate(k,v,this._getFormatConfig(a));n=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+f+'.datepicker._hideDatepicker();">'+this._get(a,
                "closeText")+"</button>":"";i=i?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(h?n:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+f+".datepicker._gotoToday('#"+a.id+"');\">"+k+"</button>":"")+(h?"":n)+"</div>":"";n=parseInt(this._get(a,"firstDay"),10);n=isNaN(n)?0:n;k=this._get(a,"showWeek");v=this._get(a,"dayNames");this._get(a,"dayNamesShort");var w=this._get(a,"dayNamesMin"),y=
            this._get(a,"monthNames"),B=this._get(a,"monthNamesShort"),x=this._get(a,"beforeShowDay"),C=this._get(a,"showOtherMonths"),J=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var M=this._getDefaultDate(a),K="",G=0;G<p[0];G++){
                for(var N="",H=0;H<p[1];H++){
                    var O=this._daylightSavingAdjust(new Date(r,l,a.selectedDay)),A=" ui-corner-all",D="";if(m){
                        D+='<div class="ui-datepicker-group';if(p[1]>1)switch(H){
                            case 0:D+=" ui-datepicker-group-first";A=" ui-corner-"+(h?"right":"left");break;case p[1]-
                                1:D+=" ui-datepicker-group-last";A=" ui-corner-"+(h?"left":"right");break;default:D+=" ui-datepicker-group-middle";A="";break
                                }D+='">'
                        }D+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+A+'">'+(/all|left/.test(A)&&G==0?h?j:u:"")+(/all|right/.test(A)&&G==0?h?u:j:"")+this._generateMonthYearHeader(a,l,r,q,s,G>0||H>0,y,B)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var E=k?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(A=0;A<7;A++){
                        var z=
                        (A+n)%7;E+="<th"+((A+n+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+v[z]+'">'+w[z]+"</span></th>"
                        }D+=E+"</tr></thead><tbody>";E=this._getDaysInMonth(r,l);if(r==a.selectedYear&&l==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,E);A=(this._getFirstDayOfMonth(r,l)-n+7)%7;E=m?6:Math.ceil((A+E)/7);z=this._daylightSavingAdjust(new Date(r,l,1-A));for(var P=0;P<E;P++){
                        D+="<tr>";var Q=!k?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(z)+"</td>";for(A=0;A<7;A++){
                            var I=
                            x?x.apply(a.input?a.input[0]:null,[z]):[true,""],F=z.getMonth()!=l,L=F&&!J||!I[0]||q&&z<q||s&&z>s;Q+='<td class="'+((A+n+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(z.getTime()==O.getTime()&&l==a.selectedMonth&&a._keyEvent||M.getTime()==z.getTime()&&M.getTime()==O.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!C?"":" "+I[1]+(z.getTime()==o.getTime()?" "+this._currentClass:"")+(z.getTime()==c.getTime()?" ui-datepicker-today":
                                ""))+'"'+((!F||C)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+f+".datepicker._selectDay('#"+a.id+"',"+z.getMonth()+","+z.getFullYear()+', this);return false;"')+">"+(F&&!C?"&#xa0;":L?'<span class="ui-state-default">'+z.getDate()+"</span>":'<a class="ui-state-default'+(z.getTime()==c.getTime()?" ui-state-highlight":"")+(z.getTime()==o.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+z.getDate()+"</a>")+"</td>";z.setDate(z.getDate()+1);z=this._daylightSavingAdjust(z)
                            }D+=
                        Q+"</tr>"
                        }l++;if(l>11){
                        l=0;r++
                    }D+="</tbody></table>"+(m?"</div>"+(p[0]>0&&H==p[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");N+=D
                    }K+=N
                }K+=i+(b.browser.msie&&parseInt(b.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return K
            },
        _generateMonthYearHeader:function(a,c,h,i,j,n,p,l){
            var k=this._get(a,"changeMonth"),m=this._get(a,"changeYear"),o=this._get(a,"showMonthAfterYear"),q='<div class="ui-datepicker-title">',
            s="";if(n||!k)s+='<span class="ui-datepicker-month">'+p[c]+"</span>";else{
                p=i&&i.getFullYear()==h;var r=j&&j.getFullYear()==h;s+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+f+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+f+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var u=0;u<12;u++)if((!p||u>=i.getMonth())&&(!r||u<=j.getMonth()))s+='<option value="'+u+'"'+(u==c?' selected="selected"':"")+">"+l[u]+"</option>";s+="</select>"
                }o||(q+=s+(n||!(k&&
                m)?"&#xa0;":""));a.yearshtml="";if(n||!m)q+='<span class="ui-datepicker-year">'+h+"</span>";else{
                l=this._get(a,"yearRange").split(":");var v=(new Date).getFullYear();p=function(w){
                    w=w.match(/c[+-].*/)?h+parseInt(w.substring(1),10):w.match(/[+-].*/)?v+parseInt(w,10):parseInt(w,10);return isNaN(w)?v:w
                    };c=p(l[0]);l=Math.max(c,p(l[1]||""));c=i?Math.max(c,i.getFullYear()):c;l=j?Math.min(l,j.getFullYear()):l;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+f+".datepicker._selectMonthYear('#"+
                    a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+f+".datepicker._clickMonthYear('#"+a.id+"');\">";c<=l;c++)a.yearshtml+='<option value="'+c+'"'+(c==h?' selected="selected"':"")+">"+c+"</option>";a.yearshtml+="</select>";if(b.browser.mozilla)q+='<select class="ui-datepicker-year"><option value="'+h+'" selected="selected">'+h+"</option></select>";else{
                    q+=a.yearshtml;a.yearshtml=null
                    }
                }q+=this._get(a,"yearSuffix");if(o)q+=(n||!(k&&m)?"&#xa0;":"")+s;q+="</div>";return q
            },
        _adjustInstDate:function(a,c,h){
            var i=
            a.drawYear+(h=="Y"?c:0),j=a.drawMonth+(h=="M"?c:0);c=Math.min(a.selectedDay,this._getDaysInMonth(i,j))+(h=="D"?c:0);i=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(i,j,c)));a.selectedDay=i.getDate();a.drawMonth=a.selectedMonth=i.getMonth();a.drawYear=a.selectedYear=i.getFullYear();if(h=="M"||h=="Y")this._notifyChange(a)
                },
        _restrictMinMax:function(a,c){
            var h=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");c=h&&c<h?h:c;return c=a&&c>a?a:c
            },
        _notifyChange:function(a){
            var c=this._get(a,
                "onChangeMonthYear");if(c)c.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])
                },
        _getNumberOfMonths:function(a){
            a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a
            },
        _getMinMaxDate:function(a,c){
            return this._determineDate(a,this._get(a,c+"Date"),null)
            },
        _getDaysInMonth:function(a,c){
            return 32-this._daylightSavingAdjust(new Date(a,c,32)).getDate()
            },
        _getFirstDayOfMonth:function(a,c){
            return(new Date(a,c,1)).getDay()
            },
        _canAdjustMonth:function(a,c,h,i){
            var j=this._getNumberOfMonths(a);
            h=this._daylightSavingAdjust(new Date(h,i+(c<0?c:j[0]*j[1]),1));c<0&&h.setDate(this._getDaysInMonth(h.getFullYear(),h.getMonth()));return this._isInRange(a,h)
            },
        _isInRange:function(a,c){
            var h=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!h||c.getTime()>=h.getTime())&&(!a||c.getTime()<=a.getTime())
            },
        _getFormatConfig:function(a){
            var c=this._get(a,"shortYearCutoff");c=typeof c!="string"?c:(new Date).getFullYear()%100+parseInt(c,10);return{
                shortYearCutoff:c,
                dayNamesShort:this._get(a,
                    "dayNamesShort"),
                dayNames:this._get(a,"dayNames"),
                monthNamesShort:this._get(a,"monthNamesShort"),
                monthNames:this._get(a,"monthNames")
                }
            },
        _formatDate:function(a,c,h,i){
            if(!c){
                a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear
                }c=c?typeof c=="object"?c:this._daylightSavingAdjust(new Date(i,h,c)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),c,this._getFormatConfig(a))
            }
        });b.fn.datepicker=
    function(a){
        if(!this.length)return this;if(!b.datepicker.initialized){
            b(document).mousedown(b.datepicker._checkExternalClick).find("body").append(b.datepicker.dpDiv);b.datepicker.initialized=true
            }var c=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this[0]].concat(c));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,
            [this[0]].concat(c));return this.each(function(){
            typeof a=="string"?b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this].concat(c)):b.datepicker._attachDatepicker(this,a)
            })
        };b.datepicker=new e;b.datepicker.initialized=false;b.datepicker.uuid=(new Date).getTime();b.datepicker.version="1.8.11";window["DP_jQuery_"+f]=b
    })(jQuery);
(function(b,d){
    var e={
        buttons:true,
        height:true,
        maxHeight:true,
        maxWidth:true,
        minHeight:true,
        minWidth:true,
        width:true
    },g={
        maxHeight:true,
        maxWidth:true,
        minHeight:true,
        minWidth:true
    };b.widget("ui.dialog",{
        options:{
            autoOpen:true,
            buttons:{},
            closeOnEscape:true,
            closeText:"close",
            dialogClass:"",
            draggable:true,
            hide:null,
            height:"auto",
            maxHeight:false,
            maxWidth:false,
            minHeight:150,
            minWidth:150,
            modal:false,
            position:{
                my:"center",
                at:"center",
                collision:"fit",
                using:function(f){
                    var a=b(this).css(f).offset().top;a<0&&
                    b(this).css("top",f.top-a)
                    }
                },
            resizable:true,
            show:null,
            stack:true,
            title:"",
            width:300,
            zIndex:1E3
        },
        _create:function(){
            this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var f=this,a=f.options,c=a.title||"&#160;",h=b.ui.dialog.getTitleId(f.element),i=(f.uiDialog=b("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+a.dialogClass).css({
                zIndex:a.zIndex
                }).attr("tabIndex",
                -1).css("outline",0).keydown(function(p){
                if(a.closeOnEscape&&p.keyCode&&p.keyCode===b.ui.keyCode.ESCAPE){
                    f.close(p);p.preventDefault()
                    }
                }).attr({
                role:"dialog",
                "aria-labelledby":h
            }).mousedown(function(p){
                f.moveToTop(false,p)
                });f.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(i);var j=(f.uiDialogTitlebar=b("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(i),n=b('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
                "button").hover(function(){
                n.addClass("ui-state-hover")
                },function(){
                n.removeClass("ui-state-hover")
                }).focus(function(){
                n.addClass("ui-state-focus")
                }).blur(function(){
                n.removeClass("ui-state-focus")
                }).click(function(p){
                f.close(p);return false
                }).appendTo(j);(f.uiDialogTitlebarCloseText=b("<span></span>")).addClass("ui-icon ui-icon-closethick").text(a.closeText).appendTo(n);b("<span></span>").addClass("ui-dialog-title").attr("id",h).html(c).prependTo(j);if(b.isFunction(a.beforeclose)&&!b.isFunction(a.beforeClose))a.beforeClose=
                a.beforeclose;j.find("*").add(j).disableSelection();a.draggable&&b.fn.draggable&&f._makeDraggable();a.resizable&&b.fn.resizable&&f._makeResizable();f._createButtons(a.buttons);f._isOpen=false;b.fn.bgiframe&&i.bgiframe()
            },
        _init:function(){
            this.options.autoOpen&&this.open()
            },
        destroy:function(){
            var f=this;f.overlay&&f.overlay.destroy();f.uiDialog.hide();f.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");f.uiDialog.remove();f.originalTitle&&
            f.element.attr("title",f.originalTitle);return f
            },
        widget:function(){
            return this.uiDialog
            },
        close:function(f){
            var a=this,c,h;if(false!==a._trigger("beforeClose",f)){
                a.overlay&&a.overlay.destroy();a.uiDialog.unbind("keypress.ui-dialog");a._isOpen=false;if(a.options.hide)a.uiDialog.hide(a.options.hide,function(){
                    a._trigger("close",f)
                    });else{
                    a.uiDialog.hide();a._trigger("close",f)
                    }b.ui.dialog.overlay.resize();if(a.options.modal){
                    c=0;b(".ui-dialog").each(function(){
                        if(this!==a.uiDialog[0]){
                            h=b(this).css("z-index");
                            isNaN(h)||(c=Math.max(c,h))
                            }
                        });b.ui.dialog.maxZ=c
                    }return a
                }
            },
        isOpen:function(){
            return this._isOpen
            },
        moveToTop:function(f,a){
            var c=this,h=c.options;if(h.modal&&!f||!h.stack&&!h.modal)return c._trigger("focus",a);if(h.zIndex>b.ui.dialog.maxZ)b.ui.dialog.maxZ=h.zIndex;if(c.overlay){
                b.ui.dialog.maxZ+=1;c.overlay.$el.css("z-index",b.ui.dialog.overlay.maxZ=b.ui.dialog.maxZ)
                }f={
                scrollTop:c.element.attr("scrollTop"),
                scrollLeft:c.element.attr("scrollLeft")
                };b.ui.dialog.maxZ+=1;c.uiDialog.css("z-index",b.ui.dialog.maxZ);
            c.element.attr(f);c._trigger("focus",a);return c
            },
        open:function(){
            if(!this._isOpen){
                var f=this,a=f.options,c=f.uiDialog;f.overlay=a.modal?new b.ui.dialog.overlay(f):null;f._size();f._position(a.position);c.show(a.show);f.moveToTop(true);a.modal&&c.bind("keypress.ui-dialog",function(h){
                    if(h.keyCode===b.ui.keyCode.TAB){
                        var i=b(":tabbable",this),j=i.filter(":first");i=i.filter(":last");if(h.target===i[0]&&!h.shiftKey){
                            j.focus(1);return false
                            }else if(h.target===j[0]&&h.shiftKey){
                            i.focus(1);return false
                            }
                        }
                    });
                b(f.element.find(":tabbable").get().concat(c.find(".ui-dialog-buttonpane :tabbable").get().concat(c.get()))).eq(0).focus();f._isOpen=true;f._trigger("open");return f
                }
            },
        _createButtons:function(f){
            var a=this,c=false,h=b("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),i=b("<div></div>").addClass("ui-dialog-buttonset").appendTo(h);a.uiDialog.find(".ui-dialog-buttonpane").remove();typeof f==="object"&&f!==null&&b.each(f,function(){
                return!(c=true)
                });if(c){
                b.each(f,function(j,
                    n){
                    n=b.isFunction(n)?{
                        click:n,
                        text:j
                    }:n;j=b('<button type="button"></button>').attr(n,true).unbind("click").click(function(){
                        n.click.apply(a.element[0],arguments)
                        }).appendTo(i);b.fn.button&&j.button()
                    });h.appendTo(a.uiDialog)
                }
            },
        _makeDraggable:function(){
            function f(j){
                return{
                    position:j.position,
                    offset:j.offset
                    }
                }var a=this,c=a.options,h=b(document),i;a.uiDialog.draggable({
                cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
                handle:".ui-dialog-titlebar",
                containment:"document",
                start:function(j,n){
                    i=
                    c.height==="auto"?"auto":b(this).height();b(this).height(b(this).height()).addClass("ui-dialog-dragging");a._trigger("dragStart",j,f(n))
                    },
                drag:function(j,n){
                    a._trigger("drag",j,f(n))
                    },
                stop:function(j,n){
                    c.position=[n.position.left-h.scrollLeft(),n.position.top-h.scrollTop()];b(this).removeClass("ui-dialog-dragging").height(i);a._trigger("dragStop",j,f(n));b.ui.dialog.overlay.resize()
                    }
                })
            },
        _makeResizable:function(f){
            function a(j){
                return{
                    originalPosition:j.originalPosition,
                    originalSize:j.originalSize,
                    position:j.position,
                    size:j.size
                    }
                }f=f===d?this.options.resizable:f;var c=this,h=c.options,i=c.uiDialog.css("position");f=typeof f==="string"?f:"n,e,s,w,se,sw,ne,nw";c.uiDialog.resizable({
                cancel:".ui-dialog-content",
                containment:"document",
                alsoResize:c.element,
                maxWidth:h.maxWidth,
                maxHeight:h.maxHeight,
                minWidth:h.minWidth,
                minHeight:c._minHeight(),
                handles:f,
                start:function(j,n){
                    b(this).addClass("ui-dialog-resizing");c._trigger("resizeStart",j,a(n))
                    },
                resize:function(j,n){
                    c._trigger("resize",j,a(n))
                    },
                stop:function(j,
                    n){
                    b(this).removeClass("ui-dialog-resizing");h.height=b(this).height();h.width=b(this).width();c._trigger("resizeStop",j,a(n));b.ui.dialog.overlay.resize()
                    }
                }).css("position",i).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
        _minHeight:function(){
            var f=this.options;return f.height==="auto"?f.minHeight:Math.min(f.minHeight,f.height)
            },
        _position:function(f){
            var a=[],c=[0,0],h;if(f){
                if(typeof f==="string"||typeof f==="object"&&"0"in f){
                    a=f.split?f.split(" "):[f[0],f[1]];if(a.length===
                        1)a[1]=a[0];b.each(["left","top"],function(i,j){
                        if(+a[i]===a[i]){
                            c[i]=a[i];a[i]=j
                            }
                        });f={
                        my:a.join(" "),
                        at:a.join(" "),
                        offset:c.join(" ")
                        }
                    }f=b.extend({},b.ui.dialog.prototype.options.position,f)
                }else f=b.ui.dialog.prototype.options.position;(h=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({
                top:0,
                left:0
            }).position(b.extend({
                of:window
            },f));h||this.uiDialog.hide()
            },
        _setOptions:function(f){
            var a=this,c={},h=false;b.each(f,function(i,j){
                a._setOption(i,j);if(i in e)h=true;if(i in
                    g)c[i]=j
                    });h&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",c)
            },
        _setOption:function(f,a){
            var c=this,h=c.uiDialog;switch(f){
                case "beforeclose":f="beforeClose";break;case "buttons":c._createButtons(a);break;case "closeText":c.uiDialogTitlebarCloseText.text(""+a);break;case "dialogClass":h.removeClass(c.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+a);break;case "disabled":a?h.addClass("ui-dialog-disabled"):h.removeClass("ui-dialog-disabled");
                    break;case "draggable":var i=h.is(":data(draggable)");i&&!a&&h.draggable("destroy");!i&&a&&c._makeDraggable();break;case "position":c._position(a);break;case "resizable":(i=h.is(":data(resizable)"))&&!a&&h.resizable("destroy");i&&typeof a==="string"&&h.resizable("option","handles",a);!i&&a!==false&&c._makeResizable(a);break;case "title":b(".ui-dialog-title",c.uiDialogTitlebar).html(""+(a||"&#160;"));break
                    }b.Widget.prototype._setOption.apply(c,arguments)
            },
        _size:function(){
            var f=this.options,a,c,h=
            this.uiDialog.is(":visible");this.element.show().css({
                width:"auto",
                minHeight:0,
                height:0
            });if(f.minWidth>f.width)f.width=f.minWidth;a=this.uiDialog.css({
                height:"auto",
                width:f.width
                }).height();c=Math.max(0,f.minHeight-a);if(f.height==="auto")if(b.support.minHeight)this.element.css({
                minHeight:c,
                height:"auto"
            });else{
                this.uiDialog.show();f=this.element.css("height","auto").height();h||this.uiDialog.hide();this.element.height(Math.max(f,c))
                }else this.element.height(Math.max(f.height-a,0));this.uiDialog.is(":data(resizable)")&&
            this.uiDialog.resizable("option","minHeight",this._minHeight())
            }
        });b.extend(b.ui.dialog,{
        version:"1.8.11",
        uuid:0,
        maxZ:0,
        getTitleId:function(f){
            f=f.attr("id");if(!f){
                this.uuid+=1;f=this.uuid
                }return"ui-dialog-title-"+f
            },
        overlay:function(f){
            this.$el=b.ui.dialog.overlay.create(f)
            }
        });b.extend(b.ui.dialog.overlay,{
        instances:[],
        oldInstances:[],
        maxZ:0,
        events:b.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(f){
            return f+".dialog-overlay"
            }).join(" "),
        create:function(f){
            if(this.instances.length===
                0){
                setTimeout(function(){
                    b.ui.dialog.overlay.instances.length&&b(document).bind(b.ui.dialog.overlay.events,function(c){
                        if(b(c.target).zIndex()<b.ui.dialog.overlay.maxZ)return false
                            })
                    },1);b(document).bind("keydown.dialog-overlay",function(c){
                    if(f.options.closeOnEscape&&c.keyCode&&c.keyCode===b.ui.keyCode.ESCAPE){
                        f.close(c);c.preventDefault()
                        }
                    });b(window).bind("resize.dialog-overlay",b.ui.dialog.overlay.resize)
                }var a=(this.oldInstances.pop()||b("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width:this.width(),
                height:this.height()
                });b.fn.bgiframe&&a.bgiframe();this.instances.push(a);return a
            },
        destroy:function(f){
            var a=b.inArray(f,this.instances);a!=-1&&this.oldInstances.push(this.instances.splice(a,1)[0]);this.instances.length===0&&b([document,window]).unbind(".dialog-overlay");f.remove();var c=0;b.each(this.instances,function(){
                c=Math.max(c,this.css("z-index"))
                });this.maxZ=c
            },
        height:function(){
            var f,a;if(b.browser.msie&&b.browser.version<7){
                f=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
                a=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return f<a?b(window).height()+"px":f+"px"
                }else return b(document).height()+"px"
                },
        width:function(){
            var f,a;if(b.browser.msie&&b.browser.version<7){
                f=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);a=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return f<a?b(window).width()+"px":f+"px"
                }else return b(document).width()+"px"
                },
        resize:function(){
            var f=b([]);b.each(b.ui.dialog.overlay.instances,
                function(){
                    f=f.add(this)
                    });f.css({
                width:0,
                height:0
            }).css({
                width:b.ui.dialog.overlay.width(),
                height:b.ui.dialog.overlay.height()
                })
            }
        });b.extend(b.ui.dialog.overlay.prototype,{
        destroy:function(){
            b.ui.dialog.overlay.destroy(this.$el)
            }
        })
    })(jQuery);
(function(b){
    b.ui=b.ui||{};var d=/left|center|right/,e=/top|center|bottom/,g=b.fn.position,f=b.fn.offset;b.fn.position=function(a){
        if(!a||!a.of)return g.apply(this,arguments);a=b.extend({},a);var c=b(a.of),h=c[0],i=(a.collision||"flip").split(" "),j=a.offset?a.offset.split(" "):[0,0],n,p,l;if(h.nodeType===9){
            n=c.width();p=c.height();l={
                top:0,
                left:0
            }
            }else if(h.setTimeout){
            n=c.width();p=c.height();l={
                top:c.scrollTop(),
                left:c.scrollLeft()
                }
            }else if(h.preventDefault){
            a.at="left top";n=p=0;l={
                top:a.of.pageY,
                left:a.of.pageX
                }
            }else{
            n=c.outerWidth();p=c.outerHeight();l=c.offset()
            }b.each(["my","at"],function(){
            var k=(a[this]||"").split(" ");if(k.length===1)k=d.test(k[0])?k.concat(["center"]):e.test(k[0])?["center"].concat(k):["center","center"];k[0]=d.test(k[0])?k[0]:"center";k[1]=e.test(k[1])?k[1]:"center";a[this]=k
            });if(i.length===1)i[1]=i[0];j[0]=parseInt(j[0],10)||0;if(j.length===1)j[1]=j[0];j[1]=parseInt(j[1],10)||0;if(a.at[0]==="right")l.left+=n;else if(a.at[0]==="center")l.left+=n/2;if(a.at[1]==="bottom")l.top+=
            p;else if(a.at[1]==="center")l.top+=p/2;l.left+=j[0];l.top+=j[1];return this.each(function(){
            var k=b(this),m=k.outerWidth(),o=k.outerHeight(),q=parseInt(b.curCSS(this,"marginLeft",true))||0,s=parseInt(b.curCSS(this,"marginTop",true))||0,r=m+q+(parseInt(b.curCSS(this,"marginRight",true))||0),u=o+s+(parseInt(b.curCSS(this,"marginBottom",true))||0),v=b.extend({},l),w;if(a.my[0]==="right")v.left-=m;else if(a.my[0]==="center")v.left-=m/2;if(a.my[1]==="bottom")v.top-=o;else if(a.my[1]==="center")v.top-=
                o/2;v.left=Math.round(v.left);v.top=Math.round(v.top);w={
                left:v.left-q,
                top:v.top-s
                };b.each(["left","top"],function(y,B){
                b.ui.position[i[y]]&&b.ui.position[i[y]][B](v,{
                    targetWidth:n,
                    targetHeight:p,
                    elemWidth:m,
                    elemHeight:o,
                    collisionPosition:w,
                    collisionWidth:r,
                    collisionHeight:u,
                    offset:j,
                    my:a.my,
                    at:a.at
                    })
                });b.fn.bgiframe&&k.bgiframe();k.offset(b.extend(v,{
                using:a.using
                }))
            })
        };b.ui.position={
        fit:{
            left:function(a,c){
                var h=b(window);h=c.collisionPosition.left+c.collisionWidth-h.width()-h.scrollLeft();a.left=
                h>0?a.left-h:Math.max(a.left-c.collisionPosition.left,a.left)
                },
            top:function(a,c){
                var h=b(window);h=c.collisionPosition.top+c.collisionHeight-h.height()-h.scrollTop();a.top=h>0?a.top-h:Math.max(a.top-c.collisionPosition.top,a.top)
                }
            },
        flip:{
            left:function(a,c){
                if(c.at[0]!=="center"){
                    var h=b(window);h=c.collisionPosition.left+c.collisionWidth-h.width()-h.scrollLeft();var i=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,j=c.at[0]==="left"?c.targetWidth:-c.targetWidth,n=-2*c.offset[0];a.left+=
                    c.collisionPosition.left<0?i+j+n:h>0?i+j+n:0
                    }
                },
            top:function(a,c){
                if(c.at[1]!=="center"){
                    var h=b(window);h=c.collisionPosition.top+c.collisionHeight-h.height()-h.scrollTop();var i=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,j=c.at[1]==="top"?c.targetHeight:-c.targetHeight,n=-2*c.offset[1];a.top+=c.collisionPosition.top<0?i+j+n:h>0?i+j+n:0
                    }
                }
            }
        };if(!b.offset.setOffset){
        b.offset.setOffset=function(a,c){
            if(/static/.test(b.curCSS(a,"position")))a.style.position="relative";var h=b(a),
            i=h.offset(),j=parseInt(b.curCSS(a,"top",true),10)||0,n=parseInt(b.curCSS(a,"left",true),10)||0;i={
                top:c.top-i.top+j,
                left:c.left-i.left+n
                };"using"in c?c.using.call(a,i):h.css(i)
            };b.fn.offset=function(a){
            var c=this[0];if(!c||!c.ownerDocument)return null;if(a)return this.each(function(){
                b.offset.setOffset(this,a)
                });return f.call(this)
            }
        }
    })(jQuery);
(function(b,d){
    b.widget("ui.progressbar",{
        options:{
            value:0,
            max:100
        },
        min:0,
        _create:function(){
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role:"progressbar",
                "aria-valuemin":this.min,
                "aria-valuemax":this.options.max,
                "aria-valuenow":this._value()
                });this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()
            },
        destroy:function(){
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)
            },
        value:function(e){
            if(e===d)return this._value();this._setOption("value",e);return this
            },
        _setOption:function(e,g){
            if(e==="value"){
                this.options.value=g;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")
                }b.Widget.prototype._setOption.apply(this,arguments)
            },
        _value:function(){
            var e=this.options.value;if(typeof e!=="number")e=0;return Math.min(this.options.max,Math.max(this.min,e))
            },
        _percentage:function(){
            return 100*
            this._value()/this.options.max
            },
        _refreshValue:function(){
            var e=this.value(),g=this._percentage();if(this.oldValue!==e){
                this.oldValue=e;this._trigger("change")
                }this.valueDiv.toggleClass("ui-corner-right",e===this.options.max).width(g.toFixed(0)+"%");this.element.attr("aria-valuenow",e)
            }
        });b.extend(b.ui.progressbar,{
        version:"1.8.11"
    })
    })(jQuery);
(function(b){
    b.widget("ui.slider",b.ui.mouse,{
        widgetEventPrefix:"slide",
        options:{
            animate:false,
            distance:0,
            max:100,
            min:0,
            orientation:"horizontal",
            range:false,
            step:1,
            value:0,
            values:null
        },
        _create:function(){
            var d=this,e=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");e.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
            this.range=b([]);if(e.range){
                if(e.range===true){
                    this.range=b("<div></div>");if(!e.values)e.values=[this._valueMin(),this._valueMin()];if(e.values.length&&e.values.length!==2)e.values=[e.values[0],e.values[0]]
                        }else this.range=b("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(e.range==="min"||e.range==="max")this.range.addClass("ui-slider-range-"+e.range);this.range.addClass("ui-widget-header")
                }b(".ui-slider-handle",this.element).length===0&&b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
            if(e.values&&e.values.length)for(;b(".ui-slider-handle",this.element).length<e.values.length;)b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){
                g.preventDefault()
                }).hover(function(){
                e.disabled||b(this).addClass("ui-state-hover")
                },function(){
                b(this).removeClass("ui-state-hover")
                }).focus(function(){
                if(e.disabled)b(this).blur();
                else{
                    b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")
                    }
                }).blur(function(){
                b(this).removeClass("ui-state-focus")
                });this.handles.each(function(g){
                b(this).data("index.ui-slider-handle",g)
                });this.handles.keydown(function(g){
                var f=true,a=b(this).data("index.ui-slider-handle"),c,h,i;if(!d.options.disabled){
                    switch(g.keyCode){
                        case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:f=
                            false;if(!d._keySliding){
                                d._keySliding=true;b(this).addClass("ui-state-active");c=d._start(g,a);if(c===false)return
                            }break
                            }i=d.options.step;c=d.options.values&&d.options.values.length?(h=d.values(a)):(h=d.value());switch(g.keyCode){
                        case b.ui.keyCode.HOME:h=d._valueMin();break;case b.ui.keyCode.END:h=d._valueMax();break;case b.ui.keyCode.PAGE_UP:h=d._trimAlignValue(c+(d._valueMax()-d._valueMin())/5);break;case b.ui.keyCode.PAGE_DOWN:h=d._trimAlignValue(c-(d._valueMax()-d._valueMin())/5);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(c===
                            d._valueMax())return;h=d._trimAlignValue(c+i);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(c===d._valueMin())return;h=d._trimAlignValue(c-i);break
                            }d._slide(g,a,h);return f
                    }
                }).keyup(function(g){
                var f=b(this).data("index.ui-slider-handle");if(d._keySliding){
                    d._keySliding=false;d._stop(g,f);d._change(g,f);b(this).removeClass("ui-state-active")
                    }
                });this._refreshValue();this._animateOff=false
            },
        destroy:function(){
            this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
            this._mouseDestroy();return this
            },
        _mouseCapture:function(d){
            var e=this.options,g,f,a,c,h;if(e.disabled)return false;this.elementSize={
                width:this.element.outerWidth(),
                height:this.element.outerHeight()
                };this.elementOffset=this.element.offset();g=this._normValueFromMouse({
                x:d.pageX,
                y:d.pageY
                });f=this._valueMax()-this._valueMin()+1;c=this;this.handles.each(function(i){
                var j=Math.abs(g-c.values(i));if(f>j){
                    f=j;a=b(this);h=i
                    }
                });if(e.range===true&&this.values(1)===e.min){
                h+=1;a=b(this.handles[h])
                }if(this._start(d,
                h)===false)return false;this._mouseSliding=true;c._handleIndex=h;a.addClass("ui-state-active").focus();e=a.offset();this._clickOffset=!b(d.target).parents().andSelf().is(".ui-slider-handle")?{
                left:0,
                top:0
            }:{
                left:d.pageX-e.left-a.width()/2,
                top:d.pageY-e.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)
                };this.handles.hasClass("ui-state-hover")||this._slide(d,h,g);return this._animateOff=true
            },
        _mouseStart:function(){
            return true
            },
        _mouseDrag:function(d){
            var e=this._normValueFromMouse({
                x:d.pageX,
                y:d.pageY
                });this._slide(d,this._handleIndex,e);return false
            },
        _mouseStop:function(d){
            this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false
            },
        _detectOrientation:function(){
            this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"
            },
        _normValueFromMouse:function(d){
            var e;
            if(this.orientation==="horizontal"){
                e=this.elementSize.width;d=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
                }else{
                e=this.elementSize.height;d=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
                }e=d/e;if(e>1)e=1;if(e<0)e=0;if(this.orientation==="vertical")e=1-e;d=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+e*d)
            },
        _start:function(d,e){
            var g={
                handle:this.handles[e],
                value:this.value()
                };if(this.options.values&&this.options.values.length){
                g.value=
                this.values(e);g.values=this.values()
                }return this._trigger("start",d,g)
            },
        _slide:function(d,e,g){
            var f;if(this.options.values&&this.options.values.length){
                f=this.values(e?0:1);if(this.options.values.length===2&&this.options.range===true&&(e===0&&g>f||e===1&&g<f))g=f;if(g!==this.values(e)){
                    f=this.values();f[e]=g;d=this._trigger("slide",d,{
                        handle:this.handles[e],
                        value:g,
                        values:f
                    });this.values(e?0:1);d!==false&&this.values(e,g,true)
                    }
                }else if(g!==this.value()){
                d=this._trigger("slide",d,{
                    handle:this.handles[e],
                    value:g
                });d!==false&&this.value(g)
                }
            },
        _stop:function(d,e){
            var g={
                handle:this.handles[e],
                value:this.value()
                };if(this.options.values&&this.options.values.length){
                g.value=this.values(e);g.values=this.values()
                }this._trigger("stop",d,g)
            },
        _change:function(d,e){
            if(!this._keySliding&&!this._mouseSliding){
                var g={
                    handle:this.handles[e],
                    value:this.value()
                    };if(this.options.values&&this.options.values.length){
                    g.value=this.values(e);g.values=this.values()
                    }this._trigger("change",d,g)
                }
            },
        value:function(d){
            if(arguments.length){
                this.options.value=
                this._trimAlignValue(d);this._refreshValue();this._change(null,0)
                }return this._value()
            },
        values:function(d,e){
            var g,f,a;if(arguments.length>1){
                this.options.values[d]=this._trimAlignValue(e);this._refreshValue();this._change(null,d)
                }if(arguments.length)if(b.isArray(arguments[0])){
                g=this.options.values;f=arguments[0];for(a=0;a<g.length;a+=1){
                    g[a]=this._trimAlignValue(f[a]);this._change(null,a)
                    }this._refreshValue()
                }else return this.options.values&&this.options.values.length?this._values(d):this.value();
            else return this._values()
                },
        _setOption:function(d,e){
            var g,f=0;if(b.isArray(this.options.values))f=this.options.values.length;b.Widget.prototype._setOption.apply(this,arguments);switch(d){
                case "disabled":if(e){
                    this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")
                    }else{
                    this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")
                    }break;case "orientation":this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(g=0;g<f;g+=1)this._change(null,g);this._animateOff=false;break
                    }
            },
        _value:function(){
            var d=this.options.value;return d=this._trimAlignValue(d)
            },
        _values:function(d){
            var e,g;if(arguments.length){
                e=this.options.values[d];
                return e=this._trimAlignValue(e)
                }else{
                e=this.options.values.slice();for(g=0;g<e.length;g+=1)e[g]=this._trimAlignValue(e[g]);return e
                }
            },
        _trimAlignValue:function(d){
            if(d<=this._valueMin())return this._valueMin();if(d>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,g=(d-this._valueMin())%e;alignValue=d-g;if(Math.abs(g)*2>=e)alignValue+=g>0?e:-e;return parseFloat(alignValue.toFixed(5))
            },
        _valueMin:function(){
            return this.options.min
            },
        _valueMax:function(){
            return this.options.max
            },
        _refreshValue:function(){
            var d=this.options.range,e=this.options,g=this,f=!this._animateOff?e.animate:false,a,c={},h,i,j,n;if(this.options.values&&this.options.values.length)this.handles.each(function(p){
                a=(g.values(p)-g._valueMin())/(g._valueMax()-g._valueMin())*100;c[g.orientation==="horizontal"?"left":"bottom"]=a+"%";b(this).stop(1,1)[f?"animate":"css"](c,e.animate);if(g.options.range===true)if(g.orientation==="horizontal"){
                    if(p===0)g.range.stop(1,1)[f?"animate":"css"]({
                        left:a+"%"
                        },e.animate);
                    if(p===1)g.range[f?"animate":"css"]({
                        width:a-h+"%"
                        },{
                        queue:false,
                        duration:e.animate
                        })
                    }else{
                    if(p===0)g.range.stop(1,1)[f?"animate":"css"]({
                        bottom:a+"%"
                        },e.animate);if(p===1)g.range[f?"animate":"css"]({
                        height:a-h+"%"
                        },{
                        queue:false,
                        duration:e.animate
                        })
                    }h=a
                });else{
                i=this.value();j=this._valueMin();n=this._valueMax();a=n!==j?(i-j)/(n-j)*100:0;c[g.orientation==="horizontal"?"left":"bottom"]=a+"%";this.handle.stop(1,1)[f?"animate":"css"](c,e.animate);if(d==="min"&&this.orientation==="horizontal")this.range.stop(1,
                    1)[f?"animate":"css"]({
                    width:a+"%"
                    },e.animate);if(d==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({
                    width:100-a+"%"
                    },{
                    queue:false,
                    duration:e.animate
                    });if(d==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({
                    height:a+"%"
                    },e.animate);if(d==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({
                    height:100-a+"%"
                    },{
                    queue:false,
                    duration:e.animate
                    })
                }
            }
        });b.extend(b.ui.slider,{
        version:"1.8.11"
    })
    })(jQuery);
(function(b,d){
    function e(){
        return++f
        }function g(){
        return++a
        }var f=0,a=0;b.widget("ui.tabs",{
        options:{
            add:null,
            ajaxOptions:null,
            cache:false,
            cookie:null,
            collapsible:false,
            disable:null,
            disabled:[],
            enable:null,
            event:"click",
            fx:null,
            idPrefix:"ui-tabs-",
            load:null,
            panelTemplate:"<div></div>",
            remove:null,
            select:null,
            show:null,
            spinner:"<em>Loading&#8230;</em>",
            tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create:function(){
            this._tabify(true)
            },
        _setOption:function(c,h){
            if(c=="selected")this.options.collapsible&&
                h==this.options.selected||this.select(h);else{
                this.options[c]=h;this._tabify()
                }
            },
        _tabId:function(c){
            return c.title&&c.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()
            },
        _sanitizeSelector:function(c){
            return c.replace(/:/g,"\\:")
            },
        _cookie:function(){
            var c=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+g());return b.cookie.apply(null,[c].concat(b.makeArray(arguments)))
            },
        _ui:function(c,h){
            return{
                tab:c,
                panel:h,
                index:this.anchors.index(c)
                }
            },
        _cleanup:function(){
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){
                var c=
                b(this);c.html(c.data("label.tabs")).removeData("label.tabs")
                })
            },
        _tabify:function(c){
            function h(r,u){
                r.css("display","");!b.support.opacity&&u.opacity&&r[0].style.removeAttribute("filter")
                }var i=this,j=this.options,n=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=b(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){
                return b("a",this)[0]
                });this.panels=b([]);this.anchors.each(function(r,u){
                var v=b(u).attr("href"),w=v.split("#")[0],y;if(w&&(w===location.toString().split("#")[0]||
                    (y=b("base")[0])&&w===y.href)){
                    v=u.hash;u.href=v
                    }if(n.test(v))i.panels=i.panels.add(i.element.find(i._sanitizeSelector(v)));else if(v&&v!=="#"){
                    b.data(u,"href.tabs",v);b.data(u,"load.tabs",v.replace(/#.*$/,""));v=i._tabId(u);u.href="#"+v;u=i.element.find("#"+v);if(!u.length){
                        u=b(j.panelTemplate).attr("id",v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(i.panels[r-1]||i.list);u.data("destroy.tabs",true)
                        }i.panels=i.panels.add(u)
                    }else j.disabled.push(r)
                    });if(c){
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
                this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===d){
                    location.hash&&this.anchors.each(function(r,u){
                        if(u.hash==location.hash){
                            j.selected=r;return false
                            }
                        });if(typeof j.selected!=="number"&&j.cookie)j.selected=parseInt(i._cookie(),10);if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)j.selected=
                        this.lis.index(this.lis.filter(".ui-tabs-selected"));j.selected=j.selected||(this.lis.length?0:-1)
                    }else if(j.selected===null)j.selected=-1;j.selected=j.selected>=0&&this.anchors[j.selected]||j.selected<0?j.selected:0;j.disabled=b.unique(j.disabled.concat(b.map(this.lis.filter(".ui-state-disabled"),function(r){
                    return i.lis.index(r)
                    }))).sort();b.inArray(j.selected,j.disabled)!=-1&&j.disabled.splice(b.inArray(j.selected,j.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
                if(j.selected>=0&&this.anchors.length){
                    i.element.find(i._sanitizeSelector(i.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");i.element.queue("tabs",function(){
                        i._trigger("show",null,i._ui(i.anchors[j.selected],i.element.find(i._sanitizeSelector(i.anchors[j.selected].hash))[0]))
                        });this.load(j.selected)
                    }b(window).bind("unload",function(){
                    i.lis.add(i.anchors).unbind(".tabs");i.lis=i.anchors=i.panels=null
                    })
                }else j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
            this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");j.cookie&&this._cookie(j.selected,j.cookie);c=0;for(var p;p=this.lis[c];c++)b(p)[b.inArray(c,j.disabled)!=-1&&!b(p).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");j.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){
                var l=function(r,u){
                    u.is(":not(.ui-state-disabled)")&&u.addClass("ui-state-"+r)
                    },k=function(r,u){
                    u.removeClass("ui-state-"+
                        r)
                    };this.lis.bind("mouseover.tabs",function(){
                    l("hover",b(this))
                    });this.lis.bind("mouseout.tabs",function(){
                    k("hover",b(this))
                    });this.anchors.bind("focus.tabs",function(){
                    l("focus",b(this).closest("li"))
                    });this.anchors.bind("blur.tabs",function(){
                    k("focus",b(this).closest("li"))
                    })
                }var m,o;if(j.fx)if(b.isArray(j.fx)){
                m=j.fx[0];o=j.fx[1]
                }else m=o=j.fx;var q=o?function(r,u){
                b(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
                    function(){
                        h(u,o);i._trigger("show",null,i._ui(r,u[0]))
                        })
                }:function(r,u){
                b(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.removeClass("ui-tabs-hide");i._trigger("show",null,i._ui(r,u[0]))
                },s=m?function(r,u){
                u.animate(m,m.duration||"normal",function(){
                    i.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");h(u,m);i.element.dequeue("tabs")
                    })
                }:function(r,u){
                i.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");i.element.dequeue("tabs")
                };
            this.anchors.bind(j.event+".tabs",function(){
                var r=this,u=b(r).closest("li"),v=i.panels.filter(":not(.ui-tabs-hide)"),w=i.element.find(i._sanitizeSelector(r.hash));if(u.hasClass("ui-tabs-selected")&&!j.collapsible||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||i.panels.filter(":animated").length||i._trigger("select",null,i._ui(this,w[0]))===false){
                    this.blur();return false
                    }j.selected=i.anchors.index(this);i.abort();if(j.collapsible)if(u.hasClass("ui-tabs-selected")){
                    j.selected=
                    -1;j.cookie&&i._cookie(j.selected,j.cookie);i.element.queue("tabs",function(){
                        s(r,v)
                        }).dequeue("tabs");this.blur();return false
                    }else if(!v.length){
                    j.cookie&&i._cookie(j.selected,j.cookie);i.element.queue("tabs",function(){
                        q(r,w)
                        });i.load(i.anchors.index(this));this.blur();return false
                    }j.cookie&&i._cookie(j.selected,j.cookie);if(w.length){
                    v.length&&i.element.queue("tabs",function(){
                        s(r,v)
                        });i.element.queue("tabs",function(){
                        q(r,w)
                        });i.load(i.anchors.index(this))
                    }else throw"jQuery UI Tabs: Mismatching fragment identifier.";
                b.browser.msie&&this.blur()
                });this.anchors.bind("click.tabs",function(){
                return false
                })
            },
        _getIndex:function(c){
            if(typeof c=="string")c=this.anchors.index(this.anchors.filter("[href$="+c+"]"));return c
            },
        destroy:function(){
            var c=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){
                var h=
                b.data(this,"href.tabs");if(h)this.href=h;var i=b(this).unbind(".tabs");b.each(["href","load","cache"],function(j,n){
                    i.removeData(n+".tabs")
                    })
                });this.lis.unbind(".tabs").add(this.panels).each(function(){
                b.data(this,"destroy.tabs")?b(this).remove():b(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
                });c.cookie&&this._cookie(null,c.cookie);return this
            },
        add:function(c,
            h,i){
            if(i===d)i=this.anchors.length;var j=this,n=this.options;h=b(n.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,h));c=!c.indexOf("#")?c.replace("#",""):this._tabId(b("a",h)[0]);h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var p=j.element.find("#"+c);p.length||(p=b(n.panelTemplate).attr("id",c).data("destroy.tabs",true));p.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(i>=this.lis.length){
                h.appendTo(this.list);p.appendTo(this.list[0].parentNode)
                }else{
                h.insertBefore(this.lis[i]);
                p.insertBefore(this.panels[i])
                }n.disabled=b.map(n.disabled,function(l){
                return l>=i?++l:l
                });this._tabify();if(this.anchors.length==1){
                n.selected=0;h.addClass("ui-tabs-selected ui-state-active");p.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){
                    j._trigger("show",null,j._ui(j.anchors[0],j.panels[0]))
                    });this.load(0)
                }this._trigger("add",null,this._ui(this.anchors[i],this.panels[i]));return this
            },
        remove:function(c){
            c=this._getIndex(c);var h=this.options,i=this.lis.eq(c).remove(),j=this.panels.eq(c).remove();
            if(i.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(c+(c+1<this.anchors.length?1:-1));h.disabled=b.map(b.grep(h.disabled,function(n){
                return n!=c
                }),function(n){
                return n>=c?--n:n
                });this._tabify();this._trigger("remove",null,this._ui(i.find("a")[0],j[0]));return this
            },
        enable:function(c){
            c=this._getIndex(c);var h=this.options;if(b.inArray(c,h.disabled)!=-1){
                this.lis.eq(c).removeClass("ui-state-disabled");h.disabled=b.grep(h.disabled,function(i){
                    return i!=c
                    });this._trigger("enable",null,
                    this._ui(this.anchors[c],this.panels[c]));return this
                }
            },
        disable:function(c){
            c=this._getIndex(c);var h=this.options;if(c!=h.selected){
                this.lis.eq(c).addClass("ui-state-disabled");h.disabled.push(c);h.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))
                }return this
            },
        select:function(c){
            c=this._getIndex(c);if(c==-1)if(this.options.collapsible&&this.options.selected!=-1)c=this.options.selected;else return this;this.anchors.eq(c).trigger(this.options.event+".tabs");return this
            },
        load:function(c){
            c=this._getIndex(c);var h=this,i=this.options,j=this.anchors.eq(c)[0],n=b.data(j,"load.tabs");this.abort();if(!n||this.element.queue("tabs").length!==0&&b.data(j,"cache.tabs"))this.element.dequeue("tabs");else{
                this.lis.eq(c).addClass("ui-state-processing");if(i.spinner){
                    var p=b("span",j);p.data("label.tabs",p.html()).html(i.spinner)
                    }this.xhr=b.ajax(b.extend({},i.ajaxOptions,{
                    url:n,
                    success:function(l,k){
                        h.element.find(h._sanitizeSelector(j.hash)).html(l);h._cleanup();i.cache&&b.data(j,
                            "cache.tabs",true);h._trigger("load",null,h._ui(h.anchors[c],h.panels[c]));try{
                            i.ajaxOptions.success(l,k)
                            }catch(m){}
                        },
                    error:function(l,k){
                        h._cleanup();h._trigger("load",null,h._ui(h.anchors[c],h.panels[c]));try{
                            i.ajaxOptions.error(l,k,c,j)
                            }catch(m){}
                        }
                    }));h.element.dequeue("tabs");return this
                }
            },
        abort:function(){
            this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){
                this.xhr.abort();delete this.xhr
                }this._cleanup();return this
            },
        url:function(c,h){
            this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",h);return this
            },
        length:function(){
            return this.anchors.length
            }
        });b.extend(b.ui.tabs,{
        version:"1.8.11"
    });b.extend(b.ui.tabs.prototype,{
        rotation:null,
        rotate:function(c,h){
            var i=this,j=this.options,n=i._rotate||(i._rotate=function(p){
                clearTimeout(i.rotation);i.rotation=setTimeout(function(){
                    var l=j.selected;i.select(++l<i.anchors.length?l:0)
                    },c);p&&p.stopPropagation()
                });h=i._unrotate||(i._unrotate=!h?function(p){
                p.clientX&&
                i.rotate(null)
                }:function(){
                t=j.selected;n()
                });if(c){
                this.element.bind("tabsshow",n);this.anchors.bind(j.event+".tabs",h);n()
                }else{
                clearTimeout(i.rotation);this.element.unbind("tabsshow",n);this.anchors.unbind(j.event+".tabs",h);delete this._rotate;delete this._unrotate
                }return this
            }
        })
    })(jQuery);
