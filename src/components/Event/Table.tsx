import { useEffect, useState } from 'react';
import { Event } from './types';
import Pagination from '@components/ui/Table/Pagination';
import { useNavigate } from 'react-router';
import eventImage from '@assets/images/create-event.png';
import { useSelector } from 'react-redux';
import { selectEvents } from '@redux/slices/eventsSlice';

export default function Table() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { events } = useSelector(selectEvents);
  const [displayedEvents, setDisplayedEvents] = useState<
    (Partial<Event> | undefined)[]
  >(events.slice(0, 3));
  const handleRowClick = (eventId: string) => {
    const eventInfo = events.find(({ id }) => id === eventId)!;
    navigate(`/events/${eventId}`, {
      state: eventInfo,
    });
  };

  useEffect(() => {
    setDisplayedEvents(events.slice(page * 3, page * 3 + 3));
  }, [events, page]);

  return !events.length ? (
    <img src={eventImage} />
  ) : (
    <div className="">
      <table className="w-full h-[500px] bg-[#f1f0ec] rounded-3xl border-collapse border-black min-h-96 *:*:*:p-4 overflow-hidden">
        <thead>
          <tr className="*:text-center *:align-middle bg-[#d4e9d9]">
            <th className="">Ваші події</th>
            <th className="flex-1">Опис</th>
          </tr>
        </thead>
        <tbody className="first:bg-black">
          {displayedEvents
            .filter((e) => e !== undefined)
            .map(({ type = '', description = '', date = '', location, id }) => (
              <tr
                key={id}
                className="even:bg-[#d4e9d9] odd:bg-[#eff1ec] hover:cursor-pointer hover:bg-[#cde0c8]"
                onClick={() => {
                  if (id) {
                    handleRowClick(id);
                  }
                }}
              >
                <td className="bg-opacity-30 font-bold w-2">{type}</td>
                <td className="w-full flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="font-bold ">{description}</div>
                    <div className="text-right">
                      {new Date(date ?? '').toDateString()}
                    </div>
                  </div>
                  {location ? <div>📍{location.name}</div> : <div></div>}
                </td>
              </tr>
            ))}
          {Array(3 - displayedEvents.length)
            .fill(1)
            .map((_, i) => (
              <tr
                key={`empty-${i}`}
                className="even:bg-[#d4e9d9] odd:bg-[#eff1ec] hover:cursor-pointer hover:bg-[#cde0c8] flex-1"
              >
                <td className=""></td>
                <td className="w-full"></td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        setPage={setPage}
        activePage={page}
        itemsPerPage={3}
        pageAmount={Math.ceil(events.length / 3)}
      />
    </div>
  );
}
