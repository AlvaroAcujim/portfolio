const mainTitle = document.getElementById('mainTitle');
const titleProfesionId = document.getElementById('titleProfesionId');
const titleNameId = document.getElementById('titleNameId')
window.onload = () => {
    titleLoopChange(mainTitle);
    console.log('hey')
};
const nameNode = document.createElement('h2');
const nameText = document.createTextNode('Álvaro Rodrigo Acuña Jiménez');
nameNode.append(nameText);
const profesionNode = document.createElement('h2');
const profesionText = document.createTextNode('Fullstack Developer');
profesionNode.append(profesionText);
const quoteNode = document.createElement('h4');
const quoteText = document.createTextNode('Disfruto del desarrollo web porque me obliga a pensar diferente: cada proyecto es un rompecabezas y me encanta la satisfacción de encontrar la pieza que encaja, ya sea una función bien optimizada o una interfaz clara.');
quoteNode.append(quoteText);

let mainTitleBool = true;

const titleLoopChange = (mainTitle) => {
   setInterval(() => {
    if(mainTitleBool){
        changeNodes(mainTitle, quoteNode)

    }else{
        changeNodes(mainTitle, nameNode, profesionNode)
    }
   mainTitleBool = !mainTitleBool
   }, 6000)

};
const changeNodes = (mainTitle, node, node2 = '') => {
    mainTitle.classList.add('fade-out');
      setTimeout(() => {
    while(mainTitle.firstChild){
        mainTitle.removeChild(mainTitle.firstChild);
    }
    
    mainTitle.append(node);
    mainTitle.append(node2);
    mainTitle.innerHTML += '<div><a target="blank" href="https://github.com/AlvaroAcujim?tab=repositories"><svg class="contactIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Grommet Icons by Grommet - https://www.apache.org/licenses/LICENSE-2.0 --><path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.5 10.5 0 0 1 12 6.32a10.5 10.5 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/></svg></a><a target="blank" href="https://www.linkedin.com/in/%C3%A1lvaroacu%C3%B1ajim%C3%A9nez-fullstack/"><svg class="contactIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path></svg></a></div>'
    
    void mainTitle.offsetWidth;
     mainTitle.classList.remove('fade-out');
    mainTitle.classList.add('fade-in');
    setTimeout(() => {
      mainTitle.classList.remove('fade-in');
    }, 800);
},800)
    
}