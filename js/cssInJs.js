//const sections = document.getElementsByTagName('section');

const sections = document.querySelectorAll('section')
// console.log(sections);

for (const section of sections){
    console.log(section);
    section.style.backgroundColor = 'lightpink'
    section.style.padding = '10px'
    section.style.border= '2px solid green '
    section.style.marginBottom= '20px'
    section.style.borderRadius= '20px'

}




//dynamic class
for (const section of sections){
    // section.classList.add('section-card');
}


//////////////
const paragraphs = document.querySelectorAll('p')

for(const para of paragraphs){
    para.style.backgroundColor = 'lightgreen'
    para.style.padding = '30px'
}