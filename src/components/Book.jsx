import { useTexture } from "@react-three/drei";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { pageAtom, pages, pressAtom } from "../store";
import { Page } from "./Page";

pages.forEach((page) => {
  useTexture.preload(`/textures/${page.front}.jpg`);
  useTexture.preload(`/textures/${page.back}.jpg`);
});

export const Book = (props) => {
  const [page] = useAtom(pageAtom);
  const [pressed] = useAtom(pressAtom);
  const [delayedPage, setDelayedPage] = useState(page);

  useEffect(() => {
    let timeout;
    const goToPage = () => {
      setDelayedPage((currentDelayedPage) => {
        if (page === currentDelayedPage) return currentDelayedPage;

        const step = page > currentDelayedPage ? 1 : -1;
        timeout = setTimeout(
          goToPage,
          Math.abs(page - currentDelayedPage) > 2 ? 50 : 150,
        );
        return currentDelayedPage + step;
      });
    };
    goToPage();
    return () => clearTimeout(timeout);
  }, [page]);

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {pages.map((pageData, index) => (
        <Page
          key={index}
          page={delayedPage}
          number={index}
          opened={delayedPage > index}
          bookClosed={delayedPage === 0 || delayedPage === pages.length}
          pressed={pressed}
          {...pageData}
        />
      ))}
    </group>
  );
};
