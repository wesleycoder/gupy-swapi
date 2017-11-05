import { h } from 'preact';

const Navbar = ({ loaded }) => (
  ! loaded
  ? <div>Loading films ...</div>
  : <div className="Navbar">
    <h2>Films</h2>
  </div>
)

export default Navbar;
