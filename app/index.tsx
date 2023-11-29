"use client";

import { data } from "./data";

function IndexComponent() {
  return (
    <div className="grid grid-cols-2 gap-4 pb-8">
      {data.map((item, index) => (
        <div
          className="rounded-xl p-4 flex flex-col justify-center text-center bg-slate-700 hover:bg-slate-800 transition-all text-white  "
          key={index}
        >
          <div>
            <h3 className="text-lg text-violet-300 font-bold">{item.title}</h3>
          </div>
          <div className="my-4">
            <a target="_blank" className="underline" href={item.link}>
              {item.link}
            </a>
          </div>
          <div>
            <p className="text-slate-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IndexComponent;
