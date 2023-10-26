"use client";

import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

export default function Index() {
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data: countries } = await supabase.from("countries").select();
      setData(countries);
    })();
  }, []);

  return (
    <ul className="my-auto text-foreground">
      {data?.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}
