import { useState } from 'react'
import './App.css'

const equipamentos = [
  {
    "id": 1,
    "nome": "iMac 27\" (Late 2013)",
    "especificacao": "Desktop Apple iMac 27\" (Late 2013), Intel Core i5 3,2 GHz, 8 GB RAM, GPU NVIDIA GeForce GT 755M 1 GB, macOS Catalina 10.15.7",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 2,
    "nome": "Cabo Mini DisplayPort para DisplayPort branco",
    "especificacao": "Cabo de vídeo Mini DisplayPort macho para DisplayPort macho, cor branca, comprimento aproximado 2 m",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 3,
    "nome": "Cabo HDMI",
    "especificacao": "Cabo HDMI padrão, uso geral para conexão de vídeo/áudio",
    "quantidade": 13,
    "local": null
  },
  {
    "id": 4,
    "nome": "Cabo XLR de microfone",
    "especificacao": "Cabo XLR de microfone, conector fêmea em um lado, cor preta, comprimento longo (aprox.)",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 5,
    "nome": "Extensão elétrica 3 tomadas",
    "especificacao": "Extensão elétrica com 3 tomadas tripolares padrão brasileiro, corpo e cabo na cor preta",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 6,
    "nome": "Cabo USB A para USB B branco",
    "especificacao": "Cabo USB tipo A macho para USB tipo B macho, cor branca, uso típico para impressoras/dispositivos externos",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 7,
    "nome": "Cabo USB A para micro USB preto",
    "especificacao": "Cabo USB tipo A macho para micro USB (Micro-B) macho, cor preta, comprimentos variados",
    "quantidade": 3,
    "local": null
  },
  {
    "id": 8,
    "nome": "Cabo de força tipo PC",
    "especificacao": "Cabo de força com plugue tripolar padrão brasileiro NBR 14136 e conector IEC C13 (tipo PC), cor preta, comprimento longo",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 9,
    "nome": "Flash Canon com difusor",
    "especificacao": "Flash externo Canon Speedlite com difusor plástico acoplado, montagem em sapata de câmera",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 10,
    "nome": "Câmera Canon EOS 70D (corpo)",
    "especificacao": "Corpo de câmera DSLR Canon EOS 70D, sem lente, com alça original EOS 70D",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 11,
    "nome": "Lente Canon zoom com para-sol",
    "especificacao": "Lente zoom Canon para câmeras DSLR com montagem EF/EF-S, acabamento preto, com para-sol acoplado",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 12,
    "nome": "Carregador de bateria Canon com cabo",
    "especificacao": "Carregador de bateria Canon para câmeras DSLR, com cabo de força preto e adaptador de tomada tripolar padrão brasileiro",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 13,
    "nome": "Gravador de áudio Zoom com windscreen",
    "especificacao": "Gravador de áudio portátil Zoom com tela frontal e capa de espuma (windscreen) azul escuro",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 14,
    "nome": "Microfone RØDE direcional para câmera",
    "especificacao": "Microfone shotgun RØDE para câmera, com shock mount integrado e cabo P2 (3,5 mm) em L",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 15,
    "nome": "Bateria Canon para câmera DSLR",
    "especificacao": "Bateria Canon recarregável para câmera DSLR, acondicionada em estojo plástico transparente",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 16,
    "nome": "Câmera GoPro com suporte",
    "especificacao": "Câmera de ação GoPro em case de proteção com suporte articulado e base de fixação",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 17,
    "nome": "Adaptador HDMI para VGA com áudio",
    "especificacao": "Adaptador HDMI macho para VGA fêmea, corpo preto, com saída de áudio line-out e adesivos coloridos de identificação",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 18,
    "nome": "Mini tripé de mesa",
    "especificacao": "Mini tripé de mesa preto com cabeça metálica ajustável e parafuso padrão para câmera/suporte",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 19,
    "nome": "Suporte de celular para tripé",
    "especificacao": "Suporte ajustável para smartphone, em plástico preto, com rosca padrão para tripé",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 20,
    "nome": "Cabeça ball head para tripé",
    "especificacao": "Cabeça articulada tipo ball head, cor preta, com parafuso padrão para câmera e trava lateral",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 21,
    "nome": "Filtro de linha 6 tomadas com medidor",
    "especificacao": "Filtro de linha branco com 6 tomadas universais, chave liga/desliga, LEDs indicadores e medidor analógico de corrente, cabo de alimentação cinza",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 22,
    "nome": "Fonte de alimentação AC/DC genérica",
    "especificacao": "Fonte de alimentação tipo carregador externo, corpo preto retangular, cabo AC com plugue de 2 pinos padrão brasileiro e cabo DC fixo",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 23,
    "nome": "Carregador Lenovo Slim Tip",
    "especificacao": "Fonte de alimentação Lenovo para notebook, conector DC Slim Tip retangular amarelo, corpo preto retangular com cabo AC de 2 pinos padrão brasileiro",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 24,
    "nome": "Cabo de alimentação 2 pinos para conector DC",
    "especificacao": "Cabo de alimentação preto com plugue de 2 pinos padrão brasileiro em uma ponta e conector cilíndrico fêmea (DC) na outra ponta",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 25,
    "nome": "Cabo de força tipo PC tripolar",
    "especificacao": "Cabo de força preto com plugue tripolar padrão brasileiro NBR 14136 e conector IEC C13 (tipo PC)",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 26,
    "nome": "Cabo de alimentação para luz LED",
    "especificacao": "Cabo de alimentação 12V para luz/painel LED, com plugue para acendedor de cigarro automotivo em uma ponta e conector circular metálico na outra",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 27,
    "nome": "Microfone shotgun Azden",
    "especificacao": "Microfone shotgun Azden com espuma antirruído (windscreen) e suporte de fixação",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 28,
    "nome": "Teclado Microsoft com fio",
    "especificacao": "Teclado Microsoft padrão ABNT2 com teclado numérico, conexão USB, cor preta",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 29,
    "nome": "Mouse Microsoft com fio",
    "especificacao": "Mouse óptico Microsoft com fio, conexão USB, cor preta, adesivo verde de identificação",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 30,
    "nome": "Apple Magic Mouse",
    "especificacao": "Apple Magic Mouse sem fio, superfície multitoque, cor branca",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 31,
    "nome": "Gravador de áudio Zoom H4n",
    "especificacao": "Gravador portátil Zoom H4n Handy Recorder, corpo prateado/preto, com cápsulas estéreo XY integradas e estojo plástico",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 32,
    "nome": "Cabo USB A para mini USB preto",
    "especificacao": "Cabo USB tipo A macho para mini USB (Mini-B) macho, cor preta, com abraçadeira de velcro",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 33,
    "nome": "Microfone de lapela com cabo longo",
    "especificacao": "Microfone de lapela (lavalier) com cápsula com espuma, presilha de fixação, conector P2 3,5 mm TRRS e cabo longo com abraçadeira de velcro",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 34,
    "nome": "Kit de cabos P2 de áudio",
    "especificacao": "Conjunto de cabos de áudio P2 3,5 mm com conectores macho e fêmea, incluindo plugs retos e em L, alguns com corpo verde, preso com abraçadeira de velcro",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 35,
    "nome": "Cabo USB para conector DC",
    "especificacao": "Cabo de alimentação com conector USB-A macho em uma ponta e plugue cilíndrico DC na outra, cor preta, com abraçadeira de velcro",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 36,
    "nome": "Cabo preto USB A para USB-C",
    "especificacao": "Cabo de dados/alimentação USB tipo A macho para USB tipo C macho, cor preta",
    "quantidade": 1,
    "local": null
  },
  {
    "id": 37,
    "nome": "Cabo extensor P2 fêmea",
    "especificacao": "Cabo extensor de áudio P2 3,5 mm, conector macho em uma ponta e conector fêmea na outra, cor preta, com abraçadeira de velcro",
    "quantidade": 1,
    "local": null
  }
]

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function App() {
  const [busca, setBusca] = useState('')

  const equipamentosFiltrados = equipamentos.filter(equipamento => {
    const termoBusca = normalizarTexto(busca)
    return (
      normalizarTexto(equipamento.nome).includes(termoBusca) ||
      normalizarTexto(equipamento.especificacao).includes(termoBusca) ||
      equipamento.id.toString().includes(busca)
    )
  })

  return (
    <div className="app">
      <h1>Busca de Equipamentos</h1>
      <div className="busca-container">
        <input
          type="text"
          className="campo-busca"
          placeholder="Digite o nome, especificação ou ID do equipamento..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          autoFocus
        />
      </div>
      <div className="resultados">
        {equipamentosFiltrados.length === 0 ? (
          <p className="sem-resultados">Nenhum equipamento encontrado</p>
        ) : (
          <div className="lista-equipamentos">
            {equipamentosFiltrados.map(equipamento => (
              <div key={equipamento.id} className="equipamento-card">
                <div className="equipamento-id">ID: {equipamento.id}</div>
                <div className="equipamento-nome">{equipamento.nome}</div>
                <div className="equipamento-especificacao">{equipamento.especificacao}</div>
                <div className="equipamento-quantidade">Quantidade: {equipamento.quantidade}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
