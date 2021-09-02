import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import DeepPage from './components/DeepPage'
import PublicPage from './components/PublicPage'
import CriticPage from './components/CriticPage'
import { getSuggestedQuery } from '@testing-library/react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Redirect } from 'react-router';
import { AuthProvider } from "./contexts/AuthContext"
import PrivateTexts from './components/PrivateTexts'
import { useHistory } from "react-router-dom"
import PublicTexts from './components/PublicTexts'
import PrivateRoute from './components/PrivateRoute'
import PublicText from './components/PublicText'
import DepositNewText from './components/DepositNewText'
import ContactFutureCritic from './components/ContactFutureCritic'
import { NavIcon } from './components/Elements/Header.element'
import { db } from "./firebase";
import { Container } from './globalStyles'
import Signup from './components/Signup'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'



function App()  {

  const [showPublicTexts, setShowPublicTexts] = useState(true)
  const [showDeepness, setShowDeepness] = useState(false)
  const [showCriticSpace, setShowCriticSpace] = useState(false)
  const [month, setMonth] = useState("August")

  const [users, setUsers] = useState([
    {ref: 1266,
      email: "krak@s.com",
      password: "batchata",
      commentsRef:[4000, 4005], 
      commentsThisWeek: 2
    }
  ])

  const [comments, setComments] = useState([
    {ref: 4000,
      comment: "wirklich g ut", 
      state: "valid", 
      date: "2021/08/17"
    },
    {ref: 4005,
      comment: "sehr gut", 
      state: "valid", 
      date: "2021/08/19"
    }
  ])


  const [publictexts, setpublictexts] = useState([
    
    {ref: 244,
      lightBg: true,
      name: "Rafaëlle",
      title: "Musk",
      text: "A toutes les personnes que j'ai pu offenser je dis: j'ai réinventé la voiture électrique et j'envoie des gens sur la planète mars à bord d'une fusée. Vous pensez vraiment que je serais un gars détendu et normal ?",
      state: "valid",
      public: true,
      email: "mad@fallen.fr",
      parution: "2021/09/01",
      appeared: "2021/08/11",
  //    notes:[{refcommentator: 123, comment: "geschichte increible", state: "valid"}]
      },
    
    {ref: 100,
      lightBg: false,
    name: "Martin",
    title:"Explication, La Liberté",
    text: "Je pensais révéler pour conclure le nom de la femme que j’aimais, à qui ce poème était destiné. Mais je me suis vite aperçu que le seul mot que j’avais en tête était le mot Liberté. Ainsi, la femme que j’aimais incarnait un désir plus grand qu’elle. Je la confondais avec mon aspiration la plus sublime, et ce mot Liberté n’était lui-même dans tout mon poème que pour éterniser une très simple volonté, très quotidienne, très appliquée, celle de se libérer de l’Occupant",
    state: "valid",
    public: true,
    email: "crazy@toten.fr",
    parution: "2021/09/01",
    appeared: "2021/08/12",
//    notes:[{refcommentator: 123, comment: "geschichte increible", state: "valid"}]
    },

    {ref: 25,
      lightBg: true,
      name: "Rafaëlle",
      title: "Musk",
      text: "A toutes les personnes que j'ai pu offenser je dis: j'ai réinventé la voiture électrique et j'envoie des gens sur la planète mars à bord d'une fusée. Vous pensez vraiment que je serais un gars détendu et normal ?",
      state: "valid",
      public: true,
      email: "mad@fallen.fr",
      parution: "2021/09/01",
      appeared: "2021/08/11",
  //    notes:[{refcommentator: 123, comment: "geschichte increible", state: "valid"}]
      }

  ])

  const [privatetexts, setprivatetexts] = useState([
    
    
    {ref: 100,
    name: "Martin",
    title:"Ted Dexter’s clever invention gives context to Joe Root’s brilliance",
    text: "In August 1986 a young management consultant from Deloitte knocked on the door of No 5 Warwick Dene, a large Victorian house overlooking Ealing Common in west London. A tall, attractive lady opened the door, welcomed the gentleman in and alerted her husband that his guest had arrived.",   
    state: "valid",
    public: true,
    email: "crazy@toten.fr",
    parution: "2021/09/01",
    appeared: "2021/08/12",
//    notes:[{refcommentator: 123, comment: "geschichte increible", state: "valid"}]
    },

    {ref: 25,
      name: "Rafaëlle",
      title: "Why it pays to act now",
      text: "Getting to net zero should not be seen as a burden on the bottom line or an ESG-led bolt-on to existing activities. It is an opportunity to secure the future prosperity of all – businesses, stakeholders and the planet alike.",
      state: "valid",
      public: true,
      email: "mad@fallen.fr",
      parution: "2021/09/01",
      appeared: "2021/08/11",
  //    notes:[{refcommentator: 123, comment: "geschichte increible", state: "valid"}]
      }

  ])

  const onMoreDeep = () =>{
    console.log("deep");
    setShowCriticSpace(false);
    setShowDeepness(true);
    setShowPublicTexts(false);

  }

  const onShowCriticSpace = () =>{
    console.log("private");
    setShowCriticSpace(true);
    setShowDeepness(false);
    setShowPublicTexts(false);

  }

  const onShowPublicTexts = () =>{
    console.log("public");
    setShowCriticSpace(false);
    setShowDeepness(false);
    setShowPublicTexts(true);

  }

  const redirect = () => {
    if (showCriticSpace){
      return <Redirect to="/criticpage" />
    }if (showDeepness){
      return <Redirect to="/deepness" />
    }if (showPublicTexts){
      return <Redirect to="/publicpage" />
    }
  }

  const getText = reference => {
    var text = publictexts.filter(function(entry) { return entry.ref === reference; });
    var retruntext = text[0];
    return retruntext.text
  }

  const chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2699).toString();
//console.log("chapitre mtn0", chapitre)

//call data from firebase
  const [blogs,setBlogs]=useState([])
  
  const fetchBlogs=async()=>{
    const response=db.collection('Winners'+chapitre);
    const data=await response.get();
    console.log(data);
    setBlogs(data.docs.map(item=>{
     return item.data()})
    )

  }
  useEffect(() => {
    fetchBlogs();
  }, [])

  console.log(blogs)


  return (
    <div id="page-container">
    <AuthProvider >
        <div id="content-wrap">
        <Router>
          <Route
            render={props => (
                <Header
                  title={"La Tournure"}
                  onMoreDeep={onMoreDeep}
                  onShowCriticSpace= {onShowCriticSpace}
                  onShowPublicTexts={onShowPublicTexts}
              />
            )}
          />
          <Switch>
            <Route exact path = "/publicpage" render={() => <PublicPage texts={blogs} month={month} />} />
            <PrivateRoute exact path = "/privatetexts" component={PrivateTexts} texts={privatetexts}  />
            <Route exact path = "/login" component={Login} />
            <Route exact path = "/signup" component={Signup} />
            <Route exact path = "/forgot-password" component={ForgotPassword} />
            <Route exact path = "/deposit" component={DepositNewText} />
          </Switch>
          <NavIcon/>

          
    </Router>

    <div>
      {
        blogs && blogs.map((blog)=>{
          (
            <div key="key" className="blog-container">
              <h4>{blog.title}</h4>
              <h2>{blog.email}</h2>
              <p>{blog.name}</p>
            </div>
          )
        })
      }
    </div>

    </div>

      <Footer />

    </AuthProvider>
    </div>
  
  );
}

export default App;