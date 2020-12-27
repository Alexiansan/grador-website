particlesJS.load('particles-js', 'static/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
function copy() {
    let text = document.getElementById("ip").textContent.trim();
    copyTextToClipboard(text);
}
function copy_two() {
    let text = document.getElementById("ip-2").textContent.trim();
    copyTextToClipboard_two(text);
}

async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        let tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "IP copié dans votre Presse-papiers !";
        setTimeout(function() {tooltip.innerHTML = "Copier dans le Presse-papiers";}, 2000);
    } catch (err) {
        alert('Erreur pendant la copie dans le Presse-papiers: ', err);
    }
}
async function copyTextToClipboard_two(text) {
    try {
        await navigator.clipboard.writeText(text);
        let tooltip = document.getElementById("myTooltip-2");
        tooltip.innerHTML = "IP copié dans votre Presse-papiers !";
        setTimeout(function() {tooltip.innerHTML = "Copier dans le Presse-papiers";}, 2000);
    } catch (err) {
        alert('Erreur pendant la copie dans le Presse-papiers: ', err);
    }
}
function mail_to() {
        let tooltip = document.getElementById("tool-tip-email");
        tooltip.innerHTML = "Email ouvert dans votre application !";
        setTimeout(function() {tooltip.innerHTML = "Ouvir les mails";}, 2000);
}
