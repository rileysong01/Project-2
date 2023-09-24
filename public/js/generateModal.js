document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-target').replace('#imageModal', '');
            const modal = document.querySelector(`#imageModal${index}`);
            
        });
    });
});
