import React from "react";
import { useParams } from "react-router";

export function User() {
  const { userid } = useParams();
  return <div className="text-center text-9xl">User: {userid}</div>;
}
