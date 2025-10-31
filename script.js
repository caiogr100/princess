// Configuração do projeto
const CONFIG = {
    startDate: '2025-10-01', // TESTE - todas cartas liberadas
};

const LETTERS = [
    {
        id: 1,
        letter: 'M',
        cardIcon: 'embaixador.png',
        message: `Minha princesa,

Quando te deixei na rodoviária domingo, senti tua falta imediatamente. Não foi aquela falta normal, sabe? Foi algo que me consumiu. E aí, no caminho de volta, eu tive certeza: eu quero dar o mundo pra você.

Te quero só pra mim e te fazer muito feliz. Amei cada segundo do nosso fim de semana juntos, e estou seguro de que a gente vai dar certo.

Então pensei: tu merece algo especial. Algo que mostre tudo que tô sentindo. Algo que assegure ela de que teus problemas serão os meus, que tuas inseguranças estarão seguras ao meu lado, e que eu vou estar lá por ti sendo teu porto seguro.

Decidi escrever.

São 17 cartas. Quero que tu leia uma por dia, sem pular nenhuma. Cada uma fala um pedaço do que tá passando no meu coração, do que eu sinto por ti, e do que eu quero construir contigo.

Vou te ter aos poucos, através das palavras. E no final, quando a gente se encontrar de novo, eu te conto o resto pessoalmente.

Confia em mim?

Com todo meu coração,
Caio

<div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(212, 82, 110, 0.2);">
    <img src="foto1.jpeg" style="width: 100%; max-width: 250px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
</div>`
    },
    {
        id: 2,
        letter: 'O',
        cardIcon: 'praia.png',
        message: `Ontem eu tava relembrando nosso primeiro encontro, e não consigo parar de sorrir.

Nunca tinha tido um primeiro encontro tão incrível. Planejar tudo, levar a minha "lista", escolher os doces que você gosta... ver tua cara de felicidade quando abriu? Aquilo valeu cada segundo.

Mas sabe o que ficou gravado na minha memória pra sempre? você ao meu lado, com o pôr do sol de fundo. Aquela cena é minha favorita. Você como minha copilota foi muito legal (inclusive a parte que a gente saiu da rua).

Ali eu já sabia que seria você.

Caio ♥

<div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(212, 82, 110, 0.2);">
    <img src="foto4.jpeg" style="width: 100%; max-width: 250px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
</div>`
    },
    {
        id: 3,
        letter: 'A',
        cardIcon: 'xadrez.png',
        message: `Adoro que você é uma artista. Adoro que você gosta de cozinhar. Adoro que você joga xadrez.

Tudo em ti me atrai. Teus hobbies, tuas paixões, a forma como tu te dedica às coisas que ama. E sabe o que é mais legal? Eu quero estar ali, do lado, vendo tu brilhar em cada uma dessas coisas.

Vou deixar meu ego de competidor de lado e perder pra ti no xadrez quantas vezes forem necessárias. Porque o prêmio de te ver feliz ganhando vale muito mais que qualquer vitória.

Tu me inspira todos os dias.

Perfeitinho ♥`
    },
    {
        id: 4,
        letter: 'E',
        cardIcon: 'piquenique.png',
        message: `Eu nunca tinha namorado antes de te conhecer. E isso me deixava inseguro, travado. Sabe aquele medo de não saber fazer certo? De não ser o suficiente?

Mas aí vem você. E tu me deixa tão seguro, tão tranquilo, que eu deixo de ser um gatinho assustado e me sinto um leão.

Isso é incrível. Tu é a melhor pessoa pra eu estar ao lado vivendo todas essas primeiras experiências. Contigo, eu não tenho medo de errar, porque sei que a gente aprende junto.

Obrigado por me fazer sentir assim.

Teu bem ♥

<div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(212, 82, 110, 0.2);">
    <img src="foto6.jpeg" style="width: 100%; max-width: 250px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
</div>`
    },
    {
        id: 5,
        letter: 'M',
        cardIcon: 'sushi.png',
        message: `Minha princesa,

Meu dia fica muito melhor quando começo a conversar com você.

Independente de como o dia foi, tu me traz uma paz que eu não sei explicar. Espero que eu possa fazer o mesmo por ti, porque tu merece toda a felicidade do mundo.

Tu é especial demais ♥

Caio`
    },
    {
        id: 6,
        letter: 'N',
        cardIcon: 'med.png',
        message: `Nunca vou esquecer de você me dizendo "te amo" pela primeira vez.

Eu tava lá, todo tenso, e falei uma besteira sobre a "vibe" que a mulher do Casamento às Cegas falou. Tu morreu de rir e soltou, com a maior naturalidade: "te amo".

Fiquei tão bobinho, tão feliz.

Eu te amo, minha princesa. Te amo muito.

Caio ♥`
    },
    {
        id: 7,
        letter: 'C',
        cardIcon: 'cozinhando.png',
        message: `Conhecer tua mãe foi uma experiência inesquecível.

Cheguei tenso demais afinal, nunca tinha conhecido a mãe de ninguém antes. Tomei até cápsula de cafeína pra não chegar acabado (o resultado de 1h de sono depois tu sabe kkkk).

E te ver ali, quietinha, toda tímida, só olhando enquanto tua mãe me enchia de perguntas? Foi muito fofo. Acho que me saí bem, né? Pelo menos espero que sim.

Mais um dia que vai ficar nas nossas memórias. Muito bom ter vivido isso com você.

Teu futuro namorado ♥`
    },
    {
        id: 8,
        letter: 'Q',
        cardIcon: 'Gemini_Generated_Image_5rd6375rd6375rd6.png',
        message: `Queria pedir desculpas por a gente nunca assistir os filmes de verdade.

Bom, pelo menos Harry Potter, principalmente tu toda empolgada querendo me mostrar, e eu ali... te admirando. Fico rindo o tempo inteiro ao invés de prestar atenção na tela, porque a vista é muito melhor.

Prometo melhorar e assistir direito no futuro (talvez... sem garantias). Mas não posso prometer que vou parar de te olhar mais do que o filme.

Tu é minha cena favorita.

Caio ♥`
    },
    {
        id: 9,
        letter: 'A',
        cardIcon: 'athena.png',
        message: `A Athena se apaixonou por mim. Sério, ela não saía mais do meu colo! Foi amor à primeira vista (dela por mim, obviamente).

Agora a Flor... bom, ela é interesseira. Só gostou das minhas coisas, principalmente do meu tênis... mas tá tudo bem, vou conquistar ela também. É questão de tempo.

Até tuas gatas sabem que eu vim pra ficar.

Caio ♥

<div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(212, 82, 110, 0.2);">
    <img src="foto5.jpeg" style="width: 100%; max-width: 250px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
</div>`
    },
    {
        id: 10,
        letter: 'R',
        cardIcon: 'internato.png',
        message: `Rio só de pensar na festa do internato.

Tu tá MUUUITO ansiosa, querendo que eu conheça teus amigos, e eu tô empolgado demais junto, por ti, pela gente, por fazer parte da tua vida dessa forma.

Mal posso esperar pra estar lá do teu lado.

Caio ♥`
    },
    {
        id: 11,
        letter: 'U',
        cardIcon: 'cafe.png',
        message: `Uma coisa que temos que falar é sobre teu vício em café.

Tu e tua necessidade diária (às vezes de hora em hora) de cafeína. Já perdi as contas de quantas xícaras tu toma por dia, mas adoro isso em ti.

Prometo aprender a fazer e sempre ter café quentinho esperando quando tu chegar.

Caio ♥

<div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(212, 82, 110, 0.2);">
    <img src="foto2.jpeg" style="width: 100%; max-width: 250px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
</div>`
    },
    {
        id: 12,
        letter: 'O',
        cardIcon: 'paris.png',
        message: `O campeonato em Paris... nunca me senti tão confiante.

Ter teu apoio muda tudo. Vou dar meu máximo, vou lutar por cada ponto, porque quero te orgulhar. Tu me faz sentir que posso conquistar o mundo.

Obrigado por acreditar em mim.

Caio ♥`
    },
    {
        id: 13,
        letter: 'R',
        cardIcon: 'hallo.png',
        message: `Respeito suas inseguranças sobre namorar. Sei que tu tá se curando, trabalhando isso com sua psicóloga, e tô de boa em esperar.

Porque eu tenho certeza que a gente vai dar certo. Tu é incrível, e eu não tenho pressa. Vou estar aqui quando você estiver pronta.

No seu tempo.

Caio ♥`
    },
    {
        id: 14,
        letter: 'G',
        cardIcon: 'carro.png',
        message: `Garanto que bater o carro no caminho de volta do nosso primeiro encontro não tava nos planos.

Assustei você, seus pais, e até a mim mesmo. Mas é que eu tava flutuando depois de te ver. Minha cabeça não tava no volante, tava em ti.

Pelo menos agora tu sabe o efeito que causa em mim.

Caio ♥`
    },
    {
        id: 15,
        letter: 'I',
        cardIcon: 'pintura.png',
        message: `Ida e volta. Pelotas ↔ Rio Grande. O Embaixador virou meu melhor amigo.

A distância não é fácil, mas vale cada quilômetro. Vale cada viagem. Vale cada segundo, porque no final do caminho, tu tá lá me esperando.

E isso faz tudo valer a pena.

Na verdade ela parece algo tão pequeno perto do que sinto por ti.

Caio ♥`
    },
    {
        id: 16,
        letter: 'O',
        cardIcon: 'congresso.png',
        message: `O futuro. Nossos planos.

Quero fazer parte de tudo que tu sonha. Quero ir contigo nos congressos, conhecer cada cidade nova, estar ali quando tu conquistar cada objetivo.

Sei o quanto esses momentos são importantes pra ti, e eu quero viver isso junto. Não só te esperando em casa, mas caminhando do teu lado.

Porque teu futuro é onde eu quero estar.

Caio ♥

<div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(212, 82, 110, 0.2);">
    <img src="foto3.jpeg" style="width: 100%; max-width: 250px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s ease;">
</div>`
    },
    {
        id: 17,
        letter: 'R',
        cardIcon: 'pedido.png',
        message: `Minha princesa,

Ri, sorri, me apaixonei.

Teu sorriso é minha coisa favorita no mundo inteiro. Quando tu sorri, tudo faz sentido. Cada quilômetro de distância, cada carta escrita, cada momento esperando, tudo vale a pena só pra ver tu feliz assim.

Durante esses 17 dias, eu te contei um pouco de cada pedaço do que sinto por ti. Mas tinha um segredo escondido em cada carta.

Se tu pegar a primeira palavra de cada uma e olhar só pra primeira letra, vai formar algo:

Minha (Carta 1)
Ontem (Carta 2)
Adoro (Carta 3)
Eu (Carta 4)
Meu (Carta 5)
Nunca (Carta 6)
Conhecer (Carta 7)
Queria (Carta 8)
A Athena (Carta 9)
Rio (Carta 10)
Uma (Carta 11)
O campeonato (Carta 12)
Respeito (Carta 13)
Garanto (Carta 14)
Ida (Carta 15)
O futuro (Carta 16)
Ri (Carta 17)

Agora, reorganizando essas letras na ordem certa, elas formam:

**Q-U-E-R N-A-M-O-R-A-R C-O-M-I-G-O?**

Mas eu sei que você precisa de tempo para ter certeza. E está tudo bem.

Essas 17 cartas não eram pra te pressionar, eram pra te mostrar o quanto eu me importo, o quanto você é especial pra mim, e o quanto estou disposto a esperar.

Não tenho pressa. Quero que tu tenha certeza, que esteja pronta de verdade. Porque quando for pra valer, quero que seja com o coração tranquilo, sem dúvidas, sem tuas inseguranças te prendendo.

Vou estar aqui, do teu lado, enquanto tu trabalha isso com tua psicóloga, enquanto se cura, enquanto se descobre. Sem pressão, sem cobranças. Só com amor e paciência.

Quando tu estiver pronta, eu vou estar aqui esperando. Com a certeza de que vale a pena.

Te amo, minha princesa. Do jeito que tu é, no tempo que tu precisa.

Com todo meu amor e respeito,
Caio ♥`
    },
    {
        id: 18,
        letter: 'L',
        cardIcon: 'her.png',
        message: `Eita tu denovo aqui princesa?

Achei 17 um número muito pequeno, por mim eu escreveria pra ti todos os dias. Acho que faltariam palavras pra te demonstrar o quanto te acho a pessoa mais incrível que conheci e o quanto quero te fazer feliz.

Te amo, Larissa (um pouquinho só ta, não se acha muito...)

Caio ♥`
    }
];

