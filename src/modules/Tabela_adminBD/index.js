import { useState } from "react";
import styles from "./index.module.css"
import TabelaAdmin from '../../components/TabelaAdmin'

export default function Tabela_adminBD() {
  const [ano, setAno] = useState("");
  const [tableAno, setTableAno] = useState("")
  const [showTabela, setShowTabela] = useState(false)
  const [table, setTable] = useState()
  const [existeDados, setExisteDados] = useState(true)
  const [preenchido, setPreenchido] = useState(true)

  function handleInput(target) {
    let numero = target.value.replace(/\D/g, '');
    if (numero.length > 4) numero = numero.slice(0, 4);
    setAno(numero)
    setExisteDados(true)
    setPreenchido(true)
  }

  async function searchDatabase() {
    // for (const c of data.Tabela){
    //   axios.post('/api/consultaBD/' + c.NrCP, c)
    // }
    if (ano === "") { setPreenchido(false); setShowTabela(false); return }
    // if (Number(ano) < 1929) { setExisteDados(false); setShowTabela(false); return }
    // let response = await fetch("api/consultaBD/" + ano)
    // response = await response.json()
    let response = [{"NrCP":1,"Posto":"───","Arma":"───","Curso":"───","Nome":"NILTON ANDRADE CAVALCANTI"},{"NrCP":10,"Posto":"SARGENTO","Arma":"ARTILHARIA","Curso":"MONITOR","Nome":"ARGEU DE CARVALHO MORAES"},{"NrCP":11,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"ARLINDO PEÇANHA"},{"NrCP":12,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"ARMANDO LEONARDI"},{"NrCP":13,"Posto":"1º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"ARTUR FERRAZ DURÃO"},{"NrCP":14,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"AURINO TENORIO DE MEDEIROS"},{"NrCP":15,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"BASILIO GONÇALVES DA CUNHA"},{"NrCP":16,"Posto":"SARGENTO","Arma":"ENGENHARIA","Curso":"MONITOR","Nome":"BENEDITO LUIS RODRIGUES"},{"NrCP":17,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"BERNARDINO GUILHERME DA SILVA"},{"NrCP":18,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"BRUNO STEFANI"},{"NrCP":19,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"CAETANO DO ESPÍRITO SANTO BAIA"},{"NrCP":2,"Posto":"SARGENTO","Arma":"ARTILHARIA","Curso":"MONITOR","Nome":"AFONSO BLUM"},{"NrCP":20,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"CARLINDO GONÇALVES LOPES"},{"NrCP":21,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"CASSEMIRO LEOPOLDINO LAMIM"},{"NrCP":22,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"CHRISTOVÃO ALVES SIQUEIRA"},{"NrCP":23,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"CLODOALDO LOPES DE ANDRADE"},{"NrCP":24,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"DAGOBERTO BARCELOS ALVES"},{"NrCP":25,"Posto":"1º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"ELISIO WANDERLEY DE GUSMÃO"},{"NrCP":26,"Posto":"SARGENTO","Arma":"ARTILHARIA","Curso":"MONITOR","Nome":"EMILIO ROSSI"},{"NrCP":27,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"EPAMINONDAS CARLOS DE ALBUQUERQUE"},{"NrCP":28,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"FELICIANO MARQUES GUIMARÃES"},{"NrCP":29,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"FELIPE MACEDO CARDOSO"},{"NrCP":3,"Posto":"SARGENTO","Arma":"CAVALARIA","Curso":"MONITOR","Nome":"ALBERTO ALEVATO RODRIGUES"},{"NrCP":30,"Posto":"1º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"FRANCISCO BARROSO DE SOUSA"},{"NrCP":31,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"FRANCISCO JOSÉ BARBOSA"},{"NrCP":32,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"GABRIEL DINIZ JUNQUEIRA FILHO"},{"NrCP":33,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"GUMERCINDO CLEMENTINO DA COSTA"},{"NrCP":34,"Posto":"SARGENTO","Arma":"ARTILHARIA","Curso":"MONITOR","Nome":"HENRIQUE RODRIGUES"},{"NrCP":35,"Posto":"SARGENTO","Arma":"ARTILHARIA","Curso":"MONITOR","Nome":"HILDEBRANDO SANTANA FIGUEIREDO"},{"NrCP":36,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"HIPOLITO ALVES BASTOS"},{"NrCP":37,"Posto":"3º SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"JOÃO BATISTA DE GODOY"},{"NrCP":38,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"JOÃO STRIGUINE LOPES"},{"NrCP":39,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"JOSÉ DA SILVA ALBUQUERQUE"},{"NrCP":4,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"ALBERTO DE CARVALHO PERRIRAZ"},{"NrCP":40,"Posto":"1º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"JOSÉ DE ABREU COUTINHO"},{"NrCP":41,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"JOSÉ LOPES DE MEDEIROS"},{"NrCP":42,"Posto":"3º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"JOSÉ MENA BARRETO DE FREITAS"},{"NrCP":43,"Posto":"SARGENTO","Arma":"ARTILHARIA","Curso":"MONITOR","Nome":"JOSÉ OLEGARIO DIAS"},{"NrCP":44,"Posto":"1º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"KRONGE POMBEL"},{"NrCP":45,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"LAURINDO AUGUSTO DE ARAUJO"},{"NrCP":46,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"LEANDRO DE OLIVEIRA BARROS FILHO"},{"NrCP":47,"Posto":"SARGENTO","Arma":"ARTILHARIA","Curso":"MONITOR","Nome":"LEMIRIO FERREIRA"},{"NrCP":48,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"LEOVEGILDO DE CAMPOS MARTINS"},{"NrCP":49,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"LINDONOR ALVES CABRAL"},{"NrCP":5,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"ALUIZIO MARQUES DA SILVA"},{"NrCP":50,"Posto":"1º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"LOURIVAL FERNANDES BISPO"},{"NrCP":51,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"LUIZ CORRÊA MARQUES"},{"NrCP":52,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"MARIO PINTO DE FARIAS"},{"NrCP":53,"Posto":"1º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"ODJALMES DE LUNA FREIRE"},{"NrCP":54,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"ORLANDO DE SANTA HELENA ORICO"},{"NrCP":55,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"PALEMON MARTINS VALE"},{"NrCP":56,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"PASCHOAL STORINO"},{"NrCP":57,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"PAULO TEIXEIRA"},{"NrCP":58,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"PAULO VIEIRA ASP"},{"NrCP":59,"Posto":"SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"RANULFO ROCHA"},{"NrCP":6,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"ANTONIO ALVES MARTINS"},{"NrCP":60,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"WALFREDO DE CAMPOS MAIA"},{"NrCP":61,"Posto":"SARGENTO","Arma":"EXÉRCITO","Curso":"MONITOR","Nome":"WALTER GASSENFERTH JUNIOR"},{"NrCP":62,"Posto":"1º TENENTE","Arma":"INFANTARIA","Curso":"INSTRUTOR","Nome":"ABILIO DA CUNHA PONTES"},{"NrCP":63,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"ADALBERTO ALVES MACHADO"},{"NrCP":64,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"ANTENOR DE CASTRO ULTRA"},{"NrCP":65,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"BENEDITO JOSE RODRIGUES"},{"NrCP":66,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"EDUARDO DE SOUZA CIPRIANO"},{"NrCP":67,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"EUCLIDES TELEMACO DO NASCIMENTO"},{"NrCP":68,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"HILARIO DA SILVA PASSOS"},{"NrCP":69,"Posto":"1º TENENTE","Arma":"INFANTARIA","Curso":"INSTRUTOR","Nome":"JACY GUIMARÃES"},{"NrCP":7,"Posto":"SARGENTO","Arma":"ARTILHARIA","Curso":"MONITOR","Nome":"ANTONIO AUGUSTO RIBEIRO DA PAIXÃO"},{"NrCP":70,"Posto":"1º TENENTE","Arma":"ENGENHARIA","Curso":"INSTRUTOR","Nome":"JARBAS CAVALCANTI DE ARAGAO"},{"NrCP":71,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"JAYME CARDOSO"},{"NrCP":72,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"JOÃO ALVES BONIFACIO"},{"NrCP":73,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"JOÃO VIANA BARBOSA DE CASTRO"},{"NrCP":74,"Posto":"1º TENENTE","Arma":"INFANTARIA","Curso":"INSTRUTOR","Nome":"JOSE CARLOS DE FREITAS"},{"NrCP":75,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"JOSÉ DE OLIVEIRA GOMES"},{"NrCP":76,"Posto":"1º TENENTE","Arma":"INFANTARIA","Curso":"INSTRUTOR","Nome":"LAURENTINO LOPES BONORINO"},{"NrCP":77,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"LUCIANO CROMETON DE OLIVEIRA"},{"NrCP":78,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"MANOEL FRANCISCO DE FARIAS"},{"NrCP":79,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"MARIO DE QUEIROZ RODRIGUES"},{"NrCP":8,"Posto":"1º SARGENTO","Arma":"QI","Curso":"MONITOR","Nome":"ANTONIO E JESUS DO PRADO LOPES"},{"NrCP":80,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"MARIO FERREIRA DE SOUZA"},{"NrCP":81,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"ODILON DE PAULA ROSA"},{"NrCP":82,"Posto":"1º TENENTE","Arma":"CAVALARIA","Curso":"INSTRUTOR","Nome":"OLAVO MENNA BARRETO FERREIRA"},{"NrCP":83,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"OTAVIANO FERNANDES DE SOUZA MEREM"},{"NrCP":84,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"OTERBAL DE BARROS SCHMIDT"},{"NrCP":85,"Posto":"1º TENENTE","Arma":"INFANTARIA","Curso":"INSTRUTOR","Nome":"PINDARO SANTOS DA FONSECA"},{"NrCP":86,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"RICARDO MUNHOZ BOWE"},{"NrCP":87,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"SILVIO CUNHA"},{"NrCP":88,"Posto":"1º TENENTE","Arma":"ARTILHARIA","Curso":"INSTRUTOR","Nome":"SYLVIO AMERICO DE SANTA ROSA"},{"NrCP":89,"Posto":"CIVIL","Arma":"───-","Curso":"INSTRUTOR","Nome":"TITO PADUA"},{"NrCP":9,"Posto":"SARGENTO","Arma":"INFANTARIA","Curso":"MONITOR","Nome":"ANTONIO RENNO RIBEIRO"},{"NrCP":90,"Posto":"TENENTE","Arma":"MÉDICO","Curso":"MEDICINA ESPECIALIZADA","Nome":"EDGAR CORRÊA DE MELO"},{"NrCP":91,"Posto":"TENENTE","Arma":"MÉDICO","Curso":"MEDICINA ESPECIALIZADA","Nome":"HERMILIO GOMES FERREIRA"}]
    // console.log(response)
    if (response.length == 0) { setExisteDados(false); setShowTabela(false); return }
    setTable(response.sort((firstItem, secondItem) => firstItem.NrCP - secondItem.NrCP))
    setTableAno(ano)
    setShowTabela(true)
  }

  return <>
    <div className="header"><h2 className="titulo-box"><strong>ADMIN</strong></h2></div>
    <p>Área de admnistração - Firebase</p>
    <p>Login com email</p>
    <br></br>
    <p>Editar/Visualizar dados de um ano:</p>
    <input className={styles.input} value={ano} placeholder="Ano" onChange={(e) => { handleInput(e.target) }}></input>
    <button style={{ borderRadius: "4px", marginLeft: "26px" }} variant="primary" className="btn-default" onClick={searchDatabase}>Buscar</button>
    <br></br>
    <br></br>
    <div className="span9">
      <div className={existeDados ? 'noAlert1' : 'alert alert-danger'}>
        <strong>Informações sobre o ano {ano} não existem on banco de dados</strong>
      </div>
      <div className={preenchido ? 'noAlert2' : 'alert alert-danger'}>
        <strong>Campo de ano não preenchido</strong>
      </div>
    </div>
    <br></br>
    <div style={{ margin: "15px"}}>
      {showTabela == true ?
        <TabelaAdmin setShowTabela={setShowTabela} ano={tableAno} tabela={table} />
        :
        null
      }
    </div>
    <span className="hide">Fim do conteúdo da página</span>
  </>
}