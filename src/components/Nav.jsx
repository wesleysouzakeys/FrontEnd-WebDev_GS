import './Nav.scss'

function Nav() {

  function logout() {
    sessionStorage.clear()
    window.location.href = '/'
  }

  return (
    <header className="header">
      <div className='container-header'>
        <img align="center" alt="Logo React" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img>
        {
          sessionStorage.nome && sessionStorage.email ? <div><strong>{sessionStorage.nome} - {sessionStorage.email}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={logout}>LOGOUT</button></div> : <strong>Global Solution 2023 - Engenharia de Software</strong>
        }
      </div>
    </header>
  );
}
export default Nav;
