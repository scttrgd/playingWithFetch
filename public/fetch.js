function test(){ 
	
	fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: $('#time-input').val(),
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
	.then(function(json) {
		$('#start').text('Stop');
		$('#badge').text(json.body);
	});
};
