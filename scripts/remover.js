
chrome.storage.local.get(["stat"], async function (result) {
    if(result.stat) setInterval(check_and_change, 500);
});

function check_and_change() {
    logo = document.querySelectorAll('._aamu._ae3_._agge');
    logo.forEach(i => {
        i.innerHTML = ` `;
    });
}