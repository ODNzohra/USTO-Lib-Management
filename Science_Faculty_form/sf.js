function Send() {
    var  specialization,level, option;

    var fname = document.getElementById('fn');
    var sname = document.getElementById('sn');
    var Email = document.getElementById('e@');
    var Password = document.getElementById('pd');

 //What specialization ?
    var Bi = document.getElementById('Bio');
    var Alime= document.getElementById('Ali');
    var Biotechno = document.getElementById('Biotech');

//For which level?
    var BaDe = document.getElementById('B');
    var MaDe = document.getElementById('M');
    var Ot= document.getElementById('O');

//For which option?
    var Zool = document.getElementById('ZO');
    var Genet = document.getElementById('GE');
    var Biophys = document.getElementById('BP');
    var Biochem= document.getElementById('BC');
    var Microbioy= document.getElementById('MC');
    var Toxico= document.getElementById('TX');
    var Botan= document.getElementById('BT');

//Information about the Book
    var Booktitle = document.getElementById('bt');
    var Author = document.getElementById('au');
    var Publishinghouse = document.getElementById('bhn');
    var YearOfPub = document.getElementById('yop');
    var borrowDate = document.getElementById('bd');
    var returnDate = document.getElementById('rd');

 //What specialization ?
    if (Bi.checked == true) specialization = "Biology";
    if (Alime.checked == true) specialization = "Alimentary";
    if (Biotechno.checked == true) specialization = "Biotechnology";

//For which level?
    if (BaDe.checked == true) level = "Bachelor's Degree";
    if (MaDe.checked == true) level = "Master's Degree";
    if (Ot.checked == true) level = "Other";

//For which option?
    if (Zool.selected == true) option = "Zoology";
    if (Genet.selected == true) option = "Genetics";
    if (Biophys.selected == true) option = "Biophysics";
    if (Biochem.selected == true) option = "Biochemistry";
    if (Microbioy.selected == true) option = "Microbiology";
    if (Toxico.selected == true) option = "Toxicology";
    if (Botan.selected == true) option = "Botanical";


    window.location.href = 'test.html';//set the current page to another page
    // Generate form content
    var formContent = `
    <style>
    body {
        background-image: url('libraryblured.png');
        background-size: cover;
    } 
      @font-face {
      font-family: GenshinFont;
      src: url('genshin.ttf');
    }
    h1 {
        font-family: GenshinFont;
        font-weight: bolder;
        font-size: 25px;
        color: white;
        text-shadow: 0 0 10px rgba(245, 217, 140);
        padding-bottom: 5px;
        cursor: default;
    }
    body {
      font-weight: bolder;
      font-family: GenshinFont;
      font-size: 15px;
      color: rgb(44, 26, 16);
    }
    fieldset {
        background-color: #7fcc457c;
        border: none;
        border-radius: 30px;
        border-width: 5px;
        box-shadow: 2px 5px 10px;
    }
    
    .horizontal-line {
        width: 100%;
        border: 2px solid;
        color: rgba(70, 45, 8, 0.463);
    }
    button[type=button]{
      color: #914d22;
      width: 130px;
      font-family: GenshinFont;
      font-weight: bolder;
      border: none;
      border-radius: 50px;
      margin: 10px; 
      padding: 15px;
      cursor: pointer;
    }
  
    button[type=button]:hover {
      background-color: #80cc45;
      color: #ffffff;
    }
    </style>
    <body>
        <fieldset>
            <center>
                <h1>Borrower's Form</h1>
                <hr class="horizontal-line">
                <table width="60%" align="center">
                    <tr><td><label>Faculty:</label></td><td><font color="#ffd689">Science</font></td></tr>
                    <tr><td><label>Specialization:</label></td><td><font color="#ffd689">${specialization}</font></td></tr>
                    <tr><td><label>First name:</label></td><td><font color="#ffd689">${fname.value}</font></td></tr>
                    <tr><td><label>Second Name:</label></td><td><font color="#ffd689">${sname.value}</font></td></tr>
                    <tr><td><label>Password:</label></td><td><font color="#ffd689">${Password.value}</font></td></tr>
                    <tr><td><label>E-mail:</label></td><td><font color="#ffd689">${Email.value}</font></td></tr>
                    <tr><td><label>Level:</label></td><td><font color="#ffd689">${level}</font></td></tr>
                    <tr><td><label>Option:</label></td><td><font color="#ffd689">${option}</font></td></tr>
                    <tr><td><label>Book Title:</label></td><td><font color="#ffd689">${Booktitle.value}</font></td></tr>
                    <tr><td><label>Author:</label></td><td><font color="#ffd689">${Author.value}</font></td></tr>
                    <tr><td><label>Publishing House:</label></td><td><font color="#ffd689">${Publishinghouse.value}</font></td></tr>
                    <tr><td><label>Year Of Publication:</label></td><td><font color="#ffd689">${YearOfPub.value}</font></td></tr>
                </table>
            </center>
        </fieldset>
        <br> <center>
        <button type="button" onclick="history.go(-1)">Cancel</button>
        </center><br> 
    </body>`;
    document.write(formContent);
}
    
    // Create a new HTML element and set its innerHTML

function Clear() {
    // Clear all input fields
    document.getElementById('fn').value = '';
    document.getElementById('sn').value = '';
    document.getElementById('pd').value = '';
    document.getElementById('e@').value = '';
    document.getElementById('Bio').checked = false;
    document.getElementById('Ali').checked = false;
    document.getElementById('Biotech').checked = false;
    document.getElementById('B').checked = false;
    document.getElementById('M').checked = false;
    document.getElementById('O').checked = false;
    document.getElementById('ZO').selected = true;
    document.getElementById('bt').value = '';
    document.getElementById('au').value = '';
    document.getElementById('bhn').value = '';
    document.getElementById('yop').value = '';
    document.getElementById('bd').value = '';
    document.getElementById('rd').value = '';
  }
