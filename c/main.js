onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function() {
        const text = "hi z! i love u more as what u want";
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
    
