# DetectorDePrivacidade

ALUNOS:

- [Laís Nascimento da Silva](https://github.com/LaisNSilva/)
- [William Augusto Reis da Silva](https://github.com/williamars/)

Features:

- Lista os Cookies e Supercookies 
   * O método foi utilizar o `browser.cookies.getAll()`
- Lista o Armazenamento Local
   * O método foi listar a partir do content script, que pega as informações da página corrente e passa informação para a página da extensão
- Lista as conexões externas
   * Mesma coisa do armazenamento, porém analisa as tags que tem na página, caso seja um link é uma conexão externa
- Possibilidades de Hijacking:
   * Semelhante às conexões externas, analisa as tags de link que possuem como link um javascript
- Detecção de Canvas Fingerprint
   * Analisa a página corrente vendo se possui a tag canva
- Política de Privacidade
   * Analisa a página corrente vendo se dentro das tags `<a>`, existe o texto "Política de Privacidade" ou "Privacy Policy", porque a maioria das páginas possui a sua política de privacidade dentro de um link
- Pontuação: Os valores foram baseados em experiência própria de analisar diversos sites e analisar a quantidade que tinham de cookies e conexões externas:
   *    Maior que 150: Perigoso
   *    Entre 80 e 150: Cuidado
   *    Menor que 80: Seguro
