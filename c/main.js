onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function() {
        const text = "hi z! i surrender, i love u, allow me to be ur bf pls";
        const typingTextElement = document.getElementById('typing-text');
    
        let index = 0;
        function type() {
            if (index < text.length) {
                typingTextElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            } else {
                setTimeout(() => {
                    typingTextElement.textContent = "";
                    index = 0;
                    type();
                }, 5000);
            }
        }
    
        type();
    });
    
