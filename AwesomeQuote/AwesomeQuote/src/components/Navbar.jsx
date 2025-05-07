const Navbar = () => (
    <nav style={{ backgroundColor: '#5d738d', padding: '10px' }}>
      <Link to="/home" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
      <Link to="/my-quotes" style={{ margin: '0 10px', color: '#fff' }}>My Quotes</Link>
      <Link to="/profile" style={{ margin: '0 10px', color: '#fff' }}>Profile</Link>
      <Link to="/login" style={{ float: 'right', color: '#fff' }}>Logout</Link>
    </nav>
  );