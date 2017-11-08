$(document).ready(function($) {
	$('#typeahead').typeahead({
		source: function(query, process) {
			var parameter = {query: query};
			console.log(parameter)
			$.ajax({
				type: 'POST',
				url: '',
				data: {
					query: parameter
				},
				dataType: 'json',
				success: function(data) {
					process(data)
				}
			})
		}
	})
})