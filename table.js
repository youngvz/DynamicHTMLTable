'use strict'


function addRow(){
    var table = document.getElementById("Table");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    var columnCount = table.rows[0].cells.length;
    console.log(columnCount);
    
    if (columnCount > 0){
                
        for(var index=0; index < columnCount; ++index){
            
            var cellText = index + ", " + rowCount;
            
            row.insertCell(index).innerHTML = cellText;
        }
        
    }else{
        alert("Enter a column first");
    }
}

function deleteLastRow(){
    var table = document.getElementById("Table");

    var rowCount = table.rows.length - 1;
    
    if (rowCount > 0){
        table.deleteRow(rowCount);
    }else{
        alert("Enter a row first.")
    }
}

function addColumn(){
        
    var table = document.getElementById('Table');
    
    var rowCount = table.rows.length;
    var columnCount = table.rows[0].cells.length;
    
    for(var index=0; index < rowCount; ++index){
        var row = table.rows[index];
        
        var cellText = columnCount + ", " + index;
        row.innerHTML += "<td>" + cellText + "</td>"; 
    }
}

function deleteLastColumn(){
    var table = document.getElementById('Table');
    
    var rowCount = table.rows.length;
    var columnCount = table.rows[0].cells.length;
    var lastColumnIndex = columnCount - 1;
    
    if (columnCount == 1){
        alert('Enter a column first!');
        return
    }
    
    for(var index = 0; index < rowCount; index++){
        var row = table.rows[index];
        row.deleteCell(lastColumnIndex);
    }
    
}
