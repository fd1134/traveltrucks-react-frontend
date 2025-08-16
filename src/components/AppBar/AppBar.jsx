export const AppBar=()=>{

    return <>
      <header>
        <nav>
          <Link to="/" className="logo">TravelTrucks</Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
          </ul>
        </nav>
      </header>
    </>
}