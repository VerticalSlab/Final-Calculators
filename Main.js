document.getElementById('submit').onclick = ()=>{
    document.getElementById('thing').innerHTML = Math.ceil(CalclateNeededGradeDrZ()*100) + '%';
};
document.getElementById('submit2').onclick = () => {
    document.getElementById('thing2').innerHTML = Math.ceil(CalcGradeNeededGrade()*100)+'%';
};

function CalclateNeededGradeDrZ() {
    let currentgrade = document.getElementById('math grade').value.replace('%','')/100;
    let testavg = document.getElementById('testavg').value.replace('%','')/100;
    let gradewanted = document.getElementById('final grade').value.replace('%','')/100;
    return (gradewanted*6.63129973)+testavg-(6.63129973*currentgrade);
}
function CalcGradeNeeded() {
    let currentgrade = document.getElementById('math grade2').value.replace('%','')/100;
    let finalworth = document.getElementById('finalworth').value.replace('%','')/100;
    let gradewanted = document.getElementById('final grade2').value.replace('%','')/100; 
    return (gradewanted/finalworth)-(currentgrade/finalworth)+currentgrade;
}