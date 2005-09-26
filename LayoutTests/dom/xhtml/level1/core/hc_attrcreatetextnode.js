
/*
Copyright Â© 2001-2004 World Wide Web Consortium, 
(Massachusetts Institute of Technology, European Research Consortium 
for Informatics and Mathematics, Keio University). All 
Rights Reserved. This work is distributed under the W3CÂ® Software License [1] in the 
hope that it will be useful, but WITHOUT ANY WARRANTY; without even 
the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 

[1] http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231
*/



   /**
    *  Gets URI that identifies the test.
    *  @return uri identifier of test
    */
function getTargetURI() {
      return "http://www.w3.org/2001/DOM-Test-Suite/level1/core/hc_attrcreatetextnode";
   }

var docsLoaded = -1000000;
var builder = null;

//
//   This function is called by the testing framework before
//      running the test suite.
//
//   If there are no configuration exceptions, asynchronous
//        document loading is started.  Otherwise, the status
//        is set to complete and the exception is immediately
//        raised when entering the body of the test.
//
function setUpPage() {
   setUpPageStatus = 'running';
   try {
     //
     //   creates test document builder, may throw exception
     //
     builder = createConfiguredBuilder();

      docsLoaded = 0;
      
      var docRef = null;
      if (typeof(this.doc) != 'undefined') {
        docRef = this.doc;
      }
      docsLoaded += preload(docRef, "doc", "hc_staff");
        
       if (docsLoaded == 1) {
          setUpPage = 'complete';
       }
    } catch(ex) {
    	catchInitializationError(builder, ex);
        setUpPage = 'complete';
    }
}



//
//   This method is called on the completion of 
//      each asychronous load started in setUpTests.
//
//   When every synchronous loaded document has completed,
//      the page status is changed which allows the
//      body of the test to be executed.
function loadComplete() {
    if (++docsLoaded == 1) {
        setUpPageStatus = 'complete';
    }
}


/**
* 
    The "setValue()" method for an attribute creates a 
  Text node with the unparsed content of the string.
  Retrieve the attribute named "class" from the last 
  child of of the fourth employee and assign the "Y&ent1;" 
  string to its value attribute.  This value is not yet
  parsed and therefore should still be the same upon
  retrieval. This test uses the "getNamedItem(name)" method
  from the NamedNodeMap interface.  

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Apr/0057.html
*/
function hc_attrcreatetextnode() {
   var success;
    if(checkInitialization(builder, "hc_attrcreatetextnode") != null) return;
    var doc;
      var addressList;
      var testNode;
      var attributes;
      var streetAttr;
      var value;
      
      var docRef = null;
      if (typeof(this.doc) != 'undefined') {
        docRef = this.doc;
      }
      doc = load(docRef, "doc", "hc_staff");
      addressList = doc.getElementsByTagName("acronym");
      testNode = addressList.item(3);
      attributes = testNode.attributes;

      streetAttr = attributes.getNamedItem("class");
      streetAttr.value = "Y&ent1;";

      value = streetAttr.value;

      assertEquals("value","Y&ent1;",value);
       value = streetAttr.nodeValue;

      assertEquals("nodeValue","Y&ent1;",value);
       
}




function runTest() {
   hc_attrcreatetextnode();
}
