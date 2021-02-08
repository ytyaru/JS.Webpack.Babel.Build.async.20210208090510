import 'core-js';
import 'regenerator-runtime/runtime';
window.addEventListener('load', async(event) => {
    const text = await Loader.load('./main.js');
    document.querySelector('#source').textContent = text;
});
