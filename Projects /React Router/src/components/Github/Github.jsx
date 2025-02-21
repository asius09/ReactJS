import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-between items-center">
      <img src={data.avatar_url} alt="" className="rounded-full" />
      Github followers: {data.followers}
    </div>
  );
}

export const GitLoader = async () => {
  const response = await fetch("https://api.github.com/users/asius09");
  return response.json();
};
