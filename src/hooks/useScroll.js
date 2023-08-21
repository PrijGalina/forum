import { useState, useEffect, useRef } from "react";

export function useScroll(parentRef, childRef,  canLoad, isLoading,  callback ) {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return ;

    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0
    }

    let cb = ([target]) => {
      if (target.isIntersecting && canLoad){
        callback()
      }
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(childRef.current);


    return function () {
      observer.current.unobserve(childRef.current);
    }
  }, [callback])


}