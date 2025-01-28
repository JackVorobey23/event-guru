import { Event } from '@components/Event/types';

export const events: Event[] = [
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
  {
    id: '1',
    type: 'Conference',
    description:
      'Annual tech conference focusing on the latest in software development and artificial intelligence.',
    location: {
      name: 'San Francisco Convention Center',
      coords: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    date: '2025-03-15T09:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Smith',
      },
      {
        name: 'Mark Johnson',
      },
    ],
  },
  {
    id: '2',
    type: 'Wedding',
    description:
      'A beautiful outdoor wedding celebration at a scenic vineyard.',
    location: {
      name: 'Golden Gate Park',
      coords: {
        lat: 37.7694,
        lng: -122.4862,
      },
    },
    date: '2025-05-20T16:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Emily Davis',
      },
      {
        name: 'Lucas Brown',
      },
      {
        name: 'Sophia Martinez',
      },
    ],
  },
  {
    id: '3',
    type: 'Music Festival',
    description:
      'A weekend-long music festival featuring rock bands and indie artists.',
    location: {
      name: 'Red Rocks Amphitheatre',
      coords: {
        lat: 39.665,
        lng: -105.2043,
      },
    },
    date: '2025-06-10T12:00:00Z',
    budget: 100000,
    invitees: [
      {
        name: 'Daniel Lee',
      },
      {
        name: 'Ava Wilson',
      },
      {
        name: 'Benjamin Taylor',
      },
    ],
  },
  {
    id: '4',
    type: 'Corporate Retreat',
    description:
      "A weekend getaway for the company's team-building and strategy meetings.",
    location: {
      name: 'Lake Tahoe Resort',
      coords: {
        lat: 38.9399,
        lng: -119.9772,
      },
    },
    date: '2025-04-10T09:00:00Z',
    budget: 35000,
    invitees: [
      {
        name: 'Olivia Scott',
      },
      {
        name: 'Ethan Harris',
      },
      {
        name: 'Isabella Clark',
      },
    ],
  },
  {
    id: '5',
    type: 'Birthday Party',
    description:
      'A fun birthday celebration with family and friends at a local park.',
    location: {
      name: 'Central Park',
      coords: {
        lat: 40.7851,
        lng: -73.9683,
      },
    },
    date: '2025-07-05T14:00:00Z',
    budget: 1500,
    invitees: [
      {
        name: 'Michael Green',
      },
      {
        name: 'Charlotte Young',
      },
      {
        name: 'James Robinson',
      },
    ],
  },
  {
    id: '6',
    type: 'Art Exhibition',
    description:
      'A gallery showcasing modern and abstract art by emerging artists.',
    location: {
      name: 'The Louvre Museum',
      coords: {
        lat: 48.8606,
        lng: 2.3376,
      },
    },
    date: '2025-08-01T18:00:00Z',
    budget: 20000,
    invitees: [
      {
        name: 'Amelia Mitchell',
      },
      {
        name: 'William Carter',
      },
      {
        name: 'Mia Gonzalez',
      },
    ],
  },
  {
    id: '7',
    type: 'Charity Gala',
    description:
      'A fundraising event to support cancer research with a silent auction.',
    location: {
      name: 'The Ritz-Carlton Hotel',
      coords: {
        lat: 34.069,
        lng: -118.4053,
      },
    },
    date: '2025-09-25T19:00:00Z',
    budget: 50000,
    invitees: [
      {
        name: 'Aiden Adams',
      },
      {
        name: 'Lily Carter',
      },
      {
        name: 'Mason Walker',
      },
    ],
  },
  {
    id: '8',
    type: 'Food Festival',
    description:
      'A weekend event celebrating global cuisine with local food vendors.',
    location: {
      name: 'Chicago Downtown',
      coords: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    date: '2025-10-12T11:00:00Z',
    budget: 25000,
    invitees: [
      {
        name: 'Chloe King',
      },
      {
        name: 'Zachary Martinez',
      },
      {
        name: 'Sophia Turner',
      },
    ],
  },
  {
    id: '9',
    type: 'Sports Tournament',
    description:
      'A regional soccer tournament featuring teams from across the country.',
    location: {
      name: 'Yankee Stadium',
      coords: {
        lat: 40.8296,
        lng: -73.9262,
      },
    },
    date: '2025-11-03T10:00:00Z',
    budget: 40000,
    invitees: [
      {
        name: 'Jack Harper',
      },
      {
        name: 'Emma Lewis',
      },
      {
        name: 'Noah Walker',
      },
    ],
  },
];
