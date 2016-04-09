jQuery(document).ready(function($) {
	$('button').click(function() {
		var hash1 = {};
		$('[type="text"]').each(function() {
			hash1[$(this).attr('id')] = $(this).val();
		});

		if ($(this).attr('id') == 'btn01') {
			// 1.3 or later
			$.cookie.json = true;
			$.cookie('data01', hash1);
		} else {
			// earlier than 1.3
			$.cookie('data01', JSON.stringify(hash1));
		}

		$('#results').empty();

		if ($(this).attr('id') == 'btn01') {
			// 1.3 or later
			var hash2 = $.cookie('data01');
		} else {
			// earlier than 1.3
			var hash2 = JSON.parse($.cookie('data01'));
		}

		for (var key in hash2) {
			$('#results').append('key: ' + key + ', val: ' + hash2[key] + '\n');
		}
	});
});