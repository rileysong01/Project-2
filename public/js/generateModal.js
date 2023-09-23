document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var index = this.getAttribute('data-target').replace('#imageModal', '');
            var modal = document.querySelector(`#imageModal${index}`);
            
        
            // modal.querySelector('.modal-body').innerHTML = '<p>Content for card ' + index + '</p>';
        });
    });
});
