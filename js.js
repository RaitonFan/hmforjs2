url = 'https://sf-pyw.mosyag.in/m04/api/forecasts'
$('#main').click(function() {

	$.getJSON(url, function(data) {
	message = data['prophecies']
	set_content_in_divs(message);
	});
});

function set_content_in_divs(paragraphs) {
  $.each(paragraphs, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
  })
}