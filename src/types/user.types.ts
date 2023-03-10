export type User = {
  cell: string;
  dob: {
    data: string,
    age: number
  };
  email: string;
  gender: string;
  id: {
    name: string,
    value: string
  }
  location: {
    city: string,
    coordinates: {
      latitude: string,
      longitude: string
    },
    country: string,
    postcode: number,
    state: string,
    street: {
      number: number,
      name: string
    },
    timezone: {
      offset: string,
      description: string
    }
  };
  login: {
    md5: string,
    password: string,
    salt: string,
    sha1: string,
    sha256: string,
    username: string,
    uuid: string
  };
  name: {
    first: string,
    last: string,
    title: string
    nat: string,
    phone: string
  };
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  };
  registered: {
    date: string,
    age: number
  }
}