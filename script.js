// Animação de entrada dos elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.servico-item, .card, .stat-item, .diferencial-principal');
    
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Efeito de hover suave nos cards
function addHoverEffects() {
    const cards = document.querySelectorAll('.servico-item, .card, .stat-item, .diferencial-principal');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Animação de contadores para estatísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const isHours = target.includes('h');
        
        let numericValue;
        if (isPercentage) {
            numericValue = parseInt(target.replace('%', ''));
        } else if (isPlus) {
            numericValue = parseInt(target.replace('+', ''));
        } else if (isHours) {
            numericValue = parseInt(target.replace('h', ''));
        } else {
            numericValue = parseInt(target);
        }
        
        let current = 0;
        const increment = numericValue / 50; // Animação em 50 steps
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (isPercentage) displayValue += '%';
            if (isPlus) displayValue += '+';
            if (isHours) displayValue += 'h';
            
            counter.textContent = displayValue;
        }, 30);
    });
}

// Inicialização quando a página carregar
window.addEventListener('load', () => {
    // Adicionar efeitos de hover
    addHoverEffects();
    
    // Configurar animações de scroll
    const elements = document.querySelectorAll('.servico-item, .card, .stat-item, .diferencial-principal');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Animar contadores após um pequeno delay
    setTimeout(animateCounters, 500);
});

// Event listeners para scroll
window.addEventListener('scroll', animateOnScroll);