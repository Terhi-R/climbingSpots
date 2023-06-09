import {
  IBook,
  IDescription,
  IImage,
  ILocation,
  IRoute,
  IDelete,
} from "./interfaces";

export const getLocations = async () => {
  const locations: ILocation[] = await fetch(
    "https://climbingapi.azurewebsites.net/api/locations"
  )
    .then((response) => response.json())
    .then((data) => data);
  return locations;
};

export const addLocation = async (addedLocation: Partial<ILocation>) => {
  const added = await fetch("https://climbingapi.azurewebsites.net/api/locations", {
    method: "POST",
    body: JSON.stringify(addedLocation),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return added;
};

export const removeLocation = async (values: IDelete) => {
  await fetch(`https://climbingapi.azurewebsites.net/api/locations/${values.id}`, {
    method: "DELETE",
    body: JSON.stringify(values.name),
    headers: {
      "content-type": "application/json",
    },
  })
  return values;
};

export const modifyDescription = async (addedDescription: IDescription) => {
  const request = {
    name: addedDescription.name,
    description: addedDescription.description,
  };

  const added = await fetch(
    `https://climbingapi.azurewebsites.net/api/locations/${addedDescription.id}/description`,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return added;
};

export const modifyImage = async (addedImage: IImage) => {
  const request = {
    name: addedImage.name,
    image: addedImage.image,
  };

  const added = await fetch(
    `https://climbingapi.azurewebsites.net/api/locations/${addedImage.id}/image`,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return added;
};

export const modifyRoute = async (addedRoute: IRoute) => {
  const request = {
    name: addedRoute.name,
    favoriteRoute: addedRoute.favoriteRoute,
  };

  const added = await fetch(
    `https://climbingapi.azurewebsites.net/api/locations/${addedRoute.id}/favoriteRoute`,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return added;
};

export const modifyBook = async (addedBook: IBook) => {
  const request = {
    name: addedBook.name,
    recommendedBook: addedBook.recommendedBook,
  };

  const added = await fetch(
    `https://climbingapi.azurewebsites.net/api/locations/${addedBook.id}/recommendedBook`,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return added;
};
