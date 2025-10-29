# 💌 17 Cartas Românticas - Guia Completo

Um projeto especial de calendário de cartas que revela uma mensagem romântica a cada dia!

## 🎯 Como Funciona

- **17 cartas**, uma liberada por dia automaticamente
- Cada carta começa com uma **letra maiúscula e destacada**
- As 17 letras, quando reorganizadas, formam: **"QUER NAMORAR COMIGO?"**
- Sistema de bloqueio por data (cartas futuras ficam trancadas)
- Design responsivo e romântico
- Animações suaves e elegantes

## 📝 Personalização OBRIGATÓRIA

### 1. Definir a Data de Início

Abra o arquivo `script.js` e altere a linha 2:

```javascript
const CONFIG = {
    startDate: '2024-11-01', // ⚠️ ALTERE AQUI!
};
```

**Exemplo:** Se você quer começar em 1º de dezembro de 2024:
```javascript
startDate: '2024-12-01',
```

### 2. Personalizar as Mensagens

No arquivo `script.js`, procure o array `LETTERS` (começa na linha ~12).

**IMPORTANTE:** Mantenha a estrutura das letras (Q-U-E-R-N-A-M-O-R-A-R-C-O-M-I-G-O) para formar a frase!

Exemplo de como editar uma carta:

```javascript
{
    id: 1,
    letter: 'Q', // NÃO ALTERE AS LETRAS!
    message: `Coloque sua mensagem aqui...
    
Pode usar múltiplas linhas.

Com carinho ♥` // Personalize o conteúdo
},
```

### 3. Adicionar Seu Nome na Última Carta

Na **carta 17** (última do array), substitua `[Seu nome aqui]` pelo seu nome:

```javascript
message: `...
Com todo meu amor,
João` // ⬅️ Coloque seu nome aqui
```

## 🎨 Personalização Opcional

### Cores

Edite o arquivo `styles.css` (linhas 1-9) para mudar a paleta de cores:

```css
:root {
    --primary-color: #d4526e;      /* Cor principal (rosa) */
    --secondary-color: #ff8fab;    /* Cor secundária */
    --accent-color: #ffb3c1;       /* Cor de destaque */
    --dark-color: #2d3142;         /* Cor do texto */
    --light-color: #fef6f6;        /* Fundo claro */
}
```

### Adicionar Música de Fundo

1. Adicione um arquivo de música chamado `music.mp3` na mesma pasta dos arquivos
2. Formatos aceitos: MP3, OGG, WAV
3. O botão de controle aparece automaticamente no canto inferior direito

Se não quiser música, pode ignorar - o botão ficará lá mas sem funcionar (sem problemas).

### Adicionar Fotos nas Cartas

Para adicionar uma imagem em uma carta específica, edite a mensagem no `script.js`:

```javascript
message: `Sua mensagem aqui...

<img src="foto.jpg" style="width:100%; max-width:400px; border-radius:15px; margin:20px 0;">

Mais texto aqui ♥`
```

**IMPORTANTE:** Coloque as fotos na mesma pasta dos arquivos HTML/CSS/JS.

## 🚀 Como Hospedar no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Entre no [GitHub](https://github.com)
2. Clique em **"New repository"** (Novo repositório)
3. Nome sugerido: `17-cartas-romanticas` (ou o que preferir)
4. Marque como **Public** (Público)
5. **NÃO** marque "Add a README"
6. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos

**Opção A - Via Interface Web (Mais Fácil):**

1. No seu repositório novo, clique em **"uploading an existing file"**
2. Arraste os arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `music.mp3` (se tiver)
   - Qualquer foto que tenha adicionado
3. Escreva uma mensagem de commit: "Adicionar projeto de cartas"
4. Clique em **"Commit changes"**

**Opção B - Via Git (Terminal):**

```bash
# Na pasta do projeto
git init
git add .
git commit -m "Adicionar projeto de cartas"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/17-cartas-romanticas.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **"Source"**, selecione **"Deploy from a branch"**
4. Em **"Branch"**, selecione **main** e pasta **/ (root)**
5. Clique em **Save**
6. Aguarde 2-3 minutos

### Passo 4: Acessar Seu Site

Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/17-cartas-romanticas/
```

**Exemplo:** Se seu usuário for "joaosilva123" e o repo "cartas-namoro":
```
https://joaosilva123.github.io/cartas-namoro/
```

## 📱 Testando Localmente

Antes de fazer upload, você pode testar localmente:

1. Abra o arquivo `index.html` diretamente no navegador, OU
2. Use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (se tiver)
   npx serve
   ```
3. Acesse `http://localhost:8000`

## 🐛 Solução de Problemas

### "As cartas não estão desbloqueando"

- Verifique se alterou a `startDate` no `script.js`
- Certifique-se de que a data está no formato correto: `'YYYY-MM-DD'`
- Exemplo: `'2024-12-01'` para 1º de dezembro de 2024

### "O site não aparece no GitHub Pages"

- Aguarde 5 minutos após ativar
- Verifique se o arquivo se chama exatamente `index.html` (minúsculas)
- Certifique-se de que está na branch `main`
- Limpe o cache do navegador (Ctrl + F5)

### "A música não toca"

- Navegadores modernos bloqueiam autoplay
- O usuário precisa clicar no botão 🎵 para iniciar
- Certifique-se de que o arquivo se chama exatamente `music.mp3`

### "As letras não formam a frase certa"

- NÃO altere a ordem das cartas no array `LETTERS`
- NÃO mude as letras individuais
- A sequência correta é: Q-U-E-R-N-A-M-O-R-A-R-C-O-M-I-G-O

## 💡 Dicas Extras

### Compartilhar com Ela

Você pode:
1. **Enviar o link direto** do GitHub Pages
2. **Encurtar o link** usando [bit.ly](https://bitly.com) para algo mais bonito
3. **Criar um QR Code** do link e imprimir
4. **Criar uma página de redirecionamento** com um domínio personalizado

### Privacidade

- O repositório pode ser **Private** se você tiver GitHub Pro/Student
- Com conta gratuita, precisa ser **Public** para usar GitHub Pages
- Não coloque informações muito pessoais/sensíveis no código

### Backup

- Mantenha uma cópia local dos arquivos
- Faça commits regulares no GitHub
- Considere fazer um PDF das mensagens como backup

## 🎓 Estrutura dos Arquivos

```
seu-projeto/
│
├── index.html          # Estrutura da página
├── styles.css          # Estilos e design
├── script.js           # Lógica e funcionamento
├── music.mp3           # (Opcional) Música de fundo
└── README.md           # Este arquivo
```

## 🎉 Dicas para o Grande Dia

1. **Teste tudo** alguns dias antes
2. **Mostre para um amigo** testar se está funcionando
3. **Prepare-se** para a reação dela! 😊
4. **Tire prints** das cartas como lembrança
5. **Tenha um plano B** (se a internet falhar, tenha as mensagens impressas)

## ❤️ Boa Sorte!

Espero que ela diga SIM! 🎊

Se tiver dúvidas ou problemas, não hesite em pedir ajuda!

---

**Criado com ♥ para momentos especiais**
