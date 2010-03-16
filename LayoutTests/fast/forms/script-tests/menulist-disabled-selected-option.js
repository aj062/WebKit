description('Check that a select control does not produce a form value if the selected option element is disabled.');

var parent = document.createElement('div');
document.body.appendChild(parent);
parent.innerHTML = '<form action="">'
    + '<input type=hidden name="submitted" value="true">'
    + '<select name="select">'
    + '<option disabled>Disabled</option>'
    + '<option>Enabled</option>'
    + '</select>'
    + '</form>';

if (window.layoutTestController)
    layoutTestController.waitUntilDone();
var query = window.location.search;
if (query.indexOf('submitted=true') == -1) {
    var select = document.getElementsByTagName('select')[0];
    select.selectedIndex = 0;
    document.forms[0].submit();
} else {
    shouldBe('query.indexOf("select=Disabled")', '-1');
    shouldBe('query.indexOf("select=Enabled")', '-1');
    if (window.layoutTestController)
        layoutTestController.notifyDone();
}

var successfullyParsed = true;
