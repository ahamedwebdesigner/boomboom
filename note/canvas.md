http://pdfkit.org/


# Working with canvas

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);

# check for support


    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // drawing code here
    } else {
    // canvas-unsupported code here
    }



# Draw rectangle

     function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
      }
    }

# 
    