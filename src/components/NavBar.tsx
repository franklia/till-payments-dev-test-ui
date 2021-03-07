// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <h1>Till Payments Dev Test</h1>
      <ul>
        <li>
          <Link to='/customers'>Customers</Link>
        </li>
        <li>
          <Link to='/users'>Merchants</Link>
        </li>
      </ul>
    </div>
  );
}
