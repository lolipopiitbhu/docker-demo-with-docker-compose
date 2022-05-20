import * as fs from 'fs';
export function saveDataToFile(data){
	const dataString = JSON.stringify(data) + "\n";
	const filename = 'datalogs.txt';
	fs.exists(filename, (e) => {
		if(e){
			fs.appendFile(filename, dataString, (err) => {
				if (err) throw err;
				console.log('The data was appended to file!');
				console.log()
			});
		}
		else {
			fs.writeFile(filename, dataString, (err) => {
				if (err) throw err;
				console.log('The file was created and data written to it!');
			});
		}
	});

	fs.readFile(filename, 'utf8', function(err, data){
      
		// Display the file content
		console.log(data);
	});
}