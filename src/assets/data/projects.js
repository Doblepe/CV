
import tutienda from '../images/latienda.png';
import portfolio from '../images/portafolio.png';
import Gatsby_icon from '../images/Gatsby.png';
import Cicon from '../images/C.png';
import PyIcon from '../images/py.png';
import StreamlitIcon from '../images/streamlit.png';
import PyWebIOIcon from '../images/PyWebIO.png';
const projects = [
  {
    name: 'Tu Tienda',
    desc:
      'An E-comerce full stack developed on the MERN Stack',
    img: tutienda,
    git: 'https://github.com/Doblepe/La-Tienda',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6831484833517080576/',
  },

  {
    name: "Gatsby Blog",
    desc:'Blog made with Gatsby-netlify',
    img: Gatsby_icon,
    git: 'https://github.com/Doblepe/Gatsby-netlify',
    link: '',
  },
  {
    name: "Producst web form",
    desc:
      'This is some code I wrote with C# and .NET',
    img: Cicon,
    git: 'https://github.com/Doblepe/ProductosWebForms',
    link: '',
  },
  {
    name: "Learning python exercise",
    desc:"There are some simple exercises that i've made during my Python degree",
    img: PyIcon,
    git: 'https://github.com/Doblepe/Programacion-avanzada-Py/tree/master',
    link: '',
  },
  {
    name: 'Portafolio',
    desc: 'This is the code for actual page.',
    img: portfolio,
    git: 'https://github.com/Doblepe/Portfolio/tree/master',
    link: "",
  },
  {
    name: 'Price Tracker',
    desc: 'Made with Python and Streamlit',
    img: StreamlitIcon,
    git: 'https://github.com/Doblepe/Lesson-13.-Streamlit',
    link: "https://doblepe-lesson-13--streamlit-victor-0jv1v7.streamlit.app/",
  },
  {
    name: 'IBM Calculator',
    desc: 'Made with Python and PyWebIO',
    img: PyWebIOIcon,
    git: 'https://github.com/Doblepe/Lesson-14.-PyWebIO',
    link: "",
  },


];

export default projects;
