//prepend an image to the boyd
//cached dom nodes
$( () => {
    // Cached Dom Nodes
    const $modal =$('#modal'); //this is the modal
    const $textBox = $('#modal-textbox'); //this is the textbox in the modal
    const $openModal =$('#openModal'); //this is the button that opens the modal
    const $closeModal =$('#close'); // that starts the game
    // event handlers
    const openModal = (event) => {
        $modal.css('display', 'flex')
    }  
    const closeModal =(event) => {
        $modal.css('display', 'none')
    }
    
    // event listeners
    $openModal.on('click', openModal);
    $closeModal.on('click', closeModal);
});







  // const $image =$("<img>").attr('src', //image url goes here)
    // $("body").append($image);