// Gerenciamento de datas
class DateManager {
    constructor(startDate) {
        this.startDate = new Date(startDate + 'T00:00:00');
    }

    getCurrentDate() {
        const now = new Date();
        const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        console.log('Data atual:', current.toLocaleDateString('pt-BR'));
        return current;
    }

    getCardUnlockDate(cardNumber) {
        const unlockDate = new Date(this.startDate);
        unlockDate.setDate(unlockDate.getDate() + (cardNumber - 1));
        console.log(`Carta ${cardNumber} desbloqueia em:`, unlockDate.toLocaleDateString('pt-BR'));
        return unlockDate;
    }

    isCardUnlocked(cardNumber) {
        const unlockDate = this.getCardUnlockDate(cardNumber);
        const currentDate = this.getCurrentDate();
        const unlocked = currentDate >= unlockDate;
        console.log(`Carta ${cardNumber}: ${unlocked ? 'DESBLOQUEADA' : 'BLOQUEADA'}`);
        return unlocked;
    }

    getNextUnlockDate() {
        const currentDate = this.getCurrentDate();
        for (let i = 1; i <= LETTERS.length; i++) {
            const unlockDate = this.getCardUnlockDate(i);
            if (unlockDate > currentDate) {
                return unlockDate;
            }
        }
        return null;
    }

