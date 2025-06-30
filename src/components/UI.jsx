import { useAtom } from "jotai";
import { pageAtom, pressAtom, pages } from "../store"; // <-- UBAH IMPORT INI

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [pressed, setPressed] = useAtom(pressAtom);

  return (
    <>
      {/*
        fixed inset-0: memenuhi seluruh layar (posisi absolut tetap).
        flex justify-between flex-col: layout vertikal (atas-bawah) dengan ruang di antara elemen atas dan bawah.
      */}
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        {/*
          overflow-auto: jika konten lebih besar dari wadah, bisa discroll.
        */}
        <div className="w-full overflow-auto pointer-events-auto flex justify-center ">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {/*ini untuk tombol agar langsung buka halaman */}
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-e-full text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "cover" : `page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-e-full text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              back cover
            </button>
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-e-full text-lg text-white uppercase shrink-0 border ${
                pressed ? "bg-blue-700" : "bg-blue-400"
              }`}
              onClick={() => setPressed(!pressed)}
            >
              pressed
            </button>
          </div>
        </div>
      </main>

      {/*
        latar belakang
        fixed inset-0: memenuhi seluruh layar (posisi absolut tetap)
        */}
      <div className="justify-center fixed inset-0 flex items-center -rotate-5 select-none">
        <div className="relative">
          <div className="animate-horizontal-scroll flex items-center gap-8 w-max px-8"></div>
        </div>
      </div>
    </>
  );
};
