let addSkill = document.querySelectorAll('.add');
let skills = document.querySelector('.newskill');
let newSkill = document.querySelectorAll('.new');
let allskill = document.querySelectorAll('.allskill');

// add skills
addSkill.forEach((item) => {
    item.addEventListener('click', (e) => {
        let close = item.querySelector('.close');
        if (e.target == close) {
            e.target.parentNode.style.display = 'none';
            let deletedSkill = document.createElement('div');
            deletedSkill.classList.add('addskills__content-skills__oneskill');
            deletedSkill.classList.add('new');
            deletedSkill.innerHTML = ` <div class="addskills__content-skills__oneskill-wrap ">
                        <span>${e.target.parentNode.childNodes[3].textContent}   </span>
                    </div>
                
            `;
            skills.append(deletedSkill);
        }
    });

});

// function n(b) {
//     b.forEach( (item)=>{
//         console.log(b);
//         item.addEventListener('click', (e) =>{
//             if(e.target){
//                 e.target.parentNode.style.display = 'none';
//                 let addNewSkill = document.createElement('div');
//                 addNewSkill.classList.add('addskills__content-skills__oneskill');
//                 addNewSkill.classList.add('add');
//                 addNewSkill.innerHTML = `  <div class="addskills__content-skills__oneskill-wrap">
//                             <i class="fas fa-check chek"></i>
//                             <span>Analytical skill</span>
//                             <i class="fas fa-times close"></i>
//                         </div>
//
//             `;
//                 console.log(addSkill);
//                 addNewSkill.parentNode.style.display = 'block';
//                 allskill.append(addNewSkill);
//                 // let  newSkill = document.querySelectorAll('.new');
//                 // n(newSkill)
//             }
//         })
//     });
//
// }

// add skils end


//close and add pupapp skills

let puppapclose = document.querySelector('.close-btn'),
    addpuppap = document.querySelector('.addpuppap'),
    addskills = document.querySelector('.addskills');
puppapclose.addEventListener('click', (e) => {
    if (e.target == puppapclose) {
        addskills.style.display = 'none'
    }
});
addpuppap.addEventListener('click', (e) => {
    if (e.target == addpuppap) {
        addskills.style.display = 'block'
    }
});


let vacancies = document.querySelector('.vacancies'),
    adpt = document.querySelector('.vacancies__adpt')

vacancies.addEventListener('click', () =>{
    console.log(1);
    if(adpt.classList.contains('none')){
        adpt.classList.remove('none');
        adpt.classList.add('block');
    }else{
        adpt.classList.remove('block');
        adpt.classList.add('none')
    }
});
