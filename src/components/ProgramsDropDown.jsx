import { Link } from 'react-router-dom';

export function ProgramsDropDown() {
  return (
    <ul className="dropdown-list">
      <li clasName="dropdown-item">
        <Link className="dropdown-item_link" to="/programs/international">
          International educational programs
        </Link>
      </li>
      <li clasName="dropdown-item">
        <Link className="dropdown-item_link" to="/programs/specialized">
          Specialized courses
        </Link>
      </li>
      <li clasName="dropdown-item">
        <Link className="dropdown-item_link" to="/programs/literacy">
          Islamic Finance Literacy Course
        </Link>
      </li>
      <li clasName="dropdown-item">
        <Link className="dropdown-item_link" to="/programs/certification">
          Certification program
        </Link>
      </li>
    </ul>
  );
}
