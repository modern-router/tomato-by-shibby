/* Copyright (c): 2002-2005 (Germany): United Internet, 1&1, GMX, Schlund+Partner, Alturo */
function QxTerminator(){QxWidget.call(this);};QxTerminator.extend(QxWidget,"QxTerminator");proto.getChildren=function(){return[];};proto.getChildrenLength=function(){return 0;};proto.hasChildren=proto.contains=function(){return false;};proto.getPreviousSibling=proto.getNextSibling=proto.getFirstChild=proto.getLastChild=function(){return null;};proto.add=proto.addBefore=proto.addAfter=proto.remove=proto.removeAll=proto._getParentNodeForChild=proto._appendElement=function(){throw new Error("Not implemented for "+this.classname);};