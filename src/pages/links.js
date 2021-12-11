
import React from 'react';

function Links() {
    return (
        <div id="content" className="internas span9">
            <section id="content-section">
                <span className="hide">Início do conteúdo da página</span>
                <h1 className="documentFirstHeading">LINKS ÚTEIS</h1>
                <ul className="lista">
                    <li>
                        <a title="Exército Brasileiro" href="http://www.eb.mil.br/">Exército Brasileiro</a>
                    </li>
                    <li>
                        <a title="CCFEx" href="http://www.ccfex.eb.mil.br/">CCFEx</a>
                    </li>
                    <li>
                        <a title="EsEFEx" href="http://www.esefex.eb.mil.br/">EsEFEx</a>
                    </li>
                    <li>
                        <a title="IPCFEx" href="http://www.ipcfex.eb.mil.br/">IPCFEx</a>
                    </li>
                    <li>
                        <a title="CDE" href="http://www.cde.eb.mil.br/">CDE</a>
                    </li>
                </ul>
                <span className="hide">Fim do conteúdo da página</span>
            </section>
        </div>

    )
}

export default Links