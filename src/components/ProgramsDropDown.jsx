import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { request } from '../services/Request';

export function ProgramsDropDown() {
  const { data, isLoading } = useQuery({
    queryKey: 'courseData',
    queryFn: async () => {
      const data = await request.get('/courses/main');
      return data?.data?.data;
    },
  });

  if (isLoading) return null;

  return (
    <ul className="w-72 bg-white border border-gray-400 rounded-md shadow-md p-3">
      {data?.map((course, index) => (
        <li
          key={index}
          className={`${
            index !== data.length - 1 ? 'border-b border-gray-300' : ''
          }`}
        >
          <Link
            to={`/programs/${course?.course_id}`}
            className="block text-[15px] font-semibold text-gray-600 py-2 hover:text-teal-600 transition-colors"
          >
            {course.name_en}
          </Link>
        </li>
      ))}
    </ul>
  );
}
