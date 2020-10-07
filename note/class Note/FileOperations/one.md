# create file

The File System module has methods for creating new files:

### Accessin file from the directory
Accessing file from the express controller

    console.log(__dirname); //C:\Users\lenovo\Desktop\arshiya\nodeExp\boomboom



## fs.appendFile()

- method appends specified content to a file.
- If the file does not exist, the file will be created:
        
        var fs = require('fs');
        fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
	
	
	
## fs.open()  

- method takes a "flag" as the second argument, if the flag is "w" for "writing",
- the specified file is opened for writing

        var fs = require('fs');
        fs.open('mynewfile2.txt', 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved!');
        });

## fs.writeFile()

- method replaces the specified file and content if it exists. 
- If the file does not exist, a new file, containing the specified content, will be created:
      
        ```

            var fs = require('fs');
            fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
            
        ```

---

# Read file

