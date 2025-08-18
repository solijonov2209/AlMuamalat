import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { request } from '../services/Request';

export function ProgramsDropDown() {
  const { data, isloading } = useQuery({
    queryKey: 'courseData',
    queryFn: async () => {
      const data = await request.get('/courses/main');
      return data?.data?.data;
    },
  });

  return (
    <ul className="dropdown-list">
      {data?.map((course, index) => (
        <li key={index} className="dropdown-item">
          <Link
            className="dropdown-item_link"
            to={`/programs/${course?.course_id}`}
          >
            {course.name_en}
          </Link>
        </li>
      ))}

      {/* 
         
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
      </li> */}
    </ul>
  );
}