    getTimeUntilNextUnlock() {
        const nextDate = this.getNextUnlockDate();
        if (!nextDate) return null;

        const now = new Date();
        const tomorrow = new Date(nextDate);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        return { hours, minutes, seconds };
    }
}

// Gerenciamento de estado
class StateManager {
    constructor() {
        this.openedCards = this.loadOpenedCards();
    }

    loadOpenedCards() {
        const saved = localStorage.getItem('openedCards');
        return saved ? JSON.parse(saved) : [];
    }

    saveOpenedCards() {
        localStorage.setItem('openedCards', JSON.stringify(this.openedCards));
    }

    markAsOpened(cardId) {
        if (!this.openedCards.includes(cardId)) {
            this.openedCards.push(cardId);
            this.saveOpenedCards();
        }
    }

    isOpened(cardId) {
        return this.openedCards.includes(cardId);
    }
}

// Classe principal da aplicação
class LetterApp {
    constructor() {
        this.dateManager = new DateManager(CONFIG.startDate);
        this.stateManager = new StateManager();
        this.music = document.getElementById('bgMusic');
        this.musicPlaying = true;
        this.confettiAnimationFrame = null;
        this.heartsAnimationFrame = null;
        
        this.init();
    }

    init() {
        this.renderCards();
        this.setupEventListeners();
        this.startCountdown();
        this.tryAutoplay();
    }

