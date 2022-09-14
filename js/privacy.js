const accept_point=document.getElementById("Accepting-the-terms");
const accept_point_span=accept_point.firstElementChild;
const accept_point_h3=accept_point.lastElementChild;
const accept_content=document.getElementById('Accepting-the-terms-content');

$("#Accepting-the-terms-content").click(function(){
   



});

const changes_point=document.getElementById('Changes-to-terms');
const changes_point_span=changes_point.firstElementChild;
const changes_point_h3=changes_point.lastElementChild;
const changes_content=document.getElementById('Changes-to-terms-content');

const using_point=document.getElementById('Using-our-product');
const using_point_span=using_point.firstElementChild;
const using_point_h3=using_point.lastElementChild;
const using_content=document.getElementById('Using-our-product-content');

const general_restriction_point=document.getElementById('General-restrictions');
const general_restriction_point_span=general_restriction_point.firstElementChild;
const general_restriction_point_h3=general_restriction_point.lastElementChild;
const general_restriction_content=document.getElementById('General-restrictions-content');

const content_point=document.getElementById('Content-policy');
const content_point_span=content_point.firstElementChild;
const content_point_h3=content_point.lastElementChild;
const content_content=document.getElementById('Content-policy-content');

const your_point=document.getElementById('Your-rights');
const your_point_span=your_point.firstElementChild;
const your_point_h3=your_point.lastElementChild;
const your_content=document.getElementById('Your-rights-content');

const copyright_point=document.getElementById('Copyright-policy');
const copyright_point_span=copyright_point.firstElementChild;
const copyright_point_h3=copyright_point.lastElementChild;
const copyright_content=document.getElementById('Copyright-policy-content');

const relationship_point=document.getElementById('Relationship-guideline');
const relationship_point_span=relationship_point.firstElementChild;
const relationship_point_h3=relationship_point.lastElementChild;
const relationship_content=document.getElementById('Relationship-guideline-content');

const liability_point=document.getElementById('Liability-Policy');
const liability_point_span=liability_point.firstElementChild;
const liability_point_h3=liability_point.lastElementChild;
const liability_content=document.getElementById('Liability-Policy-content');

const general_legal_point=document.getElementById('General-legal-terms');
const general_legal_point_span=general_legal_point.firstElementChild;
const general_legal_point_h3=general_legal_point.lastElementChild;
const general_legal_content=document.getElementById('General-legal-terms-content');

const changes=()=>{
    // accept();
    // hello();
    changes_point_span.classList.toggle('visible-two');
    changes_point_h3.classList.toggle('visible-three');
    // changes_content.classList += 'visible';
    // changes_point_span.classList.toggle('visible-two');
    // changes_point_h3.classList.toggle('visible-three');
    changes_content.classList.toggle('visible');

    toggleaccept();
};

const using=()=>{

    // hello();
    using_point_span.classList.toggle('visible-two');
    using_point_h3.classList.toggle('visible-three');
    using_content.classList.toggle('visible');
    toggleaccept();

};

const generalrestriction=()=>{


    // hello();
    general_restriction_point_span.classList.toggle('visible-two');
    general_restriction_point_h3.classList.toggle('visible-three');
    general_restriction_content.classList.toggle('visible');
    toggleaccept();
};

const content=()=>{


    // hello();
    content_point_span.classList.toggle('visible-two');
    content_point_h3.classList.toggle('visible-three');
    content_content.classList.toggle('visible');
    toggleaccept();
};


const your=()=>{


    // hello();
    your_point_span.classList.toggle('visible-two');
    your_point_h3.classList.toggle('visible-three');
    your_content.classList.toggle('visible');
    toggleaccept();
};


const copyright=()=>{

    // hello();

    copyright_point_span.classList.toggle('visible-two');
    copyright_point_h3.classList.toggle('visible-three');
    copyright_content.classList.toggle('visible');
    toggleaccept();
};


const relationship=()=>{

    // hello();
    relationship_point_span.classList.toggle('visible-two');
    relationship_point_h3.classList.toggle('visible-three');
    relationship_content.classList.toggle('visible');
    toggleaccept();
};


const liability=()=>{


    // hello();
    liability_point_span.classList.toggle('visible-two');
    liability_point_h3.classList.toggle('visible-three');
    liability_content.classList.toggle('visible');
    toggleaccept();
};



const general_legal=()=>{


    // hello();
    general_legal_point_span.classList.toggle('visible-two');
    general_legal_point_h3.classList.toggle('visible-three');
    general_legal_content.classList.toggle('visible');
    toggleaccept();
};

const toggleaccept=()=>{
    accept_point_span.classList.toggle('invisible-two');
    accept_point_h3.classList.toggle('invisible-three');
    accept_content.classList.toggle('invisible');
};

// const hello=()=>{
//     general_legal_point_span.classList.toggle('invisible-two');
//     general_legal_point_h3.classList.toggle('invisible-three');
//     general_legal_content.classList.toggle('invisible');

//     liability_point_span.classList.toggle('invisible-two');
//     liability_point_h3.classList.toggle('invisible-three');
//     liability_content.classList.toggle('invisible');

//     relationship_point_span.classList.toggle('invisible-two');
//     relationship_point_h3.classList.toggle('invisible-three');
//     relationship_content.classList.toggle('invisible');

//     copyright_point_span.classList.toggle('invisible-two');
//     copyright_point_h3.classList.toggle('invisible-three');
//     copyright_content.classList.toggle('invisible');

//     your_point_span.classList.toggle('invisible-two');
//     your_point_h3.classList.toggle('invisible-three');
//     your_content.classList.toggle('invisible');

//     content_point_span.classList.toggle('invisible-two');
//     content_point_h3.classList.toggle('invisible-three');
//     content_content.classList.toggle('invisible');

//     general_restriction_point_span.classList.toggle('invisible-two');
//     general_restriction_point_h3.classList.toggle('invisible-three');
//     general_restriction_content.classList.toggle('invisible');

//     using_point_span.classList.toggle('invisible-two');
//     using_point_h3.classList.toggle('invisible-three');
//     using_content.classList.toggle('invisible');

//     changes_point_span.classList.toggle('invisible-two');
//     changes_point_h3.classList.toggle('invisible-three');
//     changes_content.classList.toggle('invisible');

// }

changes_point.addEventListener('click',changes);
using_point.addEventListener('click',using);
general_restriction_point.addEventListener('click',generalrestriction);
content_point.addEventListener('click',content);
your_point.addEventListener('click',your);
copyright_point.addEventListener('click',copyright);
relationship_point.addEventListener('click',relationship);
liability_point.addEventListener('click',liability);
general_legal_point.addEventListener('click',general_legal);