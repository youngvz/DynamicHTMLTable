'use strict'

const tableName = "Table";
const header = "TableHeader";

function addRow(){
    
    var table = document.getElementById(table);
    var rowCount = table.rows.length;
    var columnCount = table.rows[0].cells.length;
    var row = table.insertRow(rowCount);

    if (columnCount > 0){
        for(var index=0; index < columnCount; ++index){
            var cellText = index + ", " + rowCount;
            row.insertCell(index).innerHTML = cellText;
        }
    }else{
        alert("Enter a column first");
        return
    }
}

function deleteLastRow(){
    var table = document.getElementById(table);
    var rowCount = table.rows.length - 1;
    
    if (rowCount > 0){
        table.deleteRow(rowCount);
    }else{
        alert("Enter a row first.")
    }
}

function addColumn(){
        
    var table = document.getElementById(table);
    var rowCount = table.rows.length;
    var columnCount = table.rows[0].cells.length;
    
    for(var index=0; index < rowCount; ++index){
        var row = table.rows[index];
        row.innerHTML += "<td>" + columnCount + ", " + index + "</td>"; 
    }
}

function deleteLastColumn(){
    
    var table = document.getElementById(table);
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