    tryAutoplay() {
        // Tentar tocar imediatamente
        const playPromise = this.music.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Música começou a tocar
                this.musicPlaying = true;
                document.getElementById('musicToggle').classList.remove('paused');
            }).catch(() => {
                // Autoplay bloqueado - adicionar listeners para primeira interação
                this.musicPlaying = false;
                document.getElementById('musicToggle').classList.add('paused');
                
                // Tocar na primeira interação do usuário
                const startMusic = () => {
                    this.music.play().then(() => {
                        this.musicPlaying = true;
                        document.getElementById('musicToggle').classList.remove('paused');
                        // Remover listeners após tocar
                        document.removeEventListener('click', startMusic);
                        document.removeEventListener('keydown', startMusic);
                        document.removeEventListener('touchstart', startMusic);
                    });
                };
                
                document.addEventListener('click', startMusic, { once: true });
                document.addEventListener('keydown', startMusic, { once: true });
                document.addEventListener('touchstart', startMusic, { once: true });
            });
        }
    }

    renderCards() {
        const container = document.getElementById('cardsContainer');
        container.innerHTML = '';

        LETTERS.forEach(letter => {
            const isUnlocked = this.dateManager.isCardUnlocked(letter.id);
            const isOpened = this.stateManager.isOpened(letter.id);
            const unlockDate = this.dateManager.getCardUnlockDate(letter.id);

            const card = document.createElement('div');
            
            // Carta especial L (sempre desbloqueada)
            if (letter.id === 18) {
                card.className = `card special-card ${isOpened ? 'opened' : 'available'}`;
                card.dataset.id = letter.id;
                
                let iconHTML;
                if (letter.cardIcon) {
                    iconHTML = `<img src="${letter.cardIcon}" class="card-custom-icon special-icon" alt="Carta L">`;
                } else {
                    iconHTML = `<div class="card-icon">${isOpened ? '📖' : '💌'}</div>`;
                }
                
                card.innerHTML = `
                    <div class="card-number special-label">Carta L</div>
                    ${iconHTML}
                    <div class="card-status special-status">${isOpened ? '✓ Lida' : '💝 Surpresa!'}</div>
                `;
                card.addEventListener('click', () => this.openCard(letter.id));
            } else {
                card.className = `card ${!isUnlocked ? 'locked' : isOpened ? 'opened' : 'available'}`;
                card.dataset.id = letter.id;

                if (!isUnlocked) {
                    card.innerHTML = `
                        <div class="lock-icon">🔒</div>
                        <div class="card-number">Carta ${letter.id}</div>
                        <div class="card-status">${this.formatDate(unlockDate)}</div>
                    `;
                } else {
                    // Se tem imagem customizada, usa ela, senão usa emoji
                    let iconHTML;
                    if (letter.cardIcon) {
                        iconHTML = `<img src="${letter.cardIcon}" class="card-custom-icon" alt="Carta ${letter.id}">`;
                    } else {
                        iconHTML = `<div class="card-icon">${isOpened ? '📖' : '💌'}</div>`;
                    }
                    
                    card.innerHTML = `
                        <div class="card-number">Carta ${letter.id}</div>
                        ${iconHTML}
                        ${isOpened ? '<div class="card-status">✓ Lida</div>' : '<div class="card-status">👆 Clique aqui</div>'}
                    `;
                    card.addEventListener('click', () => this.openCard(letter.id));
                }
            }

            container.appendChild(card);
        });
    }

    openCard(cardId) {
        const letter = LETTERS.find(l => l.id === cardId);
        if (!letter) return;

        this.stateManager.markAsOpened(cardId);

        if (cardId === 17) {
            this.showFinalModal(letter);
        } else {
            this.showModal(letter);
        }

        this.renderCards();
    }

    showModal(letter) {
        const modal = document.getElementById('modal');
        const letterNumber = document.getElementById('letterNumber');
        const letterInitial = document.getElementById('letterInitial');
        const letterContent = document.getElementById('letterContent');
        const nextBtn = document.getElementById('nextBtn');

        letterNumber.textContent = letter.id;
        
        // Esconder a letra gigante
        letterInitial.style.display = 'none';
        
        // Formatar a mensagem destacando a primeira palavra
        const messageLines = letter.message.split('\n');
        const firstLine = messageLines[0];
        const firstWord = firstLine.split(' ')[0];
        const restOfFirstLine = firstLine.substring(firstWord.length);
        const formattedFirstLine = `<strong style="font-size: 1.3em; color: var(--primary-color);">${firstWord}</strong>${restOfFirstLine}`;
        messageLines[0] = formattedFirstLine;
        
        letterContent.innerHTML = messageLines.join('<br>');

        // Mostrar botão "Próxima" se houver próxima carta desbloqueada
        const nextCard = LETTERS.find(l => l.id === letter.id + 1);
        if (nextCard && this.dateManager.isCardUnlocked(nextCard.id)) {
            nextBtn.style.display = 'block';
            nextBtn.onclick = () => {
                modal.classList.remove('active');
                setTimeout(() => this.openCard(nextCard.id), 300);
            };
        } else {
            nextBtn.style.display = 'none';
        }

        modal.classList.add('active');
    }

    showFinalModal(letter) {
        const modal = document.getElementById('finalModal');
        const puzzleReveal = document.getElementById('puzzleReveal');
        const finalMessage = document.getElementById('finalMessage');

        // Animação das letras formando a frase
        const phrase = 'QUER NAMORAR COMIGO?';
        puzzleReveal.textContent = phrase;

        finalMessage.innerHTML = letter.message.replace(/\n/g, '<br>');

        modal.classList.add('active');

        // Iniciar efeito de corações caindo
        this.startHeartsAnimation();

        // Setup dos botões
        this.setupFinalButtons();

        // Adicionar botão de fechar no modal final
        if (!modal.querySelector('.close-btn')) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-btn';
            closeBtn.innerHTML = '&times;';
            closeBtn.onclick = () => {
                modal.classList.remove('active');
                this.stopConfetti();
            };
            modal.querySelector('.modal-content').prepend(closeBtn);
        }
    }

    setupFinalButtons() {
        const btnSim = document.getElementById('btnSim');
        const btnNao = document.getElementById('btnNao');
        const respostaSim = document.getElementById('respostaSim');
        const finalButtons = document.getElementById('finalButtons');

        // Botão SIM
        btnSim.onclick = () => {
            finalButtons.style.display = 'none';
            respostaSim.style.display = 'block';
            this.startConfetti();
            
            // Parar confetes depois de 5 segundos
            setTimeout(() => {
                this.stopConfetti();
            }, 5000);
        };

        // Contador de tentativas
        let tentativas = 0;
        const mensagens = [
            "Tem certeza? 🥺",
            "Pensa bem... 💭",
            "Sério mesmo? 😢",
            "Última chance! 💔",
            "Não faz isso comigo... 😭",
            "Por favor? 🙏"
        ];

        // Função para mover o botão
        const moverBotao = (button, e = null) => {
            if (e) e.preventDefault();
            
            const maxX = window.innerWidth - 200;
            const maxY = window.innerHeight - 150;
            const randomX = Math.max(10, Math.random() * maxX);
            const randomY = Math.max(10, Math.random() * maxY);
            
            button.style.position = 'fixed';
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
            button.style.transition = 'all 0.3s ease';
            
            // Diminui o botão a cada tentativa
            tentativas++;
            const novoTamanho = Math.max(0.5, 1 - (tentativas * 0.1));
            button.style.transform = `scale(${novoTamanho})`;
            
            // Mostra mensagem
            if (tentativas <= mensagens.length) {
                button.textContent = mensagens[tentativas - 1];
            }
            
            // Depois de 6 tentativas, esconde o botão
            if (tentativas >= 6) {
                setTimeout(() => {
                    button.style.opacity = '0';
                    button.style.pointerEvents = 'none';
                }, 300);
            }
        };

        // Botão NÃO - foge do mouse (desktop)
        btnNao.addEventListener('mouseenter', (e) => {
            moverBotao(e.target);
        });

        // Mobile: touchstart (antes de clicar)
        btnNao.addEventListener('touchstart', (e) => {
            moverBotao(e.target, e);
        });

        // Mobile/Desktop: click (backup)
        btnNao.addEventListener('click', (e) => {
            moverBotao(e.target, e);
        });
    }

    startHeartsAnimation() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const hearts = [];
        const heartSymbols = ['♥', '💕', '💖', '💗', '💓'];

        class Heart {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = -20;
                this.speed = 1 + Math.random() * 2;
                this.symbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                this.size = 20 + Math.random() * 20;
                this.opacity = 0.5 + Math.random() * 0.5;
                this.swing = Math.random() * 2 - 1;
            }

            update() {
                this.y += this.speed;
                this.x += this.swing;
                if (this.y > canvas.height) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.globalAlpha = this.opacity;
                ctx.font = `${this.size}px Arial`;
                ctx.fillText(this.symbol, this.x, this.y);
            }
        }

        // Criar corações
        for (let i = 0; i < 30; i++) {
            hearts.push(new Heart());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            hearts.forEach(heart => {
                heart.update();
                heart.draw();
            });
            this.heartsAnimationFrame = requestAnimationFrame(animate);
        };

        animate();
    }

    startConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        
        // Cancelar animação de corações
        if (this.heartsAnimationFrame) {
            cancelAnimationFrame(this.heartsAnimationFrame);
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const confetti = [];
        const colors = ['#d4526e', '#ff8fab', '#ffb3c1', '#ffd700', '#ff69b4'];

        class ConfettiPiece {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = -20;
                this.speed = 3 + Math.random() * 5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.size = 5 + Math.random() * 10;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = (Math.random() - 0.5) * 10;
                this.swing = (Math.random() - 0.5) * 2;
            }

            update() {
                this.y += this.speed;
                this.x += this.swing;
                this.rotation += this.rotationSpeed;
                if (this.y > canvas.height) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * Math.PI / 180);
                ctx.fillStyle = this.color;
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }
        }

        // Criar confetes
        for (let i = 0; i < 150; i++) {
            confetti.push(new ConfettiPiece());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            confetti.forEach(piece => {
                piece.update();
                piece.draw();
            });
            this.confettiAnimationFrame = requestAnimationFrame(animate);
        };

        animate();
    }

    stopConfetti() {
        if (this.confettiAnimationFrame) {
            cancelAnimationFrame(this.confettiAnimationFrame);
        }
        if (this.heartsAnimationFrame) {
            cancelAnimationFrame(this.heartsAnimationFrame);
        }
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    setupEventListeners() {
        // Fechar modal
        document.getElementById('closeBtn').addEventListener('click', () => {
            document.getElementById('modal').classList.remove('active');
        });

        // Fechar modal clicando fora
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                document.getElementById('modal').classList.remove('active');
            }
        });

        document.getElementById('finalModal').addEventListener('click', (e) => {
            if (e.target.id === 'finalModal') {
                document.getElementById('finalModal').classList.remove('active');
            }
        });

        // Controle de música
        document.getElementById('musicToggle').addEventListener('click', () => {
            this.toggleMusic();
        });

        // Controle de volume
        const volumeSlider = document.getElementById('volumeSlider');
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value / 100;
            this.music.volume = volume;
            
            // Atualizar gradiente do slider
            const percentage = e.target.value;
            e.target.style.background = `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
        });

        // Definir volume inicial
        this.music.volume = 0.7; // 70%
    }

    toggleMusic() {
        const btn = document.getElementById('musicToggle');
        
        if (this.musicPlaying) {
            this.music.pause();
            btn.classList.add('paused');
            btn.textContent = '🔇';
            this.musicPlaying = false;
        } else {
            this.music.play().catch(() => {
                console.log('Autoplay bloqueado pelo navegador');
            });
            btn.classList.remove('paused');
            btn.textContent = '🎵';
            this.musicPlaying = true;
        }
    }

    startCountdown() {
        const updateCountdown = () => {
            const timeLeft = this.dateManager.getTimeUntilNextUnlock();
            const timer = document.getElementById('countdown-timer');
            const container = document.getElementById('countdown');

            if (!timeLeft) {
                container.style.display = 'none';
                return;
            }

            container.style.display = 'block';
            timer.textContent = `${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`;
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);

        // Verificar a cada minuto se há novas cartas disponíveis
        setInterval(() => {
            this.renderCards();
        }, 60000);
    }

    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${day}/${month}`;
    }
}

// Inicializar app quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new LetterApp();
});
