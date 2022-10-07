function createTable() {
    var table = document.getElementById("table");
    var row = document.getElementById("row").value;
    var col = document.getElementById("col").value;
  
  
  
    for (var i = 1; i <= row; i++) {
      var tr = document.createElement('tr');
  
      for (var j = 1; j <= col; j++) {
        var td = document.createElement('td');
        var data = document.createTextNode("("+i+","+j+")");
  
        td.appendChild(data);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

   

    document.getElementById("tempTable").remove();
  }
  

  document.getElementById("make").addEventListener("click",createTable());
  


  // onLoad Create function for 15x15 table


  function table15x15(){
    var tempTable = document.getElementById("tempTable");


    for (var i = 1; i <= 15; i++) {
      var tr = document.createElement('tr');
  
      for (var j = 1; j <= 15; j++) {
        var td = document.createElement('td');
        var data = document.createTextNode("("+i+","+j+")");
  
        td.appendChild(data);
        tr.appendChild(td);
      }
      tempTable.appendChild(tr);
    }
  }
  


  