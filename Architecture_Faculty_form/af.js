function Send() {
    var  specialization,level, option;

    var fname = document.getElementById('fn');
    var sname = document.getElementById('sn');
    var Email = document.getElementById('e@');
    var Password = document.getElementById('pd');

 //What specialization ?
    var Architecture = document.getElementById('Arch');
    var UrPlCiPr = document.getElementById('UC');

//For which level?
    var BaDe = document.getElementById('B');
    var MaDe = document.getElementById('M');
    var Ot= document.getElementById('O');

//For which option?
    var ArTh = document.getElementById('AT');
    var HiAr= document.getElementById('HA');
    var UrPl= document.getElementById('UP');
    var InDe= document.getElementById('ID');
    var ArLa= document.getElementById('AL');
    var CoTe= document.getElementById('CT');

//Information about the Book
    var Booktitle = document.getElementById('bt');
    var Author = document.getElementById('au');
    var Publishinghouse = document.getElementById('bhn');
    var YearOfPub = document.getElementById('yop');
    var borrowDate = document.getElementById('bd');
    var returnDate = document.getElementById('rd');

 //What specialization ?
    if (BaDe.checked == true) specialization = "Architecture";
    if (UrPlCiPr.checked == true) specialization = "Urban Planning and City Professions";

//For which level?
    if (BaDe.checked == true) level = "Bachelor's Degree";
    if (MaDe.checked == true) level = "Master's Degree";
    if (Ot.checked == true) level = "Other";

//For which option?
    if (ArTh.selected == true) option = "Architecture Theory";
    if (HiAr.selected == true) option = "History of Architecture";
    if (UrPl.selected == true) option = "Urban Planning";
    if (InDe.selected == true) option = "Interior design";
    if (ArLa.selected == true) option = "Architectural Law";
    if (CoTe.selected == true) option = "Construction Technology";

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
        background-color: #bd900b7c;
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

  </style>
    <body>
        <fieldset>
            <center>
                <h1>Borrower's Form</h1>
                <hr class="horizontal-line">
                <table width="60%" align="center">
                    <tr><td><label>Faculty:</label></td><td><font color="#ffd689">Architecture</font></td></tr>
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
    document.getElementById('Arch').checked = false;
    document.getElementById('UC').checked = false;
    document.getElementById('B').checked = false;
    document.getElementById('M').checked = false;
    document.getElementById('O').checked = false;
    document.getElementById('AT').selected = true;
    document.getElementById('bt').value = '';
    document.getElementById('au').value = '';
    document.getElementById('bhn').value = '';
    document.getElementById('yop').value = '';
    document.getElementById('bd').value = '';
    document.getElementById('rd').value = '';
  }