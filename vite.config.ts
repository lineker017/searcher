import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // --- Proxies existentes ---
      '/jaborandi': {
        target: 'http://45.172.145.250:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jaborandi/, ''),
      },
      '/araminas': {
        target: 'https://araminasp.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/araminas/, ''),
      },
      '/adolfo': {
        target: 'http://186.225.130.168:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/adolfo/, ''),
      },
      '/aguasdaprata': {
        target: 'http://168.227.226.112:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aguasdaprata/, ''),
      },
      '/aguasdelindoia': {
        target: 'http://transparencia.aguasdelindoia.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aguasdelindoia/, ''),
      },
      '/aguasdesaopedro': {
        target: 'http://scpiaguasdesaopedro.dcfiorilli.com.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aguasdesaopedro/, ''),
      },
      '/altair': {
        target: 'http://serv.altair.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/altair/, ''),
      },
      '/altinopolis': {
        target: 'http://177.200.78.26:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/altinopolis/, ''),
      },
      '/alvaresflorence': {
        target: 'http://177.67.244.85:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/alvaresflorence/, ''),
      },
      '/alvarodecarvalho': {
        target: 'http://transparencia.alvarodecarvalho.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/alvarodecarvalho/, ''),
      },
      '/alvinlandia': {
        target: 'http://transparencia.alvinlandia.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/alvinlandia/, ''),
      },
      '/americobrasiliense': {
        target: 'http://186.249.46.94',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/americobrasiliense/, ''),
      },
      '/aparecidadoeste': {
        target: 'http://45.180.40.154:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aparecidadoeste/, ''),
      },
      '/aracatuba': {
        target: 'https://s2.asp.srv.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aracatuba/, ''),
      },
      '/aracoiabadaserra': {
        target: 'http://189.57.151.122:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aracoiabadaserra/, ''),
      },
      '/arcoiris': {
        target: 'http://transparencia.arcoiris.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/arcoiris/, ''),
      },
      '/arealva': {
        target: 'https://portaltransp.arealva.sp.gov.br:5885',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/arealva/, ''),
      },
      '/ariranha': {
        target: 'https://transparencia.pmariranha.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ariranha/, ''),
      },
      '/assis': {
        target: 'https://transparencia.assis.sp.gov.br:8077',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/assis/, ''),
      },
      '/avai': {
        target: 'http://170.238.88.61:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/avai/, ''),
      },
      '/avanhandava': {
        target: 'http://45.71.14.83:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/avanhandava/, ''),
      },
      '/balbinos': {
        target: 'http://131.100.205.162:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/balbinos/, ''),
      },
      '/balsamo': {
        target: 'http://177.39.199.170:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/balsamo/, ''),
      },
      '/baraodeantonina': {
        target: 'http://177.222.204.251:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baraodeantonina/, ''),
      },
      '/bariri': {
        target: 'http://187.62.191.5:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bariri/, ''),
      },
      '/boaesperancadosul': {
        target: 'http://168.232.211.146:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/boaesperancadosul/, ''),
      },
      '/bocaina': {
        target: 'http://201.28.69.179:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bocaina/, ''),
      },
      '/botucatu': {
        target: 'https://botucatusp.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/botucatu/, ''),
      },
      '/brauna': {
        target: 'http://164.163.239.234:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/brauna/, ''),
      },
      '/brodowski': {
        target: 'http://181.191.53.69:5757',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/brodowski/, ''),
      },
      '/buritizal': {
        target: 'http://sppmburitizal.dcfiorilli.com.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/buritizal/, ''),
      },
      '/cabralia paulista': {
        target: 'http://186.224.14.206:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cabralia paulista/, ''),
      },
      '/cajobi': {
        target: 'http://transparencia.cajobi.sp.gov.br:35002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cajobi/, ''),
      },
      '/candidorodrigues': {
        target: 'https://portal.candidorodrigues.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/candidorodrigues/, ''),
      },
      '/capeladoalto': {
        target: 'https://scpicapeladoalto.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/capeladoalto/, ''),
      },
      '/cardoso': {
        target: 'http://web.cardoso.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cardoso/, ''),
      },
      '/castilho': {
        target: 'http://45.175.171.143:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/castilho/, ''),
      },
      '/cedral': {
        target: 'http://200.95.195.86:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cedral/, ''),
      },
      '/colombia': {
        target: 'http://187.72.53.129:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/colombia/, ''),
      },
      '/coroados': {
        target: 'http://45.225.140.213:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/coroados/, ''),
      },
      '/dobrada': {
        target: 'http://transparencia.dobrada.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dobrada/, ''),
      },
      '/dolcinopolis': {
        target: 'http://201.28.32.156:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dolcinopolis/, ''),
      },
      '/dourado': {
        target: 'http://www.transparencia.dourado.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dourado/, ''),
      },
      '/dracena': {
        target: 'https://portal.dracena.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dracena/, ''),
      },
      '/dumont': {
        target: 'https://pmdumont.djp.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dumont/, ''),
      },
      '/elisiario': {
        target: 'http://portal.elisiario.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/elisiario/, ''),
      },
      '/estreladoeste': {
        target: 'http://201.28.106.170:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/estreladoeste/, ''),
      },
      '/fernandoprestes': {
        target: 'https://transparencia.fernandoprestes.sp.gov.br:8443',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fernandoprestes/, ''),
      },
      '/fernandopolis': {
        target: 'http://servicos2.fernandopolis.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fernandopolis/, ''),
      },
      '/fernao': {
        target: 'http://www.transparencia.fernao.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fernao/, ''),
      },
      '/florinea': {
        target: 'http://transparencia.florinea.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/florinea/, ''),
      },
      '/gabrielmonteiro': {
        target: 'http://177.92.249.163:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gabrielmonteiro/, ''),
      },
      '/galia': {
        target: 'http://186.224.14.198:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/galia/, ''),
      },
      '/garca': {
        target: 'http://179.96.132.27:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/garca/, ''),
      },
      '/guaicara': {
        target: 'http://transparencia.guaicara.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guaicara/, ''),
      },
      '/guaimbe': {
        target: 'http://guaimbe.ddns.net:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guaimbe/, ''),
      },
      '/guaira': {
        target: 'http://201.48.19.106:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guaira/, ''),
      },
      '/guara': {
        target: 'https://servicos.guara.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guara/, ''),
      },
      '/guaracai': {
        target: 'http://179.191.10.187:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guaracai/, ''),
      },
      '/guaranta': {
        target: 'http://transparencia.guaranta.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guaranta/, ''),
      },
      '/guararapes': {
        target: 'http://138.97.36.146:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guararapes/, ''),
      },
      '/herculandia': {
        target: 'http://transparencia.herculandia.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/herculandia/, ''),
      },
      '/holambra': {
        target: 'http://179.175.14.22:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/holambra/, ''),
      },
      '/iacanga': {
        target: 'https://scpiiacanga.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/iacanga/, ''),
      },
      '/ibate': {
        target: 'http://186.209.77.236:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ibate/, ''),
      },
      '/ibirarema': {
        target: 'http://45.163.112.182:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ibirarema/, ''),
      },
      '/ibitinga': {
        target: 'http://164.163.52.93:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ibitinga/, ''),
      },
      '/iepe': {
        target: 'http://45.190.115.19:8024',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/iepe/, ''),
      },
      '/igaracudotiete': {
        target: 'http://189.1.153.181:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/igaracudotiete/, ''),
      },
      '/igarapava': {
        target: 'http://138.117.189.204:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/igarapava/, ''),
      },
      '/indiapora': {
        target: 'http://transparencia.indiapora.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/indiapora/, ''),
      },
      '/inubia paulista': {
        target: 'http://187.120.185.245:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/inubia paulista/, ''),
      },
      '/ipua': {
        target: 'http://fiorilli.ddns.net:2626',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ipua/, ''),
      },
      '/irapua': {
        target: 'http://170.0.49.246:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/irapua/, ''),
      },
      '/itabera': {
        target: 'http://e7e90e9dc282.sn.mynetname.net:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/itabera/, ''),
      },
      '/itaju': {
        target: 'http://187.62.177.92:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/itaju/, ''),
      },
      '/itajobi': {
        target: 'http://transparencia.itajobi.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/itajobi/, ''),
      },
      '/itapui': {
        target: 'http://itapui.ddns.net:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/itapui/, ''),
      },
      '/itobi': {
        target: 'http://186.200.38.82:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/itobi/, ''),
      },
      // Jaborandi já existe
      '/jaci': {
        target: 'http://200.95.195.126:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jaci/, ''),
      },
      '/jales': {
        target: 'https://scpi-jales.rlz.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jales/, ''),
      },
      '/jeriquara': {
        target: 'https://scpijeriquara.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jeriquara/, ''),
      },
      '/josebonifacio': {
        target: 'https://transparencia.josebonifacio.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/josebonifacio/, ''),
      },
      '/juliomesquita': {
        target: 'http://pmjm.ddns.net:808',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/juliomesquita/, ''),
      },
      '/laranjalpaulista': {
        target: 'http://pmlpta.ddns.com.br:6113',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/laranjalpaulista/, ''),
      },
      '/lindoia': {
        target: 'http://prefeituralindoia.hopto.org:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lindoia/, ''),
      },
      '/lourdes': {
        target: 'http://45.232.77.243:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lourdes/, ''),
      },
      '/lucianopolis': {
        target: 'http://transparencia.lucianopolis.sp.gov.br:63742',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lucianopolis/, ''),
      },
      '/lupercio': {
        target: 'http://4bf104d6d4e6.sn.mynetname.net:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lupercio/, ''),
      },
      '/lutecia': {
        target: 'https://pmlutecia.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lutecia/, ''),
      },
      '/macedonia': {
        target: 'http://179.124.248.16:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/macedonia/, ''),
      },
      '/maracai': {
        target: 'http://138.122.40.102:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/maracai/, ''),
      },
      '/marinopolis': {
        target: 'http://131.100.127.184:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/marinopolis/, ''),
      },
      '/mendonca': {
        target: 'http://170.0.51.27:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mendonca/, ''),
      },
      '/meridiano': {
        target: 'http://servidor.meridiano.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/meridiano/, ''),
      },
      '/mirandopolis': {
        target: 'http://138.0.140.51:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mirandopolis/, ''),
      },
      '/mirassolandia': {
        target: 'http://186.227.16.54:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mirassolandia/, ''),
      },
      '/mongagua': {
        target: 'http://transparencia.mongagua.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mongagua/, ''),
      },
      '/montealto': {
        target: 'http://scpi.montealto.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/montealto/, ''),
      },
      '/monteaprazivel': {
        target: 'http://transparencia.monteaprazivel.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/monteaprazivel/, ''),
      },
      '/monteazulpaulista': {
        target: 'http://7de607488a45.sn.mynetname.net:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/monteazulpaulista/, ''),
      },
      '/monteirolobato': {
        target: 'http://201.28.168.194:9000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/monteirolobato/, ''),
      },
      '/morroagudo': {
        target: 'https://transparencia.morroagudo.sp.gov.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/morroagudo/, ''),
      },
      '/motuca': {
        target: 'http://189.20.89.42:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/motuca/, ''),
      },
      '/nantes': {
        target: 'http://45.190.112.137:8090',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nantes/, ''),
      },
      '/nazarepaulista': {
        target: 'http://143.137.254.177:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nazarepaulista/, ''),
      },
      '/novaalinca': {
        target: 'http://200.95.195.94:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/novaalinca/, ''),
      },
      '/novacanaapaulista': {
        target: 'http://131.100.127.251:5050',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/novacanaapaulista/, ''),
      },
      '/novaeuropa': {
        target: 'http://sppmnovaeuropa1.dcfiorilli.com.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/novaeuropa/, ''),
      },
      '/novagranada': {
        target: 'https://transparenciamunicipal.novagranada.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/novagranada/, ''),
      },
      '/novaguataporanga': {
        target: 'http://servidorguata.no-ip.org:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/novaguataporanga/, ''),
      },
      '/novais': {
        target: 'http://transparencia.novais.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/novais/, ''),
      },
      '/novohorizonte': {
        target: 'http://sistemas.novohorizonte.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/novohorizonte/, ''),
      },
      // --- Quinta leva de proxies ---
      '/nuporanga': {
        target: 'http://181.191.10.193:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nuporanga/, ''),
      },
      '/ocaucu': {
        target: 'http://201.62.81.162:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ocaucu/, ''),
      },
      '/ondaverde': {
        target: 'http://187.103.85.129:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ondaverde/, ''),
      },
      '/orindiuva': {
        target: 'http://45.176.175.50:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/orindiuva/, ''),
      },
      '/oscarbressane': {
        target: 'https://oscarbressane.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oscarbressane/, ''),
      },
      '/ouroverde': {
        target: 'http://187.17.193.128:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ouroverde/, ''),
      },
      '/ouroeste': {
        target: 'http://pm.ouroeste.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ouroeste/, ''),
      },
      '/palmarespaulista': {
        target: 'http://177.39.154.162:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/palmarespaulista/, ''),
      },
      '/palmeiradoeste': {
        target: 'http://131.100.126.130:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/palmeiradoeste/, ''),
      },
      '/panorama': {
        target: 'http://186.208.139.159:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/panorama/, ''),
      },
      '/paraguacupaulista': {
        target: 'http://sistemas2.eparaguacu.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/paraguacupaulista/, ''),
      },
      '/paraiso': {
        target: 'http://transparencia.pmparaiso.com.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/paraiso/, ''),
      },
      '/parisi': {
        target: 'http://177.39.83.130:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/parisi/, ''),
      },
      '/patrociniopaulista': {
        target: 'http://177.93.80.138:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/patrociniopaulista/, ''),
      },
      '/pauliceia': {
        target: 'http://186.208.139.83:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pauliceia/, ''),
      },
      '/paulistania': {
        target: 'http://transparencia.paulistania.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/paulistania/, ''),
      },
      '/paulodefaria': {
        target: 'http://177.129.204.53:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/paulodefaria/, ''),
      },
      '/pedranopolis': {
        target: 'http://200.33.152.198:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pedranopolis/, ''),
      },
      '/pereirabarreto': {
        target: 'http://201.28.200.237:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pereirabarreto/, ''),
      },
      '/piacatu': {
        target: 'http://164.163.239.235:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/piacatu/, ''),
      },
      '/pilardosul': {
        target: 'http://www.transparencia.pilardosul.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pilardosul/, ''),
      },
      '/pirajui': {
        target: 'http://prefeiturapirajui1.ddns.net:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pirajui/, ''),
      },
      '/pirapozinho': {
        target: 'http://186.227.40.20:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pirapozinho/, ''),
      },
      '/piratininga': {
        target: 'http://transparencia.piratininga.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/piratininga/, ''),
      },
      '/poloni': {
        target: 'http://45.171.140.220:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/poloni/, ''),
      },
      '/pongai': {
        target: 'http://187.9.83.34:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pongai/, ''),
      },
      '/pontal': {
        target: 'http://45.71.128.162:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pontal/, ''),
      },
      '/pontalinda': {
        target: 'http://132.255.172.143:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pontalinda/, ''),
      },
      '/pontesgestal': {
        target: 'http://177.39.87.101:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pontesgestal/, ''),
      },
      '/potim': {
        target: 'https://transparencia.potim.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/potim/, ''),
      },
      '/pradopolis': {
        target: 'http://pradopolis.ddns.net:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pradopolis/, ''),
      },
      '/presidentealves': {
        target: 'https://transparencia.presidentealves.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/presidentealves/, ''),
      },
      '/promissao': {
        target: 'http://kaingang.comunicapromissao.com.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/promissao/, ''),
      },
      '/quata': {
        target: 'http://servicos.quata.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/quata/, ''),
      },
      '/quintana': {
        target: 'http://transparencia.quintana.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/quintana/, ''),
      },
      '/rancharia': {
        target: 'https://transparencia-prefeitura.rancharia.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rancharia/, ''),
      },
      '/reginopolis': {
        target: 'http://transparencia.reginopolis.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/reginopolis/, ''),
      },
      '/ribeiraobonito': {
        target: 'http://terminal.ribeiraobonito.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ribeiraobonito/, ''),
      },
      '/ribeiraocorrente': {
        target: 'http://187.72.128.177:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ribeiraocorrente/, ''),
      },
      '/rifaina': {
        target: 'http://45.189.205.200:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rifaina/, ''),
      },
      '/riolandia': {
        target: 'http://177.39.83.121:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/riolandia/, ''),
      },
      '/rosana': {
        target: 'https://admin.rosana.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rosana/, ''),
      },
      '/rubiacea': {
        target: 'http://187.9.70.98:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rubiacea/, ''),
      },
      '/rubineia': {
        target: 'http://sppmrubineia.dcfiorilli.com.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rubineia/, ''),
      },
      '/sales': {
        target: 'http://170.0.48.169:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sales/, ''),
      },
      '/salesoliveira': {
        target: 'http://189.112.90.177:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/salesoliveira/, ''),
      },
      '/santaadelia': {
        target: 'https://spsantaadelia.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santaadelia/, ''),
      },
      '/santaalbertina': {
        target: 'http://131.100.126.3:5657',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santaalbertina/, ''),
      },
      '/santaclaradoeste': {
        target: 'http://45.236.38.226:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santaclaradoeste/, ''),
      },
      '/santaritadoeste': {
        target: 'http://143.0.126.114:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santaritadoeste/, ''),
      },
      '/santaritadopassaquatro': {
        target: 'https://www.transparencia.prefsrpq.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santaritadopassaquatro/, ''),
      },
      '/santasalete': {
        target: 'http://179.125.61.249:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santasalete/, ''),
      },
      '/santanadapontepensa': {
        target: 'http://179.125.60.155:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santanadapontepensa/, ''),
      },
      '/santoanastacio': {
        target: 'https://scpi.santoanastacio.sp.gov.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santoanastacio/, ''),
      },
      '/santoantoniodeposse': {
        target: 'http://servicos.pmsaposse.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santoantoniodeposse/, ''),
      },
      '/santoexpedito': {
        target: 'http://181.189.75.65:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/santoexpedito/, ''),
      },
      '/saofrancisco': {
        target: 'http://45.175.170.67:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/saofrancisco/, ''),
      },
      '/saojoaquimdabarra': {
        target: 'http://intranet.saojoaquimdabarra.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/saojoaquimdabarra/, ''),
      },
      '/saosimao': {
        target: 'http://177.200.69.20:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/saosimao/, ''),
      },
      '/serraazul': {
        target: 'http://177.200.78.226:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/serraazul/, ''),
      },
      '/serranegra': {
        target: 'https://spserranegra.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/serranegra/, ''),
      },
      '/severinia': {
        target: 'http://170.246.217.252:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/severinia/, ''),
      },
      '/sudmennucci': {
        target: 'http://179.191.11.10:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sudmennucci/, ''),
      },
      '/suzanopolis': {
        target: 'http://45.180.40.151:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/suzanopolis/, ''),
      },
      '/tabapua': {
        target: 'http://transparencia.tabapua.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tabapua/, ''),
      },
      '/tabatinga': {
        target: 'http://189.20.141.242:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tabatinga/, ''),
      },
      '/taiuva': {
        target: 'http://45.235.186.19:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/taiuva/, ''),
      },
      '/tanabi': {
        target: 'http://192.140.120.240:8880',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tanabi/, ''),
      },
      '/tapirai': {
        target: 'https://tapirai.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tapirai/, ''),
      },
      '/taquarituba': {
        target: 'https://taquaritubasp.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/taquarituba/, ''),
      },
      '/trabiju': {
        target: 'http://45.171.123.100:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trabiju/, ''),
      },
      '/tupa': {
        target: 'http://sistemas.tupa.sp.gov.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tupa/, ''),
      },
      '/ubarana': {
        target: 'http://transparencia.ubarana.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ubarana/, ''),
      },
      '/urania': {
        target: 'http://45.175.170.61:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/urania/, ''),
      },
      '/uru': {
        target: 'http://prefeituradeuru.ddns.net:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uru/, ''),
      },
      '/urupes': {
        target: 'http://transparencia.urupes.sp.gov.br:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/urupes/, ''),
      },
      '/valentimgentil': {
        target: 'http://177.39.80.66:8085',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/valentimgentil/, ''),
      },
      '/veracruz': {
        target: 'http://scpiveracruz.dcfiorilli.com.br:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/veracruz/, ''),
      },
      '/viradouro': {
        target: 'http://191.5.98.25:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/viradouro/, ''),
      },
      '/vitoriabrasil': {
        target: 'http://191.36.175.209:5656',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/vitoriabrasil/, ''),
      },
      '/votuporanga': {
        target: 'https://web.votuporanga.sp.gov.br:8055',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/votuporanga/, ''),
      },
      '/zacarias': {
        target: 'http://200.95.195.202:8075',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zacarias/, ''),
      },
    },
  },
})