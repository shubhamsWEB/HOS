/* eslint-disable */
"use client";
import React, { useContext, useState, useEffect } from "react";
import { ReactReduxContext } from "react-redux";
export default (duckInjectFns = []) =>
  (WrappedComponent) =>
  (props) => {
    const { store } = useContext(ReactReduxContext);
    const [isInjected, setIsInjected] = useState(false);

    useEffect(() => {
      const derivedPromises = duckInjectFns.map((fn, index) =>
        fn(store)
      );
      Promise.all(derivedPromises)
        .then(() => setIsInjected(true))
        .catch();
    }, [store]);

    return isInjected ? <WrappedComponent {...props} /> : null;
  };
