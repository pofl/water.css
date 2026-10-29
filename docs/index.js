const darkSelector = 'theme-dark';
const lightSelector = 'theme-light';

document.querySelector('#theme-form').addEventListener('change', (e) => {
    const body = document.querySelector('body');
    const themeExampleCode = document.querySelector('#theme-example-code');

    let selector = '';
    switch(e.target.value){
        case 'dark': selector = darkSelector; break;
        case 'light': selector = lightSelector; break;
        default:
    }

    if (selector === '') {
        body.classList.remove(darkSelector);
        body.classList.remove(lightSelector);

        themeExampleCode.innerHTML = `&lt;body&gt;<br>    ...<br>&lt;/body&gt;`;

        return;
    }

    if (selector === darkSelector) {
        body.classList.remove(lightSelector);
        body.classList.add(darkSelector);
    }

    if (selector === lightSelector) {
        body.classList.remove(darkSelector);
        body.classList.add(lightSelector);
    }


    themeExampleCode.innerHTML = `&lt;body class="${selector}"&gt;<br>    ...<br>&lt;/body&gt;`;
});
